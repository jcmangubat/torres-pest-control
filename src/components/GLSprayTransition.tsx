import * as THREE from "three";
import { useMemo, useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

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
  varying vec2 vUv;

  // Simple hash noise
  float random(vec2 p) {
    return fract(sin(dot(p ,vec2(12.9898,78.233))) * 43758.5453);
  }

  void main() {
    vec4 fromColor = texture2D(from, vUv);
    vec4 toColor = texture2D(to, vUv);
    float threshold = smoothstep(0.0, 1.0, progress);
    float noise = random(vUv * 50.0 + progress * 100.0);
    float mask = step(noise, threshold);
    gl_FragColor = mix(fromColor, toColor, mask);
  }
`;

type SprayPlaneProps = {
  fromTexture: THREE.Texture;
  toTexture: THREE.Texture;
};

function SprayPlane({ fromTexture, toTexture }: SprayPlaneProps) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame(({ clock }) => {
    const t = (Math.sin(clock.getElapsedTime()) + 1) / 2;
    if (materialRef.current) {
      materialRef.current.uniforms.progress.value = t;
    }
  });

  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        from: { value: fromTexture },
        to: { value: toTexture },
        progress: { value: 0 },
      },
      vertexShader,
      fragmentShader,
    });
  }, [fromTexture, toTexture]);

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <primitive object={shaderMaterial} ref={materialRef} attach="material" />
    </mesh>
  );
}

type GLSprayTransitionProps = {
  images: string[];
};

export function GLSprayTransition({ images }: GLSprayTransitionProps) {
  const [index, setIndex] = useState(0);

  const textures = useMemo(() => {
    return images.map((src) => {
      const texture = new THREE.TextureLoader().load(src);
      texture.minFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;
      return texture;
    });
  }, [images]);

  useEffect(() => {
    const cycle = setInterval(() => {
      setIndex((prev) => (prev + 1) % textures.length);
    }, 5000);
    return () => clearInterval(cycle);
  }, [textures]);

  const fromTexture = textures[index];
  const toTexture = textures[(index + 1) % textures.length];

  return (
    <Canvas
      orthographic
      camera={{ position: [0, 0, 5], zoom: 100 }}
      style={{ width: "100%", height: "100%" }}
    >
      <SprayPlane fromTexture={fromTexture} toTexture={toTexture} />
    </Canvas>
  );
}
