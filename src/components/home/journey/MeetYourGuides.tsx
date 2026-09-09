import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import aboutImage from "@/assets/about-professional.jpg";

const MeetYourGuides = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-background to-muted/20 dark:to-muted/10">
      {/* Organic background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-l from-spa-beige/40 dark:from-spa-beige/15 to-transparent blur-3xl transform translate-x-1/2" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image with organic frame */}
          <div className="relative">
            {/* Main image */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Our expert team"
                className="w-full h-[450px] md:h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 dark:from-background/40 to-transparent" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full border-2 border-primary/20 dark:border-primary/30 hidden lg:block" />
            <div className="absolute top-10 -left-10 w-20 h-20 rounded-full bg-spa-gold/20 blur-2xl hidden lg:block" />
            
            {/* Stats badge */}
            <div className="absolute bottom-8 left-8 bg-card/95 dark:bg-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hidden md:block border dark:border-border/50">
              <p className="text-4xl font-serif text-primary mb-1">50+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Years Combined Experience</p>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:pl-8">
            <p className="subheading mb-4">Meet Your Guides</p>
            <h2 className="font-serif text-4xl md:text-5xl text-secondary dark:text-foreground mb-6 leading-tight">
              Your Beauty, Our <span className="text-primary italic">Passion</span>
            </h2>
            
            <div className="w-16 h-[2px] mb-8 bg-gradient-to-r from-primary/60 to-transparent" />
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At ZealAesthetics, our exceptional team embodies the very heart of your aesthetic journey. 
              With decades of combined expertise, our globally trained specialists seamlessly blend 
              medical precision with refined artistry.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              This distinguished collective of physicians, nurses, and licensed aesthetic providers 
              brings incredible mastery to advanced treatments. We craft comprehensive, personalized 
              plans for your holistic well-being, ensuring your path to revitalized confidence is 
              met with unparalleled grace.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="text-center">
                <p className="text-2xl font-serif text-secondary dark:text-foreground">10,000+</p>
                <p className="text-xs text-muted-foreground">Procedures Performed</p>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <p className="text-2xl font-serif text-secondary dark:text-foreground">200+</p>
                <p className="text-xs text-muted-foreground">Treatments Monthly</p>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <p className="text-2xl font-serif text-secondary dark:text-foreground">4.9★</p>
                <p className="text-xs text-muted-foreground">Client Rating</p>
              </div>
            </div>
            
            <Link 
              to="/about" 
              className="group inline-flex items-center gap-3 text-primary hover:text-primary/80 transition-colors duration-300"
            >
              <span className="text-sm uppercase tracking-[0.2em] font-medium">Meet the Team</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetYourGuides;
