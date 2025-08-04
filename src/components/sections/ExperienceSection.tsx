import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      title: "SDET",
      company: "Coupa Software",
      duration: "Nov 2024 – June 2025",
      location: "Remote",
      type: "Full-time",
      achievements: [
        "Practiced test-driven development (TDD), performed stack validation, API testing, and end-to-end testing",
        "Reduced automation backlog by 50%",
        "Built a server-side paginated React table for 10K+ records using Rails APIs and MySQL",
        "Worked in Agile (Scrum) teams with active involvement in sprint planning and retrospectives",
        "Owned 2 Epics and collaborated closely with developers and QEs"
      ],
      skills: ["TDD", "API Testing", "React", "Rails", "MySQL", "Agile/Scrum"]
    },
    {
      title: "SDE Intern",
      company: "Careers360",
      duration: "June 2024 – Sep 2024",
      location: "Noida, India",
      type: "Internship",
      achievements: [
        "Improved UI performance of Edu Abroad platform via pagination and debouncing",
        "Reduced unnecessary API calls by 30% and improved page interaction speed by 20%",
        "Mapped 5+ MySQL table relationships to streamline backend-to-frontend data flow"
      ],
      skills: ["React", "Performance Optimization", "MySQL", "API Integration"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4 text-primary">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 shadow-soft hover:shadow-electric transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Left side - Job info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <Briefcase className="h-6 w-6 text-primary" />
                      <div>
                        <h3 className="text-2xl font-bold font-mono text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-xl text-primary font-semibold">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                      <Badge variant="outline" className="border-primary/50 text-primary">
                        {exp.type}
                      </Badge>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary"
                          className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}