import { Syringe, MessageCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

import innotoxImg from "@/assets/korean-innotox.jpg";
import huntoxImg from "@/assets/korean-huntox.jpg";
import nabotaImg from "@/assets/korean-nabota.jpg";
import neuroxinImg from "@/assets/korean-neuroxin.jpg";
import botulaxImg from "@/assets/korean-botulax.jpg";

const treatments = [
  {
    name: "Innotox Botulinum Toxin",
    image: innotoxImg,
    overview: "Innotox is a revolutionary Korean botulinum toxin that comes in a ready-to-use liquid form, eliminating the need for reconstitution. This unique formulation ensures exceptional consistency and precision in every treatment, delivering reliable, natural-looking results for wrinkle reduction and facial rejuvenation.",
    howItWorks: "Unlike traditional freeze-dried toxins, Innotox arrives as a stabilized liquid, ensuring exact dosing without dilution variations. When injected into targeted muscles, it blocks nerve signals that cause muscle contractions, temporarily relaxing the muscles responsible for dynamic wrinkles. The liquid formulation allows for more precise control and even distribution.",
    benefits: [
      "Pre-mixed liquid form ensures consistent potency",
      "No reconstitution errors—reliable dosing every time",
      "Faster onset of action—results in 2-3 days",
      "Natural-looking muscle relaxation",
      "Reduced risk of spreading to adjacent areas",
      "Long-lasting results up to 4-6 months"
    ],
    idealCandidates: "Innotox is ideal for individuals seeking precise wrinkle reduction with consistent results. It's particularly suitable for first-time patients who want predictable outcomes and those who have experienced variable results with other toxins requiring reconstitution.",
    whatToExpect: "Treatment takes 15-30 minutes. Small amounts are injected using fine needles into targeted muscles. Most patients describe the sensation as tiny pinches. No anesthesia is typically required, though numbing cream can be applied for comfort.",
    recovery: "Minimal to no downtime. You may have slight redness or pinpoint marks that fade within hours. Avoid rubbing the treated area for 4 hours. Results begin appearing in 2-3 days, with full effects visible at 7-14 days. Results typically last 4-6 months."
  },
  {
    name: "Huntox",
    image: huntoxImg,
    overview: "Huntox is a high-purity Korean botulinum toxin renowned for its exceptional manufacturing standards and natural-looking results. Produced using advanced purification techniques, Huntox delivers smooth, even muscle relaxation while preserving natural facial expressions.",
    howItWorks: "Huntox contains highly purified botulinum toxin type A that works by blocking acetylcholine release at neuromuscular junctions. This interruption prevents muscle contraction signals, causing temporary relaxation of treated muscles. The high purity minimizes the risk of antibody formation, maintaining long-term effectiveness.",
    benefits: [
      "Ultra-high purity reduces antibody resistance",
      "Smooth, natural-looking muscle relaxation",
      "Preserves natural facial expressions",
      "Excellent safety profile",
      "Consistent results across treatments",
      "Duration of 4-6 months"
    ],
    idealCandidates: "Huntox is excellent for patients concerned about developing resistance to botulinum toxins or those who have had suboptimal results with other products. It's also ideal for those prioritizing natural movement preservation.",
    whatToExpect: "The procedure takes approximately 15-30 minutes depending on treatment areas. Fine needles deliver precise injections to targeted muscles. Most patients experience minimal discomfort comparable to tiny pinches.",
    recovery: "Return to normal activities immediately. Avoid strenuous exercise for 24 hours and don't lie down for 4 hours post-treatment. Minor redness resolves within hours. Results develop over 3-7 days with full effects at 2 weeks."
  },
  {
    name: "Nabota",
    image: nabotaImg,
    overview: "Nabota is an FDA-approved Korean botulinum toxin recognized globally for its exceptional quality and efficacy. Known for its excellent spread characteristics and long-lasting wrinkle reduction, Nabota has become a trusted choice for practitioners and patients worldwide.",
    howItWorks: "Nabota utilizes a proprietary purification process that produces a highly refined botulinum toxin with optimal molecular weight. When injected, it spreads evenly within the muscle, providing consistent relaxation across the treatment area. This uniform distribution results in smooth, natural-looking wrinkle reduction.",
    benefits: [
      "FDA-approved with global recognition",
      "Excellent spread for even results",
      "High patient satisfaction rates",
      "Predictable, consistent outcomes",
      "Effective for various dynamic wrinkles",
      "Results lasting 4-6 months"
    ],
    idealCandidates: "Nabota is ideal for patients seeking a proven, FDA-approved option with an established safety record. It's particularly effective for treating larger areas where even distribution is crucial, such as forehead lines and crow's feet.",
    whatToExpect: "Treatment sessions last 15-30 minutes. Multiple small injections are placed strategically in target muscles. The procedure is well-tolerated with minimal discomfort. Some patients request topical numbing for added comfort.",
    recovery: "Virtually no downtime. Small injection marks fade within hours. Avoid touching or massaging treated areas for 4 hours. Initial results appear in 2-5 days, with full effects visible within 2 weeks. Maintenance treatments are recommended every 4-6 months."
  },
  {
    name: "Neuroxin",
    image: neuroxinImg,
    overview: "Neuroxin is a premium Korean botulinum toxin celebrated for its smooth, even distribution and exceptional ability to preserve natural facial expressions. This sophisticated formulation is designed for practitioners who demand precision and patients who prioritize natural-looking results.",
    howItWorks: "Neuroxin features an optimized molecular structure that allows for controlled diffusion within targeted muscles. This controlled spread ensures comprehensive muscle relaxation while minimizing migration to adjacent areas. The result is precise treatment of dynamic wrinkles without the 'frozen' appearance.",
    benefits: [
      "Superior control over treatment spread",
      "Maintains natural facial movement",
      "Reduced risk of unintended muscle relaxation",
      "Smooth, even wrinkle reduction",
      "Predictable outcomes for practitioners",
      "Duration of approximately 4-6 months"
    ],
    idealCandidates: "Neuroxin is perfect for patients who fear looking 'overdone' or losing facial expressiveness. It's excellent for professionals whose careers depend on natural expressions—actors, presenters, and executives who need subtle enhancement.",
    whatToExpect: "Sessions typically take 15-30 minutes. Your practitioner will analyze your facial movements to determine optimal injection sites. Fine needles deliver precise doses to specific muscles. Most find the procedure quite comfortable.",
    recovery: "Resume normal activities immediately. Avoid heavy exercise for 24 hours and don't rub treated areas for 4 hours. Any redness or swelling typically resolves within a few hours. Results develop gradually over 3-7 days."
  },
  {
    name: "Botulax",
    image: botulaxImg,
    overview: "Botulax is a widely-used Korean botulinum toxin known for its reliability and effectiveness in treating dynamic wrinkles and lines. With extensive clinical use across Asia and growing global popularity, Botulax offers a cost-effective solution without compromising on quality or results.",
    howItWorks: "Botulax contains purified botulinum toxin type A that temporarily blocks neurotransmitter release at the neuromuscular junction. By preventing acetylcholine from triggering muscle contractions, treated muscles relax, smoothing overlying wrinkles. The effect is temporary, lasting several months before muscle activity gradually returns.",
    benefits: [
      "Proven track record with extensive clinical use",
      "Effective treatment for all dynamic wrinkles",
      "Good value without sacrificing quality",
      "Quick treatment with minimal discomfort",
      "Natural-looking wrinkle reduction",
      "Results lasting 3-5 months"
    ],
    idealCandidates: "Botulax is ideal for patients seeking reliable, effective wrinkle treatment at an accessible price point. It's suitable for first-time toxin users and those maintaining regular treatment schedules.",
    whatToExpect: "Treatment is quick, typically 15-20 minutes. Small injections are administered to targeted facial muscles. Most patients describe the sensation as minor pinching. No anesthesia is usually needed.",
    recovery: "No downtime required. Avoid rubbing the treated area and strenuous activity for a few hours. Results typically appear within 3-5 days, reaching full effect at 1-2 weeks. Touch-up treatments may be scheduled at 3-5 months."
  }
];

const KoreanInjectables = () => {
  const whatsappBase = "https://wa.me/2349015012285?text=";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="hero-overlay" />
        <div className="absolute inset-0 oily-sheen" />
        <div className="relative z-10 text-center text-white px-4">
          <Link to="/services" className="subheading text-white/80 mb-4 hover:text-white transition-colors">
            ← Back to Services
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide mt-4">
            Korean Cosmetic Injectables
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Premium Korean botulinum toxin formulations for precise, natural-looking results
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16 glossy-surface">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Syringe className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-secondary mb-6">
            Korean Innovation in Aesthetics
          </h2>
          <div className="divider-elegant" />
          <p className="text-muted-foreground leading-relaxed">
            South Korea leads the world in cosmetic innovation, and their botulinum toxin formulations 
            represent the pinnacle of precision and purity. Our selection of premium Korean injectables 
            offers exceptional quality, consistent results, and natural-looking wrinkle reduction that 
            preserves your unique expressions.
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
                
                <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden mb-6">
                  <img 
                    src={treatment.image} 
                    alt={treatment.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
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
                    href={`${whatsappBase}${encodeURIComponent(`Hello, I would like to book an appointment for ${treatment.name}`)}`}
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
            Discover the Korean Difference
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Experience the precision and quality of Korean cosmetic injectables. Schedule a consultation to find the perfect treatment for you.
          </p>
          <a
            href={`${whatsappBase}${encodeURIComponent("Hello, I would like to schedule a consultation for Korean Cosmetic Injectables")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury bg-white text-secondary"
          >
            Schedule Free Consultation
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default KoreanInjectables;
