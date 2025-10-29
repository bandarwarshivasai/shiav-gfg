import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import member1 from "@assets/generated_images/Male_student_headshot_portrait_6e9d168e.png";
import member2 from "@assets/generated_images/Female_student_headshot_portrait_865a1dfb.png";
import member3 from "@assets/generated_images/Male_student_with_glasses_6b6ffb92.png";
import member4 from "@assets/generated_images/Female_student_bright_smile_204a7f3c.png";
import member5 from "@assets/generated_images/Male_student_tech_lead_e193597c.png";
import member6 from "@assets/generated_images/Female_student_programmer_portrait_cb1da7d2.png";

const teamMembers = [
  {
    name: "Arjun Sharma",
    role: "President",
    image: member1,
    bio: "Full-stack developer passionate about open source",
    socials: {
      github: "#",
      linkedin: "#",
      email: "arjun@example.com",
    },
  },
  {
    name: "Priya Patel",
    role: "Vice President",
    image: member2,
    bio: "AI/ML enthusiast and competitive programmer",
    socials: {
      github: "#",
      linkedin: "#",
      email: "priya@example.com",
    },
  },
  {
    name: "Rahul Mehta",
    role: "Technical Lead",
    image: member3,
    bio: "Backend wizard and cloud computing expert",
    socials: {
      github: "#",
      linkedin: "#",
      email: "rahul@example.com",
    },
  },
  {
    name: "Ananya Singh",
    role: "Events Head",
    image: member4,
    bio: "Web developer and hackathon organizer",
    socials: {
      github: "#",
      linkedin: "#",
      email: "ananya@example.com",
    },
  },
  {
    name: "Karthik Reddy",
    role: "Outreach Lead",
    image: member5,
    bio: "Mobile app developer and tech community builder",
    socials: {
      github: "#",
      linkedin: "#",
      email: "karthik@example.com",
    },
  },
  {
    name: "Sneha Gupta",
    role: "Content Lead",
    image: member6,
    bio: "Technical writer and frontend developer",
    socials: {
      github: "#",
      linkedin: "#",
      email: "sneha@example.com",
    },
  },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dedicated leaders driving innovation and fostering a collaborative
            learning environment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center hover-elevate active-elevate-2 transition-all h-full">
                <Avatar className="h-32 w-32 mx-auto mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback>
                </Avatar>

                <h3 className="text-xl font-semibold mb-1" data-testid={`text-name-${index}`}>
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3" data-testid={`text-role-${index}`}>
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {member.bio}
                </p>

                <div className="flex justify-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => console.log(`Navigate to ${member.name}'s GitHub`)}
                    data-testid={`button-github-${index}`}
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => console.log(`Navigate to ${member.name}'s LinkedIn`)}
                    data-testid={`button-linkedin-${index}`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => console.log(`Email ${member.name}`)}
                    data-testid={`button-email-${index}`}
                  >
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
