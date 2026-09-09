import { Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/gallery/before-after.jpg";

const Testimonials = () => {
  const spaTestimonials = [
    {
      name: "Adaeze N.",
      treatment: "Facial Treatment",
      rating: 5,
      text: "ZealAesthetics transformed not just my skin, but my confidence. The team is professional, knowledgeable, and truly cares about results. Best spa experience in Abuja!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Ngozi I.",
      treatment: "Massage Therapy",
      rating: 5,
      text: "The massage was absolutely divine. I've never felt so relaxed. The environment is peaceful and the therapists are highly skilled. Will definitely be back!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Amina M.",
      treatment: "Microneedling",
      rating: 5,
      text: "After struggling with acne scars for years, the microneedling treatment at ZealAesthetics has been life-changing. My skin looks so much smoother now.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Funke O.",
      treatment: "Body Waxing",
      rating: 5,
      text: "Professional, hygienic, and relatively painless! The team made me feel comfortable throughout. I won't go anywhere else for waxing.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
  ];

  const trainingTestimonials = [
    {
      name: "Blessing O.",
      course: "Beauty & Spa Therapy Graduate",
      rating: 5,
      text: "The training at ZealAesthetics gave me the confidence and skills to start my own spa. The instructors were amazing and the hands-on practice was invaluable!",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Chidinma E.",
      course: "Aesthetic Training Graduate",
      rating: 5,
      text: "I learned so much in just a few weeks. Now I'm working at a top spa in Lagos thanks to my ZealAesthetics certification. Highly recommended!",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Fatima A.",
      course: "Skincare Product Development",
      rating: 5,
      text: "The product development course was eye-opening. I've already started my own skincare line! The knowledge I gained here is priceless.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
  ];

  const stats = [
    { value: "100+", label: "5-Star Reviews" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "500+", label: "Graduates Trained" },
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
          <p className="subheading text-white/80 mb-4">What People Say</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-wide">
            Testimonials
          </h1>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 glossy-dark text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 oily-sheen" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-3xl md:text-4xl mb-1">
                  {stat.value}
                </div>
                <p className="text-xs uppercase tracking-[0.15em] text-white/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 glossy-surface">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl text-secondary mb-6">
            Real Stories, Real Results
          </h2>
          <div className="divider-elegant" />
          <p className="text-muted-foreground leading-relaxed">
            Our clients' satisfaction is our greatest achievement. Read what they
            have to say about their experience at ZealAesthetics Institute & Spa.
          </p>
        </div>
      </section>

      {/* Spa Client Testimonials */}
      <section className="py-8 md:py-16 bg-muted oily-sheen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="subheading mb-4">Spa Clients</p>
            <h2 className="font-serif text-3xl md:text-4xl text-secondary">
              Treatment Reviews
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {spaTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card p-8 transition-all duration-500 hover:shadow-xl"
              >
                <Quote className="w-10 h-10 text-primary/30 mb-4 relative z-10" />

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-spa-gold text-spa-gold"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className="glossy-frame rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-secondary">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.treatment}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Graduate Testimonials */}
      <section className="py-16 md:py-24 glossy-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="subheading mb-4">Training Graduates</p>
            <h2 className="font-serif text-3xl md:text-4xl text-secondary">
              Success Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainingTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card p-8 transition-all duration-500 hover:shadow-xl"
              >
                <Quote className="w-10 h-10 text-primary/30 mb-4 relative z-10" />

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-spa-gold text-spa-gold"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className="glossy-frame rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-secondary">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.course}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review CTA */}
      <section className="py-16 bg-muted oily-sheen">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-secondary mb-6">
            Share Your Experience
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Have you visited ZealAesthetics or completed one of our training programs? 
            We'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/2349015012285?text=Hello%2C%20I%20would%20like%20to%20share%20my%20experience"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury"
            >
              Share Your Review
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 glossy-dark text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 oily-sheen" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Join Our Happy Clients & Graduates
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Experience the ZealAesthetics difference for yourself. Book a treatment 
            or enroll in our training programs today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/2349015012285?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury bg-white text-secondary"
            >
              Book a Treatment
            </a>
            <Link
              to="/training"
              className="inline-flex items-center gap-2 px-8 py-4 pearl-border text-white text-sm uppercase tracking-[0.2em] font-medium hover:bg-white/10 transition-all duration-500"
            >
              Explore Training
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
