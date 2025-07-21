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

type TransitionPlaneProps = {
  fromTexture: THREE.Texture;
  toTexture: THREE.Texture;
  progress: number;
  dots?: number;
  center?: [number, number];
};

function TransitionPlane({
  fromTexture,
  toTexture,
  progress,
  dots = 20,
  center = [0.5, 0.5],
}: TransitionPlaneProps) {
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

  // Get the image aspect ratio
  const textureSize = fromTexture.image
    ? [fromTexture.image.width, fromTexture.image.height]
    : [1, 1];

  const imageAspect = textureSize[0] / textureSize[1];
  const canvasAspect = size.width / size.height;

  let scaleX = 1;
  let scaleY = 1;

  if (imageAspect > canvasAspect) {
    // Image is wider than canvas
    scaleX = canvasAspect / imageAspect;
  } else {
    // Image is taller
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
  setIndex,
  setTransitioning,
  transitioning,
  progressRef,
  textures,
}: {
  setProgress: (val: number) => void;
  setIndex: (fn: (i: number) => number) => void;
  setTransitioning: (b: boolean) => void;
  transitioning: boolean;
  progressRef: React.MutableRefObject<number>;
  textures: THREE.Texture[];
}) {
  useFrame((state, delta) => {
    if (transitioning) {
      progressRef.current = Math.min(progressRef.current + delta * 0.5, 1);
      setProgress(progressRef.current);
      if (progressRef.current >= 1) {
        progressRef.current = 0;
        setProgress(0);
        setIndex((i) => (i + 1) % textures.length);
        setTransitioning(false);
      }
    }
  });
  return null;
}

type GLDotsTransitionProps = {
  images: string[];
};

export function GLDotsTransition({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const progressRef = useRef(0);

  const textures = useMemo(() => {
    return images.map((src) => {
      const tex = new THREE.TextureLoader().load(src);
      tex.minFilter = THREE.LinearFilter;
      tex.generateMipmaps = false;
      return tex;
    });
  }, [images]);

  const fromTexture = textures[index];
  const toTexture = textures[(index + 1) % textures.length];

  useEffect(() => {
    const timer = setInterval(() => {
      setTransitioning(true);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Canvas
      orthographic
      camera={{ position: [0, 0, 1], zoom: 1 }}
      style={{ width: "100%", height: "100%" }}
    >
      <TransitionPlane
        fromTexture={fromTexture}
        toTexture={toTexture}
        progress={progress}
      />
      <TransitionController
        setProgress={setProgress}
        setIndex={setIndex}
        setTransitioning={setTransitioning}
        transitioning={transitioning}
        progressRef={progressRef}
        textures={textures}
      />
    </Canvas>
  );
}
