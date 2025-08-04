import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Wrench, Cloud, TestTube, Users } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["C", "C++", "Java", "Python", "Ruby", "JavaScript", "TypeScript"],
      color: "text-blue-500"
    },
    {
      title: "Frontend",
      icon: Code,
      skills: ["React", "Next.js", "Tailwind CSS", "Redux Toolkit", "Zustand"],
      color: "text-green-500"
    },
    {
      title: "Backend",
      icon: Database,
      skills: ["Node.js", "Express.js", "Ruby on Rails"],
      color: "text-purple-500"
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MongoDB", "MySQL"],
      color: "text-orange-500"
    },
    {
      title: "DevOps & Tools",
      icon: Wrench,
      skills: ["Git", "GitHub", "Jenkins", "Docker", "Postman"],
      color: "text-red-500"
    },
    {
      title: "Cloud & Testing",
      icon: Cloud,
      skills: ["AWS (basic)", "Kubernetes (basic)", "TDD", "Automation Testing"],
      color: "text-cyan-500"
    },
    {
      title: "Methodologies",
      icon: Users,
      skills: ["Agile", "Scrum", "Problem Solving"],
      color: "text-indigo-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4 text-primary">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 shadow-soft hover:shadow-electric transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-lg bg-primary/10 ${category.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold font-mono group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="outline"
                        className="border-primary/30 text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-pointer"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional highlight section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-card border-border/50 shadow-soft max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <TestTube className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold font-mono">Problem Solving Expertise</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Passionate about algorithmic problem solving with a proven track record in competitive programming
              </p>
              <div className="flex justify-center">
                <Badge 
                  variant="outline" 
                  className="text-2xl py-3 px-6 border-primary/50 text-primary font-mono font-bold hover:bg-primary/10 transition-all duration-300"
                >
                  1500+ DSA Problems Solved
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}