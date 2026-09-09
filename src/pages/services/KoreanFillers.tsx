import { Droplet, MessageCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

import revolaxLipInjection from "@/assets/revolax-lip-injection.jpg";
import fillerCheekVolumization from "@/assets/filler-cheek-volumization.jpg";
import fillerJawlineContouring from "@/assets/filler-jawline-contouring.jpg";
import fillerDermalaxComprehensive from "@/assets/filler-dermalax-comprehensive.jpg";
import fillerRejuvenesseDelicate from "@/assets/filler-rejuvenesse-delicate.jpg";

const treatments = [
  {
    name: "Revolax",
    image: revolaxLipInjection,
    overview: "Revolax is a premium Korean hyaluronic acid dermal filler celebrated for its exceptionally smooth consistency and natural tissue integration. Available in multiple densities, Revolax provides versatile solutions from fine line correction to deep volume restoration, delivering natural-looking results that move with your expressions.",
    howItWorks: "Revolax features high-purity, cross-linked hyaluronic acid that integrates seamlessly with surrounding tissue. The unique cross-linking technology creates a cohesive gel that resists breakdown while remaining soft and pliable. When injected, it attracts water molecules, providing both immediate volumization and ongoing hydration to treated areas.",
    benefits: [
      "Exceptionally smooth injection experience",
      "Natural tissue integration—moves with expressions",
      "Multiple densities for customized treatment",
      "Long-lasting results up to 12-18 months",
      "Minimal swelling post-treatment",
      "Reversible with hyaluronidase if needed"
    ],
    idealCandidates: "Revolax is ideal for patients seeking natural-looking enhancement with minimal downtime. It's particularly suitable for those who want fillers that feel soft and move naturally, rather than creating a stiff or overfilled appearance.",
    whatToExpect: "Treatment takes 30-60 minutes depending on areas treated. Topical numbing or nerve blocks ensure comfort. The filler is injected using fine needles or cannulas. You'll see immediate results, though final appearance settles over 1-2 weeks.",
    recovery: "Mild swelling and possible bruising for 2-7 days. Avoid strenuous exercise for 24-48 hours. Results are visible immediately, with optimal appearance at 2 weeks once swelling resolves. Touch-ups can be performed after 2 weeks if desired."
  },
  {
    name: "Neuramis",
    image: fillerCheekVolumization,
    overview: "Neuramis is a leading Korean dermal filler known for its excellent volumizing properties and impressive longevity. Manufactured using advanced technology, Neuramis offers a range of formulations designed to address everything from subtle lip enhancement to significant facial volume restoration.",
    howItWorks: "Neuramis utilizes high-concentration, cross-linked hyaluronic acid with optimized viscoelastic properties. The specialized cross-linking creates a stable gel matrix that resists enzymatic degradation while maintaining flexibility. This results in natural-feeling volume that lifts, contours, and rejuvenates treated areas.",
    benefits: [
      "High-concentration HA for superior volumization",
      "Extended longevity—results last 12-24 months",
      "Range of formulations for all treatment depths",
      "Excellent lifting capacity for facial contouring",
      "Smooth, predictable injection flow",
      "Well-established safety profile"
    ],
    idealCandidates: "Neuramis is excellent for patients experiencing moderate to significant volume loss who desire long-lasting results. It's particularly effective for cheek augmentation, jawline definition, and restoring facial contours lost to aging.",
    whatToExpect: "Procedures typically take 30-60 minutes. Local anesthesia or nerve blocks provide comfort. Your practitioner will sculpt and shape the filler for optimal results. Immediate improvement is visible, though swelling initially masks the final outcome.",
    recovery: "Expect swelling for 3-7 days, with potential bruising. Ice and arnica can minimize these effects. Avoid extreme heat and exercise for 48 hours. Final results are visible at 2-4 weeks. Results typically last 12-24 months depending on the formulation used."
  },
  {
    name: "Elravie Premier",
    image: fillerJawlineContouring,
    overview: "Elravie Premier represents the pinnacle of Korean filler technology, offering high-density formulations specifically designed for deep tissue volumization and facial contouring. This premium filler provides structural support and significant lift, making it ideal for sculpting and defining facial features.",
    howItWorks: "Elravie Premier features exceptionally high-molecular-weight hyaluronic acid with robust cross-linking for maximum structural integrity. The dense, cohesive gel provides substantial lifting power while maintaining a natural feel. Its high G' (elasticity) allows it to resist compression, providing lasting volumization in areas like cheeks and chin.",
    benefits: [
      "Superior lifting and contouring capability",
      "High-density formula for deep volumization",
      "Excellent structural support for facial features",
      "Long-lasting results up to 18-24 months",
      "Natural movement despite strong support",
      "Ideal for non-surgical face lifting"
    ],
    idealCandidates: "Elravie Premier is perfect for patients seeking significant volume restoration or facial contouring. It's ideal for cheek augmentation, chin projection, jawline sculpting, and addressing significant age-related volume loss in the mid-face.",
    whatToExpect: "Treatment sessions last 45-90 minutes for comprehensive contouring. Deep injections may require nerve blocks for optimal comfort. Results are immediately visible with significant improvement in facial structure. Swelling is expected and temporary.",
    recovery: "Moderate swelling for 5-10 days is common with deep volumization treatments. Bruising may occur but is manageable with arnica. Avoid strenuous activity for 1 week. Final results emerge at 2-4 weeks as swelling resolves. Expect results to last 18-24 months."
  },
  {
    name: "Dermalax",
    image: fillerDermalaxComprehensive,
    overview: "Dermalax offers a versatile range of Korean dermal fillers suitable for everything from delicate fine line treatment to substantial volume restoration. Known for excellent moldability and natural results, Dermalax allows practitioners to create customized treatment plans addressing multiple concerns in a single session.",
    howItWorks: "Dermalax employs advanced cross-linking technology to create hyaluronic acid gels with varying densities and viscosities. Lighter formulations flow easily for superficial wrinkle filling, while denser versions provide structure for volumization. All formulations integrate well with tissue for natural-looking, natural-feeling results.",
    benefits: [
      "Complete range for all treatment depths",
      "Excellent moldability for precise shaping",
      "Natural integration with facial tissue",
      "Suitable for lips, lines, and volume",
      "Good longevity across all formulations",
      "Versatile for comprehensive facial rejuvenation"
    ],
    idealCandidates: "Dermalax is ideal for patients who need treatment in multiple areas with varying depth requirements. It's excellent for comprehensive facial rejuvenation addressing fine lines, nasolabial folds, lips, and volume loss simultaneously.",
    whatToExpect: "Treatment time varies based on areas addressed, typically 30-60 minutes. Numbing ensures comfort throughout. Multiple areas can be treated in one session for comprehensive rejuvenation. Immediate results are visible.",
    recovery: "Swelling and potential bruising for 3-7 days depending on areas treated. Lips tend to swell more than other areas. Ice application helps minimize swelling. Final results visible at 2 weeks. Duration varies by formulation—typically 9-18 months."
  },
  {
    name: "Rejuvenesse",
    image: fillerRejuvenesseDelicate,
    overview: "Rejuvenesse is a sophisticated Korean filler designed for those seeking soft, natural enhancement with minimal post-treatment effects. Its biocompatible formulation provides gentle volumization and hydration while causing notably less swelling than many alternatives, making it popular for patients who can't afford visible downtime.",
    howItWorks: "Rejuvenesse features optimally cross-linked hyaluronic acid designed for maximum biocompatibility. The molecular structure minimizes inflammatory response while still providing effective volumization. The softer gel consistency integrates seamlessly with tissue, creating imperceptible enhancement.",
    benefits: [
      "Minimal swelling post-treatment",
      "Highly biocompatible—reduced inflammation",
      "Soft, natural feel",
      "Ideal for subtle enhancement",
      "Quick recovery time",
      "Excellent for maintenance treatments"
    ],
    idealCandidates: "Rejuvenesse is perfect for patients who need to return to social activities quickly without obvious signs of treatment. It's also excellent for those who prefer subtle, natural enhancement and for maintenance treatments between more significant procedures.",
    whatToExpect: "Treatment is quick, typically 20-45 minutes. The injection experience is smooth and comfortable with topical numbing. Results appear natural from the moment of injection, without the significant swelling common to other fillers.",
    recovery: "Minimal downtime—most patients experience only slight swelling for 1-2 days. Bruising is less common than with other fillers. You can typically return to social activities the same day. Results are immediately natural-looking, lasting 9-12 months."
  }
];

const KoreanFillers = () => {
  const whatsappBase = "https://wa.me/2349015012285?text=";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="hero-overlay" />
        <div className="absolute inset-0 oily-sheen" />
        <div className="relative z-10 text-center text-white px-4">
          <Link to="/services" className="subheading text-white/80 mb-4 hover:text-white transition-colors">
            ← Back to Services
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide mt-4">
            Korean Fillers
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Advanced hyaluronic acid dermal fillers from Korea for natural volumization
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16 glossy-surface">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Droplet className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-secondary mb-6">
            Premium Korean Dermal Fillers
          </h2>
          <div className="divider-elegant" />
          <p className="text-muted-foreground leading-relaxed">
            Korean dermal fillers represent the cutting edge of aesthetic science, offering exceptional 
            purity, smooth consistency, and natural-looking results. Our carefully selected range of 
            premium Korean fillers provides solutions for every concern—from delicate lip enhancement 
            to dramatic facial contouring.
          </p>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-8 md:py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {treatments.map((treatment, index) => (
              <div key={index} className="glass-card overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={treatment.image} 
                    alt={`${treatment.name} treatment procedure`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-10">
                  <h3 className="font-serif text-2xl md:text-3xl text-secondary mb-6">
                    {treatment.name}
                  </h3>
                
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
            Restore Your Youthful Volume
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Discover the perfect Korean filler for your aesthetic goals. Book a consultation to create your personalized treatment plan.
          </p>
          <a
            href={`${whatsappBase}${encodeURIComponent("Hello, I would like to schedule a consultation for Korean Fillers")}`}
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

export default KoreanFillers;
