import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Training", path: "/training" },
    { name: "Gallery", path: "/gallery" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceSubLinks = [
    { name: "American Fillers", path: "/services/american-fillers" },
    { name: "American Toxins", path: "/services/american-toxins" },
    { name: "Korean Fillers", path: "/services/korean-fillers" },
    { name: "Korean Injectables", path: "/services/korean-injectables" },
    { name: "Skin Boosters", path: "/services/skin-boosters" },
    { name: "Facial Treatments", path: "/services/facial-treatments" },
    { name: "Body Sculpting", path: "/services/body-sculpting" },
    { name: "IV Therapy", path: "/services/iv-therapy" },
    { name: "Wellness", path: "/services/wellness" },
    { name: "Aesthetics Training", path: "/services/aesthetics-training" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isServiceActive = () => location.pathname.startsWith("/services");

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-secondary dark:bg-card border-b border-secondary-foreground/10 dark:border-border/50" 
          : "bg-transparent border-b border-transparent"
      )}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 relative z-10">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="font-serif text-xl md:text-2xl tracking-wide text-white">
                ZealAesthetics
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                link.name === "Services" ? (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={cn(
                        "text-xs uppercase tracking-[0.12em] transition-all duration-500 hover:text-primary relative flex items-center gap-1",
                        isServiceActive() ? "text-primary" : "text-white/90"
                      )}
                    >
                      {link.name}
                      <ChevronDown size={12} className={cn("transition-transform", servicesOpen && "rotate-180")} />
                      {isServiceActive() && (
                        <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                      )}
                    </Link>
                    
                    {/* Dropdown Menu */}
                    {servicesOpen && (
                      <div className="absolute top-full left-0 pt-2 w-56">
                        <div className="bg-card dark:bg-card border border-border rounded-lg shadow-lg py-2">
                          {serviceSubLinks.map((subLink) => (
                            <Link
                              key={subLink.path}
                              to={subLink.path}
                              className={cn(
                                "block px-4 py-2 text-sm transition-colors hover:bg-muted hover:text-primary",
                                isActive(subLink.path) ? "text-primary bg-muted/50" : "text-foreground/80"
                              )}
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "text-xs uppercase tracking-[0.12em] transition-all duration-500 hover:text-primary relative",
                      isActive(link.path) ? "text-primary" : "text-white/90"
                    )}
                  >
                    {link.name}
                    {isActive(link.path) && (
                      <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                    )}
                  </Link>
                )
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+2349015012285"
                className="flex items-center gap-2 text-xs text-white/90 hover:text-primary transition-colors"
              >
                <Phone size={14} />
                <span>+234 901 501 2285</span>
              </a>
              <a
                href="https://wa.me/2349015012285?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury text-xs py-2 px-4"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileNavOpen(true)}
              className="lg:hidden p-2 text-white"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        navLinks={navLinks}
        serviceSubLinks={serviceSubLinks}
      />
    </>
  );
};

export default Header;
