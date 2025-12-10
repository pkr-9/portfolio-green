import { useState, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  easeOut,
} from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { personalProjects } from "@/data/portfolio-data";

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger effect for cards
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

// --- INDIVIDUAL PROJECT CARD ---
function ProjectCard({ project }: { project: (typeof personalProjects)[0] }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      variants={cardVariants}
      className="group relative rounded-2xl bg-card border border-white/10 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Effect Layer */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(74, 222, 128, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Content Container */}
      <div className="flex flex-col h-full relative z-10">
        {/* Image Area */}
        <div className="relative h-48 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" />
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Floating Category Badge */}
          <div className="absolute top-3 right-3 z-20">
            <Badge
              variant="secondary"
              className="backdrop-blur-md bg-background/50 border-white/10 text-xs"
            >
              {project.category === "personal" ? "Personal" : "Industrial"}
            </Badge>
          </div>
        </div>

        {/* Text Area */}
        <div className="flex flex-col flex-1 p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-2 mt-auto pt-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold rounded bg-primary/5 text-primary border border-primary/20"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-1 text-[10px] text-muted-foreground">
                +more
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 mt-auto">
            {project.demoUrl && (
              <Button
                size="sm"
                className="flex-1 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                asChild
              >
                <a href={project.demoUrl} target="_blank" rel="noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" /> Demo
                </a>
              </Button>
            )}
            {project.repoUrl && (
              <Button
                size="sm"
                variant="outline"
                className="flex-1 border-white/10 hover:border-primary/50"
                asChild
              >
                <a href={project.repoUrl} target="_blank" rel="noreferrer">
                  <Github className="w-4 h-4 mr-2" /> Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// --- MAIN GRID COMPONENT ---
export default function ProjectShowcase() {
  return (
    <div className="container py-24">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 space-y-4">
        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary backdrop-blur-md">
          <Code2 className="mr-2 h-4 w-4" />
          Innovation Lab
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Personal{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">
            Projects
          </span>
        </h2>
        <p className="text-muted-foreground max-w-2xl text-lg">
          A collection of experiments, side-projects, and open-source
          contributions. Exploring the boundaries of AI, Web, and System Design.
        </p>
      </div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {personalProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </div>
  );
}
