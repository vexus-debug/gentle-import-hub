import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { services, serviceCategories } from "@/data/services";

const Services = () => (
  <Layout>
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <p className="subheading mb-4">Our treatments</p>
        <h1 className="font-serif text-4xl md:text-5xl text-secondary">
          Spa treatments brought to your door in Lagos
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Fifteen treatments across massage, beauty, body care and packages. Everything is booked at
          least 24 hours in advance.
        </p>
      </div>
    </section>

    {serviceCategories.map((category) => (
      <section key={category.name} className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h2 className="font-serif text-3xl text-secondary">{category.name}</h2>
            <p className="mt-2 text-muted-foreground">{category.blurb}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services
              .filter((s) => s.category === category.name)
              .map((service) => (
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
        </div>
      </section>
    ))}

    <section className="py-16 glossy-dark text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl">Combine as many as you like</h2>
        <p className="mt-4 text-white/75">Our booking form lets you select several treatments in one visit.</p>
        <Link to="/book" className="btn-luxury mt-8 inline-block">Book now</Link>
      </div>
    </section>
  </Layout>
);

export default Services;
