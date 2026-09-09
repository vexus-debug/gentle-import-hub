import { useState } from "react";
import { ChevronDown, ChevronUp, Sparkles, Syringe, Droplet, Award, CircleDot, Zap, Heart, Target, Droplets, GraduationCap } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import heroImage from "@/assets/gallery/consultation-markings.jpg";

const serviceCategories = [
  {
    id: "facial-treatments",
    name: "Facial Treatments",
    icon: Sparkles,
    description: "Advanced skin rejuvenation and renewal therapies",
    treatments: [
      { name: "Chemical Peels", description: "Exfoliating treatments that remove dead skin cells to reveal brighter, smoother skin underneath." },
      { name: "Microneedling", description: "Collagen-inducing therapy using fine needles to stimulate natural skin healing and renewal." },
      { name: "PRP (Platelet-Rich Plasma)", description: "Uses your own blood platelets to promote cellular regeneration and youthful skin." },
      { name: "PRF-Biotherapy", description: "Next-generation platelet therapy with fibrin matrix for longer-lasting rejuvenation results." },
      { name: "Hydrafacial", description: "Multi-step treatment that cleanses, exfoliates, extracts, and hydrates the skin simultaneously." },
      { name: "Microdermabrasion", description: "Gentle resurfacing technique that polishes away dull outer layers for radiant skin." },
      { name: "Hand & Foot Treatment", description: "Specialized care to rejuvenate and restore youthful appearance to hands and feet." },
    ],
  },
  {
    id: "korean-injectables",
    name: "Korean Cosmetic Injectables",
    icon: Syringe,
    description: "Premium Korean botulinum toxin formulations",
    treatments: [
      { name: "Innotox Botulinum Toxin", description: "Liquid-form toxin requiring no reconstitution for precise and consistent results." },
      { name: "Huntox", description: "High-purity Korean toxin known for natural-looking muscle relaxation effects." },
      { name: "Nabota", description: "FDA-approved Korean toxin with excellent spread and long-lasting wrinkle reduction." },
      { name: "Neuroxin", description: "Premium toxin offering smooth, even distribution for natural expression preservation." },
      { name: "Botulax", description: "Popular Korean toxin providing effective treatment for dynamic wrinkles and lines." },
    ],
  },
  {
    id: "korean-fillers",
    name: "Korean Fillers",
    icon: Droplet,
    description: "Advanced hyaluronic acid dermal fillers from Korea",
    treatments: [
      { name: "Revolax", description: "Cross-linked HA filler known for smooth consistency and natural tissue integration." },
      { name: "Neuramis", description: "Premium filler with excellent volumizing properties and long-lasting results." },
      { name: "Elravie Premier", description: "High-density filler ideal for deep tissue volumization and facial contouring." },
      { name: "Dermalax", description: "Versatile filler range suitable for fine lines to deep volume restoration." },
      { name: "Rejuvenesse", description: "Biocompatible filler providing soft, natural enhancement with minimal swelling." },
    ],
  },
  {
    id: "american-toxins",
    name: "American Botulinum Toxin Type A",
    icon: Award,
    description: "FDA-approved American neuromodulators",
    treatments: [
      { name: "Botox", description: "The gold standard in wrinkle relaxation, trusted worldwide for decades." },
      { name: "Dysport", description: "Fast-acting formula with natural spread, ideal for larger treatment areas." },
      { name: "Xeomin", description: "Pure-form toxin without additives, reducing risk of resistance development." },
      { name: "Jeuveau", description: "Modern alternative specifically designed for aesthetic treatments and frown lines." },
    ],
  },
  {
    id: "american-fillers",
    name: "American Fillers",
    icon: CircleDot,
    description: "Premium FDA-approved dermal filler collection",
    treatments: [
      { name: "Juvederm", description: "Smooth-gel HA fillers for lips, cheeks, and facial lines with natural results." },
      { name: "Restylane", description: "Versatile filler family addressing everything from fine lines to volume loss." },
      { name: "Voluma XC", description: "Deep-injection filler designed specifically for cheek augmentation and lift." },
      { name: "Volbella XC", description: "Subtle lip filler perfect for natural enhancement and perioral lines." },
      { name: "Radiesse", description: "Calcium-based filler that stimulates collagen for structural support." },
      { name: "Sculptra Aesthetics", description: "Collagen stimulator providing gradual, long-lasting facial volume restoration." },
    ],
  },
  {
    id: "skin-boosters",
    name: "Skin Boosters Treatment",
    icon: Zap,
    description: "Deep hydration and skin quality improvement therapies",
    treatments: [
      { name: "Exosomes", description: "Cutting-edge cellular therapy promoting deep skin regeneration and repair." },
      { name: "Profhilo", description: "Bio-remodeling injectable that intensely hydrates and tightens skin tissue." },
      { name: "NCTF", description: "Mesotherapy cocktail delivering vitamins, amino acids, and hyaluronic acid." },
      { name: "Mesohyal", description: "Injectable solution providing intense moisturization and skin revitalization." },
      { name: "Sunekos 200", description: "Amino acid and HA blend stimulating collagen and elastin production." },
      { name: "Derma Heal", description: "Growth factor treatment targeting specific skin concerns and rejuvenation." },
    ],
  },
  {
    id: "wellness",
    name: "Men & Women Wellness",
    icon: Heart,
    description: "Intimate wellness and rejuvenation treatments",
    treatments: [
      { name: "Thermiva", description: "Non-invasive radiofrequency therapy for feminine wellness and tissue tightening." },
      { name: "O-Shot", description: "PRP treatment designed to enhance feminine sensitivity and wellness." },
      { name: "P-Shot", description: "PRP therapy for male enhancement and improved intimate wellness." },
    ],
  },
  {
    id: "body-sculpting",
    name: "Fat Dissolving & Body Therapy",
    icon: Target,
    description: "Body contouring and therapeutic massage treatments",
    treatments: [
      { name: "Wood Fat Reduction Treatment", description: "Traditional technique using wooden tools to break down fat deposits." },
      { name: "Body Sculpting", description: "Non-surgical contouring treatments to shape and define body areas." },
      { name: "Lymphatic Drainage Massage", description: "Gentle massage promoting detoxification and reducing fluid retention." },
      { name: "Massage Therapy", description: "Therapeutic massage for relaxation, pain relief, and muscle recovery." },
    ],
  },
  {
    id: "iv-therapy",
    name: "IV Therapy Infusions",
    icon: Droplets,
    description: "Intravenous vitamin and wellness infusions",
    treatments: [
      { name: "Glutathione IV Therapy", description: "Master antioxidant infusion for skin brightening and detoxification." },
      { name: "Anti-aging Infusion", description: "Vitamin blend targeting cellular health and youthful vitality." },
      { name: "Brightening Infusion", description: "Skin-focused drip promoting radiance and even skin tone." },
      { name: "Hangover Infusion", description: "Rapid recovery blend to rehydrate and restore after overindulgence." },
      { name: "Energy Boosters Infusion", description: "B-vitamin rich drip for sustained energy and mental clarity." },
      { name: "Detoxification Infusion", description: "Cleansing formula supporting liver function and toxin elimination." },
    ],
  },
  {
    id: "training",
    name: "Aesthetics Training",
    icon: GraduationCap,
    description: "Professional certification courses for practitioners",
    treatments: [
      { name: "Basic Training", description: "Foundation course covering essential injection techniques and safety protocols." },
      { name: "Advanced Training", description: "Expert-level training for complex procedures and advanced facial anatomy." },
    ],
  },
];

const Services = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("facial-treatments");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />
        <div className="hero-overlay" />
        <div className="absolute inset-0 oily-sheen" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="subheading text-white/80 mb-4">What We Offer</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-wide">
            Our Services
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 glossy-surface">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl text-secondary mb-6">
            Premium Spa & Aesthetic Services
          </h2>
          <div className="divider-elegant" />
          <p className="text-muted-foreground leading-relaxed">
            At ZealAesthetics, every treatment is tailored to your unique needs and goals.
            Our expert team uses premium products and techniques to deliver results that 
            enhance your natural beauty. From relaxing massages to advanced skin treatments, 
            we have something for everyone.
          </p>
        </div>
      </section>

      {/* Services Accordion */}
      <section className="py-8 md:py-16 bg-muted oily-sheen">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            {serviceCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.id}
                  className="glass-card overflow-hidden"
                >
                  {/* Category Header */}
                  <button
                    onClick={() =>
                      setExpandedCategory(
                        expandedCategory === category.id ? null : category.id
                      )
                    }
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-muted/50 transition-colors relative z-10"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl md:text-2xl text-secondary">
                          {category.name}
                        </h3>
                        <p className="text-muted-foreground text-sm hidden md:block mt-1">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    {expandedCategory === category.id ? (
                      <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-primary flex-shrink-0" />
                    )}
                  </button>

                  {/* Expanded Content */}
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-500",
                      expandedCategory === category.id
                        ? "max-h-[2000px] opacity-100"
                        : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="p-6 md:p-8 pt-0 border-t border-border relative z-10">
                      <div className="space-y-4">
                        {category.treatments.map((treatment, index) => (
                          <div
                            key={index}
                            className="pl-4 md:pl-16 border-l-2 border-primary/30 py-3"
                          >
                            <h4 className="font-medium text-secondary">
                              {treatment.name}
                            </h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              {treatment.description}
                            </p>
                          </div>
                        ))}

                        <div className="pl-4 md:pl-16 pt-4">
                          <Link
                            to={`/services/${category.id}`}
                            className="inline-block btn-luxury"
                          >
                            View Full Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training Promo */}
      <section className="py-16 md:py-24 glossy-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="subheading mb-4">Want to Learn These Skills?</p>
            <h2 className="font-serif text-3xl md:text-4xl text-secondary mb-6">
              Join Our Training Programs
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Learn to perform these treatments professionally with our comprehensive 
              training courses. Our programs cover everything from skincare basics to 
              advanced aesthetic techniques.
            </p>
            <Link to="/training" className="btn-luxury">
              Explore Training Programs
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 glossy-dark text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 oily-sheen" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Not Sure Which Treatment Is Right for You?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Contact us for a personalized consultation. Our experts will recommend 
            the best treatments for your specific needs and goals.
          </p>
          <a
            href="https://wa.me/2349015012285?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury bg-white text-secondary w-full sm:w-auto"
          >
            Schedule Free Consultation
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
