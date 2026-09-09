import { Heart, MessageCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import thermivaImg from "@/assets/treatments/thermiva-wellness.jpg";
import oshotImg from "@/assets/treatments/oshot-consultation.jpg";
import pshotImg from "@/assets/treatments/pshot-consultation.jpg";

const treatments = [
  {
    name: "Thermiva",
    image: thermivaImg,
    overview: "Thermiva is a non-invasive radiofrequency treatment designed for feminine wellness and vaginal rejuvenation. Using controlled thermal energy, Thermiva addresses common concerns including vaginal laxity, dryness, mild incontinence, and decreased sensation—all without surgery, downtime, or discomfort.",
    howItWorks: "Thermiva delivers temperature-controlled radiofrequency energy to vaginal and vulvar tissues using a specialized, comfortable handpiece. The thermal energy heats tissue to precise temperatures that stimulate collagen production and tissue tightening without causing damage. The body responds by generating new collagen and improving blood flow to treated areas.",
    benefits: [
      "Non-surgical vaginal rejuvenation",
      "Improves vaginal laxity and tightness",
      "Addresses mild urinary incontinence",
      "Enhances intimate sensation and satisfaction",
      "Reduces vaginal dryness",
      "No downtime—return to activities immediately"
    ],
    idealCandidates: "Thermiva is ideal for women experiencing vaginal laxity after childbirth, menopausal symptoms like dryness and atrophy, mild stress incontinence, or decreased intimate sensation. It's suitable for women seeking improvement without surgery or hormones.",
    whatToExpect: "Treatment takes approximately 30 minutes. The procedure is painless—most patients describe a gentle warming sensation. No anesthesia is needed. A series of 3 treatments spaced 4-6 weeks apart is typically recommended for optimal results.",
    recovery: "There is absolutely no downtime. You can return to all normal activities, including intimacy, immediately after treatment. Some patients notice immediate improvement in sensation and lubrication. Full results develop over 2-3 months as collagen remodels."
  },
  {
    name: "O-Shot (Orgasm Shot)",
    image: oshotImg,
    overview: "The O-Shot is a revolutionary platelet-rich plasma (PRP) treatment designed to enhance feminine sexual wellness. By injecting PRP derived from your own blood into specific areas, the O-Shot stimulates tissue regeneration, improves blood flow, and enhances sensitivity—naturally improving intimate satisfaction.",
    howItWorks: "Blood is drawn and processed to concentrate platelet-rich plasma containing growth factors. This PRP is then injected into the clitoral and vaginal areas using a very fine needle. The growth factors stimulate stem cell activation, new blood vessel formation, and tissue regeneration. This results in improved sensitivity, lubrication, and overall intimate function.",
    benefits: [
      "Uses your body's own regenerative factors",
      "Enhances intimate sensation and response",
      "Improves natural lubrication",
      "May help with mild incontinence",
      "Quick procedure with no downtime",
      "Natural results without synthetic hormones"
    ],
    idealCandidates: "The O-Shot is ideal for women experiencing decreased intimate sensation, difficulty with arousal or orgasm, vaginal dryness, or mild stress incontinence. It's appropriate for women at any age seeking natural enhancement of intimate wellness.",
    whatToExpect: "The entire procedure takes about 30-45 minutes, including blood draw and processing. Topical numbing cream is applied for comfort. The injection itself takes only a few minutes. Most patients experience minimal to no discomfort.",
    recovery: "No downtime is required. You may resume all activities, including intimacy, within 24 hours. Some patients notice immediate improvement; most experience progressive enhancement over 3-6 weeks as tissue regeneration occurs. Results typically last 12-18 months."
  },
  {
    name: "P-Shot (Priapus Shot)",
    image: pshotImg,
    overview: "The P-Shot is an innovative platelet-rich plasma therapy designed for male intimate wellness and enhancement. By harnessing the regenerative power of your own growth factors, the P-Shot can improve firmness, sensation, and overall intimate function—naturally and without synthetic medications.",
    howItWorks: "Your blood is drawn and processed to extract concentrated platelet-rich plasma rich in growth factors. This PRP is then injected into specific areas using a numbing technique that ensures comfort. The growth factors stimulate tissue regeneration, increase blood flow, and promote new blood vessel formation, resulting in improved function and sensation.",
    benefits: [
      "Natural enhancement using your own blood",
      "Improves firmness and function",
      "Enhances sensitivity and pleasure",
      "May improve results with other treatments",
      "Quick procedure with minimal discomfort",
      "No systemic side effects"
    ],
    idealCandidates: "The P-Shot is ideal for men experiencing decreased intimate function, reduced sensation, or those seeking enhancement of their intimate wellness. It can be particularly beneficial for men who have tried other treatments with limited success or those seeking natural alternatives.",
    whatToExpect: "The procedure takes about 30-45 minutes total. A topical numbing agent and nerve block ensure complete comfort. The blood draw and injection process is quick. Most men report no pain during the procedure.",
    recovery: "There is minimal to no downtime. You may return to normal activities immediately, with intimacy recommended to resume after 24-48 hours. Some improvement is noticed quickly, with progressive enhancement over 4-8 weeks. Results typically last 12-18 months."
  }
];

const Wellness = () => {
  const whatsappBase = "https://wa.me/2349015012285?text=";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="hero-overlay" />
        <div className="absolute inset-0 oily-sheen" />
        <div className="relative z-10 text-center text-white px-4">
          <Link to="/services" className="subheading text-white/80 mb-4 hover:text-white transition-colors">
            ← Back to Services
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide mt-4">
            Men & Women Wellness
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Intimate wellness and rejuvenation treatments for enhanced quality of life
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16 glossy-surface">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-secondary mb-6">
            Reclaim Your Confidence
          </h2>
          <div className="divider-elegant" />
          <p className="text-muted-foreground leading-relaxed">
            Our intimate wellness treatments address concerns that many hesitate to discuss but that 
            significantly impact quality of life. Using advanced, non-surgical technologies and 
            regenerative medicine, we help both men and women restore comfort, function, and 
            confidence in a discreet, professional environment.
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
                
                {treatment.image && (
                  <div className="mb-8">
                    <img
                      src={treatment.image}
                      alt={`${treatment.name} wellness consultation`}
                      className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                )}
                
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h4 className="font-medium text-secondary mb-2">Overview</h4>
                    <p className="leading-relaxed">{treatment.overview}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-secondary mb-2">How It Works</h4>
                    <p className="leading-relaxed">{treatment.howItWorks}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-secondary mb-2">Benefits</h4>
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
                    <h4 className="font-medium text-secondary mb-2">Ideal Candidates</h4>
                    <p className="leading-relaxed">{treatment.idealCandidates}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-secondary mb-2">What to Expect</h4>
                    <p className="leading-relaxed">{treatment.whatToExpect}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-secondary mb-2">Recovery & Results</h4>
                    <p className="leading-relaxed">{treatment.recovery}</p>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <a
                    href={`${whatsappBase}${encodeURIComponent(`Hello, I would like to book a confidential consultation for ${treatment.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-luxury inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Book {treatment.name}
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
            Take the First Step
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            All consultations are completely confidential. Contact us to discuss your concerns and discover how we can help.
          </p>
          <a
            href={`${whatsappBase}${encodeURIComponent("Hello, I would like to schedule a confidential consultation for Wellness treatments")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury bg-white text-secondary"
          >
            Schedule Confidential Consultation
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Wellness;