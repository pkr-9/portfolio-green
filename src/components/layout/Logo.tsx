import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      to="/"
      className={cn("group flex items-center gap-2 select-none", className)}
      aria-label="SG Engineered Home"
    >
      {/* Optional: Abstract Icon (Neural Node) */}
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition-all duration-500 group-hover:bg-primary/20 group-hover:rotate-12">
        <div className="absolute inset-0 rounded-xl border border-primary/20" />
        {/* Simple geometric shape representing structure + code */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary transition-transform duration-500 group-hover:scale-110"
        >
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* The Two-Row Text Logo */}
      <div className="flex flex-col justify-center leading-none">
        {/* Row 1: SG */}
        <span className="text-2xl font-black tracking-tighter text-foreground transition-colors group-hover:text-primary/90">
          SG
        </span>

        {/* Row 2: Engineered */}
        <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-primary">
          Engineered
        </span>
      </div>
    </Link>
  );
}
