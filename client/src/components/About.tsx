import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Award, Code, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  { icon: Users, number: "500+", label: "Active Members" },
  { icon: Award, number: "50+", label: "Events Hosted" },
  { icon: Code, number: "100+", label: "Projects Built" },
  { icon: Calendar, number: "5+", label: "Years Active" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-primary">Our Community</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            GFG Campus Body is a vibrant community of coding enthusiasts,
            developers, and tech innovators dedicated to fostering collaborative
            learning and skill development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-muted-foreground mb-4">
              We strive to create an inclusive environment where students can
              learn, share knowledge, and collaborate on real-world projects.
              Through workshops, hackathons, and mentorship programs, we empower
              our members to excel in their tech journey.
            </p>
            <p className="text-muted-foreground">
              Our community focuses on hands-on learning, industry connections,
              and building practical skills that prepare members for successful
              careers in technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-4">What We Offer</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Weekly coding workshops and technical sessions</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Hackathons and competitive programming contests</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Mentorship programs with industry professionals</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Collaborative project development opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Career guidance and placement preparation</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <Card className="p-6 text-center hover-elevate active-elevate-2 transition-all">
                <stat.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
