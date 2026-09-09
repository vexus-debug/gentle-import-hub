import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glossy-dark text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-0 oily-sheen" />
      
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl tracking-wide">ZealAesthetics</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Abuja's premier destination for luxury spa services and professional aesthetic training. 
              Where beauty meets expertise.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                className="glossy-icon p-2 rounded-full transition-all duration-500 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="glossy-icon p-2 rounded-full transition-all duration-500 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Training Programs", path: "/training" },
                { name: "Gallery", path: "/gallery" },
                { name: "Testimonials", path: "/testimonials" },
                { name: "Contact", path: "/contact" },
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

          {/* Services */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] mb-6">Services</h4>
            <nav className="space-y-3">
              {[
                { name: "American Fillers", path: "/services/american-fillers" },
                { name: "American Toxins", path: "/services/american-toxins" },
                { name: "Korean Fillers", path: "/services/korean-fillers" },
                { name: "Korean Injectables", path: "/services/korean-injectables" },
                { name: "Skin Boosters", path: "/services/skin-boosters" },
                { name: "Facial Treatments", path: "/services/facial-treatments" },
                { name: "Body Sculpting", path: "/services/body-sculpting" },
                { name: "IV Therapy", path: "/services/iv-therapy" },
                { name: "Wellness", path: "/services/wellness" },
              ].map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="block text-white/70 hover:text-white transition-colors duration-300 text-sm"
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] mb-6">Contact</h4>
            <div className="space-y-4">
              <a
                href="tel:+2349015012285"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300 text-sm"
              >
                <Phone size={16} />
                <span>+234 901 501 2285</span>
              </a>
              <a
                href="mailto:info@zealaesthetics.com"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300 text-sm"
              >
                <Mail size={16} />
                <span>info@zealaesthetics.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>
                  33 Tunis Street<br />
                  Wuse Zone 6<br />
                  Abuja, Nigeria
                </span>
              </div>

              {/* Hours */}
              <p className="text-white/70 text-sm">
                Mon-Sat: 10am - 7pm<br />
                Sunday: Closed
              </p>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/2349015012285?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-white text-secondary text-xs uppercase tracking-[0.15em] font-medium transition-all duration-500 hover:opacity-90 hover:scale-105"
                style={{
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3), 0 4px 12px rgba(0,0,0,0.2)',
                }}
              >
                <MessageCircle size={16} />
                Book via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
            <p>© {currentYear} ZealAesthetics Institute & Spa. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
