import { Link } from "react-router-dom";
import { Sparkles, GraduationCap } from "lucide-react";

const DualPillars = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Spa Services */}
          <div className="glass-card p-8 md:p-10 text-center group hover:shadow-xl transition-all duration-500">
            <div className="glossy-icon inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-serif text-3xl text-secondary mb-4 relative z-10">
              Spa & Wellness
            </h3>
            <p className="text-muted-foreground mb-6 relative z-10 max-w-md mx-auto">
              Indulge in our range of premium treatments designed to meet your unique needs. 
              From facials to body contouring, we bring out your natural radiance with care and expertise.
            </p>
            <Link to="/services" className="btn-luxury">
              Explore Services
            </Link>
          </div>

          {/* Professional Training */}
          <div className="glass-card p-8 md:p-10 text-center group hover:shadow-xl transition-all duration-500">
            <div className="glossy-icon inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-serif text-3xl text-secondary mb-4 relative z-10">
              Training Institute
            </h3>
            <p className="text-muted-foreground mb-6 relative z-10 max-w-md mx-auto">
              Launch or advance your career with our comprehensive aesthetic training programs. 
              Learn from industry experts and gain hands-on experience with real clients.
            </p>
            <Link to="/training" className="btn-luxury">
              View Programs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualPillars;
