import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { site, whatsappLink, defaultWhatsAppMessage } from "@/config/site";
import logo from "@/assets/logo.png.asset.json";
import { services } from "@/data/services";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glossy-dark text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-0 oily-sheen" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo.url} alt={`${site.name} logo`} className="h-12 w-12 object-contain" />
              <h3 className="font-serif text-2xl tracking-wide">{site.name}</h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">{site.shortDescription}</p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {[
                { name: "Services", path: "/services" },
                { name: "Gallery", path: "/gallery" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
                { name: "Book a Treatment", path: "/book" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-white/70 hover:text-white transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] mb-6">Treatments</h4>
            <nav className="space-y-3">
              {services.slice(0, 9).map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="block text-white/70 hover:text-white transition-colors duration-300 text-sm"
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] mb-6">Contact</h4>
            <div className="space-y-4">
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300 text-sm"
              >
                <Phone size={16} />
                <span>{site.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300 text-sm break-all"
              >
                <Mail size={16} />
                <span>{site.email}</span>
              </a>
              <div className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>
                  Home service across {site.city}
                  <br />
                  {site.areas.slice(0, 5).join(", ")} and more
                </span>
              </div>
              <div className="flex items-start gap-3 text-white/70 text-sm">
                <Clock size={16} className="mt-0.5 flex-shrink-0" />
                <span>
                  {site.availability}
                  <br />
                  Bookings taken at least 24 hours in advance
                </span>
              </div>

              <a
                href={whatsappLink(defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-white text-secondary text-xs uppercase tracking-[0.15em] font-medium transition-all duration-500 hover:opacity-90 hover:scale-105"
              >
                <MessageCircle size={16} />
                Book via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 relative z-10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-xs text-white/50 text-center">
            © {currentYear} {site.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
