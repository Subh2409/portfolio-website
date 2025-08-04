import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, ShoppingCart } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A full-featured e-commerce platform with modern UI/UX, secure authentication, and comprehensive shopping features including product search, cart management, and responsive design.",
      image: "/placeholder.svg", // We'll add a placeholder for now
      technologies: ["React", "Redux Toolkit", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      features: [
        "JWT Authentication & Authorization",
        "Dark/Light Mode Toggle",
        "Advanced Product Search & Filtering",
        "Shopping Cart & Wishlist",
        "Contact & Help Pages",
        "Responsive Design"
      ],
      githubUrl: "#",
      liveUrl: "#",
      icon: ShoppingCart
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4 text-primary">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 shadow-soft hover:shadow-electric transition-all duration-300 group overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Project Image/Visual */}
                    <div className="bg-gradient-primary/10 p-8 flex items-center justify-center min-h-[300px] lg:min-h-[400px]">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-12 w-12 text-primary" />
                        </div>
                        <p className="text-muted-foreground font-mono">Project Preview</p>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-8">
                      <h3 className="text-3xl font-bold font-mono mb-4 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 font-mono">Key Features:</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold mb-3 font-mono">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex}
                              variant="outline"
                              className="border-primary/30 text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <Button 
                          variant="outline"
                          className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-5 w-5" />
                            View Code
                          </a>
                        </Button>
                        <Button 
                          className="bg-gradient-primary hover:shadow-electric transition-all duration-300"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-5 w-5" />
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* More projects coming soon */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-card border-border/50 shadow-soft max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold font-mono mb-4">More Projects Coming Soon!</h3>
              <p className="text-muted-foreground">
                I'm constantly working on new projects and exploring cutting-edge technologies. 
                Check back soon for more exciting developments!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}