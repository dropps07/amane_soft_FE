"use client";
import { useState, useEffect, useRef } from "react";
import { Brain, Cloud, Shield, Zap, ArrowRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    name: "AI-Powered Analytics",
    description: "Harness the power of machine learning to derive actionable insights from your data.",
    icon: Brain,
    color: "from-purple-500 to-indigo-600",
    hoverColor: "group-hover:from-purple-600 group-hover:to-indigo-700",
    glowColor: "purple-500",
    details: "Our AI solutions process billions of data points to identify patterns invisible to traditional analytics. With self-improving algorithms, your insights become more accurate over time.",
    link: "/solutions/ai-analytics"
  },
  {
    name: "Cloud-Native Architecture",
    description: "Scalable, resilient, and efficient solutions built for the modern cloud ecosystem.",
    icon: Cloud,
    color: "from-sky-400 to-blue-500",
    hoverColor: "group-hover:from-sky-500 group-hover:to-blue-600",
    glowColor: "sky-400",
    details: "Deploy with confidence using our containerized applications designed for horizontal scaling. Our solutions adjust automatically to traffic demands, ensuring optimal resource utilization.",
    link: "/solutions/cloud-architecture"
  },
  {
    name: "Enterprise-Grade Security",
    description: "State-of-the-art security measures to protect your most valuable assets.",
    icon: Shield,
    color: "from-emerald-500 to-green-600",
    hoverColor: "group-hover:from-emerald-600 group-hover:to-green-700",
    glowColor: "emerald-500",
    details: "Our security protocols comply with ISO 27001, SOC 2, and GDPR frameworks. We employ continuous vulnerability scanning and regular penetration tests to maintain ironclad protection.",
    link: "/solutions/security"
  },
  {
    name: "High-Performance Systems",
    description: "Optimized for speed and efficiency, our solutions deliver unparalleled performance.",
    icon: Zap,
    color: "from-amber-500 to-orange-600",
    hoverColor: "group-hover:from-amber-600 group-hover:to-orange-700",
    glowColor: "amber-500",
    details: "Experience sub-millisecond response times with our distributed architecture. Our systems process over 10,000 transactions per second while maintaining 99.99% uptime.",
    link: "/solutions/performance"
  },
];

const reviews = [
  {
    text: "Implementing Amane Soft's AI analytics transformed our decision-making process. We're now able to predict market trends with 85% accuracy.",
    author: "Sarah Chen",
    position: "CTO, TechVision Global",
    rating: 5,
    color: "from-purple-500 to-indigo-600"
  },
  {
    text: "Their cloud architecture scaled seamlessly during our product launch, handling a 500% traffic increase without a hitch.",
    author: "Marcus Johnson",
    position: "VP of Engineering, LaunchPad",
    rating: 5,
    color: "from-sky-400 to-blue-500"
  },
  {
    text: "In an era of increasing cyber threats, Amane Soft's security protocols have given us peace of mind and protected our sensitive data.",
    author: "Leila Patel",
    position: "CISO, SecureBank",
    rating: 5,
    color: "from-emerald-500 to-green-600"
  },
  {
    text: "The performance improvements were beyond our expectations. Transaction processing that took minutes now completes in milliseconds.",
    author: "David Rodriguez",
    position: "Head of Operations, FastTrack",
    rating: 5,
    color: "from-amber-500 to-orange-600"
  },
];

export default function Features() {
  const [activeCard, setActiveCard] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
  
      if (headingRef.current) {
        const rect = headingRef.current.getBoundingClientRect();
        const isNearHeading =
          event.clientX >= rect.left - 100 &&
          event.clientX <= rect.right + 100 &&
          event.clientY >= rect.top - 100 &&
          event.clientY <= rect.bottom + 100;
  
        if (isNearHeading) {
          const x = ((event.clientX - rect.left) / rect.width) * 100;
          const y = ((event.clientY - rect.top) / rect.height) * 100;
          const constrainedX = Math.min(Math.max(25, x), 75);
          const constrainedY = Math.min(Math.max(25, y), 75);
          setGradientPosition({ x: constrainedX, y: constrainedY });
        }
      }
    };
  
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-background border-t">
      {/* Subtle background elements that match the clean CTA style */}
      <div className="absolute inset-0 bg-grid-slate-200 opacity-5"></div>
      
      <div className="container relative space-y-16 z-10">
        {/* Section header */}
        <div className="mx-auto text-center">
          <h1 
            ref={headingRef} 
            className="font-bold text-3xl leading-tight sm:text-4xl md:text-5xl"
            style={{
              backgroundImage: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, var(--foreground) 0%, var(--foreground) 50%, var(--foreground) 100%)`,
              backgroundSize: '200% 200%',
              color: 'transparent',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              transition: 'background-position 0.3s ease-out'
            }}
          >
            Cutting-Edge Solutions
          </h1>
          <div 
            className="mt-2 rounded-full h-1 w-16 mx-auto"
            style={{
              backgroundImage: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, var(--primary) 0%, var(--primary) 50%, var(--primary) 100%)`,
              backgroundSize: '200% 200%',
              transition: 'background-position 0.3s ease-out'
            }}
          ></div>
          <p className="mt-6 text-muted-foreground sm:text-lg max-w-2xl mx-auto">
            Discover how Amane Soft can transform your business with our innovative technologies tailored to meet your specific industry challenges.
          </p>
        </div>

        {/* Horizontal card selector */}
        <div className="flex justify-center gap-2 md:gap-4">
          {features.map((feature, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCard(idx)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                activeCard === idx 
                  ? `bg-gradient-to-r ${feature.color} scale-125` 
                  : "bg-muted"
              }`}
              aria-label={`Select ${feature.name}`}
            />
          ))}
        </div>

        {/* Main horizontal cards display */}
        <div className="mx-auto max-w-6xl perspective-1000">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className={`flex flex-col lg:flex-row gap-6 transition-all duration-500 ${
                activeCard === idx 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 absolute translate-y-8"
              }`}
              style={{ display: activeCard === idx ? "flex" : "none" }}
            >
              {/* Review card - left side */}
              <div className="lg:w-1/2">
                <div className="h-full bg-card border border-border rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:bg-accent/5 transition-all duration-300">
                  {/* Decorative elements */}
                  <div className={`absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rotate-12 bg-gradient-to-br ${reviews[idx].color} opacity-10 rounded-full blur-xl`}></div>
                  <div className="absolute top-4 left-4 text-muted-foreground/20">
                    <Quote className="h-16 w-16 rotate-180" />
                  </div>
                  
                  {/* Review content */}
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <div className="flex mb-4">
                        {[...Array(reviews[idx].rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-lg md:text-xl font-light italic mb-6 text-foreground">{reviews[idx].text}</p>
                    </div>
                    
                    <div className="mt-auto">
                      <p className="font-semibold text-foreground">{reviews[idx].author}</p>
                      <p className="text-sm text-muted-foreground">{reviews[idx].position}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Feature card - right side */}
              <div className="lg:w-1/2">
                <div className="h-full bg-card border border-border rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:bg-accent/5 transition-all duration-300">
                  {/* Decorative gradient */}
                  <div className={`absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rotate-12 bg-gradient-to-br ${feature.color} opacity-10 rounded-full blur-xl`}></div>
                  
                  {/* Feature content */}
                  <div className="relative z-10">
                    {/* Icon with gradient background */}
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <div className={`rounded-full bg-gradient-to-br ${feature.color} ${feature.hoverColor} p-3 h-full w-full flex items-center justify-center`}>
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-foreground">{feature.name}</h3>
                      <p className="text-foreground">{feature.description}</p>
                      <p className="text-muted-foreground border-l-2 border-primary/30 pl-4 py-2">{feature.details}</p>
                      
                      {/* Learn more link with glow effect */}
                      <div className="pt-6">
                        <Button 
                          variant="outline" 
                          className="group/btn relative overflow-hidden transition-all duration-300 hover:shadow-md"
                        >
                          <span className={`absolute inset-0 opacity-0 group-hover/btn:opacity-20 bg-${feature.glowColor} blur-md transition-opacity duration-300`}></span>
                          <a href={feature.link} className="flex items-center relative z-10">
                            Learn more
                            <ArrowRight className="ml-2 h-4 w-4 inline transition-transform duration-300 group-hover/btn:translate-x-1" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action with glowy buttons */}
        <div className="mx-auto max-w-3xl text-center mt-16">
          <div className="inline-flex bg-muted border border-border p-2 px-4 rounded-full">
            <span className="text-sm text-muted-foreground">Ready to transform your business?</span>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="relative overflow-hidden group transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/30 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"></span>
              <span className="absolute -inset-px bg-gradient-to-r from-primary/30 to-primary/10 opacity-0 group-hover:opacity-100 rounded-md blur-sm transition-opacity duration-500"></span>
              <span className="relative z-10">Schedule a Consultation</span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="relative overflow-hidden group transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary/40 to-primary/10 opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500"></span>
              <span className="relative z-10">View Case Studies</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
