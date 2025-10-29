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
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="GFG Logo" className="h-10 w-10" />
              <span className="text-xl font-bold">GFG Campus Body</span>
            </div>
            <p className="text-sm text-primary-foreground/90">
              Building tomorrow's tech leaders through collaborative learning
              and innovation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Button
                variant="ghost"
                onClick={() => handleNavClick("#about")}
                className="justify-start text-primary-foreground hover:text-primary-foreground px-0"
                data-testid="link-footer-about"
              >
                About Us
              </Button>
              <Button
                variant="ghost"
                onClick={() => handleNavClick("#team")}
                className="justify-start text-primary-foreground hover:text-primary-foreground px-0"
                data-testid="link-footer-team"
              >
                Our Team
              </Button>
              <Button
                variant="ghost"
                onClick={() => handleNavClick("#contact")}
                className="justify-start text-primary-foreground hover:text-primary-foreground px-0"
                data-testid="link-footer-contact"
              >
                Contact
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:text-primary-foreground"
                onClick={() => console.log("Navigate to GitHub")}
                data-testid="button-social-github"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:text-primary-foreground"
                onClick={() => console.log("Navigate to LinkedIn")}
                data-testid="button-social-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:text-primary-foreground"
                onClick={() => console.log("Navigate to Twitter")}
                data-testid="button-social-twitter"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:text-primary-foreground"
                onClick={() => console.log("Navigate to Instagram")}
                data-testid="button-social-instagram"
              >
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm text-primary-foreground/90">
            © {new Date().getFullYear()} GFG Campus Body. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
