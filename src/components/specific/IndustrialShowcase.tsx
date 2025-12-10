import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Lock,
  Cpu,
  ShieldCheck,
  BarChart3,
  Layers,
  ChevronDown,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { industrialProjects } from "@/data/portfolio-data";

function IndustrialCard({
  project,
}: {
  project: (typeof industrialProjects)[0];
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLocked = !project.flag;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card
        className={`
        group relative overflow-hidden border border-white/10 bg-background/40 backdrop-blur-md transition-all duration-500
        ${
          isLocked
            ? "grayscale-[0.5]"
            : "hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
        }
      `}
      >
        {/* 1. Image Section with Flag Logic */}
        <div className="relative h-64 w-full overflow-hidden">
          <div
            className={`absolute inset-0 z-10 bg-gradient-to-t from-background via-background/20 to-transparent`}
          />

          <img
            src={project.imageUrl}
            alt={project.title}
            className={`
              h-full w-full object-cover transition-transform duration-700
              ${isLocked ? "blur-md scale-105" : "group-hover:scale-105"}
            `}
          />

          {/* Locked Overlay */}
          {isLocked && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm">
              <div className="rounded-full bg-background/20 p-4 backdrop-blur-md border border-white/10">
                <Lock className="h-8 w-8 text-white/70" />
              </div>
              <span className="mt-2 text-sm font-medium text-white/80 uppercase tracking-widest">
                Confidential
              </span>
            </div>
          )}

          {/* Floating Tech Badges (Visible only if unlocked) */}
          {!isLocked && (
            <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
              {project.techStack.slice(0, 3).map((tech, i) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  key={tech}
                >
                  <Badge
                    variant="secondary"
                    className="backdrop-blur-md bg-background/60 border-white/10 hover:bg-primary/20"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* 2. Content Section */}
        <div className="relative p-6 md:p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="flex items-center gap-2 text-primary mb-1 text-xs font-bold uppercase tracking-wider">
                <Cpu className="h-3 w-3" />
                {project.company}
              </div>
              <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
            </div>
            {!isLocked && (
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full border border-white/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                asChild
              >
                <a href={project.caseStudyUrl}>
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </Button>
            )}
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Expandable Details Section */}
          <div className="border-t border-white/5 pt-4">
            <button
              onClick={() => !isLocked && setIsExpanded(!isExpanded)}
              disabled={isLocked}
              className={`
                flex items-center gap-2 text-sm font-medium transition-colors
                ${
                  isLocked
                    ? "text-muted-foreground/50 cursor-not-allowed"
                    : "text-foreground hover:text-primary"
                }
              `}
            >
              <Layers className="h-4 w-4" />
              Technical Deep Dive
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isExpanded && !isLocked && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2 p-3 rounded-lg bg-red-500/5 border border-red-500/10">
                      <div className="flex items-center gap-2 text-red-400 font-semibold">
                        <ShieldCheck className="h-4 w-4" /> Challenges
                      </div>
                      <p className="text-muted-foreground">
                        {project.challenges}
                      </p>
                    </div>
                    <div className="space-y-2 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                      <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                        <BarChart3 className="h-4 w-4" /> Impact
                      </div>
                      <p className="text-muted-foreground">{project.outcome}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Animated Bottom Border */}
        {!isLocked && (
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-700 group-hover:w-full" />
        )}
      </Card>
    </motion.div>
  );
}

// --- MAIN PAGE LAYOUT ---
export default function IndustrialShowcase() {
  return (
    <section className="container py-24 min-h-screen">
      {/* Header */}
      <div className="mb-16 space-y-4 max-w-3xl">
        <Badge
          variant="outline"
          className="text-primary border-primary/30 bg-primary/5 px-4 py-1 mb-2"
        >
          Enterprise Solutions
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Industrial{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
            Engineering
          </span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          High-performance systems built for scale. These projects represent
          complex problem-solving in real-world production environments.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {industrialProjects.map((project) => (
          <IndustrialCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
