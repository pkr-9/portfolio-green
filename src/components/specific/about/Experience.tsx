// src/components/specific/about/Experience.tsx
import { motion } from "framer-motion";
import { experience } from "@/data/portfolio-data";
import { Briefcase } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 rounded-lg bg-primary/10 text-primary">
          <Briefcase className="w-6 h-6" />
        </div>
        <h2 className="text-3xl font-bold">Professional History</h2>
      </div>

      <div className="relative border-l-2 border-primary/20 ml-4 space-y-12 pb-4">
        {experience.map((job, index) => (
          <motion.div
            key={job.id}
            className="ml-8 relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            {/* Timeline Node */}
            <div className="absolute -left-[43px] top-0 h-6 w-6 rounded-full border-4 border-background bg-primary shadow-[0_0_15px_var(--primary)]" />

            <Card className="bg-background/40 backdrop-blur-md border-white/10 hover:border-primary/30 transition-colors">
              <CardHeader className="pb-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl text-primary">
                      {job.role}
                    </CardTitle>
                    <p className="text-base font-medium text-foreground/80">
                      {job.company}
                    </p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="w-fit font-mono text-xs"
                  >
                    {job.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mt-2">
                  {job.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-muted-foreground text-sm flex items-start gap-2"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
