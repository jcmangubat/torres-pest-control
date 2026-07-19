import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D from;
  uniform sampler2D to;
  uniform float progress;
  uniform float dots;
  uniform vec2 center;
  varying vec2 vUv;

  float easeInOut(float t) {
    return t < 0.5 ? 2.0 * t * t : -1.0 + (4.0 - 2.0 * t) * t;
  }

  void main() {
    vec2 fracUv = fract(vUv * dots);
    float distToCenter = max(distance(vUv, center), 0.001);
    float threshold = easeInOut(progress) / distToCenter;
    bool showTo = distance(fracUv, vec2(0.5)) < threshold;

    vec4 fromColor = texture2D(from, vUv);
    vec4 toColor = texture2D(to, vUv);
    gl_FragColor = mix(fromColor, toColor, float(showTo));
  }
`;

function loadTexture(src: string): Promise<THREE.Texture> {
  return new Promise((resolve, reject) => {
    const loader = new THREE.TextureLoader();
    loader.load(
      src,
      (tex) => {
        tex.minFilter = THREE.LinearFilter;
        tex.generateMipmaps = false;
        resolve(tex);
      },
      undefined,
      reject
    );
  });
}

function TransitionPlane({
  fromTexture,
  toTexture,
  progress,
  dots = 20,
  center = [0.5, 0.5] as [number, number],
}: {
  fromTexture: THREE.Texture;
  toTexture: THREE.Texture;
  progress: number;
  dots?: number;
  center?: [number, number];
}) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { size } = useThree();

  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.progress.value = progress;
    }
  }, [progress]);

  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        from: { value: fromTexture },
        to: { value: toTexture },
        progress: { value: 0 },
        dots: { value: dots },
        center: { value: new THREE.Vector2(...center) },
      },
      vertexShader,
      fragmentShader,
    });
  }, [fromTexture, toTexture, dots, center]);

  const textureSize = fromTexture.image
    ? [fromTexture.image.width, fromTexture.image.height]
    : [1, 1];

  const imageAspect = textureSize[0] / textureSize[1];
  const canvasAspect = size.width / size.height;

  let scaleX = 1;
  let scaleY = 1;

  if (imageAspect > canvasAspect) {
    scaleX = canvasAspect / imageAspect;
  } else {
    scaleY = imageAspect / canvasAspect;
  }

  return (
    <mesh scale={[scaleX, scaleY, 1]}>
      <planeGeometry args={[size.width, size.height]} />
      <primitive object={shaderMaterial} ref={materialRef} attach="material" />
    </mesh>
  );
}

function TransitionController({
  setProgress,
  onComplete,
  transitioning,
  progressRef,
}: {
  setProgress: (val: number) => void;
  onComplete: () => void;
  transitioning: boolean;
  progressRef: React.MutableRefObject<number>;
}) {
  useFrame((_state, delta) => {
    if (!transitioning) return;
    progressRef.current = Math.min(progressRef.current + delta * 0.5, 1);
    setProgress(progressRef.current);
    if (progressRef.current >= 1) {
      progressRef.current = 0;
      setProgress(0);
      onComplete();
    }
  });
  return null;
}

type GLDotsTransitionProps = {
  images: string[];
};

/** Only keep current + next textures in GPU memory. */
export function GLDotsTransition({ images }: GLDotsTransitionProps) {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [fromTexture, setFromTexture] = useState<THREE.Texture | null>(null);
  const [toTexture, setToTexture] = useState<THREE.Texture | null>(null);
  const [failed, setFailed] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const progressRef = useRef(0);
  const cacheRef = useRef<Map<string, THREE.Texture>>(new Map());

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!images.length) return;
    let cancelled = false;

    const ensure = async (src: string) => {
      const cached = cacheRef.current.get(src);
      if (cached) return cached;
      const tex = await loadTexture(src);
      cacheRef.current.set(src, tex);
      // Cap cache so we never hold all 100 textures
      if (cacheRef.current.size > 4) {
        const keys = [...cacheRef.current.keys()];
        for (const key of keys) {
          if (key === src) continue;
          if (cacheRef.current.size <= 4) break;
          const old = cacheRef.current.get(key);
          old?.dispose();
          cacheRef.current.delete(key);
        }
      }
      return tex;
    };

    (async () => {
      try {
        const fromSrc = images[index % images.length];
        const toSrc = images[(index + 1) % images.length];
        const [from, to] = await Promise.all([ensure(fromSrc), ensure(toSrc)]);
        if (cancelled) return;
        setFromTexture(from);
        setToTexture(to);
      } catch {
        if (!cancelled) setFailed(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [images, index]);

  useEffect(() => {
    if (reduceMotion || failed || images.length < 2) return;
    const timer = setInterval(() => {
      setTransitioning(true);
    }, 5000);
    return () => clearInterval(timer);
  }, [reduceMotion, failed, images.length]);

  useEffect(() => {
    return () => {
      cacheRef.current.forEach((tex) => tex.dispose());
      cacheRef.current.clear();
    };
  }, []);

  if (failed || reduceMotion || !fromTexture || !toTexture) {
    const src = images[index % images.length] ?? images[0];
    if (!src) return null;
    return (
      <img
        src={src}
        alt=""
        className="h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <Canvas
      orthographic
      camera={{ position: [0, 0, 1], zoom: 1 }}
      style={{ width: "100%", height: "100%" }}
      aria-hidden
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
    >
      <TransitionPlane
        fromTexture={fromTexture}
        toTexture={toTexture}
        progress={progress}
      />
      <TransitionController
        setProgress={setProgress}
        transitioning={transitioning}
        progressRef={progressRef}
        onComplete={() => {
          setTransitioning(false);
          setIndex((i) => (i + 1) % images.length);
        }}
      />
    </Canvas>
  );
}
