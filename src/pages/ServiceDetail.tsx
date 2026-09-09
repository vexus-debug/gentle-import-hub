import { Link, useParams } from "react-router-dom";
import { CalendarClock, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { getService, services } from "@/data/services";
import { site, whatsappLink } from "@/config/site";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getService(slug);

  if (!service) {
    return (
      <Layout>
        <section className="py-32 text-center container mx-auto px-4">
          <h1 className="font-serif text-3xl text-secondary">Treatment not found</h1>
          <Link to="/services" className="btn-luxury mt-8 inline-block">
            See all treatments
          </Link>
        </section>
      </Layout>
    );
  }

  const related = services.filter((s) => s.category === service.category && s.slug !== service.slug).slice(0, 3);

  return (
    <Layout>
      <section className="relative py-24 md:py-32">
        <img src={service.image} alt={service.imageAlt} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-secondary/70" />
        <div className="container relative z-10 mx-auto px-4 text-white text-center">
          <p className="subheading mb-4 text-white/80">{service.category}</p>
          <h1 className="font-serif text-4xl md:text-5xl">{service.name}</h1>
          <p className="mt-4 text-white/85 max-w-2xl mx-auto">{service.seoPhrase}</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <p className="text-lg text-muted-foreground leading-relaxed">{service.intro}</p>

            <div>
              <h2 className="font-serif text-2xl text-secondary mb-4">Who it suits</h2>
              <ul className="space-y-2 text-muted-foreground text-sm">
                {service.bestFor.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-secondary mb-4">What to expect</h2>
              <ol className="space-y-3 text-muted-foreground text-sm">
                {service.whatToExpect.map((item, i) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-primary">{i + 1}.</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border border-border p-6 space-y-4">
              <p className="flex items-center gap-2 text-sm">
                <Clock size={16} className="text-primary" /> {service.duration}
              </p>
              <p className="flex items-start gap-2 text-sm">
                <CalendarClock size={16} className="mt-0.5 text-primary flex-shrink-0" />
                Book at least 24 hours in advance
              </p>
              <p className="text-sm text-muted-foreground">
                Available across {site.city} — home, hotel, office or event.
              </p>
              <Link to="/book" className="btn-luxury block text-center">
                Book this treatment
              </Link>
              <a
                href={whatsappLink(`Hello ${site.name}, I would like to book a ${service.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-xs uppercase tracking-[0.15em] text-primary"
              >
                Ask about price on WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-2xl text-secondary mb-8">You may also like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((r) => (
                <Link key={r.slug} to={`/services/${r.slug}`} className="group block overflow-hidden rounded-lg bg-card border border-border">
                  <img src={r.image} alt={r.imageAlt} loading="lazy" className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="p-6">
                    <h3 className="font-serif text-lg text-secondary">{r.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{r.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ServiceDetail;
