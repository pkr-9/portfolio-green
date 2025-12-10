import { Trophy, Star, GitPullRequest, Briefcase, GraduationCap, Award, Code2, Database, Layout, Server } from "lucide-react";

export const siteConfig = {
    name: "Santosh Gupta",
    title: "Full Stack Developer",
    tagline: "Building scalable solutions with Java, Spring Boot, and React.",
    email: "pappukumar9999@yahoo.com",
    socials: {
        github: "https://github.com/pkr-9",
        linkedin: "https://in.linkedin.com/in/p-kr9",
    }
};

export const industrialProjects = [
    {
        id: "ind-1",
        title: "Automated Tender Ingestion Engine",
        company: "Ashwamedh Motors Pvt. Ltd.",
        description: "A high-throughput ETL pipeline designed to scrape, parse, and normalize unstructred tender data from multiple government portals.",
        challenges: "Handling CAPTCHA, dynamic IP blocking, and parsing non-standard PDF formats at scale.",
        outcome: "Reduced manual data entry by 95% and increased tender discovery rate by 3x.",
        techStack: ["Python", "Selenium", "OCR (Tesseract)", "FastAPI", "PostgreSQL", "Redis"],
        imageUrl: "https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=1093&auto=format&fit=crop", // Placeholder
        caseStudyUrl: "/industrial/tender-engine",
        flag: true, // 1 - Visible
        category: "industrial",
    },
    {
        id: "ind-2",
        title: "Enterprise RBAC & Auth System",
        company: "Ashwamedh Motors Pvt. Ltd.",
        description: "A centralized identity management microservice implementing hierarchical role-based access control for multi-tenant architecture.",
        challenges: "Ensuring sub-millisecond latency for permission checks and handling nested role inheritance.",
        outcome: "Secured 4 internal tools with a unified SSO login and granular permission sets.",
        techStack: ["Node.js", "NestJS", "MongoDB", "Redis", "JWT", "Docker"],
        imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop",
        caseStudyUrl: "/industrial/rbac-system",
        flag: true, // 1 - Visible
        category: "industrial",
    },
    {
        id: "ind-3",
        title: "Predictive Supply Chain Model",
        company: "Stealth Startup",
        description: "AI-driven inventory forecasting model using historical sales data to optimize warehouse stock levels.",
        challenges: "Cleaning noisy time-series data and accounting for seasonal anomalies.",
        outcome: "Project in active development phase.",
        techStack: ["Python", "TensorFlow", "Pandas", "AWS SageMaker"],
        imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
        caseStudyUrl: "#",
        flag: false, // 0 - Blurred/Restricted
        category: "industrial",
    },
    {
        id: "ind-4",
        title: "FinTech Transaction Ledger",
        company: "FinCorp Solutions",
        description: "Immutable ledger system for recording high-volume financial transactions with audit trails.",
        challenges: "Ensuring ACID compliance across distributed database shards.",
        outcome: "Processed 10k+ transactions/sec with zero data loss.",
        techStack: ["Java", "Spring Boot", "Kafka", "Cassandra", "Kubernetes"],
        imageUrl: "https://plus.unsplash.com/premium_photo-1664478157873-50d4963c1d11?q=80&w=869&auto=format&fit=crop",
        caseStudyUrl: "/industrial/ledger",
        flag: true, // 1 - Visible
        category: "industrial",
    }
];

export const personalProjects = [
    {
        id: "pers-1",
        title: "BookNest Marketplace",
        description: "A specialized community-driven platform for buying, selling, and managing books with real-time inventory tracking.",
        techStack: ["MERN Stack", "Redux", "Razorpay", "JWT"],
        repoUrl: "https://github.com/pkr-9",
        demoUrl: "https://booknest-master.vercel.app/",
        imageUrl: "/assets/images/booknest-1.png",
        category: "personal",
    },
    {
        id: "pers-2",
        title: "Personal Finance Tracker",
        description: "Comprehensive dashboard to track income, expenses, and savings goals with visual analytics and export features.",
        techStack: ["React", "Spring Boot", "MySQL", "Chart.js"],
        repoUrl: "https://github.com/pkr-9/project-collection",
        demoUrl: "https://finance-tracker-react-omega.vercel.app/",
        imageUrl: "/assets/images/finance.png",
        category: "personal",
    },
    {
        id: "pers-3",
        title: "NeuroGen Image Synthesizer",
        description: "Generative AI tool that creates high-fidelity textures from text prompts using Stable Diffusion pipelines.",
        techStack: ["Python", "PyTorch", "React", "FastAPI"],
        repoUrl: "#",
        demoUrl: "#",
        imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
        category: "personal",
    },
    {
        id: "pers-4",
        title: "DocuMind - RAG Assistant",
        description: "Intelligent document chat bot that uses Retrieval-Augmented Generation to answer questions from uploaded PDFs.",
        techStack: ["LangChain", "OpenAI API", "Pinecone", "Next.js"],
        repoUrl: "#",
        demoUrl: "#",
        imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop",
        category: "personal",
    },
    {
        id: "pers-5",
        title: "Sentinal - Fraud Detection",
        description: "Real-time anomaly detection system for financial transactions using isolation forests and autoencoders.",
        techStack: ["TensorFlow", "Kafka", "Docker", "Grafana"],
        repoUrl: "#",
        demoUrl: "#",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        category: "personal",
    },
    {
        id: "pers-6",
        title: "EcoSync IoT Dashboard",
        description: "Smart home energy monitoring platform integrating MQTT data streams for real-time consumption visualization.",
        techStack: ["Vue.js", "Node.js", "InfluxDB", "MQTT"],
        repoUrl: "#",
        demoUrl: "#",
        imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=1000&auto=format&fit=crop",
        category: "personal",
    },
];

export const experience = [
    {
        id: 1,
        role: "FullStack – Software Developer Intern",
        company: "Ashwamedh Motors Pvt. Ltd.",
        period: "Dec 2024 - Apr 2025",
        description: [
            "Automated tender data ingestion pipeline with Python and REST APIs.",
            "Built secure role-based access control (RBAC) system with hierarchical role enforcement.",
            "Practiced secure coding principles, optimized SQL queries, and applied unit testing using JUnit.",
            "Participated in Agile sprints and collaborated with QA, BA, and product stakeholders."
        ],
        icon: Briefcase,
    }
];

export const education = [
    {
        id: 1,
        degree: "Master of Computer Applications (MCA)",
        institution: "IMED | Bharati Vidyapeeth Deemed University",
        period: "2023 - 2025",
        details: "CGPA: 8.2/10. Specialized in Machine Learning and Full Stack Development.",
        icon: GraduationCap,
    },
    {
        id: 2,
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "Maulana Mazharul Haque Arabic and Persian University",
        period: "2019 - 2022",
        details: "Percentage: 74%. Strong foundation in programming and software development.",
        icon: GraduationCap,
    }
];

export const certifications = [
    {
        id: 1,
        title: "Oracle Cloud Infrastructure (OCI) Foundations Associate",
        issuer: "Oracle",
        date: "2024",
        icon: Award,
    },
    {
        id: 2,
        title: "MongoDB Developers Toolkit",
        issuer: "GeeksforGeeks",
        date: "2024",
        icon: Database,
    },
    {
        id: 3,
        title: "Cloud Computing",
        issuer: "NPTEL",
        date: "2024",
        icon: Server,
    }
];

export const achievements = [
    {
        id: 1,
        title: "Smart India Hackathon Finalist",
        issuer: "Govt. of India",
        date: "2023",
        description: "Developed an AI-driven traffic management system for smart cities.",
        icon: Trophy,
    },
    {
        id: 2,
        title: "Top Rated Freelancer",
        issuer: "Upwork",
        date: "2024",
        description: "Maintained a 100% Job Success Score delivering React & Node.js solutions.",
        icon: Star,
    },
    {
        id: 3,
        title: "Open Source Contributor",
        issuer: "LangChain",
        date: "2024",
        description: "Contributed documentation and bug fixes for the vector store integrations.",
        icon: GitPullRequest,
    }
];