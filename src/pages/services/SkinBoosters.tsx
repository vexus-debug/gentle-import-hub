import { Zap, MessageCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import exosomesImg from "@/assets/treatments/exosomes-treatment.jpg";
import profhiloImg from "@/assets/treatments/profhilo-injection.jpg";
import nctfImg from "@/assets/treatments/nctf-mesotherapy.jpg";
import mesohyalImg from "@/assets/treatments/mesohyal-hydration.jpg";
import sunekosImg from "@/assets/treatments/sunekos-periorbital.jpg";
import dermahealImg from "@/assets/treatments/dermaheal-microneedling.jpg";

const treatments = [
  {
    name: "Exosomes",
    image: exosomesImg,
    overview: "Exosome therapy represents the cutting edge of regenerative aesthetics, utilizing nano-sized vesicles derived from stem cells to communicate directly with your skin cells. These powerful messengers carry growth factors, proteins, and genetic information that instruct cells to regenerate, repair, and rejuvenate at the deepest level.",
    howItWorks: "Exosomes are extracellular vesicles (30-150nm) that serve as intercellular messengers. When applied to the skin—typically after microneedling or laser treatment—they penetrate deeply and deliver their cargo of growth factors, cytokines, and RNA to target cells. This cellular communication triggers enhanced collagen production, faster healing, and improved skin quality from within.",
    benefits: [
      "Cutting-edge cellular regeneration",
      "Accelerates healing from other treatments",
      "Deep tissue rejuvenation",
      "Reduces inflammation and redness",
      "Improves skin texture and elasticity",
      "Enhances results of combined treatments"
    ],
    idealCandidates: "Exosome therapy is ideal for patients seeking advanced regenerative treatment, those with aging skin, sun damage, or scarring, and anyone wanting to enhance results from microneedling, laser, or other procedures. It's suitable for all skin types.",
    whatToExpect: "Exosomes are typically applied following a skin preparation treatment like microneedling. The topical application is painless. The entire combined session takes 60-90 minutes. You may experience mild redness from the preparation treatment.",
    recovery: "Recovery depends on the preparation treatment used. With microneedling, expect 24-48 hours of redness. Exosomes actually accelerate healing. Results develop over 4-8 weeks as cellular regeneration occurs. A series of 3-4 treatments is recommended."
  },
  {
    name: "Profhilo",
    image: profhiloImg,
    overview: "Profhilo is a revolutionary bio-remodeling injectable containing one of the highest concentrations of hyaluronic acid on the market. Unlike traditional fillers that add volume, Profhilo works by deeply hydrating the skin from within while stimulating collagen and elastin production, resulting in tissue tightening and improved skin quality.",
    howItWorks: "Profhilo uses a unique stabilized hyaluronic acid complex without chemical cross-linking. When injected at specific Bio Aesthetic Points (BAP technique), it disperses across a wide area, integrating into the dermal architecture. The slow release of HA stimulates fibroblasts to produce collagen and elastin, while providing intense hydration to surrounding tissue.",
    benefits: [
      "Highest HA concentration for deep hydration",
      "Bio-remodeling—not just filling",
      "Stimulates collagen and elastin production",
      "Skin tightening and lifting effect",
      "Natural results without adding volume",
      "Only 10 injection points needed"
    ],
    idealCandidates: "Profhilo is perfect for patients experiencing skin laxity, dullness, or loss of firmness who want improvement without adding volume. It's excellent for areas like the face, neck, décolletage, and hands. Ideal for ages 30+ experiencing early skin aging.",
    whatToExpect: "Treatment involves just 10 injection points using the BAP technique—5 on each side of the face. The procedure takes only 15-20 minutes. Mild discomfort is brief. Small bumps at injection sites resolve within hours. Two sessions 4 weeks apart are standard.",
    recovery: "Minimal downtime. Small wheals at injection points flatten within hours. Mild swelling may last 24 hours. Results develop gradually over 2-4 weeks, with optimal improvement after the second treatment. Effects last 6-9 months; maintenance recommended every 6 months."
  },
  {
    name: "NCTF (New Cellular Treatment Factor)",
    image: nctfImg,
    overview: "NCTF is a sophisticated mesotherapy solution containing over 50 revitalizing ingredients including hyaluronic acid, vitamins, amino acids, minerals, and coenzymes. This comprehensive cocktail delivers everything your skin needs for optimal cellular function, addressing aging at its source by nourishing cells directly.",
    howItWorks: "NCTF is delivered into the dermis through multiple superficial injections or with microneedling. The formula provides cells with essential building blocks for healthy function: hyaluronic acid for hydration, amino acids for protein synthesis, vitamins for enzymatic reactions, and minerals for cellular metabolism. This comprehensive nourishment revitalizes tired, depleted skin.",
    benefits: [
      "50+ active ingredients for complete nourishment",
      "Addresses multiple signs of aging simultaneously",
      "Intense hydration from within",
      "Improves skin radiance and luminosity",
      "Strengthens skin structure",
      "Preventive and corrective benefits"
    ],
    idealCandidates: "NCTF is ideal for patients with dull, tired-looking skin, early signs of aging, dehydration, or anyone wanting to optimize skin health. It's excellent as both preventive treatment for younger patients and corrective treatment for mature skin.",
    whatToExpect: "Treatment involves multiple superficial injections across the face (and/or neck, hands). The procedure takes 30-45 minutes. Topical numbing ensures comfort. Temporary pinpoint marks and mild swelling are normal. A series of 3-6 treatments is typical.",
    recovery: "Minor redness and pinpoint marks fade within 24-48 hours. Some patients experience mild swelling for 1-2 days. Results improve progressively with each session. Optimal results appear after completing the treatment series. Maintenance every 3-6 months preserves results."
  },
  {
    name: "Mesohyal",
    image: mesohyalImg,
    overview: "Mesohyal is a premium mesotherapy line offering targeted injectable solutions for intensive skin moisturization and revitalization. These highly purified hyaluronic acid-based formulas are designed for superficial microinjections, providing deep hydration and improving skin quality, texture, and overall appearance.",
    howItWorks: "Mesohyal products contain non-cross-linked hyaluronic acid that, when injected superficially into the dermis, acts as a powerful hydrating agent. The HA binds water, instantly plumping and hydrating the skin while stimulating fibroblast activity. Different formulations target specific concerns—from fine lines to overall revitalization.",
    benefits: [
      "Intense, deep hydration",
      "Improves skin texture and smoothness",
      "Reduces fine lines and dehydration wrinkles",
      "Restores skin radiance and glow",
      "Stimulates natural renewal processes",
      "Suitable for face, neck, and décolletage"
    ],
    idealCandidates: "Mesohyal is excellent for patients with dehydrated skin, fine dehydration lines, dull complexion, or those seeking overall skin quality improvement. It's suitable for all ages as preventive care or corrective treatment.",
    whatToExpect: "Treatment involves multiple microinjections across the treatment area. Sessions last 30-45 minutes. Numbing cream ensures comfort. You'll notice immediate hydration effects. Multiple sessions (3-4) are recommended for optimal results.",
    recovery: "Minimal downtime. Expect tiny bumps and redness for 24-48 hours. Avoid makeup for 12 hours. Results are cumulative, with improvement after each session. Complete the recommended series for best outcomes. Maintenance treatments every 3-4 months."
  },
  {
    name: "Sunekos 200",
    image: sunekosImg,
    overview: "Sunekos 200 is a patented formula combining specific amino acids with hyaluronic acid to stimulate the production of both collagen and elastin in the skin. Unlike treatments that only boost collagen, Sunekos uniquely targets the extracellular matrix (ECM), restoring the fundamental scaffolding that keeps skin firm and elastic.",
    howItWorks: "Sunekos contains a patented amino acid formula that, combined with HA, activates fibroblasts to produce new collagen and—uniquely—elastin. This dual stimulation regenerates the extracellular matrix, the structural framework of skin. The treatment essentially rebuilds the skin's foundation rather than just adding superficial improvement.",
    benefits: [
      "Stimulates both collagen AND elastin",
      "Rebuilds the extracellular matrix",
      "Improves skin laxity and firmness",
      "Reduces wrinkles and fine lines",
      "Restores skin elasticity",
      "Long-lasting structural improvement"
    ],
    idealCandidates: "Sunekos 200 is ideal for patients with skin laxity, loss of elasticity, wrinkles, or those wanting to restore skin's youthful structure. It's particularly effective for areas showing early sagging—periorbital region, neck, and lower face.",
    whatToExpect: "Treatment involves multiple injections in target areas. Sessions last 20-30 minutes. The procedure is well-tolerated. A protocol of 4 sessions over 4 weeks is standard, followed by maintenance. Some patients combine with other treatments.",
    recovery: "Very minimal downtime. Mild swelling and injection marks resolve within 24 hours. Results develop progressively over the treatment course. Full benefits are visible 4-6 weeks after completing the protocol. Maintenance every 4-6 months sustains improvements."
  },
  {
    name: "Derma Heal",
    image: dermahealImg,
    overview: "Derma Heal is an advanced growth factor treatment utilizing biomimetic peptides and active ingredients to target specific skin concerns. From anti-aging to scar reduction, Derma Heal offers specialized formulations that communicate with skin cells to accelerate healing, stimulate regeneration, and improve overall skin condition.",
    howItWorks: "Derma Heal products contain concentrated growth factors and biomimetic peptides that mimic natural cellular signaling. When delivered into the skin via mesotherapy or microneedling, these active molecules trigger specific cellular responses—increased collagen production, accelerated healing, reduced inflammation, and enhanced cell turnover.",
    benefits: [
      "Targeted growth factor therapy",
      "Specialized formulas for specific concerns",
      "Accelerates skin healing and repair",
      "Reduces scars and pigmentation",
      "Stimulates natural rejuvenation",
      "Can be combined with other treatments"
    ],
    idealCandidates: "Derma Heal is ideal for patients with specific concerns like acne scarring, hyperpigmentation, hair loss, or those seeking targeted anti-aging treatment. Different formulations address different needs—consult for the right match.",
    whatToExpect: "Treatment is tailored to your specific concern, using the appropriate Derma Heal formulation. Sessions take 30-45 minutes and involve either mesotherapy injections or application with microneedling. Multiple sessions are typically needed.",
    recovery: "Recovery varies by delivery method and treatment area. Expect 1-3 days of mild redness. Results develop over several weeks as cellular regeneration occurs. A series of treatments yields optimal outcomes. Maintenance schedules depend on the condition treated."
  }
];

const SkinBoosters = () => {
  const whatsappBase = "https://wa.me/2349015012285?text=";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="hero-overlay" />
        <div className="absolute inset-0 oily-sheen" />
        <div className="relative z-10 text-center text-white px-4">
          <Link to="/services" className="subheading text-white/80 mb-4 hover:text-white transition-colors">
            ← Back to Services
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide mt-4">
            Skin Boosters Treatment
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Deep hydration and skin quality improvement therapies for radiant, healthy skin
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16 glossy-surface">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Zap className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-secondary mb-6">
            Regenerate From Within
          </h2>
          <div className="divider-elegant" />
          <p className="text-muted-foreground leading-relaxed">
            Skin boosters go beyond surface treatments to nourish, hydrate, and regenerate your skin 
            from the inside out. These advanced therapies deliver essential nutrients, growth factors, 
            and hydrating agents directly where they're needed most, resulting in healthier, more 
            radiant skin with improved texture and resilience.
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
            Unlock Your Skin's Potential
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Discover the skin booster that will transform your complexion. Book a consultation to find your perfect treatment plan.
          </p>
          <a
            href={`${whatsappBase}${encodeURIComponent("Hello, I would like to schedule a consultation for Skin Booster treatments")}`}
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

export default SkinBoosters;