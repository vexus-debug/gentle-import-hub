import { Link } from "react-router-dom";
import { GraduationCap, Award, Users, Clock, CheckCircle, Star } from "lucide-react";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/gallery/botox-injection.jpg";
import aestheticTrainingImg from "@/assets/training/aesthetic-training.jpg";
import skincareFormulationImg from "@/assets/training/skincare-formulation.jpg";
import spaTherapyImg from "@/assets/training/spa-therapy.jpg";
import advancedSkincareImg from "@/assets/training/advanced-skincare.jpg";
import trainingSession1 from "@/assets/training/training-session-1.jpg";
import trainingSession2 from "@/assets/training/training-session-2.jpg";
import trainingSession3 from "@/assets/training/training-session-3.jpg";
import trainingSession4 from "@/assets/training/training-session-4.jpg";
import trainingSession5 from "@/assets/training/training-session-5.jpg";
import trainingSession6 from "@/assets/training/training-session-6.jpg";
import trainingSession7 from "@/assets/training/training-session-7.jpg";

const Training = () => {
  const courses = [
    {
      title: "Aesthetic Training Program",
      description: "Comprehensive training in modern aesthetic procedures and techniques.",
      duration: "8-12 Weeks",
      image: aestheticTrainingImg,
      highlights: [
        "Facial analysis and consultation skills",
        "Advanced facial treatments",
        "Microneedling techniques",
        "Chemical peels application",
        "Client management and aftercare",
      ],
    },
    {
      title: "Clinical Skincare Product Development",
      description: "Learn to formulate and develop professional skincare products.",
      duration: "6-8 Weeks",
      image: skincareFormulationImg,
      highlights: [
        "Ingredient science and formulation",
        "Product safety and regulations",
        "Creating custom skincare products",
        "Quality control processes",
        "Business and branding basics",
      ],
    },
    {
      title: "Beauty & Spa Therapy",
      description: "Complete training in spa services including facials, waxing, and massage.",
      duration: "10-14 Weeks",
      image: spaTherapyImg,
      highlights: [
        "Facial treatment techniques",
        "Professional waxing methods",
        "Massage therapy fundamentals",
        "Body treatment protocols",
        "Spa hygiene and sanitation",
      ],
    },
    {
      title: "Advanced Skincare Techniques",
      description: "Specialized course for experienced practitioners looking to advance their skills.",
      duration: "4-6 Weeks",
      image: advancedSkincareImg,
      highlights: [
        "Advanced treatment modalities",
        "Treating complex skin conditions",
        "Fat dissolving procedures",
        "Combination treatment protocols",
        "Business growth strategies",
      ],
    },
  ];

  const features = [
    {
      icon: GraduationCap,
      title: "Certified Training",
      description: "Receive recognized certifications upon course completion.",
    },
    {
      icon: Users,
      title: "Hands-On Experience",
      description: "Practice on real clients in our fully-equipped training facility.",
    },
    {
      icon: Award,
      title: "Expert Instructors",
      description: "Learn from experienced industry professionals.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Choose from various class schedules to fit your lifestyle.",
    },
  ];

  const galleryImages = [
    { src: trainingSession1, alt: "Hands-on facial treatment training session" },
    { src: trainingSession2, alt: "Massage therapy practical training" },
    { src: trainingSession3, alt: "Body sculpting training on mannequin" },
    { src: trainingSession4, alt: "Training classroom session" },
    { src: trainingSession5, alt: "Facial treatment demonstration" },
    { src: trainingSession6, alt: "Professional skincare training" },
    { src: trainingSession7, alt: "Facial massage technique training" },
  ];

  const testimonials = [
    {
      name: "Blessing O.",
      course: "Beauty & Spa Therapy Graduate",
      text: "The training at ZealAesthetics gave me the confidence and skills to start my own spa. The instructors were amazing!",
    },
    {
      name: "Chidinma E.",
      course: "Aesthetic Training Graduate",
      text: "I learned so much in just a few weeks. Now I'm working at a top spa in Lagos thanks to my ZealAesthetics certification.",
    },
    {
      name: "Fatima A.",
      course: "Skincare Product Development",
      text: "The product development course was eye-opening. I've already started my own skincare line!",
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
          <p className="subheading text-white/80 mb-4">Professional Development</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-wide">
            Training Programs
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 glossy-surface">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl text-secondary mb-6">
            Launch Your Career in Aesthetics
          </h2>
          <div className="divider-elegant" />
          <p className="text-muted-foreground leading-relaxed">
            ZealAesthetics Institute offers comprehensive training programs designed to 
            equip you with the skills and knowledge needed to excel in the beauty and 
            aesthetics industry. Whether you're starting fresh or looking to advance 
            your career, we have a program for you.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 glossy-dark text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 oily-sheen" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="glossy-icon w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-spa-gold" />
                </div>
                <h3 className="font-medium text-lg mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16 md:py-24 bg-muted oily-sheen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="subheading mb-4">Our Programs</p>
            <h2 className="font-serif text-4xl md:text-5xl text-secondary">
              Training Courses
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="glass-card overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden glossy-frame">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{course.duration}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-secondary mb-3">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {course.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {course.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="https://wa.me/2349015012285?text=Hello%2C%20I%20am%20interested%20in%20the%20training%20program"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-luxury w-full sm:w-auto"
                  >
                    Inquire About This Course
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success */}
      <section className="py-16 md:py-24 glossy-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="subheading mb-4">Success Stories</p>
            <h2 className="font-serif text-4xl md:text-5xl text-secondary">
              What Our Graduates Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card p-8">
                <div className="flex items-center gap-1 mb-4 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-spa-gold text-spa-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6 relative z-10">
                  "{testimonial.text}"
                </p>
                <div className="relative z-10">
                  <p className="font-medium text-secondary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Gallery */}
      <section className="py-16 md:py-24 bg-muted oily-sheen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="subheading mb-4">In Action</p>
            <h2 className="font-serif text-4xl md:text-5xl text-secondary">
              Training Gallery
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="glass-card overflow-hidden group aspect-square"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Info */}
      <section className="py-16 md:py-24 glossy-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="subheading mb-4">Enrollment</p>
            <h2 className="font-serif text-3xl md:text-4xl text-secondary mb-6">
              How to Enroll
            </h2>
            <div className="divider-elegant" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  step: "1",
                  title: "Inquire",
                  description: "Contact us via WhatsApp or visit our center to learn about available courses.",
                },
                {
                  step: "2",
                  title: "Register",
                  description: "Complete the registration form and make your deposit to secure your spot.",
                },
                {
                  step: "3",
                  title: "Begin Training",
                  description: "Start your journey to becoming a certified beauty professional.",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-serif text-xl flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-serif text-xl text-secondary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 glossy-dark text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 oily-sheen" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Ready to Start Your Career?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our training programs and enrollment options. 
            Your journey to becoming a certified aesthetic professional starts here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/2349015012285?text=Hello%2C%20I%20am%20interested%20in%20enrolling%20in%20a%20training%20program"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury bg-white text-secondary w-full sm:w-auto"
            >
              Enroll Now via WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 pearl-border text-white text-sm uppercase tracking-[0.2em] font-medium hover:bg-white/10 transition-all duration-500"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Training;
