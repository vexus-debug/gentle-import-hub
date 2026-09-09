import { Link, useLocation } from "react-router-dom";
import { X, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/config/site";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; path: string }[];
}

const MobileNav = ({ isOpen, onClose, navLinks }: MobileNavProps) => {
  const location = useLocation();

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] lg:hidden transition-opacity duration-300",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
    >
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div
        className={cn(
          "absolute right-0 top-0 h-full w-[85%] max-w-sm bg-card shadow-xl transition-transform duration-300 overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <span className="font-serif text-xl">{site.name}</span>
          <button onClick={onClose} aria-label="Close menu" className="p-2">
            <X size={22} />
          </button>
        </div>

        <nav className="p-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={onClose}
              className={cn(
                "block text-sm uppercase tracking-[0.12em] py-2",
                location.pathname === link.path ? "text-primary" : "text-foreground/80",
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/book" onClick={onClose} className="btn-luxury inline-block text-xs py-3 px-6 mt-4">
            Book Now
          </Link>
        </nav>

        <div className="p-6 border-t border-border space-y-3 text-sm text-muted-foreground">
          <a href={site.phoneHref} className="flex items-center gap-3">
            <Phone size={16} /> {site.phoneDisplay}
          </a>
          <a href={`mailto:${site.email}`} className="flex items-center gap-3 break-all">
            <Mail size={16} /> {site.email}
          </a>
          <p>{site.availability}</p>
          <p className="text-xs">Please book at least 24 hours in advance.</p>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
