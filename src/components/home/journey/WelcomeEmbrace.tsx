import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const WelcomeEmbrace = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Organic blob background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-spa-beige/40 dark:from-spa-beige/20 to-transparent blur-3xl transform translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-primary/10 dark:from-primary/5 to-transparent blur-3xl transform -translate-x-1/4 translate-y-1/4" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="subheading mb-6 animate-fade-in">Welcome to ZealAesthetics</p>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-secondary dark:text-foreground mb-8 leading-tight">
            Step Into Your <span className="text-primary italic">Sanctuary</span>
          </h2>
          
          <div className="w-24 h-[2px] mx-auto mb-10 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
            Here, beauty is not simply enhanced — it is awakened. We invite you to embark 
            on a transformative journey where every treatment is a gentle whisper of care, 
            and every moment is crafted to nurture your radiance.
          </p>
          
          <p className="text-base text-muted-foreground/80 leading-relaxed mb-12 max-w-2xl mx-auto">
            Our world-class aestheticians blend artistry with science, creating experiences 
            that honor your unique essence while revealing the luminous beauty within.
          </p>
          
          <Link 
            to="/about" 
            className="group inline-flex items-center gap-3 text-primary hover:text-primary/80 transition-colors duration-300"
          >
            <span className="text-sm uppercase tracking-[0.2em] font-medium">Discover Our Story</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
      
      {/* Flowing wave divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="absolute bottom-0 w-full h-full"
        >
          <path 
            d="M0,60 C300,100 600,20 900,60 C1050,80 1150,70 1200,60 L1200,120 L0,120 Z" 
            className="fill-muted/30 dark:fill-muted/20"
          />
        </svg>
      </div>
    </section>
  );
};

export default WelcomeEmbrace;
