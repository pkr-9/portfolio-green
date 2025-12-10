import { Link } from "react-router-dom";
import {
  ArrowRight,
  Github,
  ExternalLink,
  Code2,
  Database,
  Layout,
  Server,
  Terminal,
  Cpu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  siteConfig,
  personalProjects,
  industrialProjects,
} from "@/data/portfolio-data";
import Hero3D from "@/components/layout/Hero3D";
import TechEcosystem from "@/components/specific/TechEcosystem";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-background">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100vh] flex items-center pt-20 pb-10">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            <Badge
              variant="outline"
              className="px-4 py-1.5 text-sm font-medium border-primary/20 text-primary bg-primary/5"
            >
              AI Engineer & Full Stack Developer
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Cultivating <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
                Digital Intelligence
              </span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed max-w-lg">
              Bridging the gap between organic complexity and silicon logic. I
              build scalable web systems rooted in neural architecture.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="h-12 px-8 rounded-full shadow-lg shadow-primary/20"
                asChild
              >
                <Link to="/industrial-projects">
                  View Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 rounded-full"
                asChild
              >
                <Link to="/about">About Me</Link>
              </Button>
            </div>
          </div>

          {/* Right: The Neural Terrarium */}
          <div className="relative h-full min-h-[500px] w-full flex items-center justify-center animate-in fade-in zoom-in duration-1000 delay-200">
            {/* Optional glow behind the 3D object */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] -z-10" />
            <Hero3D />
          </div>
        </div>
      </section>

      {/* 2. Skills & Tech Stack */}
      <TechEcosystem />

      {/* 3. Featured Work */}
      <section className="py-24 container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Selected industrial solutions and personal experiments.
            </p>
          </div>
          <Button variant="ghost" className="group" asChild>
            <Link to="/personal-projects">
              View All Projects{" "}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {/* Main Feature */}
          <Card className="md:col-span-2 row-span-1 group overflow-hidden relative border-muted/20 bg-card">
            <div className="absolute inset-0 z-0">
              <img
                src={personalProjects[0].imageUrl}
                alt="BookNest"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
              <Badge className="w-fit mb-3 bg-primary text-primary-foreground hover:bg-primary">
                Featured Personal
              </Badge>
              <h3 className="text-2xl font-bold mb-2">
                {personalProjects[0].title}
              </h3>
              <p className="text-gray-200 mb-4 line-clamp-2">
                {personalProjects[0].description}
              </p>
              <div className="flex gap-3">
                <Button size="sm" variant="secondary" asChild>
                  <a
                    href={personalProjects[0].demoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-transparent text-white border-white/30 hover:bg-white/10"
                  asChild
                >
                  <a
                    href={personalProjects[0].repoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> Code
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          {/* Secondary Feature */}
          <Card className="md:col-span-1 row-span-1 flex flex-col justify-between hover:border-primary/50 transition-colors bg-card">
            <CardHeader>
              <Badge
                variant="outline"
                className="w-fit mb-2 text-primary border-primary/30"
              >
                Industrial AI
              </Badge>
              <CardTitle className="text-xl">
                {industrialProjects[0].title}
              </CardTitle>
              <CardDescription className="line-clamp-3">
                {industrialProjects[0].description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-6">
                {industrialProjects[0].techStack.slice(0, 3).map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs">
                    {t}
                  </Badge>
                ))}
              </div>
              <Button className="w-full" variant="outline" asChild>
                <Link to="/industrial-projects">View Case Study</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Third Feature */}
          <Card className="md:col-span-1 row-span-1 flex flex-col justify-between hover:border-primary/50 transition-colors bg-card">
            <div className="h-48 overflow-hidden bg-muted relative border-b border-border/50">
              <img
                src={personalProjects[1].imageUrl}
                alt="Finance Tracker"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-bold text-lg mb-2">
                {personalProjects[1].title}
              </h3>
              <p className="text-sm text-muted-foreground flex-1 line-clamp-2">
                {personalProjects[1].description}
              </p>
              <div className="flex gap-2 mt-4">
                <Button
                  size="sm"
                  variant="ghost"
                  className="w-full border border-border"
                  asChild
                >
                  <a
                    href={personalProjects[1].demoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <div className="md:col-span-2 row-span-1 bg-primary rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

            <div className="space-y-4 relative z-10 text-center md:text-left text-primary-foreground">
              <h3 className="text-2xl md:text-3xl font-bold">
                Collaborate on AI?
              </h3>
              <p className="text-primary-foreground/90 max-w-md">
                Building the next generation of intelligent systems.
              </p>
            </div>
            <Button
              size="lg"
              variant="secondary"
              className="whitespace-nowrap z-10 shadow-xl"
              asChild
            >
              <Link to="/contact">
                Start Project <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
