import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { motion } from "framer-motion";
import { Terminal, Cpu, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// --- Configuration ---
const COUNT = 4000; // Number of particles
const MOUSE_RADIUS = 4; // Radius of mouse influence
const COLOR_1 = new THREE.Color("#2E8B57"); // SeaGreen (Nature Primary)
const COLOR_2 = new THREE.Color("#FFD700"); // Gold (Accent/Data)

function Particles({
  mouse,
}: {
  mouse: React.MutableRefObject<THREE.Vector2>;
}) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const { viewport } = useThree();

  // Initialize particle data (position, velocity, dummy object for updates)
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < COUNT; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;

    // Convert mouse screen coords (-1 to 1) to world units
    const mouseX = (mouse.current.x * viewport.width) / 2;
    const mouseY = (mouse.current.y * viewport.height) / 2;

    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;

      // Basic organic movement (Lissajous figures for chaotic but smooth paths)
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);

      // Base Position
      let x =
        (particle.mx += (mouseX - particle.mx) * 0.01) +
        Math.cos(t) +
        Math.sin(t) * xFactor +
        Math.cos(t / 2) * 10;
      let y =
        (particle.my += (mouseY - particle.my) * 0.01) +
        Math.sin(t) +
        Math.cos(t) * yFactor +
        Math.sin(t / 2) * 10;
      let z =
        particle.mx / 10 +
        Math.cos(t) +
        Math.sin(t) * zFactor +
        Math.cos(t / 2) * 10;

      // Swarm Intelligence Logic: Attraction/Repulsion
      // Calculate distance to mouse
      const dx = x - mouseX;
      const dy = y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < MOUSE_RADIUS * 5) {
        // If close to mouse, swirl faster around it (Agitation state)
        x += dx * 0.05;
        y += dy * 0.05;
      }

      // Update dummy object position
      dummy.position.set(x, y, z);
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();

      // Apply matrix to instance
      mesh.current.setMatrixAt(i, dummy.matrix);

      // Vary colors based on index to mix Green and Gold
      if (i % 2 === 0) mesh.current.setColorAt(i, COLOR_1);
      else mesh.current.setColorAt(i, COLOR_2);
    });

    mesh.current.instanceMatrix.needsUpdate = true;
    if (mesh.current.instanceColor)
      mesh.current.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, COUNT]}>
      <dodecahedronGeometry args={[0.1, 0]} />
      <meshPhongMaterial />
    </instancedMesh>
  );
}

// --- Typing Effect Hook ---
const useTypewriter = (words: string[], speed = 100, pause = 2000) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), pause);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, Math.random() * 350));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, pause]);

  return `${words[index].substring(0, subIndex)}${blink ? "|" : " "}`;
};

// --- Main Hero Component ---
export default function SwarmHero() {
  const mouse = useRef(new THREE.Vector2(0, 0));
  const typingText = useTypewriter([
    "> Initializing Neural Networks...",
    "> Training LLM Models...",
    "> Deploying Autonomous Agents...",
    "> Optimizing Hyperparameters...",
    "> Architecting Intelligence...",
  ]);

  const handleMouseMove = (event: React.MouseEvent) => {
    // Normalize mouse coordinates (-1 to 1)
    mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-background"
      onMouseMove={handleMouseMove}
    >
      {/* 3D Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 30], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#FFD700" />
          <pointLight
            position={[-10, -10, -10]}
            intensity={0.5}
            color="#2E8B57"
          />
          <Particles mouse={mouse} />
        </Canvas>
      </div>

      {/* UI Overlay Layer */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full container pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl space-y-6 pointer-events-auto bg-background/5 p-8 rounded-2xl backdrop-blur-sm border border-primary/10"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 text-primary font-mono text-sm mb-4">
            <Terminal className="w-4 h-4" />
            <span>SYSTEM.ROOT.ACCESS</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
            ENGINEERING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-500">
              INTELLIGENCE
            </span>
          </h1>

          <div className="h-8 md:h-10">
            <p className="font-mono text-lg md:text-xl text-muted-foreground">
              {typingText}
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-xl">
            Merging <strong>Swarm Intelligence</strong> with{" "}
            <strong>Full Stack Architecture</strong>. I build AI systems that
            are not just smart, but adaptive and scalable.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold tracking-wide"
              asChild
            >
              <Link to="/industrial-projects">
                <Network className="mr-2 h-4 w-4" />
                Explore Systems
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10"
              asChild
            >
              <Link to="/about">
                <Cpu className="mr-2 h-4 w-4" />
                Analyze Profile
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Status Bar */}
      <div className="absolute bottom-0 w-full p-4 border-t border-primary/20 bg-background/80 backdrop-blur-md flex justify-between text-xs font-mono text-muted-foreground z-20">
        <div className="flex gap-4">
          <span>STATUS: ONLINE</span>
          <span>NODES: 4000</span>
          <span>LATENCY: 12ms</span>
        </div>
        <div className="hidden md:block">SYSTEM_ID: PK_AI_V1.0</div>
      </div>
    </section>
  );
}
