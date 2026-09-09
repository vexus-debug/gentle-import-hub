import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    quote: "The experience at ZealAesthetics was absolutely transformative. The team made me feel so comfortable and the results exceeded my expectations. I've never felt more confident in my own skin.",
    name: "Amara O.",
    treatment: "Facial Rejuvenation",
    image: testimonial1,
  },
  {
    quote: "From the moment I walked in, I knew I was in good hands. The attention to detail, the warmth of the staff, and the exceptional results have made me a client for life.",
    name: "Chidinma E.",
    treatment: "Skin Boosters",
    image: testimonial2,
  },
  {
    quote: "Professional, caring, and incredibly skilled. ZealAesthetics understands that true beauty comes from feeling your best, and they deliver that experience every single visit.",
    name: "Fatima B.",
    treatment: "Injectable Treatments",
    image: testimonial3,
  },
];

const VoicesOfConfidence = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Soft background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-spa-beige/30 dark:from-spa-beige/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-primary/10 dark:from-primary/5 to-transparent blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="subheading mb-4">Voices of Confidence</p>
          <h2 className="font-serif text-4xl md:text-5xl text-secondary dark:text-foreground mb-6">
            Real Stories, Real <span className="text-primary italic">Radiance</span>
          </h2>
          <div className="w-20 h-[2px] mx-auto bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-card to-spa-beige/30 dark:from-card dark:to-spa-beige/10 rounded-3xl p-8 shadow-lg border border-border/50"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <Quote className="w-4 h-4 text-primary-foreground" />
              </div>
              
              {/* Content */}
              <div className="pt-4">
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-secondary dark:text-foreground">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.treatment}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-14">
          <Link 
            to="/testimonials" 
            className="group inline-flex items-center gap-3 text-primary hover:text-primary/80 transition-colors duration-300"
          >
            <span className="text-sm uppercase tracking-[0.2em] font-medium">Read More Stories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VoicesOfConfidence;
