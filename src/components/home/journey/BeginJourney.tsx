import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, ArrowRight } from "lucide-react";

const BeginJourney = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-spa-beige/40 to-spa-gold/10 dark:from-spa-chocolate/40 dark:via-spa-beige/20 dark:to-spa-gold/5" />
      
      {/* Organic decorative shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/10 dark:from-primary/5 to-transparent blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-spa-gold/15 dark:from-spa-gold/10 to-transparent blur-3xl transform translate-x-1/3 translate-y-1/3" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="subheading mb-6">Begin Your Journey</p>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-secondary dark:text-foreground mb-6 leading-tight">
            Your Radiance <span className="text-primary italic">Awaits</span>
          </h2>
          
          <div className="w-24 h-[2px] mx-auto mb-10 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
            Take the first step towards revealing your most confident, radiant self. 
            Schedule a private consultation and let us craft a personalized path to your beauty goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              to="/contact" 
              className="btn-luxury rounded-full inline-flex items-center gap-3"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a 
              href="tel:+2349015012285" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 border-secondary dark:border-primary text-secondary dark:text-primary hover:bg-secondary dark:hover:bg-primary hover:text-white dark:hover:text-primary-foreground transition-all duration-300 text-sm uppercase tracking-[0.1em]"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us Now</span>
            </a>
          </div>
          
          {/* Contact info cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 rounded-2xl bg-card/70 dark:bg-card/50 backdrop-blur-sm shadow-sm dark:border dark:border-border/50">
              <MapPin className="w-5 h-5 text-primary mb-3" />
              <p className="text-sm text-muted-foreground text-center">
                33 Tunis Street, Wuse Zone 6<br />Abuja, Nigeria
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-2xl bg-card/70 dark:bg-card/50 backdrop-blur-sm shadow-sm dark:border dark:border-border/50">
              <Clock className="w-5 h-5 text-primary mb-3" />
              <p className="text-sm text-muted-foreground text-center">
                Mon – Sat: 10AM – 7PM
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-2xl bg-card/70 dark:bg-card/50 backdrop-blur-sm shadow-sm dark:border dark:border-border/50">
              <Phone className="w-5 h-5 text-primary mb-3" />
              <p className="text-sm text-muted-foreground text-center">
                +234 901 501 2285
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Top wave transition */}
      <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden rotate-180">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="absolute bottom-0 w-full h-full"
        >
          <path 
            d="M0,60 C300,100 600,20 900,60 C1050,80 1150,70 1200,60 L1200,120 L0,120 Z" 
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default BeginJourney;
