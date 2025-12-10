import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Line } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BrainCircuit, Terminal } from "lucide-react";

// --- 3D SCENE COMPONENTS ---

function NeuralNetwork({ count = 100 }) {
  const pointsRef = useRef<THREE.Points>(null!);
  const linesRef = useRef<THREE.LineSegments>(null!);

  // Generate random points in a spherical distribution
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      const r = 4; // Radius of the cloud
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Nature Colors: Mix of Emerald (Primary) and Gold (Accent)
      // We vary the color slightly for each point
      if (Math.random() > 0.5) {
        color.setHSL(0.4, 0.8, 0.5); // Greenish
      } else {
        color.setHSL(0.1, 0.7, 0.6); // Amber/Root color
      }

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return [positions, colors];
  }, [count]);

  // Animation Loop
  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Rotate the entire cloud slowly
    if (pointsRef.current) {
      pointsRef.current.rotation.x = time * 0.05;
      pointsRef.current.rotation.y = time * 0.1;
    }
    // Lines follow points (visual trick: we just rotate the group)
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* The Nodes (Neurons/Spores) */}
      <Points
        ref={pointsRef}
        positions={positions}
        colors={colors}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          vertexColors
          size={0.15}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      {/* Connections (Synapses/Roots) - A visual representation of connections */}
      {/* Note: Drawing dynamic lines between 100 points is expensive. 
          We use a static "Connections" visual for performance or a simplified mesh. 
          For this "Unprofessional" vibe, purely floating nodes often look cleaner, 
          but let's add a subtle wireframe sphere to represent the "structure" */}
      <mesh scale={[4, 4, 4]} rotation={[0, 0, 0]}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial
          wireframe
          color="#2E8B57"
          transparent
          opacity={0.1}
        />
      </mesh>
    </group>
  );
}

// --- MAIN HERO COMPONENT ---

export default function NeuralHero() {
  return (
    <div className="relative w-full h-[100vh] bg-[#051a10] overflow-hidden">
      {/* 3D Canvas Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <fog attach="fog" args={["#051a10", 5, 20]} />
          <ambientLight intensity={0.5} />
          <NeuralNetwork count={250} />
        </Canvas>
      </div>

      {/* 2D Overlay Layer (Framer Motion) */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center space-y-6 max-w-4xl"
        >
          {/* Glitchy / Terminal Text Effect */}
          <div className="flex items-center justify-center gap-2 text-emerald-400 font-mono text-sm tracking-widest uppercase mb-4">
            <Terminal className="w-4 h-4" />
            <span>System Status: Online // Neural Link Established</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-teal-400 to-emerald-600 drop-shadow-2xl tracking-tighter">
            ENGINEERING
            <br />
            INTELLIGENCE
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-emerald-100/80 text-lg md:text-2xl max-w-2xl mx-auto font-light"
          >
            I architect the{" "}
            <span className="text-white font-semibold">Neural Roots</span> of
            modern software.
            <br className="hidden md:block" />
            Specializing in Generative AI, Large Language Models, and Scalable
            Backend Systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-8 pointer-events-auto"
          >
            <Button
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold h-14 px-8 text-lg rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all hover:scale-105"
              asChild
            >
              <Link to="/industrial-projects">
                Explore The Systems <BrainCircuit className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-emerald-500/50 text-emerald-300 hover:bg-emerald-950/50 hover:text-white h-14 px-8 text-lg rounded-full backdrop-blur-md"
              asChild
            >
              <Link to="/about">
                Analyze Profile <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Gradient Overlay at bottom to blend into next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
    </div>
  );
}
