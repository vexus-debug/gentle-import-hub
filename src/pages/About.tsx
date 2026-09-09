import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { site } from "@/config/site";
import arrival from "@/assets/rose/therapist-arrival.jpg";
import swedish from "@/assets/rose/swedish.jpg";

const About = () => (
  <Layout>
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <p className="subheading mb-4">About us</p>
        <h1 className="font-serif text-4xl md:text-5xl text-secondary">{site.fullName}</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{site.shortDescription}</p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 grid gap-12 md:grid-cols-2 items-center">
        <img src={arrival} alt="Rose Beauty therapist arriving at a client's home" loading="lazy" className="rounded-lg h-[440px] w-full object-cover" />
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="font-serif text-3xl text-secondary">Why we come to you</h2>
          <p>
            Lagos traffic takes the calm out of a spa day before it starts. Rose Beauty removes that
            journey entirely — a trained therapist arrives at your door with everything the treatment
            needs and turns your own space into the treatment room.
          </p>
          <p>
            Every session begins with a short conversation about pressure, problem areas and anything
            you would rather we avoid. You stay draped throughout, only the area being worked on is
            uncovered, and your address and details are never shared.
          </p>
          <p>
            We work across {site.areas.slice(0, 6).join(", ")} and beyond, {site.availability.toLowerCase()},
            with bookings taken at least 24 hours ahead.
          </p>
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 grid gap-12 md:grid-cols-2 items-center">
        <div className="space-y-6 text-muted-foreground leading-relaxed order-2 md:order-1">
          <h2 className="font-serif text-3xl text-secondary">How we work</h2>
          <ul className="space-y-4 text-sm">
            <li>• Fresh linen and sanitised tools for every single client.</li>
            <li>• Therapists in uniform, trained in the treatments they offer.</li>
            <li>• Everything brought in and packed away — your space left as it was.</li>
            <li>• Clear, final pricing confirmed on WhatsApp before the day.</li>
            <li>• A therapeutic spa service only, with a strict code of conduct.</li>
          </ul>
          <Link to="/book" className="btn-luxury inline-block">Book a treatment</Link>
        </div>
        <img src={swedish} alt="Professional massage treatment in progress" loading="lazy" className="rounded-lg h-[440px] w-full object-cover order-1 md:order-2" />
      </div>
    </section>
  </Layout>
);

export default About;
