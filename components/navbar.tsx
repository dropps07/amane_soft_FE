"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Menu, X, ChevronDown, ExternalLink } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Detect scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Solutions submenu items
  const solutionsMenu = [
    { name: "Data Analytics", href: "/solutions/data-analytics" },
    { name: "AI Integration", href: "/solutions/ai-integration" },
    { name: "Cloud Services", href: "/solutions/cloud" },
    { name: "Custom Software", href: "/solutions/custom-software" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
          : "border-transparent bg-background/80"
      }`}
    >
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2 group">
            <div className="bg-primary w-8 h-8 rounded-md flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:scale-110 transition-transform">
              A
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
              Amane<span className="font-light">Soft</span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <div className="relative" onMouseLeave={() => setActiveDropdown(null)}>
              <button
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-muted flex items-center"
                onMouseEnter={() => setActiveDropdown("solutions")}
              >
                Solutions <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === "solutions" && (
                <div className="absolute left-0 mt-1 w-56 rounded-md bg-background shadow-lg border animate-in fade-in slide-in-from-top-5 duration-300">
                  <div className="py-2">
                    {solutionsMenu.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm hover:bg-muted"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/industries"
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-muted"
            >
              Industries
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-muted"
            >
              About Us
            </Link>
            <Link
              href="/blog"
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-muted"
            >
              Blog
            </Link>
          </nav>
        </div>

        {/* Desktop right buttons */}
        <div className="hidden md:flex items-center space-x-2">
          <Link
            href="https://github.com/amanesoft"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-3 py-2 text-sm font-medium transition-colors hover:bg-muted rounded-md"
          >
            <Github className="h-4 w-4 mr-2" />
            GitHub
          </Link>
          <Button variant="outline" size="sm" className="group">
            <span>Contact Us</span>
            <div className="w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-primary to-indigo-500 hover:from-primary/90 hover:to-indigo-500/90 transition-all">
            <span>Get a Demo</span>
            <ExternalLink className="ml-2 h-3 w-3" />
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-4">
            <nav className="flex flex-col space-y-2">
              <div className="space-y-1">
                <button
                  className="w-full flex justify-between items-center px-2 py-1.5 rounded-md hover:bg-muted"
                  onClick={() => setActiveDropdown(activeDropdown === "mobile-solutions" ? null : "mobile-solutions")}
                >
                  <span>Solutions</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === "mobile-solutions" ? "rotate-180" : ""}`} />
                </button>
                {activeDropdown === "mobile-solutions" && (
                  <div className="ml-4 space-y-1 border-l pl-2">
                    {solutionsMenu.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-2 py-1.5 text-sm hover:bg-muted rounded-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/industries"
                className="px-2 py-1.5 rounded-md hover:bg-muted"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Industries
              </Link>
              <Link
                href="/about"
                className="px-2 py-1.5 rounded-md hover:bg-muted"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/blog"
                className="px-2 py-1.5 rounded-md hover:bg-muted"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
            </nav>
            <div className="flex flex-col space-y-2">
              <Link
                href="https://github.com/amanesoft"
                target="_blank"
                rel="noreferrer"
                className="flex items-center px-2 py-1.5 rounded-md hover:bg-muted"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Link>
              <Button variant="outline" className="justify-start" onClick={() => setIsMobileMenuOpen(false)}>
                Contact Us
              </Button>
              <Button className="bg-gradient-to-r from-primary to-indigo-500" onClick={() => setIsMobileMenuOpen(false)}>
                Get a Demo
                <ExternalLink className="ml-2 h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}