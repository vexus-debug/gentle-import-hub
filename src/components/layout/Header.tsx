import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";
import { site } from "@/config/site";
import logo from "@/assets/logo.png.asset.json";

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-secondary dark:bg-card border-b border-secondary-foreground/10 dark:border-border/50"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 relative z-10">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo.url} alt={`${site.name} logo`} className="h-12 w-12 object-contain" />
              <span className="font-serif text-xl md:text-2xl tracking-wide text-white">
                {site.name}
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-xs uppercase tracking-[0.12em] transition-all duration-500 hover:text-primary relative",
                    isActive(link.path) ? "text-primary" : "text-white/90",
                  )}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                  )}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 text-xs text-white/90 hover:text-primary transition-colors"
              >
                <Phone size={14} />
                <span>{site.phoneDisplay}</span>
              </a>
              <Link to="/book" className="btn-luxury text-xs py-2 px-4">
                Book Now
              </Link>
            </div>

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

      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};

export default Header;
