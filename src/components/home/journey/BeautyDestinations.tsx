import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import facialImage from "@/assets/beauty-destinations/facial-rejuvenation.jpg";
import injectablesImage from "@/assets/beauty-destinations/injectables-fillers.jpg";
import bodyImage from "@/assets/beauty-destinations/body-sculpting.jpg";
import wellnessImage from "@/assets/beauty-destinations/wellness-therapies.jpg";
import ivImage from "@/assets/beauty-destinations/iv-therapy.jpg";
import skinBoostersImage from "@/assets/beauty-destinations/skin-boosters.jpg";

const destinations = [
  {
    title: "Facial Rejuvenation",
    description: "Reveal your skin's luminous potential through expert treatments",
    image: facialImage,
    link: "/services/facial-treatments",
    delay: 0,
  },
  {
    title: "Injectables & Fillers",
    description: "Artful enhancement that celebrates your natural beauty",
    image: injectablesImage,
    link: "/services/korean-injectables",
    delay: 100,
  },
  {
    title: "Body Sculpting",
    description: "Contour and refine with precision and care",
    image: bodyImage,
    link: "/services/body-sculpting",
    delay: 200,
  },
  {
    title: "Skin Boosters",
    description: "Deep hydration for a dewy, radiant complexion",
    image: skinBoostersImage,
    link: "/services/skin-boosters",
    delay: 300,
  },
  {
    title: "Wellness Therapies",
    description: "Nurture your body, mind, and spirit in harmony",
    image: wellnessImage,
    link: "/services/wellness",
    delay: 400,
  },
  {
    title: "IV Therapy",
    description: "Revitalize from within with targeted infusions",
    image: ivImage,
    link: "/services/iv-therapy",
    delay: 500,
  },
];

const BeautyDestinations = () => {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-muted/30 to-background dark:from-muted/10 dark:to-background overflow-hidden">
      {/* Organic decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/5 dark:bg-primary/10 blur-2xl" />
      <div className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-spa-gold/10 dark:bg-spa-gold/5 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="subheading mb-4">Your Beauty Destinations</p>
          <h2 className="font-serif text-4xl md:text-5xl text-secondary dark:text-foreground mb-6">
            Find Your Perfect <span className="text-primary italic">Treatment</span>
          </h2>
          <div className="w-20 h-[2px] mx-auto bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Link
              key={destination.title}
              to={destination.link}
              className="group relative overflow-hidden rounded-3xl aspect-[4/5] block"
              style={{ animationDelay: `${destination.delay}ms` }}
            >
              {/* Image */}
              <img
                src={destination.image}
                alt={destination.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent dark:from-background/95 dark:via-background/40" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="font-serif text-2xl md:text-3xl text-white dark:text-foreground mb-3 group-hover:translate-y-0 transition-transform duration-300">
                  {destination.title}
                </h3>
                <p className="text-white/80 dark:text-muted-foreground text-sm mb-4 line-clamp-2">
                  {destination.description}
                </p>
                <div className="flex items-center gap-2 text-spa-gold group-hover:gap-3 transition-all duration-300">
                  <span className="text-xs uppercase tracking-[0.15em]">Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
              
              {/* Soft glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-14">
          <Link
            to="/services"
            className="btn-luxury rounded-full"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BeautyDestinations;
