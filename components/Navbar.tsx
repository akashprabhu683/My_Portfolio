"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Featured", href: "#featured-project", id: "featured-project" },
  { label: "Projects", href: "#other-projects", id: "other-projects" },
  { label: "Achievements", href: "#achievements", id: "achievements" },
  { label: "Resume", href: "#resume", id: "resume" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 140;
          let current = "";

          for (let i = navItems.length - 1; i >= 0; i--) {
            const section = document.getElementById(navItems[i].id);
            if (section && scrollPosition >= section.offsetTop) {
              current = navItems[i].id;
              break;
            }
          }

          if (window.scrollY < 200) {
            current = "";
          }

          setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-none border-b border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="#hero"
          onClick={closeMenu}
          className="text-sm sm:text-base font-semibold tracking-tight uppercase hover:text-accent transition-colors shrink-0 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
          aria-label={`${portfolioData.name} - Home`}
        >
          <span className="font-mono text-accent mr-1" aria-hidden="true">/</span>
          {portfolioData.name}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-7 text-sm" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`transition-colors py-1 text-xs tracking-wider uppercase focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none ${
                  isActive
                    ? "text-foreground font-medium border-b border-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 text-muted-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none cursor-pointer"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div id="mobile-nav" className="md:hidden bg-background border-b border-border px-5 py-6 transition-all">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={closeMenu}
                  className={`text-xs sm:text-sm tracking-wider uppercase py-2.5 transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none ${
                    isActive
                      ? "text-accent font-medium pl-3 border-l-2 border-accent bg-accent/5"
                      : "text-muted-foreground hover:text-foreground pl-2"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
