import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Fog, Color } from "three";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

// --- 3D COMPONENTS ---

function Terrain() {
  const meshRef = useRef<any>(null);
  const { theme } = useTheme();

  // Generate height data for the terrain
  const { positions, colors } = useMemo(() => {
    const width = 50;
    const depth = 50;
    const widthSegments = 64;
    const depthSegments = 64;
    const positions = [];
    const colors = [];

    for (let x = 0; x <= widthSegments; x++) {
      for (let z = 0; z <= depthSegments; z++) {
        const u = x / widthSegments;
        const v = z / depthSegments;
        const xPos = u * width - width / 2;
        const zPos = v * depth - depth / 2;

        // Math to create "mountains" and "valleys" (Simulated Noise)
        const y =
          (Math.sin(xPos * 0.5) + Math.cos(zPos * 0.3)) * 1.5 +
          Math.sin(xPos * 1.5 + zPos * 2.0) * 0.5;

        positions.push(xPos, y, zPos);

        // Color logic: Higher peaks = Lighter/Snow, Valleys = Darker
        // We'll handle coloring via material props for simplicity in wireframe
      }
    }

    return {
      positions: new Float32Array(positions),
      colors: new Float32Array(colors),
    };
  }, []);

  // Animation Loop
  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();

    // Move the terrain towards the camera
    // We actually move the vertices or the mesh position to simulate flow
    // A simple trick: Move mesh Z, reset when it goes too far
    meshRef.current.position.z = (time * 2) % 5;
  });

  // Determine colors based on theme
  const wireframeColor = theme === "dark" ? "#10b981" : "#14532d"; // Emerald (Dark) vs Deep Forest (Light)
  const fogColor = theme === "dark" ? "#022c22" : "#fefce8"; // Dark Pine (Dark) vs Warm Ivory (Light)

  return (
    <>
      {/* Fog to hide the distant edge of the terrain */}
      <fog attach="fog" args={[fogColor, 5, 20]} />

      <points
        ref={meshRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -2, 0]}
      >
        <planeGeometry args={[50, 50, 64, 64]} />
        <meshStandardMaterial
          wireframe
          color={wireframeColor}
          emissive={wireframeColor}
          emissiveIntensity={theme === "dark" ? 0.5 : 0}
          transparent
          opacity={0.8}
        />
        {/* We actually want a wireframe MESH, not points, let's swap to Mesh */}
      </points>

      <mesh
        ref={meshRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -2, -10]}
      >
        {/* Using PlaneGeometry and displacing vertices is complex in vanilla JSX without a custom shader.
             Let's use a simpler "Moving Grid" effect which looks cleaner for "Latent Space".
         */}
        <planeGeometry args={[60, 60, 40, 40]} />
        <meshBasicMaterial
          color={wireframeColor}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
    </>
  );
}

function MovingLandscape() {
  const mesh = useRef<any>();
  const { theme } = useTheme();

  // Theme Colors
  const color = theme === "dark" ? "#34d399" : "#166534"; // Emerald-400 vs Green-800

  useFrame(({ clock }) => {
    if (mesh.current) {
      // Rotate slightly to give a "flying over" feeling
      // mesh.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;

      // Move texture or position logic could go here
      // For a wireframe landscape, we usually displace vertices in a shader.
      // Since we are keeping it "Unprofessional" (Wild), let's just rotate a massive wireframe torus
      mesh.current.rotation.x = clock.getElapsedTime() * 0.15;
      mesh.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <mesh ref={mesh} scale={[2, 2, 2]}>
      <torusKnotGeometry args={[10, 3, 100, 16]} />
      <meshStandardMaterial
        wireframe
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0}
        metalness={1}
      />
    </mesh>
  );
}

// --- MAIN HERO COMPONENT ---

export default function Hero() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-background">
      {/* 3D Scene Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 30], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />

          {/* We switch to the Torus Knot 'Latent Space' visualization because it's more stable 
              and looks like a complex neural topology */}
          <MovingLandscape />
        </Canvas>
      </div>

      {/* Gradient Overlay to ensure text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none" />

      {/* 2D Content Layer */}
      <div className="relative z-20 container h-full flex flex-col justify-center items-center text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 max-w-4xl"
        >
          {/* Tagline */}
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-md">
            <Cpu className="mr-2 h-4 w-4" />
            AI Engineer & Full Stack Architect
          </div>

          {/* Main Title - Glitch Effect Vibe */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
            Architect of the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
              Unseen
            </span>
          </h1>

          <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl font-light tracking-wide">
            Bridging the gap between <strong>Organic Intelligence</strong> and{" "}
            <strong>Silicon Logic</strong>. Designing neural architectures that
            breathe.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              className="h-14 px-8 text-lg rounded-full shadow-[0_0_20px_-5px_var(--primary)] hover:shadow-[0_0_30px_-5px_var(--primary)] transition-all duration-300"
              asChild
            >
              <Link to="/industrial-projects">
                View Intelligence <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="h-14 px-8 text-lg rounded-full border-primary/20 hover:bg-primary/10 backdrop-blur-sm"
              asChild
            >
              <Link to="/about">
                <Code2 className="mr-2 h-5 w-5" /> Analyze Core
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
    </section>
  );
}
