import { Link } from "react-router-dom";
import { Star, CheckCircle } from "lucide-react";
import trainingImage from "@/assets/training-section.jpg";

const trainingFeatures = [
  "Aesthetic Training Programs",
  "Clinical Skincare Product Development",
  "Beauty & Spa Therapy Courses",
  "Facials, Waxing & Massage Techniques",
  "Hands-on Practical Experience",
  "Industry-Recognized Certification",
];

const TrainingPreview = () => {
  return (
    <section className="py-20 md:py-32 glossy-surface">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <p className="subheading mb-4">Professional Training</p>
            <h2 className="font-serif text-4xl md:text-5xl text-secondary mb-6">
              Launch Your Career in Aesthetics
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our comprehensive training programs are designed to equip you with the skills 
              and knowledge needed to excel in the beauty and aesthetics industry. Learn from 
              experienced professionals in a hands-on environment with real-world techniques.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {trainingFeatures.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/training" className="btn-luxury">
              View Training Programs
            </Link>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative glossy-frame">
              <img
                src={trainingImage}
                alt="ZealAesthetics Training Program"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 glass-card text-secondary p-6 md:p-8">
                <div className="flex items-center gap-2 mb-2 relative z-10">
                  <Star className="w-5 h-5 fill-spa-gold text-spa-gold" />
                  <Star className="w-5 h-5 fill-spa-gold text-spa-gold" />
                  <Star className="w-5 h-5 fill-spa-gold text-spa-gold" />
                  <Star className="w-5 h-5 fill-spa-gold text-spa-gold" />
                  <Star className="w-5 h-5 fill-spa-gold text-spa-gold" />
                </div>
                <div className="font-serif text-3xl md:text-4xl relative z-10">500+</div>
                <p className="text-xs uppercase tracking-[0.15em] mt-1 text-muted-foreground relative z-10">
                  Graduates Trained
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingPreview;
