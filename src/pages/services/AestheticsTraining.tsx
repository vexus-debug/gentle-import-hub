import { GraduationCap, MessageCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const treatments = [
  {
    name: "Basic Training",
    overview: "Our Basic Aesthetics Training is a comprehensive foundation course designed for healthcare professionals entering the aesthetics field. This hands-on program covers essential injection techniques, safety protocols, facial anatomy, and the fundamental skills needed to confidently perform basic aesthetic procedures including botulinum toxin and dermal filler treatments.",
    howItWorks: "The course combines theoretical learning with extensive practical training. You'll study facial anatomy, skin physiology, product knowledge, and patient assessment. Hands-on sessions on live models allow you to practice injection techniques under expert supervision. The training covers consultation skills, consent processes, complication management, and building a safe practice foundation.",
    benefits: [
      "Comprehensive theoretical foundation",
      "Hands-on training with live models",
      "Learn essential injection techniques",
      "Understand facial anatomy for safer treatment",
      "Complication recognition and management",
      "Certificate upon successful completion"
    ],
    idealCandidates: "This training is designed for doctors, nurses, dentists, and other licensed healthcare professionals seeking to enter the aesthetics field. No prior aesthetic experience is required, but a medical background is essential. The course is perfect for those wanting to add aesthetic services to their practice.",
    whatToExpect: "Training typically spans 2-3 intensive days. You'll receive comprehensive course materials, observe expert demonstrations, and perform supervised treatments on live models. Theory sessions cover everything from product science to business considerations. You'll leave with the confidence to begin practicing.",
    recovery: "N/A — This is a training course, not a treatment. Upon completion, you'll receive a certificate of completion and ongoing support as you begin your aesthetics practice. Many practitioners benefit from mentorship or additional supervision initially."
  },
  {
    name: "Advanced Training",
    overview: "Our Advanced Aesthetics Training is an expert-level program for practitioners who have mastered the basics and are ready to elevate their skills. This intensive course covers complex procedures, advanced facial anatomy, difficult areas, combination treatments, and the sophisticated techniques needed to achieve exceptional results for discerning patients.",
    howItWorks: "Building on foundational knowledge, this course delves into advanced facial anatomy, rheology of different fillers, advanced injection planes and techniques, and treatment of challenging areas like tear troughs, temples, and jawline. You'll learn cannula techniques, combination protocols, managing complex patients, and handling advanced complications.",
    benefits: [
      "Master advanced injection techniques",
      "Learn cannula and advanced needle skills",
      "Treat challenging facial areas safely",
      "Develop signature treatment protocols",
      "Advanced complication management",
      "Elevate your practice to premium level"
    ],
    idealCandidates: "This training is for practitioners who have completed basic training and have practical experience performing aesthetic treatments. You should be comfortable with standard toxin and filler procedures and ready to expand your skill set to advanced techniques and premium treatments.",
    whatToExpect: "The advanced course typically runs 2-3 days with smaller class sizes for personalized attention. Expect in-depth anatomical study, advanced technique demonstrations, and extensive hands-on practice on live models with challenging treatment goals. Complex case discussions prepare you for real-world scenarios.",
    recovery: "N/A — This is a training course. You'll receive an advanced certification and access to ongoing education resources. Many advanced practitioners continue developing through masterclasses, conferences, and peer collaboration. Our alumni network provides ongoing support."
  }
];

const AestheticsTraining = () => {
  const whatsappBase = "https://wa.me/2349015012285?text=";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="hero-overlay" />
        <div className="absolute inset-0 oily-sheen" />
        <div className="relative z-10 text-center text-white px-4">
          <Link to="/services" className="subheading text-white/80 mb-4 hover:text-white transition-colors">
            ← Back to Services
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide mt-4">
            Aesthetics Training
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Professional certification courses for practitioners entering the aesthetics field
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16 glossy-surface">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-secondary mb-6">
            Launch Your Aesthetics Career
          </h2>
          <div className="divider-elegant" />
          <p className="text-muted-foreground leading-relaxed">
            Our professional training programs provide healthcare practitioners with the knowledge, 
            skills, and confidence to perform aesthetic procedures safely and effectively. Whether 
            you're just entering the field or seeking to advance your expertise, our comprehensive 
            courses combine theoretical depth with extensive hands-on practice.
          </p>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-8 md:py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {treatments.map((treatment, index) => (
              <div key={index} className="glass-card p-6 md:p-10">
                <h3 className="font-serif text-2xl md:text-3xl text-secondary mb-6">
                  {treatment.name}
                </h3>
                
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h4 className="font-medium text-secondary mb-2">Overview</h4>
                    <p className="leading-relaxed">{treatment.overview}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-secondary mb-2">Course Structure</h4>
                    <p className="leading-relaxed">{treatment.howItWorks}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-secondary mb-2">What You'll Learn</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {treatment.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-secondary mb-2">Who Should Attend</h4>
                    <p className="leading-relaxed">{treatment.idealCandidates}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-secondary mb-2">What to Expect</h4>
                    <p className="leading-relaxed">{treatment.whatToExpect}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-secondary mb-2">Certification & Support</h4>
                    <p className="leading-relaxed">{treatment.recovery}</p>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <a
                    href={`${whatsappBase}${encodeURIComponent(`Hello, I would like to enquire about the ${treatment.name} program`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-luxury inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Enquire About {treatment.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 glossy-dark text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 oily-sheen" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Ready to Advance Your Career?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Take the next step in your aesthetics journey. Contact us to learn about upcoming training dates and enrollment.
          </p>
          <a
            href={`${whatsappBase}${encodeURIComponent("Hello, I would like information about upcoming Aesthetics Training courses")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury bg-white text-secondary"
          >
            Get Training Information
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default AestheticsTraining;
