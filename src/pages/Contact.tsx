import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/gallery/glowing-result.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const message = `Hello, my name is ${formData.name}.\n\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInterested in: ${formData.service}\n\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/2349015012285?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Your message will be sent via WhatsApp.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+234 901 501 2285",
      href: "tel:+2349015012285",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@zealaesthetics.com",
      href: "mailto:info@zealaesthetics.com",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "33 Tunis Street, Wuse Zone 6\nAbuja 900286, FCT, Nigeria",
      href: "https://maps.google.com/?q=33+Tunis+Street+Wuse+Zone+6+Abuja+Nigeria",
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Mon-Sat: 10am - 7pm\nSunday: Closed",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />
        <div className="hero-overlay" />
        <div className="absolute inset-0 oily-sheen" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="subheading text-white/80 mb-4">Get in Touch</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-wide">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 glossy-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div>
              <p className="subheading mb-4">Reach Out</p>
              <h2 className="font-serif text-4xl md:text-5xl text-secondary mb-6">
                We'd Love to Hear from You
              </h2>
              <div className="divider-elegant !mx-0" />
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you want to book a treatment, inquire about our training programs, 
                or just have questions, we're here to help. Reach out through any of the 
                channels below.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="glossy-icon flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.1em] text-muted-foreground mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.label === "Address" ? "_blank" : undefined}
                          rel={item.label === "Address" ? "noopener noreferrer" : undefined}
                          className="text-secondary hover:text-primary transition-colors whitespace-pre-line"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-secondary whitespace-pre-line">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Alternate Address Note */}
              <div className="glass-card p-4 mb-6">
                <p className="text-sm text-muted-foreground relative z-10">
                  <strong>Alternate Address:</strong> 27 Mbabane Street, beside old NEPA office, 
                  Wuse Zone 6, Abuja Nigeria
                </p>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/2349015012285?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-luxury bg-green-600 hover:bg-green-700"
                style={{
                  background: 'linear-gradient(145deg, hsl(142 70% 35%) 0%, hsl(142 70% 30%) 50%, hsl(142 70% 35%) 100%)',
                }}
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8 md:p-10">
              <h3 className="font-serif text-2xl text-secondary mb-6 relative z-10">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm uppercase tracking-[0.1em] text-muted-foreground mb-2"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-background border-border focus:border-primary pearl-border"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm uppercase tracking-[0.1em] text-muted-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-background border-border focus:border-primary pearl-border"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm uppercase tracking-[0.1em] text-muted-foreground mb-2"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+234 XXX XXX XXXX"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="bg-background border-border focus:border-primary pearl-border"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm uppercase tracking-[0.1em] text-muted-foreground mb-2"
                  >
                    Interested In
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="flex h-10 w-full rounded-md bg-background border border-border px-3 py-2 text-base focus:border-primary focus:outline-none focus:ring-0 pearl-border"
                  >
                    <option value="">Select an option</option>
                    <option value="Spa Treatment">Spa Treatment</option>
                    <option value="Facial Treatment">Facial Treatment</option>
                    <option value="Massage Therapy">Massage Therapy</option>
                    <option value="Training Programs">Training Programs</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm uppercase tracking-[0.1em] text-muted-foreground mb-2"
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your goals or ask any questions..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="bg-background border-border focus:border-primary resize-none pearl-border"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full btn-luxury flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Send Message via WhatsApp
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Your message will be sent through WhatsApp for a quick
                  response.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-muted relative oily-sheen">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center glass-card p-8">
            <div className="glossy-icon w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif text-xl text-secondary mb-2 relative z-10">
              ZealAesthetics Institute & Spa
            </h3>
            <p className="text-muted-foreground relative z-10">
              33 Tunis Street, Wuse Zone 6
              <br />
              Abuja 900286, FCT, Nigeria
            </p>
            <a
              href="https://maps.google.com/?q=33+Tunis+Street+Wuse+Zone+6+Abuja+Nigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-primary text-sm uppercase tracking-[0.1em] hover:underline relative z-10"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
