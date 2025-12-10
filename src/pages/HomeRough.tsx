// mixed design ecosystem-----------------------------------------
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Github,
//   Code2,
//   Database,
//   Layout,
//   Server,
//   Terminal,
//   Cpu,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
//   siteConfig,
//   personalProjects,
//   industrialProjects,
// } from "@/data/portfolio-data";
// import Hero3D from "@/components/layout/Hero3D";

// export default function Home() {
//   return (
//     <div className="flex flex-col w-full overflow-hidden">
//       {/* 1. UNPROFESSIONAL HERO SECTION (3D Terrarium) */}
//       <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
//         {/* 1. The 3D Background (Now Full Screen) */}
//         <Hero3D />

//         {/* 2. Gradient Overlay for Readability */}
//         <div className="absolute inset-0 bg-transparent backdrop-blur-[2px] z-10 pointer-events-none" />

//         {/* 3. Text Content (Centered & Above) */}
//         <div className="container relative z-20 text-center space-y-6 pointer-events-auto">
//           <Badge
//             variant="outline"
//             className="px-4 py-1.5 backdrop-blur-md bg-background/40 border-primary/40 text-primary"
//           >
//             v2.0 // Neural Ecology
//           </Badge>

//           <h1 className="text-6xl md:text-8xl font-black tracking-tighter drop-shadow-2xl">
//             ENGINEERING <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
//               INTELLIGENCE
//             </span>
//           </h1>

//           {/* ... Buttons ... */}
//         </div>
//       </section>

//       {/* 2. Skills Marquee / Grid Section */}
//       <section className="py-24 bg-muted/30 border-y border-border/50 relative">
//         <div className="container">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold mb-4">The Toolkit</h2>
//             <p className="text-muted-foreground">
//               Cultivated technologies for modern growth.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
//             {[
//               { name: "Java", icon: <Cpu /> },
//               { name: "Spring Boot", icon: <Server /> },
//               { name: "React", icon: <Layout /> },
//               { name: "TypeScript", icon: <Code2 /> },
//               { name: "PostgreSQL", icon: <Database /> },
//               { name: "MongoDB", icon: <Database /> },
//               { name: "Docker", icon: <Terminal /> },
//               { name: "AWS", icon: <Server /> },
//               { name: "Next.js", icon: <Layout /> },
//               { name: "Tailwind", icon: <Layout /> },
//               { name: "Git", icon: <Terminal /> },
//               { name: "Python", icon: <Code2 /> },
//             ].map((tech, idx) => (
//               <div
//                 key={idx}
//                 className="group relative flex flex-col items-center justify-center p-6 bg-background/50 hover:bg-background rounded-2xl border border-border/50 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>
//                 <div className="relative z-10 mb-3 text-muted-foreground group-hover:text-primary transition-colors scale-110">
//                   {tech.icon}
//                 </div>
//                 <span className="relative z-10 font-medium text-sm">
//                   {tech.name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 3. Featured Work - Bento Grid Layout (Re-used from previous plan) */}
//       <section className="py-32 container">
//         <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4 border-b border-border/40 pb-6">
//           <div>
//             <h2 className="text-4xl font-bold mb-4">Selected Harvest</h2>
//             <p className="text-muted-foreground max-w-xl text-lg">
//               Industrial grade solutions and personal experiments.
//             </p>
//           </div>
//           <Button variant="link" className="group text-lg" asChild>
//             <Link to="/personal-projects">
//               View All Work{" "}
//               <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </Button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[450px]">
//           {/* Main Feature - Personal Project */}
//           <Card className="md:col-span-2 row-span-1 group overflow-hidden relative border-0 shadow-2xl bg-black">
//             <div className="absolute inset-0 z-0">
//               <img
//                 src={personalProjects[0].imageUrl}
//                 alt="BookNest"
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-60"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
//             </div>
//             <div className="relative z-10 h-full flex flex-col justify-end p-10 text-white">
//               <Badge className="w-fit mb-4 bg-primary text-primary-foreground border-none px-3 py-1 text-sm">
//                 Featured
//               </Badge>
//               <h3 className="text-4xl font-bold mb-3">
//                 {personalProjects[0].title}
//               </h3>
//               <p className="text-gray-300 mb-6 text-lg max-w-lg line-clamp-2">
//                 {personalProjects[0].description}
//               </p>
//               <div className="flex gap-4">
//                 <Button
//                   size="lg"
//                   className="bg-white text-black hover:bg-gray-200"
//                   asChild
//                 >
//                   <a
//                     href={personalProjects[0].demoUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     View Live
//                   </a>
//                 </Button>
//               </div>
//             </div>
//           </Card>

//           {/* Secondary Feature - Industrial */}
//           <Card className="md:col-span-1 row-span-1 flex flex-col justify-between hover:border-primary/50 transition-all duration-300 bg-muted/20 border-border/60 hover:shadow-xl hover:-translate-y-1">
//             <CardHeader>
//               <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
//                 <Server className="w-6 h-6" />
//               </div>
//               <Badge
//                 variant="outline"
//                 className="w-fit mb-2 border-primary/20 text-primary"
//               >
//                 Industrial
//               </Badge>
//               <CardTitle className="text-2xl">
//                 {industrialProjects[0].title}
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <CardDescription className="line-clamp-4 mb-6 text-base leading-relaxed">
//                 {industrialProjects[0].description}
//               </CardDescription>
//               <Button className="w-full" variant="secondary" asChild>
//                 <Link to="/industrial-projects">Read Case Study</Link>
//               </Button>
//             </CardContent>
//           </Card>

//           {/* Third Feature - Personal */}
//           <Card className="md:col-span-1 row-span-1 flex flex-col border-border/60 overflow-hidden hover:shadow-xl transition-all duration-300 group">
//             <div className="h-1/2 overflow-hidden bg-muted relative">
//               <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
//               <img
//                 src={personalProjects[1].imageUrl}
//                 alt="Finance Tracker"
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//             </div>
//             <div className="p-8 flex-1 flex flex-col bg-card">
//               <h3 className="font-bold text-xl mb-2">
//                 {personalProjects[1].title}
//               </h3>
//               <p className="text-muted-foreground flex-1 line-clamp-3">
//                 {personalProjects[1].description}
//               </p>
//               <div className="flex gap-2 mt-6">
//                 <Button variant="outline" className="w-full" asChild>
//                   <a
//                     href={personalProjects[1].demoUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     Live Demo
//                   </a>
//                 </Button>
//               </div>
//             </div>
//           </Card>

//           {/* Call to Action Block */}
//           <div className="md:col-span-2 row-span-1 bg-primary text-primary-foreground rounded-xl p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
//             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
//             <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

//             <div className="space-y-6 relative z-10 text-center md:text-left">
//               <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
//                 Ready to grow?
//               </h3>
//               <p className="text-primary-foreground/80 max-w-lg text-lg">
//                 Whether it's a new product or a system overhaul, I bring the
//                 engineering rigor to make it happen.
//               </p>
//             </div>
//             <Button
//               size="lg"
//               className="h-16 px-10 text-lg bg-background text-foreground hover:bg-background/90 z-10 shadow-xl rounded-full"
//               asChild
//             >
//               <Link to="/contact">Start a Project</Link>
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// 5 --------------------------------------------------
// import SwarmHero from "@/components/home/SwarmHero";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Download,
//   ExternalLink,
//   Github,
//   Terminal,
//   Database,
//   Layout,
//   Server,
//   Cpu,
//   Code2,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
//   siteConfig,
//   personalProjects,
//   industrialProjects,
// } from "@/data/portfolio-data";

// export default function Home() {
//   return (
//     <div className="flex flex-col w-full overflow-hidden">
//       <SwarmHero />
//       {/* 1. Hero Section - Full Height with Background Pattern */}
//       {/* <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 pt-20 pb-32 overflow-hidden">
//         <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
//         <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>

//         <div className="space-y-6 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
//           <Badge variant="secondary" className="px-4 py-2 rounded-full text-sm font-medium border-primary/20 bg-primary/5 text-primary">
//             Available for Hire
//           </Badge>

//           <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
//             Hello, I'm <span className="text-primary">{siteConfig.name}</span>.
//             <br />
//             <span className="text-foreground/80 text-3xl md:text-5xl mt-2 block">{siteConfig.tagline}</span>
//           </h1>

//           <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl leading-relaxed">
//             I craft robust, scalable backend systems with <strong>Spring Boot</strong> and intuitive, high-performance frontends with <strong>React</strong>.
//           </p>

//           <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
//             <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20" asChild>
//               <Link to="/contact">Get in Touch <ArrowRight className="ml-2 h-4 w-4" /></Link>
//             </Button>
//             <Button variant="outline" size="lg" className="h-12 px-8 text-base" asChild>
//               <Link to="/about">More About Me</Link>
//             </Button>
//           </div>

//           <div className="flex items-center justify-center gap-6 text-muted-foreground pt-8">
//             <a href={siteConfig.socials.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Github className="w-6 h-6"/></a>
//             <div className="h-4 w-[1px] bg-border"></div>
//             <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
//             <div className="h-4 w-[1px] bg-border"></div>
//             <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">Email</a>
//           </div>
//         </div>
//       </section> */}

//       {/* 2. Skills Marquee / Grid Section */}
//       <section className="py-20 bg-muted/30 border-y border-border/50">
//         <div className="container">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold mb-4">Tech Stack & Tools</h2>
//             <p className="text-muted-foreground">
//               My weapons of choice for building digital products.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 opacity-90">
//             {[
//               { name: "Java", icon: <Cpu /> },
//               { name: "Spring Boot", icon: <Server /> },
//               { name: "React", icon: <Layout /> },
//               { name: "TypeScript", icon: <Code2 /> },
//               { name: "PostgreSQL", icon: <Database /> },
//               { name: "MongoDB", icon: <Database /> },
//               { name: "Docker", icon: <Terminal /> },
//               { name: "AWS", icon: <Server /> },
//               { name: "Next.js", icon: <Layout /> },
//               { name: "Tailwind", icon: <Layout /> },
//               { name: "Git", icon: <Terminal /> },
//               { name: "Python", icon: <Code2 /> },
//             ].map((tech, idx) => (
//               <div
//                 key={idx}
//                 className="flex flex-col items-center justify-center p-6 bg-background rounded-xl border border-border/50 hover:border-primary/50 hover:shadow-md transition-all group"
//               >
//                 <div className="mb-3 text-muted-foreground group-hover:text-primary transition-colors">
//                   {tech.icon}
//                 </div>
//                 <span className="font-medium text-sm">{tech.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 3. Featured Work - Bento Grid Layout */}
//       <section className="py-24 container">
//         <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Featured Work
//             </h2>
//             <p className="text-muted-foreground max-w-xl">
//               A selection of industrial and personal projects that showcase my
//               abilities in Full Stack Development.
//             </p>
//           </div>
//           <Button variant="ghost" className="group" asChild>
//             <Link to="/personal-projects">
//               View All Projects{" "}
//               <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </Button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
//           {/* Main Feature - Personal Project */}
//           <Card className="md:col-span-2 row-span-1 group overflow-hidden relative border-muted-foreground/10 bg-gradient-to-br from-background to-muted">
//             <div className="absolute inset-0 z-0">
//               {/* Use actual image if available, else fallback */}
//               <img
//                 src={personalProjects[0].imageUrl}
//                 alt="BookNest"
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
//             </div>
//             <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
//               <Badge className="w-fit mb-3 bg-primary text-primary-foreground hover:bg-primary">
//                 Featured Personal
//               </Badge>
//               <h3 className="text-2xl font-bold mb-2">
//                 {personalProjects[0].title}
//               </h3>
//               <p className="text-gray-200 mb-4 line-clamp-2">
//                 {personalProjects[0].description}
//               </p>
//               <div className="flex gap-3">
//                 <Button size="sm" variant="secondary" asChild>
//                   <a
//                     href={personalProjects[0].demoUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <ExternalLink className="mr-2 h-4 w-4" /> Demo
//                   </a>
//                 </Button>
//                 <Button
//                   size="sm"
//                   variant="outline"
//                   className="bg-transparent text-white border-white/30 hover:bg-white/10"
//                   asChild
//                 >
//                   <a
//                     href={personalProjects[0].repoUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <Github className="mr-2 h-4 w-4" /> Code
//                   </a>
//                 </Button>
//               </div>
//             </div>
//           </Card>

//           {/* Secondary Feature - Industrial */}
//           <Card className="md:col-span-1 row-span-1 flex flex-col justify-between hover:border-primary/50 transition-colors">
//             <CardHeader>
//               <Badge variant="outline" className="w-fit mb-2">
//                 Industrial Experience
//               </Badge>
//               <CardTitle className="text-xl">
//                 {industrialProjects[0].title}
//               </CardTitle>
//               <CardDescription className="line-clamp-3">
//                 {industrialProjects[0].description}
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {industrialProjects[0].techStack.slice(0, 3).map((t) => (
//                   <Badge key={t} variant="secondary" className="text-xs">
//                     {t}
//                   </Badge>
//                 ))}
//               </div>
//               <Button className="w-full" variant="outline" asChild>
//                 <Link to="/industrial-projects">View Case Study</Link>
//               </Button>
//             </CardContent>
//           </Card>

//           {/* Third Feature - Personal */}
//           <Card className="md:col-span-1 row-span-1 flex flex-col justify-between hover:border-primary/50 transition-colors">
//             <div className="h-48 overflow-hidden bg-muted relative border-b">
//               <img
//                 src={personalProjects[1].imageUrl}
//                 alt="Finance Tracker"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="p-6 flex-1 flex flex-col">
//               <h3 className="font-bold text-lg mb-2">
//                 {personalProjects[1].title}
//               </h3>
//               <p className="text-sm text-muted-foreground flex-1 line-clamp-2">
//                 {personalProjects[1].description}
//               </p>
//               <div className="flex gap-2 mt-4">
//                 <Button
//                   size="sm"
//                   variant="ghost"
//                   className="w-full border"
//                   asChild
//                 >
//                   <a
//                     href={personalProjects[1].demoUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     Live Demo
//                   </a>
//                 </Button>
//               </div>
//             </div>
//           </Card>

//           {/* Call to Action Block */}
//           <div className="md:col-span-2 row-span-1 bg-primary text-primary-foreground rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
//             <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shine pointer-events-none" />
//             <div className="space-y-4 relative z-10 text-center md:text-left">
//               <h3 className="text-2xl md:text-3xl font-bold">
//                 Have a project in mind?
//               </h3>
//               <p className="text-primary-foreground/90 max-w-md">
//                 I am available for freelance work and full-time opportunities.
//                 Let's build something amazing together.
//               </p>
//             </div>
//             <Button
//               size="lg"
//               variant="secondary"
//               className="whitespace-nowrap z-10 shadow-xl"
//               asChild
//             >
//               <Link to="/contact">
//                 Let's Talk <ArrowRight className="ml-2 w-4 h-4" />
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// 4 ---------------------------------------------------
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   ExternalLink,
//   Github,
//   Code2,
//   Server,
//   Layout,
//   Database,
//   Terminal,
//   Cpu,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
//   siteConfig,
//   personalProjects,
//   industrialProjects,
// } from "@/data/portfolio-data";
// import NeuralHero from "@/components/home/NeuralHero"; // Import the new component

// export default function Home() {
//   return (
//     <div className="flex flex-col w-full overflow-hidden">
//       {/* 1. HERO SECTION - The "Neural Roots" 3D Experience */}
//       <NeuralHero />

//       {/* 2. Skills Marquee / Grid Section */}
//       <section className="py-20 bg-muted/30 border-y border-border/50">
//         <div className="container">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold mb-4">Tech Stack & Tools</h2>
//             <p className="text-muted-foreground">
//               My weapons of choice for building digital products.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 opacity-90">
//             {[
//               { name: "Java", icon: <Cpu /> },
//               { name: "Spring Boot", icon: <Server /> },
//               { name: "React", icon: <Layout /> },
//               { name: "TypeScript", icon: <Code2 /> },
//               { name: "PostgreSQL", icon: <Database /> },
//               { name: "MongoDB", icon: <Database /> },
//               { name: "Docker", icon: <Terminal /> },
//               { name: "LangChain", icon: <BrainCircuit /> }, // Updated for AI
//               { name: "Next.js", icon: <Layout /> },
//               { name: "Tailwind", icon: <Layout /> },
//               { name: "Git", icon: <Terminal /> },
//               { name: "Python", icon: <Code2 /> },
//             ].map((tech, idx) => (
//               <div
//                 key={idx}
//                 className="flex flex-col items-center justify-center p-6 bg-background rounded-xl border border-border/50 hover:border-primary/50 hover:shadow-md transition-all group"
//               >
//                 {/* Lucide icons need to be instantiated if passed as components, but here we passed elements */}
//                 <div className="mb-3 text-muted-foreground group-hover:text-primary transition-colors">
//                   {tech.icon}
//                 </div>
//                 <span className="font-medium text-sm">{tech.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 3. Featured Work - Bento Grid Layout */}
//       <section className="py-24 container">
//         <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Featured Work
//             </h2>
//             <p className="text-muted-foreground max-w-xl">
//               A selection of industrial and personal projects that showcase my
//               abilities in AI & Full Stack Development.
//             </p>
//           </div>
//           <Button variant="ghost" className="group" asChild>
//             <Link to="/personal-projects">
//               View All Projects{" "}
//               <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </Button>
//         </div>

//         {/* ... (Rest of the Bento Grid code remains the same as previous Home.tsx) ... */}
//         {/* Just ensure you copy the Card Grid from the previous Home.tsx response to keep the content hydrated */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
//           {/* Main Feature - Personal Project */}
//           <Card className="md:col-span-2 row-span-1 group overflow-hidden relative border-muted-foreground/10 bg-gradient-to-br from-background to-muted">
//             <div className="absolute inset-0 z-0">
//               <img
//                 src={personalProjects[0].imageUrl}
//                 alt="BookNest"
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
//             </div>
//             <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
//               <Badge className="w-fit mb-3 bg-primary text-primary-foreground hover:bg-primary">
//                 Featured Personal
//               </Badge>
//               <h3 className="text-2xl font-bold mb-2">
//                 {personalProjects[0].title}
//               </h3>
//               <p className="text-gray-200 mb-4 line-clamp-2">
//                 {personalProjects[0].description}
//               </p>
//               <div className="flex gap-3">
//                 <Button size="sm" variant="secondary" asChild>
//                   <a
//                     href={personalProjects[0].demoUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <ExternalLink className="mr-2 h-4 w-4" /> Demo
//                   </a>
//                 </Button>
//                 <Button
//                   size="sm"
//                   variant="outline"
//                   className="bg-transparent text-white border-white/30 hover:bg-white/10"
//                   asChild
//                 >
//                   <a
//                     href={personalProjects[0].repoUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <Github className="mr-2 h-4 w-4" /> Code
//                   </a>
//                 </Button>
//               </div>
//             </div>
//           </Card>

//           {/* Secondary Feature - Industrial */}
//           <Card className="md:col-span-1 row-span-1 flex flex-col justify-between hover:border-primary/50 transition-colors">
//             <CardHeader>
//               <Badge variant="outline" className="w-fit mb-2">
//                 Industrial Experience
//               </Badge>
//               <CardTitle className="text-xl">
//                 {industrialProjects[0].title}
//               </CardTitle>
//               <CardDescription className="line-clamp-3">
//                 {industrialProjects[0].description}
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {industrialProjects[0].techStack.slice(0, 3).map((t) => (
//                   <Badge key={t} variant="secondary" className="text-xs">
//                     {t}
//                   </Badge>
//                 ))}
//               </div>
//               <Button className="w-full" variant="outline" asChild>
//                 <Link to="/industrial-projects">View Case Study</Link>
//               </Button>
//             </CardContent>
//           </Card>

//           {/* Third Feature - Personal */}
//           <Card className="md:col-span-1 row-span-1 flex flex-col justify-between hover:border-primary/50 transition-colors">
//             <div className="h-48 overflow-hidden bg-muted relative border-b">
//               <img
//                 src={personalProjects[1].imageUrl}
//                 alt="Finance Tracker"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="p-6 flex-1 flex flex-col">
//               <h3 className="font-bold text-lg mb-2">
//                 {personalProjects[1].title}
//               </h3>
//               <p className="text-sm text-muted-foreground flex-1 line-clamp-2">
//                 {personalProjects[1].description}
//               </p>
//               <div className="flex gap-2 mt-4">
//                 <Button
//                   size="sm"
//                   variant="ghost"
//                   className="w-full border"
//                   asChild
//                 >
//                   <a
//                     href={personalProjects[1].demoUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     Live Demo
//                   </a>
//                 </Button>
//               </div>
//             </div>
//           </Card>

//           {/* Call to Action Block */}
//           <div className="md:col-span-2 row-span-1 bg-primary text-primary-foreground rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
//             <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shine pointer-events-none" />
//             <div className="space-y-4 relative z-10 text-center md:text-left">
//               <h3 className="text-2xl md:text-3xl font-bold">
//                 Have a project in mind?
//               </h3>
//               <p className="text-primary-foreground/90 max-w-md">
//                 I am available for freelance work and full-time opportunities.
//                 Let's build something amazing together.
//               </p>
//             </div>
//             <Button
//               size="lg"
//               variant="secondary"
//               className="whitespace-nowrap z-10 shadow-xl"
//               asChild
//             >
//               <Link to="/contact">
//                 Let's Talk <ArrowRight className="ml-2 w-4 h-4" />
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
// Helper component for Lucide Icons in the map loop
// import { BrainCircuit } from "lucide-react";

// 3 ----------------------------------------------
// import Hero3D from "@/components/home/Hero3D";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Code2,
//   Download,
//   ExternalLink,
//   Github,
//   Terminal,
//   Database,
//   Layout,
//   Server,
//   Cpu,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
//   siteConfig,
//   personalProjects,
//   industrialProjects,
// } from "@/data/portfolio-data";

// export default function Home() {
//   return (
//     <div className="flex flex-col w-full overflow-hidden">
//       <Hero3D />
//       {/* 1. Hero Section - Full Height with Background Pattern */}
//       {/* <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 pt-20 pb-32 overflow-hidden">
//         <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
//         <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>

//         <div className="space-y-6 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
//           <Badge
//             variant="secondary"
//             className="px-4 py-2 rounded-full text-sm font-medium border-primary/20 bg-primary/5 text-primary"
//           >
//             Available for Hire
//           </Badge>

//           <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
//             Hello, I'm <span className="text-primary">{siteConfig.name}</span>.
//             <br />
//             <span className="text-foreground/80 text-3xl md:text-5xl mt-2 block">
//               {siteConfig.tagline}
//             </span>
//           </h1>

//           <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl leading-relaxed">
//             I craft robust, scalable backend systems with{" "}
//             <strong>Spring Boot</strong> and intuitive, high-performance
//             frontends with <strong>React</strong>.
//           </p>

//           <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
//             <Button
//               size="lg"
//               className="h-12 px-8 text-base shadow-lg shadow-primary/20"
//               asChild
//             >
//               <Link to="/contact">
//                 Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
//               </Link>
//             </Button>
//             <Button
//               variant="outline"
//               size="lg"
//               className="h-12 px-8 text-base"
//               asChild
//             >
//               <Link to="/about">More About Me</Link>
//             </Button>
//           </div>

//           <div className="flex items-center justify-center gap-6 text-muted-foreground pt-8">
//             <a
//               href={siteConfig.socials.github}
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-primary transition-colors"
//             >
//               <Github className="w-6 h-6" />
//             </a>
//             <div className="h-4 w-[1px] bg-border"></div>
//             <a
//               href={siteConfig.socials.linkedin}
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-primary transition-colors"
//             >
//               LinkedIn
//             </a>
//             <div className="h-4 w-[1px] bg-border"></div>
//             <a
//               href={`mailto:${siteConfig.email}`}
//               className="hover:text-primary transition-colors"
//             >
//               Email
//             </a>
//           </div>
//         </div>
//       </section> */}

//       {/* 2. Skills Marquee / Grid Section */}
//       <section className="py-20 bg-muted/30 border-y border-border/50">
//         <div className="container">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold mb-4">Tech Stack & Tools</h2>
//             <p className="text-muted-foreground">
//               My weapons of choice for building digital products.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 opacity-90">
//             {[
//               { name: "Java", icon: <Cpu /> },
//               { name: "Spring Boot", icon: <Server /> },
//               { name: "React", icon: <Layout /> },
//               { name: "TypeScript", icon: <Code2 /> },
//               { name: "PostgreSQL", icon: <Database /> },
//               { name: "MongoDB", icon: <Database /> },
//               { name: "Docker", icon: <Terminal /> },
//               { name: "AWS", icon: <Server /> },
//               { name: "Next.js", icon: <Layout /> },
//               { name: "Tailwind", icon: <Layout /> },
//               { name: "Git", icon: <Terminal /> },
//               { name: "Python", icon: <Code2 /> },
//             ].map((tech, idx) => (
//               <div
//                 key={idx}
//                 className="flex flex-col items-center justify-center p-6 bg-background rounded-xl border border-border/50 hover:border-primary/50 hover:shadow-md transition-all group"
//               >
//                 <div className="mb-3 text-muted-foreground group-hover:text-primary transition-colors">
//                   {tech.icon}
//                 </div>
//                 <span className="font-medium text-sm">{tech.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 3. Featured Work - Bento Grid Layout */}
//       <section className="py-24 container">
//         <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Featured Work
//             </h2>
//             <p className="text-muted-foreground max-w-xl">
//               A selection of industrial and personal projects that showcase my
//               abilities in Full Stack Development.
//             </p>
//           </div>
//           <Button variant="ghost" className="group" asChild>
//             <Link to="/personal-projects">
//               View All Projects{" "}
//               <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </Button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
//           {/* Main Feature - Personal Project */}
//           <Card className="md:col-span-2 row-span-1 group overflow-hidden relative border-muted-foreground/10 bg-gradient-to-br from-background to-muted">
//             <div className="absolute inset-0 z-0">
//               {/* Use actual image if available, else fallback */}
//               <img
//                 src={personalProjects[0].imageUrl}
//                 alt="BookNest"
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
//             </div>
//             <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
//               <Badge className="w-fit mb-3 bg-primary text-primary-foreground hover:bg-primary">
//                 Featured Personal
//               </Badge>
//               <h3 className="text-2xl font-bold mb-2">
//                 {personalProjects[0].title}
//               </h3>
//               <p className="text-gray-200 mb-4 line-clamp-2">
//                 {personalProjects[0].description}
//               </p>
//               <div className="flex gap-3">
//                 <Button size="sm" variant="secondary" asChild>
//                   <a
//                     href={personalProjects[0].demoUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <ExternalLink className="mr-2 h-4 w-4" /> Demo
//                   </a>
//                 </Button>
//                 <Button
//                   size="sm"
//                   variant="outline"
//                   className="bg-transparent text-white border-white/30 hover:bg-white/10"
//                   asChild
//                 >
//                   <a
//                     href={personalProjects[0].repoUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <Github className="mr-2 h-4 w-4" /> Code
//                   </a>
//                 </Button>
//               </div>
//             </div>
//           </Card>

//           {/* Secondary Feature - Industrial */}
//           <Card className="md:col-span-1 row-span-1 flex flex-col justify-between hover:border-primary/50 transition-colors">
//             <CardHeader>
//               <Badge variant="outline" className="w-fit mb-2">
//                 Industrial Experience
//               </Badge>
//               <CardTitle className="text-xl">
//                 {industrialProjects[0].title}
//               </CardTitle>
//               <CardDescription className="line-clamp-3">
//                 {industrialProjects[0].description}
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {industrialProjects[0].techStack.slice(0, 3).map((t) => (
//                   <Badge key={t} variant="secondary" className="text-xs">
//                     {t}
//                   </Badge>
//                 ))}
//               </div>
//               <Button className="w-full" variant="outline" asChild>
//                 <Link to="/industrial-projects">View Case Study</Link>
//               </Button>
//             </CardContent>
//           </Card>

//           {/* Third Feature - Personal */}
//           <Card className="md:col-span-1 row-span-1 flex flex-col justify-between hover:border-primary/50 transition-colors">
//             <div className="h-48 overflow-hidden bg-muted relative border-b">
//               <img
//                 src={personalProjects[1].imageUrl}
//                 alt="Finance Tracker"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="p-6 flex-1 flex flex-col">
//               <h3 className="font-bold text-lg mb-2">
//                 {personalProjects[1].title}
//               </h3>
//               <p className="text-sm text-muted-foreground flex-1 line-clamp-2">
//                 {personalProjects[1].description}
//               </p>
//               <div className="flex gap-2 mt-4">
//                 <Button
//                   size="sm"
//                   variant="ghost"
//                   className="w-full border"
//                   asChild
//                 >
//                   <a
//                     href={personalProjects[1].demoUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     Live Demo
//                   </a>
//                 </Button>
//               </div>
//             </div>
//           </Card>

//           {/* Call to Action Block */}
//           <div className="md:col-span-2 row-span-1 bg-primary text-primary-foreground rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
//             <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shine pointer-events-none" />
//             <div className="space-y-4 relative z-10 text-center md:text-left">
//               <h3 className="text-2xl md:text-3xl font-bold">
//                 Have a project in mind?
//               </h3>
//               <p className="text-primary-foreground/90 max-w-md">
//                 I am available for freelance work and full-time opportunities.
//                 Let's build something amazing together.
//               </p>
//             </div>
//             <Button
//               size="lg"
//               variant="secondary"
//               className="whitespace-nowrap z-10 shadow-xl"
//               asChild
//             >
//               <Link to="/contact">
//                 Let's Talk <ArrowRight className="ml-2 w-4 h-4" />
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// 2 -------------------------------------------
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Github,
//   Code2,
//   Database,
//   Terminal,
//   Layout,
//   Server,
//   Cpu,
//   ExternalLink,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
//   siteConfig,
//   personalProjects,
//   industrialProjects,
// } from "@/data/portfolio-data";
// import CodeStorm from "@/components/3d/CodeStorm"; // Import the 3D component
// import { GlitchText } from "@/components/ui/glitch-text"; // Import the 2D Effect

// export default function Home() {
//   return (
//     <div className="flex flex-col w-full overflow-hidden">
//       {/* 1. HERO: The Code Storm */}
//       <section className="relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden">
//         {/* The 3D Layer (Z-Index 0) */}
//         <CodeStorm />

//         {/* The Content Layer (Z-Index 10) */}
//         <div className="relative z-10 space-y-6 max-w-5xl px-4 pointer-events-none">
//           {/* pointer-events-none on container allows clicking through to canvas if needed,
//               but we enable pointer-events-auto on buttons below */}

//           <Badge
//             variant="outline"
//             className="px-4 py-2 rounded-full text-sm font-medium border-primary/50 bg-background/50 backdrop-blur-sm text-primary animate-in fade-in zoom-in duration-1000"
//           >
//             System Online • Available for Hire
//           </Badge>

//           <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-foreground drop-shadow-2xl">
//             <span className="block mb-2">I AM</span>
//             <GlitchText
//               text={siteConfig.name.toUpperCase()}
//               className="text-primary"
//             />
//           </h1>

//           <p className="mx-auto max-w-[700px] text-muted-foreground/80 text-xl md:text-2xl font-medium leading-relaxed backdrop-blur-sm p-4 rounded-xl">
//             {siteConfig.tagline}
//           </p>

//           <div className="flex flex-wrap items-center justify-center gap-4 pt-8 pointer-events-auto">
//             <Button
//               size="lg"
//               className="h-14 px-10 text-lg rounded-full shadow-[0_0_20px_rgba(20,83,45,0.5)] hover:shadow-[0_0_30px_rgba(20,83,45,0.8)] transition-all duration-300"
//               asChild
//             >
//               <Link to="/contact">
//                 Init_Project <ArrowRight className="ml-2 h-5 w-5" />
//               </Link>
//             </Button>
//             <Button
//               variant="outline"
//               size="lg"
//               className="h-14 px-10 text-lg rounded-full bg-background/50 backdrop-blur-md border-primary/20 hover:bg-background/80"
//               asChild
//             >
//               <Link to="/industrial-projects">View_Systems</Link>
//             </Button>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground/50">
//           <ArrowRight className="h-6 w-6 rotate-90" />
//         </div>
//       </section>

//       {/* 2. Skills Marquee / Grid Section (Same as previous, just ensuring flow) */}
//       <section className="py-20 bg-muted/30 border-y border-border/50 relative z-20">
//         <div className="container">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold mb-4">Tech Stack & Tools</h2>
//             <p className="text-muted-foreground">
//               My weapons of choice for building digital products.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 opacity-90">
//             {[
//               { name: "Java", icon: <Cpu /> },
//               { name: "Spring Boot", icon: <Server /> },
//               { name: "React", icon: <Layout /> },
//               { name: "TypeScript", icon: <Code2 /> },
//               { name: "PostgreSQL", icon: <Database /> },
//               { name: "MongoDB", icon: <Database /> },
//               { name: "Docker", icon: <Terminal /> },
//               { name: "AWS", icon: <Server /> },
//               { name: "Next.js", icon: <Layout /> },
//               { name: "Tailwind", icon: <Layout /> },
//               { name: "Git", icon: <Terminal /> },
//               { name: "Python", icon: <Code2 /> },
//             ].map((tech, idx) => (
//               <div
//                 key={idx}
//                 className="flex flex-col items-center justify-center p-6 bg-background rounded-xl border border-border/50 hover:border-primary/50 hover:shadow-md transition-all group cursor-default"
//               >
//                 <div className="mb-3 text-muted-foreground group-hover:text-primary transition-colors">
//                   {tech.icon}
//                 </div>
//                 <span className="font-medium text-sm">{tech.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 3. Featured Work - Bento Grid Layout */}
//       <section className="py-24 container relative z-20">
//         <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Featured Work
//             </h2>
//             <p className="text-muted-foreground max-w-xl">
//               A selection of industrial and personal projects that showcase my
//               abilities in Full Stack Development.
//             </p>
//           </div>
//           <Button variant="ghost" className="group" asChild>
//             <Link to="/personal-projects">
//               View All Projects{" "}
//               <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </Button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
//           {/* Main Feature - Personal Project */}
//           <Card className="md:col-span-2 row-span-1 group overflow-hidden relative border-muted-foreground/10 bg-gradient-to-br from-background to-muted">
//             <div className="absolute inset-0 z-0">
//               {/* Use actual image if available, else fallback */}
//               <img
//                 src={personalProjects[0].imageUrl}
//                 alt="BookNest"
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
//             </div>
//             <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
//               <Badge className="w-fit mb-3 bg-primary text-primary-foreground hover:bg-primary">
//                 Featured Personal
//               </Badge>
//               <h3 className="text-2xl font-bold mb-2">
//                 {personalProjects[0].title}
//               </h3>
//               <p className="text-gray-200 mb-4 line-clamp-2">
//                 {personalProjects[0].description}
//               </p>
//               <div className="flex gap-3">
//                 <Button size="sm" variant="secondary" asChild>
//                   <a
//                     href={personalProjects[0].demoUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <ExternalLink className="mr-2 h-4 w-4" /> Demo
//                   </a>
//                 </Button>
//                 <Button
//                   size="sm"
//                   variant="outline"
//                   className="bg-transparent text-white border-white/30 hover:bg-white/10"
//                   asChild
//                 >
//                   <a
//                     href={personalProjects[0].repoUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     <Github className="mr-2 h-4 w-4" /> Code
//                   </a>
//                 </Button>
//               </div>
//             </div>
//           </Card>

//           {/* Secondary Feature - Industrial */}
//           <Card className="md:col-span-1 row-span-1 flex flex-col justify-between hover:border-primary/50 transition-colors">
//             <CardHeader>
//               <Badge variant="outline" className="w-fit mb-2">
//                 Industrial Experience
//               </Badge>
//               <CardTitle className="text-xl">
//                 {industrialProjects[0].title}
//               </CardTitle>
//               <CardDescription className="line-clamp-3">
//                 {industrialProjects[0].description}
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {industrialProjects[0].techStack.slice(0, 3).map((t) => (
//                   <Badge key={t} variant="secondary" className="text-xs">
//                     {t}
//                   </Badge>
//                 ))}
//               </div>
//               <Button className="w-full" variant="outline" asChild>
//                 <Link to="/industrial-projects">View Case Study</Link>
//               </Button>
//             </CardContent>
//           </Card>

//           {/* Third Feature - Personal */}
//           <Card className="md:col-span-1 row-span-1 flex flex-col justify-between hover:border-primary/50 transition-colors">
//             <div className="h-48 overflow-hidden bg-muted relative border-b">
//               <img
//                 src={personalProjects[1].imageUrl}
//                 alt="Finance Tracker"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="p-6 flex-1 flex flex-col">
//               <h3 className="font-bold text-lg mb-2">
//                 {personalProjects[1].title}
//               </h3>
//               <p className="text-sm text-muted-foreground flex-1 line-clamp-2">
//                 {personalProjects[1].description}
//               </p>
//               <div className="flex gap-2 mt-4">
//                 <Button
//                   size="sm"
//                   variant="ghost"
//                   className="w-full border"
//                   asChild
//                 >
//                   <a
//                     href={personalProjects[1].demoUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     Live Demo
//                   </a>
//                 </Button>
//               </div>
//             </div>
//           </Card>

//           {/* Call to Action Block */}
//           <div className="md:col-span-2 row-span-1 bg-primary text-primary-foreground rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
//             <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shine pointer-events-none" />
//             <div className="space-y-4 relative z-10 text-center md:text-left">
//               <h3 className="text-2xl md:text-3xl font-bold">
//                 Have a project in mind?
//               </h3>
//               <p className="text-primary-foreground/90 max-w-md">
//                 I am available for freelance work and full-time opportunities.
//                 Let's build something amazing together.
//               </p>
//             </div>
//             <Button
//               size="lg"
//               variant="secondary"
//               className="whitespace-nowrap z-10 shadow-xl"
//               asChild
//             >
//               <Link to="/contact">
//                 Let's Talk <ArrowRight className="ml-2 w-4 h-4" />
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// 1 ------------------------------------------------------------------------------
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Github,
//   Code2,
//   Database,
//   Layout,
//   Server,
//   Terminal,
//   Cpu,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
//   siteConfig,
//   personalProjects,
//   industrialProjects,
// } from "@/data/portfolio-data";
// import Hero3D from "@/components/layout/Hero3D";

// export default function Home() {
//   return (
//     <div className="flex flex-col w-full overflow-hidden">
//       {/* 1. UNPROFESSIONAL HERO SECTION (3D Terrarium) */}
//       <section className="relative min-h-[95vh] flex flex-col md:flex-row items-center justify-center overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background pt-16">
//         {/* Background Elements */}
//         <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>

//         {/* Text Layer (Left Side / Center on Mobile) - Z-Index 10 puts it ABOVE the 3D canvas interaction if needed, but side-by-side works best */}
//         <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
//           {/* Typography */}
//           <div className="space-y-6 text-center md:text-left order-2 md:order-1 animate-in slide-in-from-left-8 duration-1000">
//             <Badge
//               variant="outline"
//               className="px-4 py-1.5 text-sm font-medium border-primary/40 text-primary bg-primary/5 backdrop-blur-sm"
//             >
//               v2.0 // Nature & Code
//             </Badge>

//             <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
//               FULL <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">
//                 STACK
//               </span>{" "}
//               <br />
//               NATURE.
//             </h1>

//             <p className="max-w-[500px] text-muted-foreground text-lg md:text-xl leading-relaxed mx-auto md:mx-0">
//               I cultivate digital ecosystems. Architecting scalable{" "}
//               <strong>Spring Boot</strong> backends and organic{" "}
//               <strong>React</strong> interfaces.
//             </p>

//             <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
//               <Button
//                 size="lg"
//                 className="h-14 px-8 text-base rounded-full shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
//                 asChild
//               >
//                 <Link to="/industrial-projects">
//                   Explore Work <ArrowRight className="ml-2 h-4 w-4" />
//                 </Link>
//               </Button>
//               <Button
//                 variant="ghost"
//                 size="lg"
//                 className="h-14 px-8 text-base rounded-full hover:bg-primary/10"
//                 asChild
//               >
//                 <Link to="/contact">Let's Connect</Link>
//               </Button>
//             </div>

//             <div className="flex items-center justify-center md:justify-start gap-6 pt-8 opacity-60 hover:opacity-100 transition-opacity">
//               <a
//                 href={siteConfig.socials.github}
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <Github className="w-6 h-6 hover:text-primary transition-colors" />
//               </a>
//               <div className="h-1 w-1 rounded-full bg-foreground"></div>
//               <span className="font-mono text-sm tracking-widest">
//                 EST. 2024
//               </span>
//               <div className="h-1 w-1 rounded-full bg-foreground"></div>
//               <a
//                 href={siteConfig.socials.linkedin}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="hover:text-primary transition-colors font-medium"
//               >
//                 LinkedIn
//               </a>
//             </div>
//           </div>

//           {/* 3D Canvas Layer (Right Side) */}
//           <div className="w-full h-[50vh] md:h-full order-1 md:order-2 flex items-center justify-center">
//             <Hero3D />
//           </div>
//         </div>
//       </section>

//       {/* 2. Skills Marquee / Grid Section */}
//       <section className="py-24 bg-muted/30 border-y border-border/50 relative">
//         <div className="container">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold mb-4">The Toolkit</h2>
//             <p className="text-muted-foreground">
//               Cultivated technologies for modern growth.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
//             {[
//               { name: "Java", icon: <Cpu /> },
//               { name: "Spring Boot", icon: <Server /> },
//               { name: "React", icon: <Layout /> },
//               { name: "TypeScript", icon: <Code2 /> },
//               { name: "PostgreSQL", icon: <Database /> },
//               { name: "MongoDB", icon: <Database /> },
//               { name: "Docker", icon: <Terminal /> },
//               { name: "AWS", icon: <Server /> },
//               { name: "Next.js", icon: <Layout /> },
//               { name: "Tailwind", icon: <Layout /> },
//               { name: "Git", icon: <Terminal /> },
//               { name: "Python", icon: <Code2 /> },
//             ].map((tech, idx) => (
//               <div
//                 key={idx}
//                 className="group relative flex flex-col items-center justify-center p-6 bg-background/50 hover:bg-background rounded-2xl border border-border/50 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>
//                 <div className="relative z-10 mb-3 text-muted-foreground group-hover:text-primary transition-colors scale-110">
//                   {tech.icon}
//                 </div>
//                 <span className="relative z-10 font-medium text-sm">
//                   {tech.name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 3. Featured Work - Bento Grid Layout (Re-used from previous plan) */}
//       <section className="py-32 container">
//         <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4 border-b border-border/40 pb-6">
//           <div>
//             <h2 className="text-4xl font-bold mb-4">Selected Harvest</h2>
//             <p className="text-muted-foreground max-w-xl text-lg">
//               Industrial grade solutions and personal experiments.
//             </p>
//           </div>
//           <Button variant="link" className="group text-lg" asChild>
//             <Link to="/personal-projects">
//               View All Work{" "}
//               <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </Button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[450px]">
//           {/* Main Feature - Personal Project */}
//           <Card className="md:col-span-2 row-span-1 group overflow-hidden relative border-0 shadow-2xl bg-black">
//             <div className="absolute inset-0 z-0">
//               <img
//                 src={personalProjects[0].imageUrl}
//                 alt="BookNest"
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-60"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
//             </div>
//             <div className="relative z-10 h-full flex flex-col justify-end p-10 text-white">
//               <Badge className="w-fit mb-4 bg-primary text-primary-foreground border-none px-3 py-1 text-sm">
//                 Featured
//               </Badge>
//               <h3 className="text-4xl font-bold mb-3">
//                 {personalProjects[0].title}
//               </h3>
//               <p className="text-gray-300 mb-6 text-lg max-w-lg line-clamp-2">
//                 {personalProjects[0].description}
//               </p>
//               <div className="flex gap-4">
//                 <Button
//                   size="lg"
//                   className="bg-white text-black hover:bg-gray-200"
//                   asChild
//                 >
//                   <a
//                     href={personalProjects[0].demoUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     View Live
//                   </a>
//                 </Button>
//               </div>
//             </div>
//           </Card>

//           {/* Secondary Feature - Industrial */}
//           <Card className="md:col-span-1 row-span-1 flex flex-col justify-between hover:border-primary/50 transition-all duration-300 bg-muted/20 border-border/60 hover:shadow-xl hover:-translate-y-1">
//             <CardHeader>
//               <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
//                 <Server className="w-6 h-6" />
//               </div>
//               <Badge
//                 variant="outline"
//                 className="w-fit mb-2 border-primary/20 text-primary"
//               >
//                 Industrial
//               </Badge>
//               <CardTitle className="text-2xl">
//                 {industrialProjects[0].title}
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <CardDescription className="line-clamp-4 mb-6 text-base leading-relaxed">
//                 {industrialProjects[0].description}
//               </CardDescription>
//               <Button className="w-full" variant="secondary" asChild>
//                 <Link to="/industrial-projects">Read Case Study</Link>
//               </Button>
//             </CardContent>
//           </Card>

//           {/* Third Feature - Personal */}
//           <Card className="md:col-span-1 row-span-1 flex flex-col border-border/60 overflow-hidden hover:shadow-xl transition-all duration-300 group">
//             <div className="h-1/2 overflow-hidden bg-muted relative">
//               <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
//               <img
//                 src={personalProjects[1].imageUrl}
//                 alt="Finance Tracker"
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//             </div>
//             <div className="p-8 flex-1 flex flex-col bg-card">
//               <h3 className="font-bold text-xl mb-2">
//                 {personalProjects[1].title}
//               </h3>
//               <p className="text-muted-foreground flex-1 line-clamp-3">
//                 {personalProjects[1].description}
//               </p>
//               <div className="flex gap-2 mt-6">
//                 <Button variant="outline" className="w-full" asChild>
//                   <a
//                     href={personalProjects[1].demoUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     Live Demo
//                   </a>
//                 </Button>
//               </div>
//             </div>
//           </Card>

//           {/* Call to Action Block */}
//           <div className="md:col-span-2 row-span-1 bg-primary text-primary-foreground rounded-xl p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
//             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
//             <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

//             <div className="space-y-6 relative z-10 text-center md:text-left">
//               <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
//                 Ready to grow?
//               </h3>
//               <p className="text-primary-foreground/80 max-w-lg text-lg">
//                 Whether it's a new product or a system overhaul, I bring the
//                 engineering rigor to make it happen.
//               </p>
//             </div>
//             <Button
//               size="lg"
//               className="h-16 px-10 text-lg bg-background text-foreground hover:bg-background/90 z-10 shadow-xl rounded-full"
//               asChild
//             >
//               <Link to="/contact">Start a Project</Link>
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
