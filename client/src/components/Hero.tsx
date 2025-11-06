"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImg from "@assets/generated_images/Students_coding_together_campus_e520f742.png";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

export default function Hero() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const handleJoinClick = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* --- Hero background image --- */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 brightness-[0.35]"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>

      {/* --- Gradient & Aurora overlays --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.15),transparent_70%),radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.15),transparent_70%)] blur-3xl animate-pulse-slow" />

      {/* --- Smooth Particles Layer --- */}
      {init && (
        <Particles
          id="heroParticles"
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
                distance: 130,
                enable: true,
                opacity: 0.25,
                width: 1,
              },
              move: { enable: true, speed: 0.5, outModes: { default: "bounce" } },
              number: { value: 40, density: { enable: true, area: 900 } },
              opacity: { value: 0.25 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 -z-10"
        />
      )}

      {/* --- Content --- */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
            Welcome to{" "}
            <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]">
              SMEC GFG Campus Body
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Building tomorrow's tech leaders through collaboration, innovation,
            and community-driven growth.
          </p>

          <Button
            onClick={handleJoinClick}
            size="lg"
            className="bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/30 hover:text-white text-lg px-10 py-6 h-auto rounded-xl backdrop-blur-md transition-all shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]"
            data-testid="button-hero-join"
          >
            Join Our Community <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
