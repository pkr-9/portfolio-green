import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Code2,
  Heart,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/portfolio-data";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-border/40 bg-background/50 backdrop-blur-xl overflow-hidden pt-16 pb-8">
      {/* Background Decor - Subtle Neural Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[-20%] left-[20%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[20%] w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[80px]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        {/* TOP SECTION: CALL TO ACTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Let's build the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
                Future of AI.
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Open for full-stack development, AI engineering roles, and
              collaborative research opportunities.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
            <Button
              size="lg"
              className="h-14 px-8 text-base rounded-full shadow-[0_0_20px_-5px_var(--primary)] hover:scale-105 transition-transform"
              asChild
            >
              <a href={`mailto:${siteConfig.email}`}>
                Start a Conversation <ArrowUpRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-14 px-8 text-base rounded-full border-primary/20 hover:bg-primary/5"
              asChild
            >
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github className="mr-2 h-5 w-5" /> GitHub
              </a>
            </Button>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-12" />

        {/* MIDDLE SECTION: LINKS & INFO */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="md:col-span-2 space-y-4">
              <Logo /> {/* Use the component here */}
              <p className="text-muted-foreground max-w-xs text-sm leading-relaxed mt-4">
                Bridging organic complexity with silicon logic. Building
                scalable, intelligent systems for the modern web.
              </p>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-4">
            <h3 className="font-bold text-foreground">Explore</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Terminal className="w-3 h-3" /> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Terminal className="w-3 h-3" /> About Me
                </Link>
              </li>
              <li>
                <Link
                  to="/industrial-projects"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Terminal className="w-3 h-3" /> Industrial Work
                </Link>
              </li>
              <li>
                <Link
                  to="/personal-projects"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Terminal className="w-3 h-3" /> Personal Lab
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div className="space-y-4">
            <h3 className="font-bold text-foreground">Connect</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" /> Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION: COPYRIGHT */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/40 text-xs text-muted-foreground">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 mt-2 md:mt-0">
            Engineered using React & Neural Logic.
          </p>
        </div>
      </div>
    </footer>
  );
}
