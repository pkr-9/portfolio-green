import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet, // Import Outlet
  Route,
} from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
// import PersistentBackground3D from "@/components/layout/Hero3D";
// Pages
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import PersonalProjects from "@/pages/PersonalProjects";
import IndustrialProjects from "@/pages/IndustrialProjects";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import { InnerPageLayout } from "./components/layout/InnerPageLayout";

const queryClient = new QueryClient();

// Create a Layout Wrapper to hold Hero3D + Outlet
// This ensures Hero3D is INSIDE the router context (safer) and handles layout
const RootLayout = () => {
  return (
    <div className="min-h-screen relative font-sans antialiased">
      {/* 1. Hero3D Background - Fixed position handled inside component */}
      {/* <PersistentBackground3D /> */}

      {/* 2. Content Outlet - Renders the current page on top */}
      <div className="relative z-10">
        <Outlet />
      </div>

      <Toaster />
      <Sonner />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    // Wrap everything in RootLayout
    <Route element={<RootLayout />} errorElement={<NotFound />}>
      {/* Your InnerPageLayout likely contains Navbar and Footer */}
      <Route element={<InnerPageLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/personal-projects" element={<PersonalProjects />} />
        <Route path="/industrial-projects" element={<IndustrialProjects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Route>
  )
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <TooltipProvider>
        {/* REMOVED 'bg-background' from here to prevent blocking the 3D view */}
        <RouterProvider router={router} />
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
