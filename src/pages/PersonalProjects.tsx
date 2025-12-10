import ProjectShowcase from "@/components/specific/ProjectShowcase";

export default function PersonalProjects() {
  return (
    <div className="min-h-screen pt-10 pb-10">
      {/* The background 3D Hero is already handled globally in App.tsx.
        We just need to render the content here.
      */}
      <ProjectShowcase />
    </div>
  );
}
