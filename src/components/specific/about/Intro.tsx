// src/components/specific/about/Intro.tsx
import { motion } from "framer-motion";
import { siteConfig } from "@/data/portfolio-data";
import { Download, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Intro() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center"
    >
      {/* Left: Bio Text */}
      <div className="lg:col-span-3 space-y-6">
        <Badge
          variant="outline"
          className="text-primary border-primary/20 bg-primary/5 px-4 py-1"
        >
          Identity Matrix
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Hello, I'm <span className="text-primary">{siteConfig.name}</span>
        </h1>
        <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
          <p>
            I am a <strong>Full Stack AI Engineer</strong> situated at the
            intersection of complex algorithms and intuitive user interfaces.
          </p>
          <p>
            With a background in <strong>Computer Applications</strong> and a
            passion for <strong>Neural Architectures</strong>, I build systems
            that don't just process data—they understand it. My work spans from
            optimizing high-throughput SQL databases to fine-tuning LLMs for
            domain-specific tasks.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          <Button
            className="gap-2 rounded-full"
            onClick={() => window.open("/assets/pdfs/resume.pdf", "_blank")}
          >
            <Download className="w-4 h-4" /> Download Resume
          </Button>

          <div className="flex items-center gap-4 text-sm text-muted-foreground px-4">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" /> Pune, India
            </span>
            <span className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary" /> Remote / Hybrid
            </span>
          </div>
        </div>
      </div>

      {/* Right: "Holographic" Profile Card */}
      <div className="lg:col-span-2 flex justify-center">
        <div className="relative w-72 h-80 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-md shadow-2xl group">
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:bg-primary/0 transition-all duration-500" />

          {/* Decorative Corners */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/50 rounded-tl-lg" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/50 rounded-br-lg" />

          {/* Image Placeholder */}
          <div className="absolute inset-4 rounded-xl overflow-hidden bg-black/50">
            {/* Replace with your actual image path */}
            <img
              src="/assets/images/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
              onError={(e) => {
                e.currentTarget.src = "https://github.com/shadcn.png";
              }} // Fallback
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
