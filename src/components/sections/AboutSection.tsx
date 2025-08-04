import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, GraduationCap, Code, Target } from "lucide-react";

export function AboutSection() {
  const achievements = [
    { platform: "Codeforces", status: "Specialist", rating: "Max Rating: 1516", url: "https://codeforces.com/profile/Light_" },
    { platform: "CodeChef", status: "3★", rating: "Max Rating: 1735", url: "https://www.codechef.com/users/subham_2401" },
    { platform: "Facebook Hacker Cup 2022", status: "World Rank 2284 (Round 1), 2921 (Round 2)" },
    { platform: "Innovative India Coding Championship", status: "Qualified for Round 3 among 4000+ participants" },
    { platform: "CodeRush Challenge @ IET Lucknow", status: "Top 43 rank" },
    { platform: "Codeforces Round 886", status: "Global Rank 89 among 25,000+ participants" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4 text-primary">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Code className="h-8 w-8 text-primary mr-4" />
                  <h3 className="text-2xl font-bold font-mono">Bio</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Subham Singh is a Full Stack Developer (MERN) with a strong foundation in building 
                  scalable web applications and a passion for solving complex problems—demonstrated by 
                  solving over <span className="text-primary font-semibold">1500 DSA problems</span>. 
                  With experience in both development and testing, he thrives in Agile environments 
                  and contributes to both frontend and backend systems.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <GraduationCap className="h-8 w-8 text-primary mr-4" />
                  <h3 className="text-2xl font-bold font-mono">Education</h3>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold">B.Tech in Computer Science</h4>
                  <p className="text-muted-foreground">Institute of Engineering and Technology, Lucknow</p>
                  <p className="text-sm text-muted-foreground">2020–2024</p>
                  <Badge variant="outline" className="border-primary/50 text-primary">
                    CGPA: 8.57
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements Section */}
          <div>
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-center mb-8">
                  <Trophy className="h-8 w-8 text-primary mr-4" />
                  <h3 className="text-2xl font-bold font-mono">Competitive Programming Achievements</h3>
                </div>
                
                <div className="space-y-6">
                  {achievements.map((achievement, index) => (
                     <div 
                       key={index}
                       className="flex items-start space-x-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors duration-300"
                     >
                       <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                       <div>
                         {achievement.url ? (
                           <a 
                             href={achievement.url}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="font-semibold text-foreground hover:text-primary transition-colors duration-200"
                           >
                             {achievement.platform}
                           </a>
                         ) : (
                           <h4 className="font-semibold text-foreground">{achievement.platform}</h4>
                         )}
                         <p className="text-sm text-muted-foreground">{achievement.status}</p>
                         {achievement.rating && (
                           <p className="text-xs text-primary font-mono">{achievement.rating}</p>
                         )}
                       </div>
                     </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}