import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Plane, Stars } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- 3D COMPONENTS ---

// 1. The Moving Terrain
function Terrain() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Generate height data for the hills
  const { geometry, colors } = useMemo(() => {
    const geo = new THREE.PlaneGeometry(50, 50, 64, 64);
    const posAttribute = geo.attributes.position;
    const vertexCount = posAttribute.count;
    const colorsArr = [];

    // Create initial uneven terrain
    for (let i = 0; i < vertexCount; i++) {
      const x = posAttribute.getX(i);
      const y = posAttribute.getY(i);

      // Math to create "hills"
      const z = Math.sin(x / 2) * Math.cos(y / 2) * 1.5 + Math.random() * 0.2;
      posAttribute.setZ(i, z);

      // Color gradient based on height (Dark Green to Neon Green)
      // We will mix colors in the loop
      colorsArr.push(0, 0.5 + Math.random() * 0.5, 0);
    }

    geo.computeVertexNormals();
    return { geometry: geo, colors: new Float32Array(colorsArr) };
  }, []);

  // Animation Loop
  useFrame((state) => {
    if (!meshRef.current) return;
    // Move the terrain towards the camera
    // We simulate movement by scrolling the texture or moving position and resetting
    meshRef.current.position.y -= 0.08;

    // Infinite loop reset
    if (meshRef.current.position.y < -10) {
      meshRef.current.position.y = 0;
    }
  });

  return (
    <group rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -2, -5]}>
      {/* We use two planes to create a seamless loop illusion if needed, 
           but for abstract wireframes, a single large plane resetting works well visually */}
      <mesh ref={meshRef}>
        <primitive object={geometry} />
        <meshStandardMaterial
          wireframe
          color="#22c55e" // Tailwind green-500
          emissive="#14532d" // Tailwind green-900
          emissiveIntensity={0.5}
          roughness={0.5}
          metalness={0.8}
        />
      </mesh>
    </group>
  );
}

// 2. Fireflies (Particles)
function Fireflies({ count = 100 }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Random positions
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    if (!mesh.current) return;
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);

      dummy.position.set(
        (particle.mx / 10) * a +
          xFactor +
          Math.cos((t / 10) * factor) +
          (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b +
          yFactor +
          Math.sin((t / 10) * factor) +
          (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b +
          zFactor +
          Math.cos((t / 10) * factor) +
          (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[0.05, 0]} />
      <meshBasicMaterial color="#4ade80" /> {/* Light Green Fireflies */}
    </instancedMesh>
  );
}

// --- MAIN COMPONENT ---

export default function Hero3D() {
  return (
    <div className="relative w-full h-[100vh] bg-[#022c22] overflow-hidden">
      {/* 3D Canvas Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#4ade80" />
          <pointLight
            position={[-10, -10, -10]}
            intensity={0.5}
            color="#166534"
          />
          {/* Environment */}
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          <fog attach="fog" args={["#022c22", 5, 20]} />{" "}
          {/* Fog matches bg color to hide horizon */}
          <Terrain />
          <Fireflies count={150} />
        </Canvas>
      </div>

      {/* 2D Overlay Layer (Content) */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center pointer-events-none">
        <div className="container px-4 text-center pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-green-900/50 border border-green-500/30 text-green-400 text-sm font-mono tracking-widest backdrop-blur-md">
              SYSTEM ONLINE // WELCOME
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-green-400 drop-shadow-lg tracking-tighter"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            DIGITAL
            <br />
            TOPOGRAPHY
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-green-100/80 max-w-2xl mx-auto font-light"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Navigating the landscape of{" "}
            <span className="text-green-400 font-bold">
              Full Stack Architecture
            </span>
            . Building scalable ecosystems with Java, Spring Boot & React.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-500 text-white border-none shadow-[0_0_20px_rgba(34,197,94,0.5)]"
            >
              Explore Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-500/50 text-green-400 hover:bg-green-900/50 hover:text-white backdrop-blur-sm"
            >
              View Documentation
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="text-green-500/70 w-8 h-8" />
        </motion.div>
      </div>

      {/* Vignette Overlay for cinematic look */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#022c22_100%)]" />
    </div>
  );
}
