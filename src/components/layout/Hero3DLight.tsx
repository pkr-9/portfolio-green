// src/components/layout/Hero3DLight.tsx
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Core() {
  const ref = useRef<THREE.Mesh>(null);

  // Low poly octahedron as the AI core
  useFrame((s) => {
    if (ref.current) {
      const t = s.clock.getElapsedTime();
      ref.current.rotation.y = t * 0.45;
      ref.current.rotation.x = Math.sin(t * 0.4) * 0.06;
      const p = 1 + Math.sin(t * 2) * 0.03;
      ref.current.scale.set(p, p, p);
    }
  });

  return (
    <mesh ref={ref} position={[0, 0.2, 0]}>
      <octahedronGeometry args={[0.6, 0]} />
      {/* Emissive wire-ish look without heavy shaders */}
      <meshStandardMaterial
        color={"#22c55e"}
        emissive={"#0ea5a4"}
        emissiveIntensity={1}
        metalness={0.2}
        roughness={0.2}
      />
    </mesh>
  );
}

function InstancedRing({
  radius = 2,
  count = 28,
  y = 0,
}: {
  radius?: number;
  count?: number;
  y?: number;
}) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const positions = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2;
      const x = Math.cos(a) * radius + (Math.random() - 0.5) * 0.12;
      const z = Math.sin(a) * radius + (Math.random() - 0.5) * 0.12;
      const ry = y + (Math.random() - 0.5) * 0.08;
      arr.push([x, ry, z, a]);
    }
    return arr;
  }, [count, radius, y]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    positions.forEach((p, i) => {
      dummy.position.set(p[0], p[1], p[2]);
      dummy.rotation.y = t * 0.2 + p[3];
      dummy.scale.setScalar(0.08 + (Math.sin(t + i) + 1) * 0.02);
      dummy.updateMatrix();
      meshRef.current?.setMatrixAt(i, dummy.matrix);
    });
    if (meshRef.current) meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, positions.length]}
    >
      <sphereGeometry args={[0.06, 8, 8]} />
      <meshStandardMaterial
        color={"#34d399"}
        emissive={"#059669"}
        emissiveIntensity={0.9}
        roughness={0.4}
        metalness={0.1}
      />
    </instancedMesh>
  );
}

function LinesBetweenNodes({ nodes = [] as THREE.Vector3[] }) {
  // Build a lightweight line buffer connecting nearest neighbors
  const geom = useMemo(() => {
    const positions: number[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 1.2) {
          positions.push(nodes[i].x, nodes[i].y, nodes[i].z);
          positions.push(nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }
    const buffer = new THREE.BufferGeometry();
    buffer.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    return buffer;
  }, [nodes]);

  return (
    <lineSegments geometry={geom}>
      <lineBasicMaterial
        attach="material"
        color={"#86efac"}
        transparent={true}
        opacity={0.18}
      />
    </lineSegments>
  );
}

function ParticleCloud({ count = 300 }) {
  const pointsRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 4;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, [count]);

  useFrame((s) => {
    if (!pointsRef.current) return;
    // gentle float
    pointsRef.current.rotation.y = s.clock.getElapsedTime() * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} sizeAttenuation={true} color={"#9be7b2"} />
    </points>
  );
}

export default function Hero3DLight() {
  // Precompute node positions for lines component
  const nodeVectors = useMemo(() => {
    const arr: THREE.Vector3[] = [];
    const rings = [
      { r: 1.6, y: 0.4, c: 18 },
      { r: 2.6, y: -0.1, c: 24 },
      { r: 3.6, y: -0.5, c: 28 },
    ];
    rings.forEach((rg) => {
      for (let i = 0; i < rg.c; i++) {
        const a = (i / rg.c) * Math.PI * 2;
        arr.push(
          new THREE.Vector3(
            Math.cos(a) * rg.r + (Math.random() - 0.5) * 0.08,
            rg.y + (Math.random() - 0.5) * 0.06,
            Math.sin(a) * rg.r + (Math.random() - 0.5) * 0.08
          )
        );
      }
    });
    return arr;
  }, []);

  return (
    <div className="w-full h-[520px] md:h-[680px]">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <Core />
        <InstancedRing radius={1.6} count={18} y={0.4} />
        <InstancedRing radius={2.6} count={24} y={-0.1} />
        <InstancedRing radius={3.6} count={28} y={-0.5} />
        <LinesBetweenNodes nodes={nodeVectors} />
        <ParticleCloud count={300} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.15}
        />
      </Canvas>
    </div>
  );
}
