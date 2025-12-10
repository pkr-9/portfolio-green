import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  MeshTransmissionMaterial,
  Environment,
  Sparkles,
  Instances,
  Instance,
  Line,
} from "@react-three/drei";
import * as THREE from "three";

// --- PART 1: THE DIGITAL TREE ---
function DigitalTree() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      // Subtle organic sway
      group.current.rotation.z =
        Math.sin(state.clock.getElapsedTime() * 0.5) * 0.02;
    }
  });

  return (
    <group
      ref={group}
      position={[0, -1.2, 0]} /* 1. Lowered from -0.5 to -1.2 */
      scale={[0.75, 0.75, 0.75]} /* 2. Scaled down to 65% size to fit inside */
    >
      {/* Trunk */}
      <mesh position={[0, 0.8, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.2, 1.5, 8]} />
        <meshStandardMaterial color="#5D4037" roughness={0.8} />
      </mesh>

      {/* Stylized Leaves (Cones) */}
      <mesh position={[0, 1.8, 0]}>
        <coneGeometry args={[0.9, 1.2, 8]} />
        <meshStandardMaterial color="#1b5e20" roughness={0.2} />
      </mesh>
      <mesh position={[0, 2.4, 0]}>
        <coneGeometry args={[0.7, 1.0, 8]} />
        <meshStandardMaterial color="#2e7d32" roughness={0.2} />
      </mesh>
      <mesh position={[0, 2.9, 0]}>
        <coneGeometry args={[0.5, 0.8, 8]} />
        <meshStandardMaterial color="#43a047" roughness={0.2} />
      </mesh>
    </group>
  );
}

// --- PART 2: THE NEURAL ROOTS ---
// function NeuralRoots({ count = 30, radius = 1.5 }) {
//   // Generate nodes concentrated at the base of the tree
//   const particles = useMemo(() => {
//     const temp = [];
//     for (let i = 0; i < count; i++) {
//       // Random position within a hemisphere at the bottom
//       const theta = Math.random() * Math.PI * 2;
//       const phi = Math.random() * Math.PI * 0.5 + Math.PI * 0.5; // Bottom half
//       const r = Math.random() * radius;

//       const x = r * Math.sin(phi) * Math.cos(theta);
//       const y = r * Math.cos(phi) - 0.5; // Shift down to trunk base
//       const z = r * Math.sin(phi) * Math.sin(theta);

//       temp.push(new THREE.Vector3(x, y, z));
//     }
//     return temp;
//   }, [count, radius]);

//   // Connect nodes
//   const lines = useMemo(() => {
//     const connections = [];
//     for (let i = 0; i < count; i++) {
//       for (let j = i + 1; j < count; j++) {
//         const dist = particles[i].distanceTo(particles[j]);
//         if (dist < 1.0) {
//           connections.push([particles[i], particles[j]]);
//         }
//       }
//     }
//     return connections;
//   }, [particles, count]);

//   return (
//     <group>
//       {/* Root Nodes */}
//       <Instances range={count}>
//         <sphereGeometry args={[0.04, 16, 16]} />
//         <meshStandardMaterial
//           emissive="#00ffee"
//           emissiveIntensity={2}
//           color="#00ffee"
//           toneMapped={false}
//         />
//         {particles.map((pos, i) => (
//           <Instance key={i} position={pos} />
//         ))}
//       </Instances>

//       {/* Root Connections */}
//       {lines.map((pos, index) => (
//         <Line
//           key={index}
//           points={pos}
//           color="#00ffee"
//           opacity={0.3}
//           transparent
//           lineWidth={1}
//         />
//       ))}
//     </group>
//   );
// }

// --- PART 3: THE GLASS TERRARIUM ---
function TerrariumScene() {
  const mesh = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    if (mesh.current) {
      // Gentle floating rotation
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* The Glass Container */}
        <mesh
          ref={mesh}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
          // scale={hovered ? 1.02 : 1}
        >
          <icosahedronGeometry args={[2.2, 0]} /> {/* Low poly crystal shape */}
          <MeshTransmissionMaterial
            backside
            backsideThickness={1}
            thickness={0.5}
            roughness={0}
            transmission={0.95}
            ior={1.5}
            chromaticAberration={0.1}
            color="#ffffff"
            background={new THREE.Color("#020617")}
          />
        </mesh>

        {/* Contents */}
        <DigitalTree />
        {/* <NeuralRoots /> */}

        {/* Inner Magic Particles */}
        <Sparkles
          count={20}
          scale={3}
          size={3}
          speed={0.4}
          opacity={0.5}
          color="#00ffee"
        />
      </Float>

      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
      />
      <pointLight
        position={[0, -1, 0]}
        color="#00ffee"
        intensity={3}
        distance={3}
      />

      {/* Forest preset gives great reflections on glass */}
      <Environment preset="forest" />
    </group>
  );
}

// --- MAIN EXPORT ---
export default function Hero3D() {
  return (
    <div className="w-full h-[500px] md:h-[600px] relative z-10">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <TerrariumScene />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}

// --------------------------------------------------------------
// import { useRef, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import {
//   OrbitControls,
//   Float,
//   MeshTransmissionMaterial,
//   Environment,
//   Sparkles,
// } from "@react-three/drei";
// import { useTheme } from "@/components/ThemeProvider";
// import * as THREE from "three";

// // A stylized low-poly tree built with basic geometry
// function DigitalTree() {
//   const group = useRef<THREE.Group>(null);

//   // Rotate the tree slowly
//   useFrame((state) => {
//     if (group.current) {
//       group.current.rotation.y = state.clock.getElapsedTime() * 0.2;
//     }
//   });

//   return (
//     <group ref={group} position={[0, -1.5, 0]}>
//       {/* Trunk */}
//       <mesh position={[0, 1, 0]}>
//         <cylinderGeometry args={[0.15, 0.25, 2, 8]} />
//         <meshStandardMaterial color="#5D4037" roughness={0.8} />
//       </mesh>

//       {/* Leaves (Cone Layers) */}
//       <mesh position={[0, 2.2, 0]}>
//         <coneGeometry args={[1, 1.5, 8]} />
//         <meshStandardMaterial color="#1b5e20" roughness={0.3} />
//       </mesh>
//       <mesh position={[0, 2.9, 0]}>
//         <coneGeometry args={[0.8, 1.2, 8]} />
//         <meshStandardMaterial color="#2e7d32" roughness={0.3} />
//       </mesh>
//       <mesh position={[0, 3.5, 0]}>
//         <coneGeometry args={[0.6, 1, 8]} />
//         <meshStandardMaterial color="#43a047" roughness={0.3} />
//       </mesh>
//     </group>
//   );
// }

// // The Glass Terrarium Sphere
// function Terrarium() {
//   const mesh = useRef<THREE.Mesh>(null);
//   const { theme } = useTheme();

//   // Interactive bloom state
//   const [hovered, setHover] = useState(false);

//   useFrame((state) => {
//     if (mesh.current) {
//       // Gentle floating rotation
//       mesh.current.rotation.x =
//         Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
//       mesh.current.rotation.z =
//         Math.cos(state.clock.getElapsedTime() * 0.3) * 0.1;
//     }
//   });

//   // Adjust glass color based on theme
//   const glassColor = theme === "dark" ? "#2f4f4f" : "#ffffff";
//   const glowColor = hovered
//     ? "#00ff88"
//     : theme === "dark"
//     ? "#10b981"
//     : "#a7f3d0";

//   return (
//     <group>
//       <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
//         {/* The Glass Container */}
//         <mesh
//           ref={mesh}
//           onPointerOver={() => setHover(true)}
//           onPointerOut={() => setHover(false)}
//           scale={hovered ? 1.05 : 1}
//         >
//           <icosahedronGeometry args={[2.5, 0]} /> {/* Low poly look */}
//           <MeshTransmissionMaterial
//             backside
//             backsideThickness={1}
//             thickness={0.5}
//             roughness={0}
//             transmission={0.95} // High transparency
//             ior={1.5} // Index of Refraction (glass-like)
//             chromaticAberration={0.1} // Premium rainbow edges
//             color={glassColor}
//           />
//         </mesh>

//         {/* Inner Content */}
//         <DigitalTree />

//         {/* Floating Particles inside */}
//         <Sparkles
//           count={40}
//           scale={4}
//           size={4}
//           speed={0.4}
//           opacity={0.5}
//           color={glowColor}
//         />
//       </Float>

//       {/* Lighting */}
//       <ambientLight intensity={0.5} />
//       <spotLight
//         position={[10, 10, 10]}
//         angle={0.15}
//         penumbra={1}
//         intensity={1}
//       />
//       <pointLight position={[-10, -10, -10]} color={glowColor} intensity={2} />

//       {/* Environment reflections */}
//       <Environment preset="forest" />
//     </group>
//   );
// }

// export default function Hero3D() {
//   return (
//     <div className="w-full h-[600px] md:h-[700px] relative">
//       <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
//         <Terrarium />
//         <OrbitControls
//           enableZoom={false}
//           enablePan={false}
//           autoRotate
//           autoRotateSpeed={0.5}
//         />
//       </Canvas>
//     </div>
//   );
// }

// -----------------------------------------------------------------------

// import { useRef, useMemo, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import {
//   OrbitControls,
//   Float,
//   MeshTransmissionMaterial,
//   Environment,
//   Sparkles,
//   Instance,
//   Instances,
//   Line,
// } from "@react-three/drei";
// import { useTheme } from "@/components/ThemeProvider"; // Adjust path if needed, or use context directly
// import * as THREE from "three";

// // --- AI COMPONENT: NEURAL NETWORK ---
// function NeuralNetwork({ count = 40, radius = 2 }) {
//   const group = useRef<THREE.Group>(null);

//   // Generate random neurons (nodes)
//   const particles = useMemo(() => {
//     const temp = [];
//     for (let i = 0; i < count; i++) {
//       const x = (Math.random() - 0.5) * radius;
//       const y = (Math.random() - 0.5) * radius;
//       const z = (Math.random() - 0.5) * radius;
//       temp.push({
//         position: new THREE.Vector3(x, y, z),
//         speed: Math.random() * 0.02,
//       });
//     }
//     return temp;
//   }, [count, radius]);

//   // Generate connections (synapses) between close neurons
//   const lines = useMemo(() => {
//     const connections = [];
//     for (let i = 0; i < count; i++) {
//       for (let j = i + 1; j < count; j++) {
//         const dist = particles[i].position.distanceTo(particles[j].position);
//         // Only connect neurons that are close enough
//         if (dist < 1.2) {
//           connections.push([particles[i].position, particles[j].position]);
//         }
//       }
//     }
//     return connections;
//   }, [particles, count]);

//   // Animate the network (Slow "Breathing" rotation)
//   useFrame((state) => {
//     if (group.current) {
//       // Rotate the entire brain structure
//       group.current.rotation.y = state.clock.getElapsedTime() * 0.1;
//       group.current.rotation.z =
//         Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
//     }
//   });

//   return (
//     <group ref={group}>
//       {/* Neurons (The Nodes) */}
//       <Instances range={count}>
//         <sphereGeometry args={[0.08, 16, 16]} />
//         <meshStandardMaterial
//           emissive="#4ade80"
//           emissiveIntensity={2}
//           color="#22c55e"
//           toneMapped={false}
//         />
//         {particles.map((data, i) => (
//           <Instance key={i} position={data.position} />
//         ))}
//       </Instances>

//       {/* Synapses (The Connections) */}
//       {lines.map((pos, index) => (
//         <Line
//           key={index}
//           points={pos} // Array of Vector3
//           color="#86efac" // Light green
//           opacity={0.3}
//           transparent
//           lineWidth={1}
//         />
//       ))}
//     </group>
//   );
// }

// // --- MAIN SCENE: THE INCUBATOR ---
// function AIIncubator() {
//   const mesh = useRef<THREE.Mesh>(null);

//   // Note: If you don't have the explicit useTheme hook set up,
//   // you can default to dark mode colors or pass it as a prop.
//   // Assuming a default 'dark' vibe for AI.
//   const glassColor = "#2f4f4f";
//   const glowColor = "#4ade80"; // Bright Green

//   const [hovered, setHover] = useState(false);

//   useFrame((state) => {
//     if (mesh.current) {
//       // Float animation for the container
//       mesh.current.rotation.x =
//         Math.sin(state.clock.getElapsedTime() * 0.5) * 0.05;
//       mesh.current.rotation.y =
//         Math.cos(state.clock.getElapsedTime() * 0.3) * 0.05;
//     }
//   });

//   return (
//     <group>
//       <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
//         {/* 1. The Glass Shell (The Incubator) */}
//         <mesh
//           ref={mesh}
//           onPointerOver={() => setHover(true)}
//           onPointerOut={() => setHover(false)}
//           // scale={hovered ? 1.05 : 1}
//         >
//           {/* Icosahedron gives a techy/geometric feel vs a perfect sphere */}
//           <icosahedronGeometry args={[2.8, 0]} />
//           <MeshTransmissionMaterial
//             backside
//             backsideThickness={1}
//             thickness={0.5}
//             roughness={0.1}
//             transmission={0.95}
//             ior={1.5}
//             chromaticAberration={0.2} // High aberration for "Data" look
//             color={glassColor}
//             distortion={0.2} // Slight warp like fluid
//             distortionScale={0.5}
//           />
//         </mesh>

//         {/* 2. The AI Core (Neural Network) */}
//         <NeuralNetwork />

//         {/* 3. Floating Data Particles */}
//         <Sparkles
//           count={60}
//           scale={5}
//           size={3}
//           speed={0.4}
//           opacity={0.6}
//           color={glowColor}
//           noise={0.5} // Organic movement
//         />
//       </Float>

//       {/* Lighting setup for the glow effect */}
//       <ambientLight intensity={0.5} />
//       {/* Green internal glow */}
//       <pointLight
//         position={[0, 0, 0]}
//         color={glowColor}
//         intensity={5}
//         distance={5}
//       />
//       {/* External highlights */}
//       <spotLight
//         position={[10, 10, 10]}
//         angle={0.15}
//         penumbra={1}
//         intensity={2}
//         color="#ffffff"
//       />

//       {/* Forest environment to keep reflections organic */}
//       <Environment preset="forest" />
//     </group>
//   );
// }

// export default function Hero3D() {
//   return (
//     <div className="w-full h-[500px] md:h-[700px] relative z-20">
//       <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
//         <AIIncubator />
//         <OrbitControls
//           enableZoom={false}
//           enablePan={false}
//           autoRotate
//           autoRotateSpeed={0.8}
//           minPolarAngle={Math.PI / 4}
//           maxPolarAngle={Math.PI / 1.5}
//         />
//       </Canvas>
//     </div>
//   );
// }

// ----------------------------------------------------

// import { useRef, useMemo } from "react";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { OrbitControls, Environment } from "@react-three/drei";
// import * as THREE from "three";
// import { createNoise3D } from "simplex-noise";

// // If simplex-noise isn't installed, we can use a simple Math.sin/cos replacement in the code below.
// // For this snippet, I will implement a custom performant noise function to avoid extra deps.

// // --- MATH UTILS FOR SWARM LOGIC ---
// const simpleNoise = (x: number, y: number, z: number) => {
//   return Math.sin(x) * Math.cos(y) * Math.sin(z);
// };

// // --- SWARM COMPONENT ---
// function TensorSwarm({ count = 2000 }) {
//   const mesh = useRef<THREE.InstancedMesh>(null);
//   const { viewport, mouse } = useThree();
//   const dummy = useMemo(() => new THREE.Object3D(), []);

//   // Initialize Particle Data (Position, Velocity, Acceleration)
//   const particles = useMemo(() => {
//     const temp = [];
//     for (let i = 0; i < count; i++) {
//       const t = Math.random() * 100;
//       const speed = 0.01 + Math.random() * 0.02;
//       const x = (Math.random() - 0.5) * 15;
//       const y = (Math.random() - 0.5) * 15;
//       const z = (Math.random() - 0.5) * 15;
//       temp.push({
//         t,
//         speed,
//         pos: new THREE.Vector3(x, y, z),
//         vel: new THREE.Vector3(),
//       });
//     }
//     return temp;
//   }, [count]);

//   useFrame((state) => {
//     if (!mesh.current) return;

//     // Convert mouse screen coords (-1 to 1) to world coords roughly
//     const mouseTarget = new THREE.Vector3(
//       (mouse.x * viewport.width) / 2,
//       (mouse.y * viewport.height) / 2,
//       0
//     );

//     particles.forEach((particle, i) => {
//       // 1. Calculate "Flow Field" Force (The Intelligence)
//       // We use noise to determine the direction a particle 'wants' to go
//       const time = state.clock.getElapsedTime() * 0.2;
//       const noiseX = simpleNoise(
//         particle.pos.x * 0.2,
//         particle.pos.y * 0.2 + time,
//         particle.pos.z * 0.2
//       );
//       const noiseY = simpleNoise(
//         particle.pos.y * 0.2,
//         particle.pos.z * 0.2 + time,
//         particle.pos.x * 0.2
//       );
//       const noiseZ = simpleNoise(
//         particle.pos.z * 0.2,
//         particle.pos.x * 0.2 + time,
//         particle.pos.y * 0.2
//       );

//       const flowDir = new THREE.Vector3(noiseX, noiseY, noiseZ)
//         .normalize()
//         .multiplyScalar(0.05);

//       // 2. Calculate Mouse Interaction (The Stimulus)
//       // Particles are attracted to mouse but repelled if too close (like a magnet)
//       const dist = particle.pos.distanceTo(mouseTarget);
//       const mouseDir = new THREE.Vector3()
//         .subVectors(mouseTarget, particle.pos)
//         .normalize();

//       // Attraction force
//       if (dist < 6) {
//         flowDir.add(mouseDir.multiplyScalar(0.08));
//       }

//       // 3. Apply Forces to Velocity
//       particle.vel.lerp(flowDir, 0.05); // Smooth transition (Inertia)
//       particle.pos.add(particle.vel);

//       // 4. Boundary Check (Teleport them back if they wander off)
//       // This creates the "Endless Stream" effect
//       if (Math.abs(particle.pos.x) > 10) particle.pos.x *= -0.9;
//       if (Math.abs(particle.pos.y) > 10) particle.pos.y *= -0.9;
//       if (Math.abs(particle.pos.z) > 10) particle.pos.z *= -0.9;

//       // 5. Update Matrix
//       dummy.position.copy(particle.pos);

//       // Orient particle to face direction of movement
//       dummy.lookAt(particle.pos.clone().add(particle.vel));

//       // Dynamic Scale based on velocity (Stretch effect)
//       const stretch = 1 + particle.vel.length() * 5;
//       dummy.scale.set(1, 1, stretch);

//       dummy.updateMatrix();
//       mesh.current.setMatrixAt(i, dummy.matrix);
//     });

//     mesh.current.instanceMatrix.needsUpdate = true;
//   });

//   return (
//     <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
//       {/* Use a simple Box or Cone for directionality */}
//       <boxGeometry args={[0.05, 0.05, 0.2]} />
//       <meshStandardMaterial
//         color="#4ade80"
//         emissive="#22c55e"
//         emissiveIntensity={1.5}
//         toneMapped={false}
//       />
//     </instancedMesh>
//   );
// }

// // --- MAIN HERO COMPONENT ---
// export default function Hero3D() {
//   return (
//     <div className="w-full h-[500px] md:h-[700px] relative z-20">
//       <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
//         <TensorSwarm count={3000} />

//         {/* Post-Processing Bloom could be added here, but lighting handles glow well enough for basic setup */}
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />

//         {/* Environment adds subtle reflections if we use shiny materials */}
//         <Environment preset="forest" />

//         {/* Remove OrbitControls or restrict them so user focuses on Mouse Interaction */}
//         {/* <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} /> */}
//       </Canvas>

//       {/* Overlay Helper Text (Optional) */}
//       <div className="absolute bottom-4 right-4 text-xs text-primary/40 font-mono pointer-events-none">
//         &gt; SYSTEM: SWARM_ACTIVE
//         <br />
//         &gt; MOUSE_INPUT: DETECTED
//       </div>
//     </div>
//   );
// }

// -----------------------------------------------------------------------
// import { useRef, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import {
//   OrbitControls,
//   Float,
//   MeshTransmissionMaterial,
//   MeshDistortMaterial,
//   Environment,
//   Sparkles,
//   Torus,
// } from "@react-three/drei";
// import * as THREE from "three";

// // --- THE CORE: SHIFTING LATENT SPACE ---
// function GenerativeCore() {
//   const mesh = useRef<THREE.Mesh>(null);

//   useFrame((state) => {
//     if (mesh.current) {
//       // Rotate the core to show depth
//       mesh.current.rotation.x = state.clock.getElapsedTime() * 0.2;
//       mesh.current.rotation.y = state.clock.getElapsedTime() * 0.3;
//     }
//   });

//   return (
//     <mesh ref={mesh} scale={0.8}>
//       {/* A dense sphere that allows for smooth distortion */}
//       <sphereGeometry args={[1, 64, 64]} />
//       {/* MeshDistortMaterial creates the "morphing" effect */}
//       <MeshDistortMaterial
//         color="#4ade80" // Bright Emerald
//         envMapIntensity={1}
//         clearcoat={1}
//         clearcoatRoughness={0}
//         metalness={0.1}
//         distort={0.4} // Strength of the distortion
//         speed={2} // Speed of the morphing animation
//       />
//     </mesh>
//   );
// }

// // --- THE RINGS: TRAINING EPOCHS ---
// function ProcessingRings() {
//   const group = useRef<THREE.Group>(null);

//   useFrame((state) => {
//     if (group.current) {
//         // Rotate rings in opposite directions
//         group.current.rotation.z = state.clock.getElapsedTime() * 0.1;
//         group.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.2;
//     }
//   });

//   return (
//     <group ref={group}>
//       {/* Ring 1 */}
//       <Torus args={[2.2, 0.02, 16, 100]} rotation={[1.5, 0, 0]}>
//         <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={2} toneMapped={false} />
//       </Torus>
//       {/* Ring 2 (Offset) */}
//       <Torus args={[2.6, 0.02, 16, 100]} rotation={[2, 1, 0]}>
//         <meshStandardMaterial color="#86efac" emissive="#86efac" emissiveIntensity={1} toneMapped={false} />
//       </Torus>
//     </group>
//   );
// }

// // --- MAIN SCENE: THE MODEL ---
// function AIModel() {
//   const mesh = useRef<THREE.Mesh>(null);
//   const [hovered, setHover] = useState(false);

//   // Theme-aware colors (Hardcoded for "Nature" theme consistency)
//   const glassColor = "#1a2e1a"; // Deep Forest Green Glass

//   useFrame((state) => {
//     if (mesh.current) {
//       // Gentle float of the outer container
//       mesh.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.05;
//       mesh.current.rotation.y = Math.cos(state.clock.getElapsedTime() * 0.3) * 0.05;
//     }
//   });

//   return (
//     <group>
//       <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>

//         {/* 1. The Glass Shell (Geometric Icosahedron) */}
//         <mesh
//           ref={mesh}
//           onPointerOver={() => setHover(true)}
//           onPointerOut={() => setHover(false)}
//           scale={hovered ? 1.05 : 1}
//         >
//           <icosahedronGeometry args={[2, 0]} />
//           <MeshTransmissionMaterial
//             backside
//             backsideThickness={1}
//             thickness={0.5}
//             roughness={0.1}
//             transmission={0.95}
//             ior={1.5}
//             chromaticAberration={0.06}
//             anisotropy={0.1}
//             color={glassColor}
//             distortion={0.1}
//             distortionScale={0.5}
//             temporalDistortion={0.1}
//           />
//         </mesh>

//         {/* 2. The Inner AI Core */}
//         <GenerativeCore />

//         {/* 3. Orbiting Data Particles */}
//         <Sparkles
//           count={50}
//           scale={5}
//           size={3}
//           speed={0.4}
//           opacity={0.5}
//           color="#a7f3d0" // Soft Green
//         />

//         {/* 4. Processing Rings */}
//         <ProcessingRings />

//       </Float>

//       {/* Cinematic Lighting */}
//       <ambientLight intensity={0.5} />
//       <pointLight position={[0, 0, 0]} color="#4ade80" intensity={2} distance={5} />
//       <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} intensity={2} color="#ffffff" />
//       <spotLight position={[-5, -5, -5]} angle={0.15} penumbra={1} intensity={1} color="#22c55e" />

//       {/* Forest Reflection for realism */}
//       <Environment preset="forest" />
//     </group>
//   );
// }

// export default function Hero3D() {
//   return (
//     <div className="w-full h-[500px] md:h-[700px] relative z-20">
//       <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
//         <AIModel />
//         <OrbitControls
//           enableZoom={false}
//           enablePan={false}
//           autoRotate
//           autoRotateSpeed={1.5}
//           minPolarAngle={Math.PI / 4}
//           maxPolarAngle={Math.PI / 1.5}
//         />
//       </Canvas>
//     </div>
//   );
// }

// ---------------------------------------------------------------------
// import { useRef, useMemo, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import {
//   OrbitControls,
//   Float,
//   MeshTransmissionMaterial,
//   Environment,
//   Sparkles,
//   Instances,
//   Instance,
//   Line,
//   Icosahedron,
// } from "@react-three/drei";
// import { useTheme } from "@/components/ThemeProvider"; // Ensure path matches your project
// import * as THREE from "three";

// // --- 1. THE BASE: NEURAL ROOTS (AI Engineering) ---
// function NeuralRoots() {
//   const count = 30;
//   const group = useRef<THREE.Group>(null);

//   // Generate random nodes below the tree
//   const particles = useMemo(() => {
//     const temp = [];
//     for (let i = 0; i < count; i++) {
//       // Spread roots horizontally but keep them low (y < 0)
//       const x = (Math.random() - 0.5) * 3;
//       const y = -1 - Math.random() * 1.5; // Below the tree trunk
//       const z = (Math.random() - 0.5) * 3;
//       temp.push(new THREE.Vector3(x, y, z));
//     }
//     return temp;
//   }, []);

//   // Connect close nodes to form a root network
//   const lines = useMemo(() => {
//     const connections = [];
//     particles.forEach((p1, i) => {
//       particles.forEach((p2, j) => {
//         if (i !== j && p1.distanceTo(p2) < 1.5) {
//           connections.push([p1, p2]);
//         }
//       });
//     });
//     return connections;
//   }, [particles]);

//   useFrame((state) => {
//     if (group.current) {
//       group.current.rotation.y = -state.clock.getElapsedTime() * 0.05; // Counter-rotate roots
//     }
//   });

//   return (
//     <group ref={group}>
//       <Instances range={count}>
//         <sphereGeometry args={[0.06, 8, 8]} />
//         <meshStandardMaterial emissive="#10b981" color="#10b981" />
//         {particles.map((pos, i) => (
//           <Instance key={i} position={pos} />
//         ))}
//       </Instances>
//       {lines.map((points, i) => (
//         <Line
//           key={i}
//           points={points}
//           color="#34d399"
//           opacity={0.2}
//           transparent
//           lineWidth={1}
//         />
//       ))}
//     </group>
//   );
// }

// // --- 2. THE CORE: GENERATIVE CRYSTAL (The "Brain") ---
// function GenerativeCore() {
//   const mesh = useRef<THREE.Mesh>(null);

//   useFrame((state) => {
//     if (mesh.current) {
//       // Fast, complex rotation for the "processing" core
//       mesh.current.rotation.x = state.clock.getElapsedTime() * 0.5;
//       mesh.current.rotation.y = state.clock.getElapsedTime() * 0.3;
//       // Pulse scale
//       const scale = 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.1;
//       mesh.current.scale.set(scale, scale, scale);
//     }
//   });

//   return (
//     <mesh ref={mesh} position={[0, 0.5, 0]}>
//       <octahedronGeometry args={[0.6, 0]} />
//       <meshStandardMaterial
//         wireframe
//         color="#00ff88"
//         emissive="#00ff88"
//         emissiveIntensity={2}
//       />
//     </mesh>
//   );
// }

// // --- 3. THE CANOPY: DIGITAL TREE (Full Stack App Layer) ---
// function DigitalCanopy() {
//   const group = useRef<THREE.Group>(null);

//   useFrame((state) => {
//     if (group.current) {
//       group.current.rotation.y = state.clock.getElapsedTime() * 0.1; // Slow rotation
//     }
//   });

//   return (
//     <group ref={group} position={[0, -0.5, 0]}>
//       {/* Trunk connecting Roots to Core to Canopy */}
//       <mesh position={[0, 0.5, 0]}>
//         <cylinderGeometry args={[0.1, 0.2, 2.5, 8]} />
//         <meshStandardMaterial color="#3e2723" />
//       </mesh>

//       {/* Stylized Leaves */}
//       <mesh position={[0, 2.0, 0]}>
//         <coneGeometry args={[1.2, 1.2, 7]} />
//         <meshStandardMaterial color="#15803d" roughness={0.4} />
//       </mesh>
//       <mesh position={[0, 2.8, 0]}>
//         <coneGeometry args={[0.9, 1.0, 7]} />
//         <meshStandardMaterial color="#16a34a" roughness={0.4} />
//       </mesh>
//       <mesh position={[0, 3.5, 0]}>
//         <coneGeometry args={[0.6, 0.8, 7]} />
//         <meshStandardMaterial color="#22c55e" roughness={0.4} />
//       </mesh>
//     </group>
//   );
// }

// // --- MAIN SCENE: THE ECOSYSTEM ---
// function Ecosystem() {
//   const mesh = useRef<THREE.Mesh>(null);
//   const [hovered, setHover] = useState(false);
//   const { theme } = useTheme(); // Uses your theme context

//   const glassColor = theme === "dark" ? "#111827" : "#ffffff";
//   const glowColor = hovered ? "#4ade80" : "#22c55e";

//   useFrame((state) => {
//     if (mesh.current) {
//       // Float the entire ecosystem
//       mesh.current.rotation.z =
//         Math.cos(state.clock.getElapsedTime() * 0.2) * 0.05;
//     }
//   });

//   return (
//     <group>
//       <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
//         {/* The Outer Shell (Terrarium) */}
//         <mesh
//           ref={mesh}
//           onPointerOver={() => setHover(true)}
//           onPointerOut={() => setHover(false)}
//           scale={hovered ? 1.02 : 1}
//         >
//           <icosahedronGeometry args={[3.2, 1]} />
//           <MeshTransmissionMaterial
//             backside
//             backsideThickness={1}
//             thickness={0.2}
//             roughness={0}
//             transmission={0.9}
//             ior={1.5}
//             chromaticAberration={0.1}
//             color={glassColor}
//           />
//         </mesh>
//         {/* The Three Layers of Your Career */}
//         <NeuralRoots /> {/* Bottom: AI Foundations */}
//         <DigitalCanopy /> {/* Top: Full Stack Applications */}
//         <GenerativeCore /> {/* Center: The Active Intelligence */}
//         {/* Ambient Particles */}
//         <Sparkles
//           count={50}
//           scale={5}
//           size={4}
//           speed={0.4}
//           opacity={0.5}
//           color={glowColor}
//         />
//       </Float>

//       {/* Lighting */}
//       <ambientLight intensity={0.5} />
//       <pointLight
//         position={[0, 0, 0]}
//         color="#4ade80"
//         intensity={3}
//         distance={4}
//       />
//       <spotLight
//         position={[10, 10, 10]}
//         angle={0.15}
//         penumbra={1}
//         intensity={1}
//       />
//       <Environment preset="forest" />
//     </group>
//   );
// }

// export default function Hero3D() {
//   return (
//     <div className="absolute inset-0 z-0 w-full h-full">
//       <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
//         <Ecosystem />
//         <OrbitControls
//           enableZoom={false}
//           enablePan={false}
//           autoRotate
//           autoRotateSpeed={0.5}
//           minPolarAngle={Math.PI / 3}
//           maxPolarAngle={Math.PI / 1.5}
//         />
//       </Canvas>
//     </div>
//   );
// }
