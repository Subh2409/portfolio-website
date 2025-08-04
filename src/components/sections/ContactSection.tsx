import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "singhsubham62810@gmail.com",
      href: "mailto:singhsubham62810@gmail.com",
      color: "text-blue-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(+91) 7985399182",
      href: "tel:+917985399182",
      color: "text-green-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/singhsubham",
      href: "https://linkedin.com/in/singhsubham",
      color: "text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/subham24092001",
      href: "https://github.com/subham24092001",
      color: "text-gray-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Prayagraj, India",
      href: null,
      color: "text-red-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4 text-primary">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <Card 
                  key={index}
                  className="bg-gradient-card border-border/50 shadow-soft hover:shadow-electric transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    {contact.href ? (
                      <a 
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="block text-center group-hover:scale-105 transition-transform duration-300"
                      >
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 ${contact.color}`}>
                          <IconComponent className="h-8 w-8" />
                        </div>
                        <h3 className="text-lg font-bold font-mono mb-2 group-hover:text-primary transition-colors">
                          {contact.label}
                        </h3>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors break-all">
                          {contact.value}
                        </p>
                      </a>
                    ) : (
                      <div className="text-center">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 ${contact.color}`}>
                          <IconComponent className="h-8 w-8" />
                        </div>
                        <h3 className="text-lg font-bold font-mono mb-2">
                          {contact.label}
                        </h3>
                        <p className="text-muted-foreground">
                          {contact.value}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to action */}
          <div className="text-center mt-12">
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-mono mb-4">Ready to Work Together?</h3>
                <p className="text-muted-foreground text-lg mb-6">
                  I'm actively seeking full-time software engineering roles and exciting projects. 
                  Let's build something amazing together!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:singhsubham62810@gmail.com"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-primary text-white font-semibold rounded-lg hover:shadow-electric transition-all duration-300 font-mono"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </a>
                  <a
                    href="https://linkedin.com/in/singhsubham"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-primary/50 text-primary font-semibold rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300 font-mono"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    Connect on LinkedIn
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}