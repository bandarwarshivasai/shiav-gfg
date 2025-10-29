import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "@assets/generated_images/Green_G_logo_design_28db36e5.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <div
              className="flex items-center gap-3 hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors cursor-pointer"
              data-testid="link-home"
            >
              <img src={logoImg} alt="GFG Logo" className="h-10 w-10" />
              <span className="text-xl font-bold text-foreground">
                GFG Campus Body
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                onClick={() => handleNavClick(link.href)}
                className="text-base"
                data-testid={`link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </Button>
            ))}
            <Button
              variant="default"
              className="ml-4"
              onClick={() => handleNavClick("#contact")}
              data-testid="button-join"
            >
              Join Us
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-menu-toggle"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                onClick={() => handleNavClick(link.href)}
                className="w-full justify-start text-base"
                data-testid={`link-mobile-${link.name.toLowerCase()}`}
              >
                {link.name}
              </Button>
            ))}
            <Button
              variant="default"
              onClick={() => handleNavClick("#contact")}
              className="w-full"
              data-testid="button-mobile-join"
            >
              Join Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
