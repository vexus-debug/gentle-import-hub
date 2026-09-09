import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import galleryImage1 from "@/assets/gallery/before-after.jpg";
import galleryImage2 from "@/assets/gallery/glowing-result.jpg";
import galleryImage3 from "@/assets/gallery/facial-treatment-device.jpg";

const TransformationArt = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Soft organic background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-spa-beige/30 dark:from-spa-beige/10 to-transparent blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image collage - organic overlapping */}
          <div className="relative h-[500px] md:h-[600px]">
            {/* Main large image */}
            <div className="absolute top-0 left-0 w-[70%] h-[75%] rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src={galleryImage1}
                alt="Transformation result"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 dark:from-background/30 to-transparent" />
            </div>
            
            {/* Overlapping smaller image */}
            <div className="absolute bottom-0 right-0 w-[55%] h-[50%] rounded-[1.5rem] overflow-hidden shadow-xl border-4 border-background">
              <img
                src={galleryImage2}
                alt="Glowing skin result"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Small accent image */}
            <div className="absolute top-[20%] right-[10%] w-[30%] h-[25%] rounded-2xl overflow-hidden shadow-lg border-4 border-background hidden md:block">
              <img
                src={galleryImage3}
                alt="Treatment in progress"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative circle */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border-2 border-primary/20 dark:border-primary/30 hidden lg:block" />
          </div>
          
          {/* Content */}
          <div className="lg:pl-8">
            <p className="subheading mb-4">The Art of Transformation</p>
            <h2 className="font-serif text-4xl md:text-5xl text-secondary dark:text-foreground mb-6 leading-tight">
              Witness the <span className="text-primary italic">Magic</span> of Expert Care
            </h2>
            
            <div className="w-16 h-[2px] mb-8 bg-gradient-to-r from-primary/60 to-transparent" />
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Every transformation tells a story — of renewed confidence, of self-love embraced, 
              of beauty revealed. Our gallery showcases the artistry of our skilled practitioners 
              and the radiant results our clients have achieved.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-10">
              From subtle enhancements to remarkable rejuvenations, each before and after 
              reflects our commitment to personalized care and exceptional results.
            </p>
            
            <Link 
              to="/gallery" 
              className="group inline-flex items-center gap-3 text-primary hover:text-primary/80 transition-colors duration-300"
            >
              <span className="text-sm uppercase tracking-[0.2em] font-medium">Explore Our Gallery</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationArt;
