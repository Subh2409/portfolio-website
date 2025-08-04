import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

export function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Full Stack Developer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 dark:bg-background/90" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-primary flex items-center justify-center shadow-electric border-4 border-primary/20 animate-glow">
              <span className="text-4xl font-bold text-white">SS</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-primary">Subham Singh</span>
          </h1>
          
          <div className="text-2xl md:text-4xl mb-8 font-mono text-muted-foreground min-h-[3rem]">
            <span className="inline-block border-r-2 border-primary animate-pulse">
              {displayText}
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            MERN Stack Developer with 1500+ DSA problems solved. Building scalable applications 
            and contributing to Agile teams at leading tech companies.
          </p>
          
          <div className="flex justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-electric transition-all duration-300 font-mono font-semibold"
              asChild
            >
              <a 
                href="https://drive.google.com/file/d/1kIZ1sp-ScFcIu5a5Q2LzJJdovYYGWFZm/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                View Resume
              </a>
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/subham24092001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2 hover:scale-110 transform"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/singhsubham"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2 hover:scale-110 transform"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}