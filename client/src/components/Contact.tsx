"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";

// 🌌 Animated Particle / Aurora Background
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

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await fetch("https://formspree.io/f/mzzkyenb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to send message");
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  return (
    <section id="contact" className="relative py-24 min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 drop-shadow-[0_0_25px_rgba(255,0,255,0.25)]">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Have questions or want to join our community? We'd love to hear from you!
          </p>
        </motion.div>

        {/* Form + Info */}
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Card className="p-8 bg-white/5 backdrop-blur-md border border-cyan-400/10 shadow-[0_0_30px_rgba(0,255,255,0.15)] rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-cyan-400 mb-2 block">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-black/40 border border-cyan-400/30 text-white placeholder:text-gray-400 focus:ring-cyan-400"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-cyan-400 mb-2 block">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-black/40 border border-cyan-400/30 text-white placeholder:text-gray-400 focus:ring-cyan-400"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-cyan-400 mb-2 block">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us what you'd like to know..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="bg-black/40 border border-cyan-400/30 text-white placeholder:text-gray-400 focus:ring-cyan-400"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black font-semibold hover:shadow-[0_0_25px_rgba(255,0,255,0.4)] transition-all duration-300"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="p-8 bg-white/5 backdrop-blur-md border border-fuchsia-400/10 shadow-[0_0_30px_rgba(255,0,255,0.15)] rounded-2xl h-full">
              <h3 className="text-2xl font-semibold mb-6 text-fuchsia-400">
                Contact Information
              </h3>

              <div className="space-y-8 text-gray-300">
                <div className="flex items-start gap-4">
                  <div className="bg-fuchsia-400/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-fuchsia-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-white">Address</h4>
                    <p className="text-sm text-gray-400">
                      St Martins Engineering College, Campus Building
                      <br />
                      Kompally, Hyderabad
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-fuchsia-400/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-fuchsia-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-white">Email</h4>
                    <p className="text-sm text-gray-400">smec@gfgcampus.edu</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-fuchsia-400/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-fuchsia-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-white">Phone</h4>
                    <p className="text-sm text-gray-400">+91 123 456 7890</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
