import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import serviceBotox from "@/assets/service-botox.jpg";
import serviceUndereyeFiller from "@/assets/service-undereye-filler.jpg";
import serviceFiller from "@/assets/service-filler.jpg";

const services = [
  {
    title: "Botox Treatments",
    description:
      "Expert botulinum toxin treatments to smooth wrinkles and fine lines. Our skilled practitioners deliver natural-looking results for a refreshed appearance.",
    image: serviceBotox,
  },
  {
    title: "Under Eye Fillers",
    description:
      "Targeted filler treatments to reduce dark circles, hollows, and tired appearance under the eyes. Restore a youthful, well-rested look.",
    image: serviceUndereyeFiller,
  },
  {
    title: "Dermal Fillers",
    description:
      "Premium filler treatments for facial contouring, volume restoration, and enhancement. Achieve beautiful, natural results with our expert injectors.",
    image: serviceFiller,
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-20 md:py-32 bg-muted oily-sheen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="subheading mb-4">What We Offer</p>
          <h2 className="font-serif text-4xl md:text-5xl text-secondary">
            Signature Services
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Every treatment is personalized to your needs, combining luxury with 
            science-backed results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass-card overflow-hidden transition-all duration-500 hover:shadow-xl"
            >
              <div className="aspect-[4/5] overflow-hidden glossy-frame">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 relative">
                <h3 className="font-serif text-2xl text-secondary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-primary text-sm uppercase tracking-[0.1em] hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-luxury">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
