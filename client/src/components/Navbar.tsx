"use client";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logoImg from "@assets/generated_images/Green_G_logo_design_28db36e5.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [location, navigate] = useLocation();

  const navLinks = [
    { name: "Home", id: "home", href: "#home" },
    { name: "About", id: "about", href: "#about" },
    { name: "Team", id: "team", href: "#team" },
    { name: "Contact", id: "contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, id: string) => {
    setIsOpen(false);
    setActive(id);

    if (href === "#home") {
      if (location !== "/") {
        navigate("/");
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 300);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el2 = document.querySelector(href);
        if (el2) el2.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/70 backdrop-blur-md shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavClick("#home", "home")}
          >
            <img src={logoImg} alt="GFG Logo" className="h-10 w-10" />
            <span className="text-2xl font-bold text-white">
              SMEC GFG Campus Body
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 relative">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href, link.id)}
                className={`relative text-base font-medium transition-colors duration-300 ${
                  active === link.id
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-cyan-300"
                }`}
              >
                {link.name}
                {active === link.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 mx-auto h-[2px] w-full bg-cyan-400 rounded-full shadow-[0_0_6px_#22d3ee]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
            <Button
              variant="default"
              onClick={() => handleNavClick("#contact", "contact")}
              className="ml-4 bg-cyan-500 hover:bg-cyan-400 text-white border-none rounded-lg"
            >
              Join Us
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href, link.id)}
                className={`block w-full text-left py-2 text-lg ${
                  active === link.id
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                {link.name}
              </button>
            ))}
            <Button
              variant="default"
              onClick={() => handleNavClick("#contact", "contact")}
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-white"
            >
              Join Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
