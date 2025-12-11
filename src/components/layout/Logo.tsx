import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      to="/"
      className={cn("group flex items-center gap-3 select-none", className)}
      aria-label="SG Engineered Home"
    >
      {/* Abstract Icon: 'The Digital Sapling' */}
      <div className="relative flex h-10 w-10 items-center justify-center">
        {/* Glow Effect behind the icon */}
        <div className="absolute inset-0 bg-primary/20 blur-md rounded-full scale-0 transition-transform duration-500 group-hover:scale-100" />

        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 text-primary transition-transform duration-500 group-hover:-translate-y-0.5"
        >
          {/* Central Stem (Circuit Path) */}
          <path
            d="M16 28V16"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Left Branch */}
          <path
            d="M16 16L9 10"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Right Branch */}
          <path
            d="M16 16L23 10"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Nodes (Leaves/Data Points) */}
          <circle cx="9" cy="10" r="2.5" fill="currentColor" />
          <circle cx="23" cy="10" r="2.5" fill="currentColor" />
          <circle cx="16" cy="28" r="2.5" fill="currentColor" />

          {/* Central Core Node (Hollow) */}
          <circle
            cx="16"
            cy="16"
            r="3"
            fill="var(--background)"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center leading-none">
        <span className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
          SG
        </span>
        <span className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-muted-foreground/80 group-hover:text-primary/80 transition-colors">
          Engineered
        </span>
      </div>
    </Link>
  );
}
