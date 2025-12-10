// src/components/specific/about/Certifications.tsx
import { certifications } from "@/data/portfolio-data";
import { Award, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Certifications() {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 rounded-lg bg-primary/10 text-primary">
          <Award className="w-6 h-6" />
        </div>
        <h2 className="text-3xl font-bold">Certifications</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert) => (
          <Card
            key={cert.id}
            className="p-4 flex items-center gap-4 bg-background/30 border-white/5 hover:bg-background/50 hover:border-primary/20 transition-all cursor-default"
          >
            <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-primary shrink-0">
              <cert.icon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <h4
                className="text-sm font-bold truncate pr-2"
                title={cert.title}
              >
                {cert.title}
              </h4>
              <p className="text-xs text-muted-foreground">
                {cert.issuer} • {cert.date}
              </p>
            </div>
            {/* Optional external link icon if you add URLs later */}
            <ExternalLink className="w-3 h-3 text-muted-foreground/50" />
          </Card>
        ))}
      </div>
    </section>
  );
}
