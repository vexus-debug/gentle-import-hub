import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Phone } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map/Image Side */}
          <div className="relative">
            <div className="aspect-square rounded-sm overflow-hidden glossy-frame bg-secondary/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.0234567890123!2d7.475!3d9.075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDQnMzAuMCJOIDfCsDI4JzMwLjAiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ZealAesthetics Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Info Side */}
          <div>
            <p className="subheading mb-4">Visit Us</p>
            <h2 className="font-serif text-4xl md:text-5xl text-secondary mb-6">
              Located in the Heart of Abuja
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Find us in the vibrant Wuse Zone 6 area. We look forward to welcoming you 
              to our luxurious space designed with your comfort and relaxation in mind.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-secondary mb-1">Address</h4>
                  <p className="text-muted-foreground">
                    33 Tunis Street, Wuse Zone 6, Abuja, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-secondary mb-1">Opening Hours</h4>
                  <p className="text-muted-foreground">
                    Monday – Saturday: 10:00 AM – 7:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-secondary mb-1">Contact</h4>
                  <p className="text-muted-foreground">
                    +234 901 501 2285
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/2349015012285?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury"
              >
                Book Appointment
              </a>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 text-secondary text-sm uppercase tracking-[0.15em] hover:text-primary transition-colors pearl-border px-6 py-3"
              >
                Get Directions
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
