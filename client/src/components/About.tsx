"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Users, Award, Code, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const stats = [
  { icon: Users, number: "500+", label: "Active Members" },
  { icon: Award, number: "50+", label: "Events Hosted" },
  { icon: Code, number: "100+", label: "Projects Built" },
  { icon: Calendar, number: "5+", label: "Years Active" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [init, setInit] = useState(false);

  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 text-white bg-gradient-to-b from-[#050505] via-[#0b0b0b] to-[#111111]"
    >
      {/* --- Aurora gradient overlay --- */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.12),transparent_70%),radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.12),transparent_70%)] blur-3xl animate-pulse-slow -z-10"></div>

      {/* --- Smooth Particle Background --- */}
      {init && (
        <Particles
          id="tsparticles"
          options={{
            fullScreen: { enable: false },
            background: { color: "transparent" },
            fpsLimit: 60,
            interactivity: {
              events: { onHover: { enable: true, mode: "repulse" }, resize: true },
              modes: { repulse: { distance: 100, duration: 0.4 } },
            },
            particles: {
              color: { value: "#22d3ee" },
              links: {
                color: "#22d3ee",
                distance: 120,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: { enable: true, speed: 0.6, outModes: { default: "bounce" } },
              number: { value: 45, density: { enable: true, area: 800 } },
              opacity: { value: 0.3 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 -z-10"
        />
      )}

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* --- Header --- */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6 tracking-tight">
            About{" "}
            <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]">
              Our Community
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            SMEC GFG Campus Body is a vibrant hub for coding enthusiasts,
            developers, and innovators dedicated to collaborative learning and
            skill growth.
          </p>
        </motion.div>

        {/* --- Mission & Offer Sections --- */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl hover:shadow-cyan-500/10 transition-all"
          >
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
              Our Mission
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              We aim to build an inclusive ecosystem where students collaborate,
              learn, and innovate through real-world projects, workshops, and
              mentorship programs.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our focus is on practical, hands-on learning that connects
              students to industry mentors and enhances their technical and
              career readiness.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl hover:shadow-cyan-500/10 transition-all"
          >
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
              What We Offer
            </h3>
            <ul className="space-y-3 text-gray-300">
              {[
                "Weekly coding workshops and technical sessions",
                "Hackathons and competitive programming contests",
                "Mentorship programs with industry professionals",
                "Collaborative project development opportunities",
                "Career guidance and placement preparation",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-cyan-400 mr-2 text-lg">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* --- Stats Cards --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <Card className="p-8 text-center bg-white/5 border border-white/10 rounded-2xl hover:shadow-cyan-500/10 hover:scale-105 transition-transform backdrop-blur-md">
                <stat.icon className="h-10 w-10 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-cyan-300 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
