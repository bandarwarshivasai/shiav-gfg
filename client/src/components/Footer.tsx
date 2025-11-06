"use client";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "@assets/generated_images/Green_G_logo_design_28db36e5.png";

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-black via-zinc-900 to-neutral-900 text-gray-300 border-t border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* --- Logo + Description --- */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logoImg}
                alt="GFG Logo"
                className="h-10 w-10 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]"
              />
              <span className="text-xl font-bold text-cyan-400">
                SMEC GFG Campus Body
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Building tomorrow's tech leaders through collaborative learning
              and innovation. Join us and grow with the community.
            </p>
          </div>

          {/* --- Quick Links --- */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-l-4 border-cyan-400 pl-3">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              <Button
                variant="ghost"
                onClick={() => handleNavClick("#about")}
                className="justify-start text-gray-300 hover:text-cyan-400 hover:translate-x-1 transition-all px-0"
                data-testid="link-footer-about"
              >
                About Us
              </Button>
              <Button
                variant="ghost"
                onClick={() => handleNavClick("#team")}
                className="justify-start text-gray-300 hover:text-cyan-400 hover:translate-x-1 transition-all px-0"
                data-testid="link-footer-team"
              >
                Our Team
              </Button>
              <Button
                variant="ghost"
                onClick={() => handleNavClick("#contact")}
                className="justify-start text-gray-300 hover:text-cyan-400 hover:translate-x-1 transition-all px-0"
                data-testid="link-footer-contact"
              >
                Contact
              </Button>
            </div>
          </div>

          {/* --- Social Links --- */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 border-l-4 border-cyan-400 pl-3">
              Connect With Us
            </h4>
            <div className="flex gap-3">
              {[
                { Icon: Github, label: "GitHub" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Instagram, label: "Instagram" },
              ].map(({ Icon, label }) => (
                <Button
                  key={label}
                  variant="ghost"
                  size="icon"
                  className="group text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-full transition-all backdrop-blur-sm"
                  onClick={() => console.log(`Navigate to ${label}`)}
                  data-testid={`button-social-${label.toLowerCase()}`}
                >
                  <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* --- Bottom Line --- */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-sm text-gray-400 tracking-wide">
            © {new Date().getFullYear()}{" "}
            <span className="text-cyan-400">SMEC GFG Campus Body</span>. All
            rights reserved.
          </p>
        </div>
      </div>

      {/* --- Cyan Glow Accent --- */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent blur-[2px]" />
    </footer>
  );
}
