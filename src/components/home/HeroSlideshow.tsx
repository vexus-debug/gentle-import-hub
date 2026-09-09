import { useState, useEffect } from "react";
import consultationMarkings from "@/assets/gallery/consultation-markings.jpg";
import botoxInjection from "@/assets/gallery/botox-injection.jpg";
import glowingResult from "@/assets/gallery/glowing-result.jpg";

const heroImages = [
  {
    src: consultationMarkings,
    alt: "Professional aesthetic consultation with facial markings",
  },
  {
    src: botoxInjection,
    alt: "Expert botox injection treatment",
  },
  {
    src: glowingResult,
    alt: "Beautiful glowing skin result after treatment",
  },
];

const HeroSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[75vh] md:h-[90vh] min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden -mt-20">
      {/* Background Images with Fade Transition */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${image.src}')` }}
          aria-hidden={index !== currentIndex}
        />
      ))}
      
      {/* Overlay - darkened for better text visibility */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="hero-overlay" />
      <div className="absolute inset-0 oily-sheen" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-wide mb-6 leading-none font-medium">
          ZEAL <span className="text-spa-gold block">AESTHETICS</span>
        </h1>
        <p className="text-sm md:text-base text-white/80 uppercase tracking-[0.3em] font-light">
          Skin | Health | Beauty
        </p>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-spa-gold w-8" 
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlideshow;
