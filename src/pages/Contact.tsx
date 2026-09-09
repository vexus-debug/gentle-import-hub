import { Link } from "react-router-dom";
import { Phone, Mail, MessageCircle, Clock, MapPin, CalendarClock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { faqs } from "@/data/faqs";
import { site, whatsappLink, defaultWhatsAppMessage } from "@/config/site";

const Contact = () => (
  <Layout>
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <p className="subheading mb-4">Contact</p>
        <h1 className="font-serif text-4xl md:text-5xl text-secondary">Talk to us</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          WhatsApp is the fastest way to reach us. Treatments are booked at least 24 hours in advance.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <a href={whatsappLink(defaultWhatsAppMessage)} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 rounded-lg border border-border p-6 hover:border-primary transition-colors">
            <MessageCircle className="text-primary" />
            <span>
              <span className="block font-medium text-secondary">WhatsApp</span>
              <span className="block text-sm text-muted-foreground">{site.phoneDisplay}</span>
            </span>
          </a>
          <a href={site.phoneHref} className="flex items-start gap-4 rounded-lg border border-border p-6 hover:border-primary transition-colors">
            <Phone className="text-primary" />
            <span>
              <span className="block font-medium text-secondary">Phone</span>
              <span className="block text-sm text-muted-foreground">{site.phoneDisplay}</span>
            </span>
          </a>
          <a href={`mailto:${site.email}`} className="flex items-start gap-4 rounded-lg border border-border p-6 hover:border-primary transition-colors">
            <Mail className="text-primary" />
            <span>
              <span className="block font-medium text-secondary">Email</span>
              <span className="block text-sm text-muted-foreground break-all">{site.email}</span>
            </span>
          </a>
          <div className="flex items-start gap-4 rounded-lg border border-border p-6">
            <Clock className="text-primary" />
            <span>
              <span className="block font-medium text-secondary">Availability</span>
              <span className="block text-sm text-muted-foreground">{site.availability}</span>
            </span>
          </div>
          <div className="flex items-start gap-4 rounded-lg border border-border p-6">
            <CalendarClock className="text-primary" />
            <span>
              <span className="block font-medium text-secondary">Notice period</span>
              <span className="block text-sm text-muted-foreground">
                All treatments must be booked at least 24 hours in advance.
              </span>
            </span>
          </div>
          <div className="flex items-start gap-4 rounded-lg border border-border p-6">
            <MapPin className="text-primary" />
            <span>
              <span className="block font-medium text-secondary">Where we cover</span>
              <span className="block text-sm text-muted-foreground">{site.areas.join(", ")} and more across {site.city}.</span>
            </span>
          </div>
          <Link to="/book" className="btn-luxury inline-block">Open the booking form</Link>
        </div>

        <div>
          <h2 className="font-serif text-3xl text-secondary mb-8">Frequently asked</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-lg border border-border p-5">
                <summary className="cursor-pointer text-sm font-medium text-secondary">{faq.question}</summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
