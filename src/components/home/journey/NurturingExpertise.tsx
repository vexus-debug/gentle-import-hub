import { Link } from "react-router-dom";
import { ArrowRight, Award, BookOpen, Users } from "lucide-react";
import trainingImage from "@/assets/training-section.jpg";

const features = [
  {
    icon: Award,
    title: "Certified Excellence",
    description: "Internationally accredited programs",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description: "Theory meets hands-on practice",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Learn from industry leaders",
  },
];

const NurturingExpertise = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-secondary via-secondary to-spa-chocolate">
      {/* Organic decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/20 blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-spa-gold/10 blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-white order-2 lg:order-1">
            <p className="text-spa-gold text-xs uppercase tracking-[0.3em] font-medium mb-4">
              Nurturing Expertise
            </p>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
              Ignite Your Passion for <span className="text-spa-gold italic">Beauty</span>
            </h2>
            
            <div className="w-16 h-[2px] mb-8 bg-gradient-to-r from-spa-gold/60 to-transparent" />
            
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Join our exclusive training programs and master the art of aesthetic medicine. 
              Whether you're beginning your journey or elevating your expertise, our 
              comprehensive courses provide the foundation for excellence.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {features.map((feature) => (
                <div key={feature.title} className="text-center sm:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-spa-gold/20 mb-4">
                    <feature.icon className="w-5 h-5 text-spa-gold" />
                  </div>
                  <h4 className="font-medium text-white mb-1 text-sm">{feature.title}</h4>
                  <p className="text-white/60 text-xs">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <Link 
              to="/training" 
              className="group inline-flex items-center gap-3 text-spa-gold hover:text-spa-gold/80 transition-colors duration-300"
            >
              <span className="text-sm uppercase tracking-[0.2em] font-medium">Explore Training Programs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
          
          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src={trainingImage}
                alt="Aesthetic training"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
            </div>
            
            {/* Floating accent */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full border-2 border-spa-gold/30 hidden lg:block" />
            <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-spa-gold/20 blur-xl hidden lg:block" />
          </div>
        </div>
      </div>
      
      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="absolute bottom-0 w-full h-full"
        >
          <path 
            d="M0,80 C400,40 800,100 1200,60 L1200,120 L0,120 Z" 
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default NurturingExpertise;
