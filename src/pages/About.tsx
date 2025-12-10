import { motion } from "framer-motion";
import Intro from "@/components/specific/about/Intro";
import Experience from "@/components/specific/about/Experience";
import Education from "@/components/specific/about/Education";
import Certifications from "@/components/specific/about/Certifications";
import Achievements from "@/components/specific/about/Achievements";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <div className="container relative z-10 py-24 space-y-24">
      {/* 1. Introduction & Bio */}
      <Intro />

      <Separator className="bg-border/50" />

      {/* 2. Main Career Timeline (Full Width) */}
      <Experience />

      {/* 3. Education & Achievements (Side by Side) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Education />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Achievements />
        </motion.div>
      </div>

      {/* 4. Certifications (Full Width) */}
      <Certifications />
    </div>
  );
}
