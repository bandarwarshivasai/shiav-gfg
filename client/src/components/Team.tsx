"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import member1 from "@assets/generated_images/khaja.jpeg";
import member2 from "@assets/generated_images/kiran.jpeg";
import member3 from "@assets/generated_images/shiva.jpeg";
import member4 from "@assets/generated_images/potti.jpeg";
import member5 from "@assets/generated_images/Male_student_tech_lead_e193597c.png";
import member6 from "@assets/generated_images/Female_student_programmer_portrait_cb1da7d2.png";

// 🌌 Subtle Animated Background Particles / Aurora Glow
function ParticleBackground() {
  const [positions, setPositions] = useState(
    Array.from({ length: 6 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: `hsl(${Math.random() * 360}, 80%, 60%)`,
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prev) =>
        prev.map((p) => ({
          ...p,
          x: Math.random() * 100,
          y: Math.random() * 100,
        }))
      );
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {positions.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl opacity-40"
          animate={{
            top: `${p.y}%`,
            left: `${p.x}%`,
            backgroundColor: p.color,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          style={{
            width: "400px",
            height: "400px",
            filter: "blur(120px)",
          }}
        />
      ))}
    </div>
  );
}

const teamMembers = [
  {
    name: "Khaja Ghouse Khan",
    role: "President",
    image: member1,
    bio: "Entrepreneurial and proactive, with a passion for academics, club leadership, and creative problem-solving.",
    socials: { github: "#", linkedin: "#", email: "ghouse@example.com" },
  },
  {
    name: "Amarlapudi Kiran Kumar",
    role: "Vice President",
    image: member2,
    bio: "A passionate entrepreneurship enthusiast with a sharp, critical mind and a deep curiosity for innovative startups.",
    socials: { github: "#", linkedin: "#", email: "kirankumaramarlapudi@example.com" },
  },
  {
    name: "Bnadarwar Shiva Sai",
    role: "Technical Lead",
    image: member3,
    bio: "Passionate about technology, continuous learning, and logical problem-solving — always eager to innovate and inspire.",
    socials: { github: "#", linkedin: "#", email: "rahul@example.com" },
  },
  {
    name: "B Venkatesh",
    role: "Events Head",
    image: member4,
    bio: "Web developer and hackathon organizer.",
    socials: { github: "#", linkedin: "#", email: "ananya@example.com" },
  },
  {
    name: "Karthik Reddy",
    role: "Outreach Lead",
    image: member5,
    bio: "Mobile app developer and tech community builder.",
    socials: { github: "#", linkedin: "#", email: "karthik@example.com" },
  },
  {
    name: "Sneha Gupta",
    role: "Content Lead",
    image: member6,
    bio: "Technical writer and frontend developer.",
    socials: { github: "#", linkedin: "#", email: "sneha@example.com" },
  },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="relative py-24 min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 drop-shadow-[0_0_25px_rgba(255,0,255,0.25)]">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Dedicated leaders driving innovation and fostering a collaborative tech culture.
          </p>
        </motion.div>

        {/* Member Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 bg-white/5 backdrop-blur-md border border-cyan-400/10 rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.1)] hover:shadow-[0_0_50px_rgba(0,255,255,0.3)] hover:scale-[1.03] transition-all duration-300 text-center">
                <Avatar className="h-28 w-28 mx-auto mb-5 border-2 border-cyan-400/40 shadow-[0_0_25px_rgba(0,255,255,0.4)]">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback>
                </Avatar>

                <h3 className="text-xl font-semibold mb-1 text-cyan-400">
                  {member.name}
                </h3>
                <p className="text-fuchsia-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{member.bio}</p>

                <div className="flex justify-center gap-4 mt-3">
                  <Button variant="ghost" size="icon" className="hover:text-cyan-400 transition">
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:text-fuchsia-400 transition">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:text-emerald-400 transition">
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
