import { Link } from "react-router-dom";
import { ArrowRight, CalendarClock, Home, Sparkles, ShieldCheck } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { services, serviceCategories } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { faqs } from "@/data/faqs";
import { site, whatsappLink, defaultWhatsAppMessage } from "@/config/site";
import heroImage from "@/assets/rose/hero-home-massage.jpg";
import arrival from "@/assets/rose/therapist-arrival.jpg";
import hotel from "@/assets/rose/hero-hotel-spa.jpg";
import couples from "@/assets/rose/hero-couples.jpg";

const Index = () => {
  const featured = services.slice(0, 6);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative -mt-20 pt-32 pb-24 md:pt-48 md:pb-36">
        <img
          src={heroImage}
          alt="Therapist giving a relaxing massage in a client's home in Lagos"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/70" />
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <p className="subheading mb-4 text-white/80">Home service spa · {site.city}</p>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight max-w-4xl mx-auto">
            The spa comes to you
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-white/85 leading-relaxed">
            {site.shortDescription}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/book" className="btn-luxury">
              Book a treatment
            </Link>
            <a
              href={whatsappLink(defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.15em] border border-white/40 px-6 py-3 hover:bg-white hover:text-secondary transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.15em] text-white/70">
            Please book at least 24 hours in advance
          </p>
        </div>
      </section>

      {/* Welcome */}
      <ScrollReveal animation="fade-up">
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 grid gap-12 md:grid-cols-2 items-center">
            <img
              src={arrival}
              alt="Rose Beauty therapist arriving at a client's door in Lagos"
              className="rounded-lg object-cover w-full h-[420px]"
              loading="lazy"
            />
            <div>
              <p className="subheading mb-4">Welcome</p>
              <h2 className="font-serif text-3xl md:text-4xl text-secondary">
                No traffic. No waiting room. Just your own space.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Rose Beauty is a professional home service spa. A trained therapist arrives with a
                massage couch, fresh linen, towels, oils and everything else the treatment needs,
                sets up in your space, and packs it all away afterwards.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  { icon: Home, text: "We come to your home, hotel, office or event." },
                  { icon: Sparkles, text: "Fifteen treatments, from Swedish massage to full packages." },
                  { icon: ShieldCheck, text: "Fresh linen, sanitised tools and complete discretion." },
                  { icon: CalendarClock, text: "Booked at least 24 hours ahead, seven days a week." },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Icon size={18} className="mt-0.5 text-primary flex-shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Services */}
      <ScrollReveal animation="fade-up">
        <section className="py-20 md:py-28 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <p className="subheading mb-4">Treatments</p>
              <h2 className="font-serif text-3xl md:text-5xl text-secondary">
                Fifteen ways to feel better
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                {serviceCategories.map((c) => c.name).join(" · ")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featured.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="group block overflow-hidden rounded-lg bg-card border border-border"
                >
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-secondary">{service.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{service.summary}</p>
                    <p className="mt-4 text-xs uppercase tracking-[0.12em] text-primary">
                      {service.duration}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-primary text-sm uppercase tracking-[0.1em] hover:gap-3 transition-all"
              >
                See all treatments <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Where we come */}
      <ScrollReveal animation="fade-up">
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 grid gap-12 md:grid-cols-2 items-center">
            <div>
              <p className="subheading mb-4">Where we work</p>
              <h2 className="font-serif text-3xl md:text-4xl text-secondary">
                Anywhere private in {site.city}
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Home, hotel room, serviced apartment, office or event — you choose the address when
                you book.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {site.areas.map((a) => (
                  <span
                    key={a}
                    className="rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={hotel} alt="In-room hotel spa set-up in Lagos" loading="lazy" className="rounded-lg h-64 w-full object-cover" />
              <img src={couples} alt="Couples spa experience at home" loading="lazy" className="rounded-lg h-64 w-full object-cover mt-8" />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Testimonials */}
      <ScrollReveal animation="fade-up">
        <section className="py-20 md:py-28 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <p className="subheading mb-4">Client words</p>
              <h2 className="font-serif text-3xl md:text-5xl text-secondary">What clients say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t) => (
                <div key={t.quote} className="rounded-lg bg-card border border-border p-8">
                  <p className="italic text-muted-foreground leading-relaxed">"{t.quote}"</p>
                  <p className="mt-6 text-sm font-medium text-secondary">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal animation="fade-up">
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-14">
              <p className="subheading mb-4">Questions</p>
              <h2 className="font-serif text-3xl md:text-5xl text-secondary">Good to know</h2>
            </div>
            <div className="space-y-4">
              {faqs.slice(0, 8).map((faq) => (
                <details key={faq.question} className="rounded-lg border border-border p-6">
                  <summary className="cursor-pointer font-medium text-secondary">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/contact" className="text-primary text-sm uppercase tracking-[0.1em]">
                See all questions
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal animation="zoom-in">
        <section className="py-20 md:py-28 glossy-dark text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-5xl">Ready when you are</h2>
            <p className="mt-4 text-white/75 max-w-xl mx-auto">
              Choose your treatments, tell us where and when, and we handle the rest. Bookings need
              at least 24 hours' notice.
            </p>
            <Link to="/book" className="btn-luxury mt-10 inline-block">
              Book a treatment
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </Layout>
  );
};

export default Index;
