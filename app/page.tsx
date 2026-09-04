import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { FeaturedProject } from "@/components/FeaturedProject";
import { OtherProjects } from "@/components/OtherProjects";
import { Achievements } from "@/components/Achievements";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-accent selection:text-accent-foreground overflow-x-hidden">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:font-mono focus:text-xs focus:font-semibold focus:outline-none focus:ring-2 focus:ring-foreground"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-1 w-full max-w-6xl mx-auto px-5 sm:px-8 focus:outline-none">
        {/* 1. Hero Section */}
        <section
          id="hero"
          aria-label="Introduction"
          className="border-b border-border scroll-mt-16"
        >
          <Hero />
        </section>

        {/* 2. About Section */}
        <section
          id="about"
          aria-label="About Akash Prabhu"
          className="py-16 sm:py-24 border-b border-border scroll-mt-16"
        >
          <About />
        </section>

        {/* 3. Skills Section */}
        <section
          id="skills"
          aria-label="Skills & Technical Scope"
          className="py-16 sm:py-24 border-b border-border scroll-mt-16"
        >
          <Skills />
        </section>

        {/* 4. Featured Project Section */}
        <section
          id="featured-project"
          aria-label="Featured Project: Privacy Leak Detector"
          className="py-16 sm:py-24 border-b border-border scroll-mt-16"
        >
          <FeaturedProject />
        </section>

        {/* 5. Other Projects Section */}
        <section
          id="other-projects"
          aria-label="Other Projects"
          className="py-16 sm:py-24 border-b border-border scroll-mt-16"
        >
          <OtherProjects />
        </section>

        {/* 6. Achievements Section */}
        <section
          id="achievements"
          aria-label="Certifications & Achievements"
          className="py-16 sm:py-24 border-b border-border scroll-mt-16"
        >
          <Achievements />
        </section>

        {/* 7. Resume & Experience Section */}
        <section
          id="resume"
          aria-label="Resume, Experience and Education"
          className="py-16 sm:py-24 border-b border-border scroll-mt-16"
        >
          <Resume />
        </section>

        {/* 8. Contact Section */}
        <section
          id="contact"
          aria-label="Contact Information"
          className="py-16 sm:py-24 scroll-mt-16"
        >
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
