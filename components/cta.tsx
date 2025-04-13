"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function CTA() {
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef(null);

  // Simple glow effect without complex calculations
  useEffect(() => {
    // No complex position tracking needed
    const button = buttonRef.current;
    return () => {
      // Clean up if needed
    };
  }, []);

  return (
    <section className="border-t bg-background">
      <div className="container flex flex-col items-center gap-8 py-24 text-center md:py-32">
        {/* Clean heading with consistent font */}
        <h2 className="font-bold text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl max-w-4xl">
          Ready to revolutionize your business?
        </h2>
        
        {/* Standard subheading */}
        <p className="max-w-[42rem] leading-relaxed text-muted-foreground sm:text-lg sm:leading-8">
          Join leading companies who trust Amane Soft to drive their digital transformation and stay ahead in the
          rapidly evolving tech landscape.
        </p>
        
        {/* Simple client section */}
        <div className="w-full max-w-4xl py-6">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-6 font-medium">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {["Fortune 500", "Global 2000", "Industry Leaders", "Tech Innovators"].map((text, i) => (
              <div key={i} className="text-muted-foreground/60 font-medium">
                {text}
              </div>
            ))}
          </div>
        </div>
        
        {/* Clean glowing button */}
        <div className="mt-6 relative">
          <Button 
            size="lg" 
            className="px-8 py-6 text-base font-medium relative group bg-primary hover:bg-primary/90 text-primary-foreground"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            ref={buttonRef}
          >
            {/* Button content */}
            <span className="relative z-10 flex items-center">
              <span className="mr-2">Get Started Today</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            
            {/* Simple glow effect */}
            <span 
              className={`absolute inset-0 rounded-md transition-all duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
              style={{
                boxShadow: "0 0 20px 5px rgba(99, 102, 241, 0.4)",
              }}
            ></span>
          </Button>
          
          {/* Tagline */}
          <p className="mt-4 text-sm text-muted-foreground">
            Innovation powered by expertise
          </p>
        </div>
      </div>
    </section>
  );
}