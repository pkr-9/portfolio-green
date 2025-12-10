// src/components/specific/about/Achievements.tsx
import { achievements } from "@/data/portfolio-data";
import { Medal } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Achievements() {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 rounded-lg bg-primary/10 text-primary">
          <Medal className="w-6 h-6" />
        </div>
        <h2 className="text-3xl font-bold">Achievements</h2>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {achievements.map((item) => (
          <Card
            key={item.id}
            className="p-6 relative overflow-hidden bg-gradient-to-r from-background/40 to-background/20 border-white/10 hover:border-primary/30 transition-all group"
          >
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
              <item.icon className="w-24 h-24 -rotate-12" />
            </div>

            <div className="relative z-10 flex gap-4 items-start">
              <div className="mt-1 p-2 rounded-lg bg-yellow-500/10 text-yellow-500 ring-1 ring-yellow-500/30">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2 font-mono">
                  <span>{item.issuer}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>
                <p className="text-sm text-foreground/80 max-w-2xl">
                  {item.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
