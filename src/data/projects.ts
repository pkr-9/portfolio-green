export interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    imageUrl?: string;
    demoUrl?: string;
    repoUrl?: string;
    category: "personal" | "industrial";
}

export const industrialProjects: Project[] = [
    {
        id: "ind-1",
        title: "Enterprise Resource Planning System",
        description: "A comprehensive ERP solution designed for manufacturing, featuring real-time inventory tracking and supply chain analytics.",
        techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
        imageUrl: "/images/erp-dashboard.jpg", // Place placeholder in public/images
        demoUrl: "#",
        category: "industrial",
    },
    {
        id: "ind-2",
        title: "FinTech Analytics Dashboard",
        description: "High-performance dashboard for visualizing financial market data with sub-second latency updates.",
        techStack: ["Next.js", "D3.js", "AWS", "Redis"],
        imageUrl: "/images/fintech.jpg",
        category: "industrial",
    }
];

export const personalProjects: Project[] = [
    {
        id: "pers-1",
        title: "Personal Portfolio V1",
        description: "My previous portfolio website showcasing early frontend experiments.",
        techStack: ["HTML", "SCSS", "JavaScript"],
        repoUrl: "https://github.com/user/repo",
        category: "personal",
    },
    // Add more personal projects here
];