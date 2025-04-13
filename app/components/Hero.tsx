"use client";
import { Button } from "@/components/ui/button"
import { ArrowRight, PresentationIcon } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [isSecondHovered, setIsSecondHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const primaryButtonRef = useRef(null);
  const secondaryButtonRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section className="border-b bg-background relative overflow-hidden min-h-[calc(100vh-3.5rem)] flex flex-col items-center justify-center py-12 md:py-20 lg:py-24">
      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center justify-center space-y-10 px-4 text-center max-w-screen-xl">
        <div className="space-y-5">
          <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
            Innovate Faster with
            <br />
            Amane Soft
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-xl sm:leading-8">
            Empowering businesses with cutting-edge software solutions. From AI-driven analytics to seamless cloud
            integrations, we're shaping the future of technology.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 mt-6">
          <div className="relative">
            <Button 
              size="lg" 
              className="px-8 py-6 text-base font-medium relative bg-primary hover:bg-primary/90 text-primary-foreground"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              ref={primaryButtonRef}
            >
              {/* Button content */}
              <span className="relative z-10 flex items-center">
                Explore Solutions
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
          </div>
          
          <div className="relative">
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-base font-medium relative border-primary/20 hover:bg-primary/5"
              onMouseEnter={() => setIsSecondHovered(true)}
              onMouseLeave={() => setIsSecondHovered(false)}
              ref={secondaryButtonRef}
            >
              {/* Button content */}
              <span className="relative z-10 flex items-center">
                Schedule a Demo
                <PresentationIcon className="ml-2 h-4 w-4" />
              </span>
              
              {/* Simple glow effect */}
              <span 
                className={`absolute inset-0 rounded-md transition-all duration-300 ${
                  isSecondHovered ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  boxShadow: "0 0 15px 3px rgba(99, 102, 241, 0.2)",
                }}
              ></span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
