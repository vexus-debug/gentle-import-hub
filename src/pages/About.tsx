import { Link } from "react-router-dom";
import { Award, Heart, Sparkles, GraduationCap, Users, Target } from "lucide-react";
import Layout from "@/components/layout/Layout";
import aboutProfessional from "@/assets/about-professional.jpg";
import heroImage from "@/assets/gallery/forehead-injection.jpg";

const About = () => {
  const values = [
    {
      icon: Sparkles,
      title: "Excellence",
      description: "We pursue the highest standards in every treatment and training program we offer.",
    },
    {
      icon: Heart,
      title: "Care",
      description: "We treat every client and student with genuine warmth and personalized attention.",
    },
    {
      icon: Award,
      title: "Expertise",
      description: "Our team continuously advances their skills to bring you the latest in aesthetics.",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "We're committed to empowering the next generation of beauty professionals.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We build lasting relationships with our clients and support our graduates' success.",
    },
    {
      icon: Target,
      title: "Results",
      description: "We focus on delivering visible, lasting results that exceed expectations.",
    },
  ];

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
          <p className="subheading text-white/80 mb-4">Our Story</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-wide">
            About ZealAesthetics
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32 glossy-surface">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="glossy-frame">
              <img
                src={aboutProfessional}
                alt="ZealAesthetics Institute & Spa"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div>
              <p className="subheading mb-4">Who We Are</p>
              <h2 className="font-serif text-4xl md:text-5xl text-secondary mb-6">
                A Vision of Beauty & Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  ZealAesthetics Institute & Spa is Abuja's premier destination for luxury spa 
                  services and professional aesthetic training. Located in the heart of Wuse Zone 6, 
                  we've established ourselves as a trusted name in health, beauty, and education.
                </p>
                <p>
                  Our dual focus sets us apart: we provide exceptional spa treatments to our clients 
                  while also training the next generation of beauty professionals. This unique 
                  combination ensures that both our services and our graduates meet the highest 
                  industry standards.
                </p>
                <p>
                  Whether you're seeking transformative aesthetic treatments or looking to build 
                  a rewarding career in the beauty industry, ZealAesthetics is your partner in 
                  achieving your goals. Our experienced team brings passion, expertise, and 
                  dedication to everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-muted oily-sheen">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 md:p-10 text-center">
              <h3 className="font-serif text-3xl text-secondary mb-4 relative z-10">Our Mission</h3>
              <p className="text-muted-foreground relative z-10">
                To provide exceptional spa services that enhance natural beauty and confidence, 
                while training skilled professionals who will shape the future of Nigeria's 
                beauty industry.
              </p>
            </div>
            <div className="glass-card p-8 md:p-10 text-center">
              <h3 className="font-serif text-3xl text-secondary mb-4 relative z-10">Our Vision</h3>
              <p className="text-muted-foreground relative z-10">
                To be the leading aesthetic institute and spa in Nigeria, recognized for 
                excellence in treatments, training, and our commitment to elevating beauty 
                standards across the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 glossy-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="subheading mb-4">What Drives Us</p>
            <h2 className="font-serif text-4xl md:text-5xl text-secondary">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center glass-card p-8">
                <div className="glossy-icon inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 relative z-10">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl text-secondary mb-3 relative z-10">
                  {value.title}
                </h3>
                <p className="text-muted-foreground relative z-10">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-20 md:py-32 glossy-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="subheading mb-4">Why ZealAesthetics</p>
            <h2 className="font-serif text-4xl md:text-5xl text-secondary mb-6">
              What Sets Us Apart
            </h2>
            <div className="divider-elegant" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Premium Location",
                description: "Conveniently located in Wuse Zone 6, one of Abuja's most accessible areas.",
              },
              {
                title: "Experienced Team",
                description: "Our professionals bring years of expertise in both treatments and training.",
              },
              {
                title: "Comprehensive Services",
                description: "From spa treatments to professional courses, we offer complete aesthetic solutions.",
              },
              {
                title: "Industry-Standard Training",
                description: "Our graduates are equipped with skills that meet international beauty standards.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="glossy-icon w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-secondary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 glossy-dark text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 oily-sheen" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Experience the ZealAesthetics Difference
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Whether you're looking for premium treatments or professional training, 
            we're here to help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/2349015012285?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury bg-white text-secondary w-full sm:w-auto"
            >
              Book a Treatment
            </a>
            <Link
              to="/training"
              className="inline-flex items-center gap-2 px-8 py-4 pearl-border text-white text-sm uppercase tracking-[0.2em] font-medium hover:bg-white/10 transition-all duration-500"
            >
              View Training Programs
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
