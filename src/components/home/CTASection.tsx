import { Link } from "react-router-dom";
import hero3 from "@/assets/hero-3.jpg";

const CTASection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${hero3}')` }}
      />
      <div className="absolute inset-0 glossy-dark opacity-90" />
      <div className="absolute inset-0 oily-sheen" />
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <p className="subheading text-spa-gold mb-4">Begin Your Journey</p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
          Ready to Embrace Your Natural Beauty?
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Whether you're seeking premium spa treatments tailored to your unique needs 
          or professional training to launch your career, ZealAesthetics is here to 
          help you achieve your goals.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/2349015012285?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury bg-spa-gold text-white hover:bg-spa-gold/90"
          >
            Book Your Experience
          </a>
          <Link
            to="/training"
            className="flex items-center gap-2 text-white text-sm uppercase tracking-[0.15em] hover:opacity-80 transition-opacity pearl-border px-6 py-3"
          >
            Enroll in Training
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
