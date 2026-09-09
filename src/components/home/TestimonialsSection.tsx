import { Link } from "react-router-dom";
import { ArrowRight, Star, Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    name: "Adaeze N.",
    role: "Facial Treatment Client",
    image: testimonial1,
    quote: "ZealAesthetics transformed not just my skin, but my confidence. The team truly understands my needs and I've never felt more beautiful!",
  },
  {
    name: "Chioma O.",
    role: "Regular Client",
    image: testimonial2,
    quote: "Finally, a spa that gets it! My skin concerns have improved dramatically and I love that they use premium, effective products.",
  },
  {
    name: "Mrs. Amaka K.",
    role: "Training Graduate",
    image: testimonial3,
    quote: "The training program was exceptional. I now run my own successful spa business thanks to the skills I learned at ZealAesthetics.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-muted oily-sheen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="subheading mb-4">Client Love</p>
          <h2 className="font-serif text-4xl md:text-5xl text-secondary">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real stories from real clients who've experienced the ZealAesthetics difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-8 relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
              
              <div className="flex items-center gap-1 mb-4 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-spa-gold text-spa-gold" />
                ))}
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6 italic relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-spa-gold/30"
                />
                <div>
                  <p className="font-medium text-secondary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 text-primary text-sm uppercase tracking-[0.1em] hover:gap-3 transition-all"
          >
            Read More Reviews
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
