import { Outlet, ScrollRestoration } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const InnerPageLayout = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col font-body text-foreground">
      {/* 1. The Fixed Navbar */}
      <Navbar />

      {/* 2. The Dynamic Page Content */}
      {/* We add top padding here to ensure content isn't hidden behind the fixed Navbar */}
      {/* <main className="flex-grow pt-[110px]"> */}
      <main>
        <Outlet />
      </main>

      {/* 3. The Footer */}
      <Footer />

      {/* 4. Utilities */}
      <ScrollRestoration />
    </div>
  );
};
