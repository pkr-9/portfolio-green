// src/components/specific/about/Education.tsx
import { education } from "@/data/portfolio-data";
import { GraduationCap } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Education() {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 rounded-lg bg-primary/10 text-primary">
          <GraduationCap className="w-6 h-6" />
        </div>
        <h2 className="text-3xl font-bold">Academic Core</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu) => (
          <Card
            key={edu.id}
            className="group bg-background/40 backdrop-blur-md border-white/10 hover:border-primary/40 transition-all hover:-translate-y-1"
          >
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <div className="p-2 rounded-md bg-secondary text-primary">
                  <edu.icon className="w-5 h-5" />
                </div>
                <Badge variant="outline" className="text-xs">
                  {edu.period}
                </Badge>
              </div>
              <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                {edu.degree}
              </CardTitle>
              <p className="text-sm font-medium text-muted-foreground">
                {edu.institution}
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/80 border-t border-border/50 pt-4 mt-2">
                {edu.details}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
