import { CircleDot, MessageCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import sculptraBeforeAfter from "@/assets/sculptra-before-after.jpg";
import juvedermImg from "@/assets/treatments/juvederm-lip-filler.jpg";
import restylaneImg from "@/assets/treatments/restylane-undereye.jpg";
import volumaImg from "@/assets/treatments/voluma-cheek.jpg";
import volbellaImg from "@/assets/treatments/volbella-lips.jpg";
import radiesseImg from "@/assets/treatments/radiesse-hands.jpg";
import sculptraImg from "@/assets/treatments/sculptra-consultation.jpg";

const treatments = [
  {
    name: "Juvederm",
    image: juvedermImg,
    overview: "Juvederm is a world-renowned collection of hyaluronic acid dermal fillers designed to address a wide range of facial concerns. Known for its smooth-gel VYCROSS technology, Juvederm provides natural-looking results for lips, cheeks, and facial lines with exceptional comfort during injection and impressive longevity.",
    howItWorks: "Juvederm's proprietary VYCROSS technology combines different molecular weights of hyaluronic acid, creating a smooth, cohesive gel that flows easily through needles and integrates seamlessly with facial tissue. Once injected, the cross-linked HA attracts water, providing immediate volume while maintaining a soft, natural feel that moves with your expressions.",
    benefits: [
      "Smooth-gel technology for comfortable injection",
      "Natural-looking, natural-feeling results",
      "Versatile family for all treatment areas",
      "Long-lasting results up to 12-18 months",
      "Contains lidocaine for comfort",
      "FDA-approved with extensive safety data"
    ],
    idealCandidates: "Juvederm is ideal for patients seeking natural enhancement of lips, cheeks, or correction of facial lines and folds. Its versatile family of products makes it suitable for nearly everyone, from first-time filler patients to those maintaining regular treatment schedules.",
    whatToExpect: "Treatment takes 30-60 minutes depending on areas treated. The incorporated lidocaine provides comfort during injection. Results are immediately visible, though swelling may temporarily exaggerate the outcome. Final results settle within 1-2 weeks.",
    recovery: "Mild swelling and potential bruising for 3-7 days, especially with lip treatment. Apply ice to minimize swelling. Avoid extreme heat and strenuous exercise for 48 hours. Results last approximately 12-18 months depending on the specific product used."
  },
  {
    name: "Restylane",
    image: restylaneImg,
    overview: "Restylane is a pioneering family of FDA-approved dermal fillers that revolutionized aesthetic medicine. With specialized formulations for fine lines, lips, cheeks, and hands, Restylane offers targeted solutions using NASHA and XpresHAn technologies for natural movement and long-lasting results.",
    howItWorks: "Restylane products use either NASHA (Non-Animal Stabilized Hyaluronic Acid) or XpresHAn technology. NASHA creates a firmer gel ideal for structural support, while XpresHAn creates a more flexible gel that moves naturally with facial expressions. Both attract water to treated areas, providing hydration alongside volumization.",
    benefits: [
      "Pioneering brand with 25+ years of use",
      "Specialized products for each concern",
      "XpresHAn technology for natural expression",
      "Proven safety with extensive research",
      "Options for subtle to dramatic results",
      "Results lasting 6-18 months by product"
    ],
    idealCandidates: "Restylane is excellent for patients who want tailored solutions for specific concerns—whether delicate tear trough correction, natural lip enhancement, or dramatic cheek augmentation. The range allows precise matching of product to need.",
    whatToExpect: "Sessions typically last 30-60 minutes. Your practitioner will select the optimal Restylane product for your goals. Some products contain lidocaine; others may use topical numbing. Immediate results are visible with final outcome at 2 weeks.",
    recovery: "Expect swelling for 2-7 days depending on treated area. Bruising is possible but manageable. Follow aftercare instructions carefully. Results vary by product—Restylane Silk lasts about 6 months, while Restylane Lyft can last up to 18 months."
  },
  {
    name: "Voluma XC",
    image: volumaImg,
    overview: "Juvederm Voluma XC is specifically engineered for deep injection in the cheek area, providing significant lift and volume restoration. As the first FDA-approved filler for age-related volume loss in the midface, Voluma XC addresses one of the most impactful signs of aging with results lasting up to two years.",
    howItWorks: "Voluma XC features a high concentration of cross-linked hyaluronic acid with exceptional cohesivity and elasticity (high G-prime). This allows it to lift and support cheek tissue against gravity. Injected deep along the cheekbone or in the mid-cheek area, it creates a foundation that lifts the entire lower face.",
    benefits: [
      "Specifically designed for cheek augmentation",
      "Provides significant lift to mid and lower face",
      "Longest-lasting HA filler—up to 2 years",
      "Creates natural cheekbone definition",
      "Addresses nasolabial folds indirectly through lift",
      "Contains lidocaine for comfort"
    ],
    idealCandidates: "Voluma XC is ideal for patients experiencing mid-face volume loss and sagging—typically beginning in the late 30s to 40s. It's excellent for those who want significant improvement without surgery and appreciate long-lasting results.",
    whatToExpect: "Treatment takes 30-45 minutes for both cheeks. Deep injections may feel like pressure. Lidocaine in the product provides comfort. Results are immediate and dramatic—you'll leave with visibly lifted, contoured cheeks. Swelling is expected.",
    recovery: "Moderate swelling for 5-10 days is normal with deep cheek injections. Bruising may occur but is treatable with arnica. Avoid sleeping on your face for 48 hours. Final results emerge at 2-4 weeks and can last up to 24 months."
  },
  {
    name: "Volbella XC",
    image: volbellaImg,
    overview: "Juvederm Volbella XC is a sophisticated, subtle lip filler designed for patients who want natural-looking lip enhancement and correction of perioral lines (smoker's lines around the mouth). Using VYCROSS technology, Volbella provides soft, smooth results without the overfilled appearance.",
    howItWorks: "Volbella XC uses a lower concentration of hyaluronic acid with VYCROSS cross-linking, creating a softer, more pliable gel perfect for the delicate lip area. Its smooth consistency allows for precise placement and subtle enhancement, avoiding the firm, unnatural feel that can occur with denser fillers.",
    benefits: [
      "Natural, subtle lip enhancement",
      "Specifically designed for lips and perioral lines",
      "Soft feel—doesn't feel 'done'",
      "Smooth VYCROSS technology",
      "Results lasting up to 12 months",
      "Contains lidocaine for comfortable treatment"
    ],
    idealCandidates: "Volbella XC is perfect for patients seeking refined, natural-looking lip enhancement rather than dramatic augmentation. It's ideal for first-time lip filler patients, those wanting to restore age-related lip volume loss, and anyone addressing vertical lip lines.",
    whatToExpect: "Treatment takes 15-30 minutes. The lips are sensitive, but lidocaine in the product helps. You'll see immediate enhancement, though lips will swell significantly. Final results are visible at 1-2 weeks once swelling subsides.",
    recovery: "Significant lip swelling for 3-5 days is normal—this is not your final result. Bruising is common but fades within a week. Avoid kissing, straws, and lip products for 24 hours. Final, natural-looking results last approximately 12 months."
  },
  {
    name: "Radiesse",
    image: radiesseImg,
    overview: "Radiesse is a unique dermal filler composed of calcium hydroxylapatite (CaHA) microspheres suspended in a gel carrier. Unlike hyaluronic acid fillers, Radiesse provides immediate volume while also stimulating your body's own collagen production for lasting structural improvement that continues after the product has been absorbed.",
    howItWorks: "When injected, Radiesse's gel carrier provides immediate volume and correction. Over time, the CaHA microspheres stimulate fibroblasts to produce new collagen around the injection site. As the gel carrier is absorbed, your own collagen takes over, providing structural support that lasts well beyond the original filler.",
    benefits: [
      "Immediate volume plus collagen stimulation",
      "Results that improve over time",
      "Longer-lasting than many HA fillers—12-18 months",
      "Excellent for hands and facial contouring",
      "Provides structural support",
      "Biocompatible and gradually absorbed"
    ],
    idealCandidates: "Radiesse is ideal for patients seeking dual-action treatment—immediate correction plus long-term collagen building. It's excellent for hand rejuvenation, facial volume restoration, and jawline definition. Not recommended for lips due to its firmer consistency.",
    whatToExpect: "Treatment takes 30-45 minutes depending on areas treated. Local anesthesia or the lidocaine-containing formulation ensures comfort. Results are immediate and continue to improve over 2-3 months as collagen production increases.",
    recovery: "Mild to moderate swelling for 3-7 days. Bruising is possible, especially with hand treatment. Results are immediate but continue improving for several months. Effects typically last 12-18 months, with some patients reporting even longer."
  },
  {
    name: "Sculptra Aesthetics",
    image: sculptraImg,
    overview: "Sculptra Aesthetics is a poly-L-lactic acid (PLLA) collagen biostimulator that works differently from traditional fillers. Rather than providing immediate volume, Sculptra gradually stimulates your body's own collagen production, resulting in subtle, progressive improvement that can last more than two years.",
    howItWorks: "Sculptra's PLLA microparticles are injected deep into the dermis where they trigger a controlled inflammatory response. This stimulates fibroblasts to produce new collagen over several months. The PLLA is gradually absorbed while leaving behind a matrix of your own collagen, providing natural-looking volume restoration.",
    benefits: [
      "Stimulates natural collagen production",
      "Gradual, natural-looking improvement",
      "Results lasting 2+ years",
      "Addresses overall facial volume loss",
      "Non-surgical facial rejuvenation",
      "Subtle enhancement that doesn't look 'done'"
    ],
    idealCandidates: "Sculptra is ideal for patients with significant facial volume loss who prefer gradual, natural-looking improvement over immediate dramatic change. It's perfect for those planning ahead—patients willing to undergo a series of treatments for long-lasting results.",
    whatToExpect: "Treatment involves a series of sessions (typically 3) spaced 4-6 weeks apart. Each session takes 30-45 minutes. Results are not immediate—improvement develops gradually over 2-3 months as collagen builds. Patience is required but rewarded.",
    recovery: "Massage the treated area as instructed (typically 5 minutes, 5 times daily, for 5 days) to distribute the product evenly. Mild swelling for 2-3 days. Initial volume from the water carrier subsides quickly; true results emerge over months and last 2+ years.",
    beforeAfter: sculptraBeforeAfter
  }
];

const AmericanFillers = () => {
  const whatsappBase = "https://wa.me/2349015012285?text=";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="hero-overlay" />
        <div className="absolute inset-0 oily-sheen" />
        <div className="relative z-10 text-center text-white px-4">
          <Link to="/services" className="subheading text-white/80 mb-4 hover:text-white transition-colors">
            ← Back to Services
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide mt-4">
            American Fillers
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Premium FDA-approved dermal fillers for natural volumization and rejuvenation
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16 glossy-surface">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <CircleDot className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-secondary mb-6">
            FDA-Approved Excellence
          </h2>
          <div className="divider-elegant" />
          <p className="text-muted-foreground leading-relaxed">
            American FDA-approved dermal fillers represent the highest standards of safety, efficacy, 
            and clinical research. From the pioneering Restylane to the innovative Sculptra, these 
            products offer versatile solutions for every aesthetic concern—from subtle lip enhancement 
            to dramatic facial contouring.
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
                      alt={`${treatment.name} treatment in action`}
                      className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                )}
                
                {"beforeAfter" in treatment && treatment.beforeAfter && (
                  <div className="mb-8">
                    <p className="text-sm text-muted-foreground mb-2 font-medium">Before & After Results:</p>
                    <img
                      src={treatment.beforeAfter}
                      alt={`${treatment.name} before and after results`}
                      className="w-full rounded-lg shadow-lg"
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
            Restore, Enhance, Transform
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Discover the perfect FDA-approved filler for your aesthetic goals. Our experts will create a personalized treatment plan just for you.
          </p>
          <a
            href={`${whatsappBase}${encodeURIComponent("Hello, I would like to schedule a consultation for American Filler treatments")}`}
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

export default AmericanFillers;