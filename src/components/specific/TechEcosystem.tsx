import React, { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls, Billboard, Text } from "@react-three/drei";
import * as THREE from "three";
import {
  Brain,
  Code,
  Layers,
  Server,
  Globe,
  Cpu,
  Database,
  Network,
  Container,
  Lock,
} from "lucide-react";

// --- DATA ---
const SKILLS = [
  // INNER RING (AI & ML - The Core Focus)
  { name: "AI Agents", icon: <Brain size={20} />, ring: 1, color: "#4ade80" },
  {
    name: "RAG Systems",
    icon: <Database size={20} />,
    ring: 1,
    color: "#4ade80",
  },
  {
    name: "LangChain",
    icon: <LinkIcon size={20} />,
    ring: 1,
    color: "#4ade80",
  },
  { name: "Vector DBs", icon: <Server size={20} />, ring: 1, color: "#4ade80" },

  // MIDDLE RING (Full Stack)
  { name: "Next.js 14", icon: <Globe size={20} />, ring: 2, color: "#60a5fa" },
  { name: "React 19", icon: <Code size={20} />, ring: 2, color: "#60a5fa" },
  { name: "NestJS", icon: <Server size={20} />, ring: 2, color: "#60a5fa" },
  { name: "TypeScript", icon: <Code size={20} />, ring: 2, color: "#60a5fa" },
  {
    name: "PostgreSQL",
    icon: <Database size={20} />,
    ring: 2,
    color: "#60a5fa",
  },

  // OUTER RING (Architecture & Ops)
  {
    name: "System Design",
    icon: <Layers size={20} />,
    ring: 3,
    color: "#c084fc",
  },
  {
    name: "Monorepo",
    icon: <Container size={20} />,
    ring: 3,
    color: "#c084fc",
  },
  {
    name: "Microservices",
    icon: <Network size={20} />,
    ring: 3,
    color: "#c084fc",
  },
  { name: "Docker", icon: <Container size={20} />, ring: 3, color: "#c084fc" },
  { name: "AWS", icon: <Lock size={20} />, ring: 3, color: "#c084fc" },
];

// Helper icon component
function LinkIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  );
}

// --- ORBITING CARD COMPONENT ---
function TechCard({ item, index, totalInRing }) {
  const ref = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  // Calculate position on the ring
  const angle = (index / totalInRing) * Math.PI * 2;
  const radius = item.ring * 6; // Distance from center (6, 12, 18)

  useFrame(({ clock }) => {
    if (ref.current) {
      // Orbit Logic
      const t = clock.getElapsedTime() * (0.1 / item.ring); // Outer rings move slower
      const x = Math.cos(angle + t) * radius;
      const z = Math.sin(angle + t) * radius;
      ref.current.position.set(x, 0, z);
    }
  });

  return (
    <group ref={ref}>
      {/* Billboard ensures the card always faces the camera */}
      <Billboard follow={true} lockX={false} lockY={false} lockZ={false}>
        <Html transform distanceFactor={12} style={{ pointerEvents: "auto" }}>
          <div
            className={`
              relative flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all duration-300 cursor-pointer
              ${
                hovered
                  ? "bg-background/90 border-primary scale-110 shadow-[0_0_30px_rgba(74,222,128,0.4)] z-50"
                  : "bg-background/40 backdrop-blur-md border-white/10 hover:border-primary/50 text-foreground/80"
              }
            `}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ width: "220px" }}
          >
            <div
              className={`p-2 rounded-lg bg-background/50 ${
                hovered ? "text-primary" : "text-foreground"
              }`}
            >
              {item.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-none">
                {item.name}
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider mt-1 font-semibold opacity-70">
                {item.ring === 1
                  ? "AI Core"
                  : item.ring === 2
                  ? "Full Stack"
                  : "Architecture"}
              </span>
            </div>

            {/* Glow effect on hover */}
            {hovered && (
              <div className="absolute inset-0 rounded-xl bg-primary/10 blur-xl -z-10" />
            )}
          </div>
        </Html>
      </Billboard>
    </group>
  );
}

// --- CENTRAL CORE ---
// function Core() {
//   const mesh = useRef<THREE.Mesh>(null);
//   useFrame((state) => {
//     if (mesh.current) {
//       mesh.current.rotation.y += 0.01;
//       mesh.current.rotation.z += 0.005;
//     }
//   });

//   return (
//     <mesh ref={mesh}>
//       <icosahedronGeometry args={[2.5, 2]} />
//       <meshStandardMaterial
//         wireframe
//         color="#4ade80"
//         emissive="#4ade80"
//         emissiveIntensity={2}
//         transparent
//         opacity={0.3}
//       />
//       <Html
//         position={[0, 0, 0]}
//         center
//         transform
//         distanceFactor={10}
//         style={{ pointerEvents: "none" }}
//       >
//         <div className="text-primary font-black text-4xl tracking-tighter drop-shadow-[0_0_10px_rgba(74,222,128,0.8)]">
//           AI
//         </div>
//       </Html>
//     </mesh>
//   );
// }

// --- CENTRAL CORE ---
function Core() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Rotate ONLY the mesh, not the container
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z += 0.005;
    }
  });

  return (
    <group>
      {/* 1. The Rotating Wireframe Mesh */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.5, 2]} />
        <meshStandardMaterial
          wireframe
          color="#4ade80"
          emissive="#4ade80"
          emissiveIntensity={2}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* 2. The Static HTML Text (Now a sibling, not a child) */}
      {/* <Html
        position={[0, 0, 0]}
        center
        transform
        distanceFactor={10}
        style={{ pointerEvents: "none" }}
      >
        <div className="text-primary font-black text-4xl tracking-tighter drop-shadow-[0_0_10px_rgba(74,222,128,0.8)]">
          Tech
        </div>
      </Html> */}
    </group>
  );
}

// --- MAIN COMPONENT ---
export default function TechEcosystem() {
  // Group skills by ring
  const ring1 = SKILLS.filter((s) => s.ring === 1);
  const ring2 = SKILLS.filter((s) => s.ring === 2);
  const ring3 = SKILLS.filter((s) => s.ring === 3);

  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-0 max-w-2xl mx-auto">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary border border-primary/20 backdrop-blur-md mb-4">
            The Tech Orbit
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Ecosystem of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">
              Intelligence
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Interactive visualization of my technical proficiency. <br />
            <span className="text-sm opacity-70">
              (Drag to rotate • Hover cards to expand)
            </span>
          </p>
        </div>

        {/* 3D Scene */}
        <div className="h-[600px] w-full relative -mt-24">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

          <Canvas dpr={[1, 2]} camera={{ position: [0, 20, 35], fov: 45 }}>
            <fog attach="fog" args={["#020617", 20, 80]} />

            <Core />

            {/* Render Rings */}
            {ring1.map((item, i) => (
              <TechCard
                key={item.name}
                item={item}
                index={i}
                totalInRing={ring1.length}
              />
            ))}
            {ring2.map((item, i) => (
              <TechCard
                key={item.name}
                item={item}
                index={i}
                totalInRing={ring2.length}
              />
            ))}
            {ring3.map((item, i) => (
              <TechCard
                key={item.name}
                item={item}
                index={i}
                totalInRing={ring3.length}
              />
            ))}

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
              minPolarAngle={Math.PI / 4} // Prevent seeing from too high
              maxPolarAngle={Math.PI / 2.2} // Prevent seeing from below
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
