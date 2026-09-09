import { Sparkles, MessageCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

import chemicalPeelsImg from "@/assets/treatment-chemical-peels-new.jpg";
import microneedlingImg from "@/assets/treatment-microneedling-new.jpg";
import prpImg from "@/assets/treatment-prp-new.jpg";
import prfImg from "@/assets/treatment-prf-new.jpg";
import hydrafacialImg from "@/assets/treatment-hydrafacial-new.jpg";
import microdermabrasionImg from "@/assets/treatment-microdermabrasion-new.jpg";
import handFootImg from "@/assets/treatment-hand-foot.jpeg";

const treatments = [
  {
    name: "Chemical Peels",
    image: chemicalPeelsImg,
    overview: "Chemical peels are professional-grade exfoliating treatments that use carefully formulated acid solutions to remove damaged outer layers of skin, revealing the fresh, rejuvenated skin beneath. This treatment accelerates the natural skin renewal process, addressing concerns from mild discoloration to deep wrinkles.",
    howItWorks: "During the treatment, a specialized chemical solution is applied to your skin. This solution works by breaking down the bonds between dead skin cells, causing controlled exfoliation. The depth of the peel—superficial, medium, or deep—determines how many layers of skin are treated. As the old skin peels away over the following days, new skin cells emerge, resulting in a smoother, more even complexion.",
    benefits: [
      "Reduces fine lines and wrinkles",
      "Improves skin texture and tone",
      "Minimizes acne scars and hyperpigmentation",
      "Unclogs pores and reduces breakouts",
      "Stimulates collagen production",
      "Creates a radiant, youthful glow"
    ],
    idealCandidates: "Chemical peels are ideal for individuals with sun damage, uneven skin tone, acne scarring, fine lines, or those seeking overall skin rejuvenation. They work well on most skin types, though darker skin tones may require specialized formulations to prevent hyperpigmentation.",
    whatToExpect: "The treatment takes 30-60 minutes depending on the peel depth. You may experience a warm, tingling sensation during application. Superficial peels require minimal downtime, while deeper peels may involve 1-2 weeks of recovery with visible peeling.",
    recovery: "Post-treatment, your skin will be sensitive and may appear red. Peeling typically begins within 2-3 days and can last up to a week. Results become visible once peeling subsides, with continued improvement over several weeks as collagen remodeling occurs."
  },
  {
    name: "Microneedling",
    image: microneedlingImg,
    overview: "Microneedling, also known as collagen induction therapy, is a minimally invasive treatment that uses fine, sterile needles to create controlled micro-injuries in the skin. This triggers the body's natural wound healing response, stimulating collagen and elastin production for firmer, smoother, and more youthful skin.",
    howItWorks: "A specialized device containing fine needles is moved across the treatment area, creating thousands of microscopic channels in the skin. These micro-injuries activate the skin's repair mechanisms, triggering the release of growth factors and the production of new collagen and elastin. The channels also enhance the absorption of topical treatments applied during or after the procedure.",
    benefits: [
      "Reduces acne scars and surgical scars",
      "Minimizes pore size",
      "Improves skin texture and firmness",
      "Reduces fine lines and wrinkles",
      "Evens out skin tone",
      "Enhances product absorption by up to 90%"
    ],
    idealCandidates: "Microneedling is excellent for individuals with acne scarring, enlarged pores, fine lines, stretch marks, or those wanting to improve overall skin texture. It's suitable for all skin types and tones, making it a versatile option for diverse patients.",
    whatToExpect: "The treatment takes 30-60 minutes. A topical numbing cream is applied beforehand to ensure comfort. You'll feel a slight prickling sensation during the procedure. The skin will appear red immediately after, similar to a mild sunburn.",
    recovery: "Redness and mild swelling typically subside within 24-72 hours. You can usually resume normal activities the next day with makeup. Full results develop over 4-6 weeks as collagen production increases. A series of 3-6 treatments spaced 4-6 weeks apart is recommended for optimal results."
  },
  {
    name: "PRP (Platelet-Rich Plasma)",
    image: prpImg,
    overview: "PRP therapy, often called the 'Vampire Facial,' harnesses the regenerative power of your own blood to rejuvenate the skin. By concentrating the platelets and growth factors from your blood and reintroducing them to your skin, this treatment accelerates healing and stimulates natural collagen production for remarkable skin renewal.",
    howItWorks: "A small amount of blood is drawn and placed in a centrifuge to separate the platelet-rich plasma from other blood components. This concentrated PRP, containing 5-10 times the normal concentration of platelets, is then applied to your skin—either topically after microneedling or through direct injections. The growth factors in PRP signal your cells to regenerate and repair.",
    benefits: [
      "Uses your body's own healing factors—completely natural",
      "Reduces fine lines and wrinkles",
      "Improves skin texture and elasticity",
      "Reduces under-eye hollows and dark circles",
      "Promotes hair growth when applied to scalp",
      "Accelerates healing from other treatments"
    ],
    idealCandidates: "PRP is ideal for those seeking natural skin rejuvenation without synthetic products. It's excellent for individuals with early signs of aging, volume loss, dull skin, or those wanting to enhance results from other treatments. Not recommended for those with blood disorders or on blood thinners.",
    whatToExpect: "The entire process takes about 60-90 minutes. Blood draw is quick and relatively painless. The treatment area may be numbed for comfort. You may experience mild swelling and redness for 1-2 days post-treatment.",
    recovery: "Initial redness fades within 24-48 hours. Results develop gradually over 3-4 weeks as collagen synthesis increases. Optimal results are typically seen after 3 sessions spaced 4-6 weeks apart. Effects can last 12-18 months with proper skincare."
  },
  {
    name: "PRF-Biotherapy",
    image: prfImg,
    overview: "PRF (Platelet-Rich Fibrin) Biotherapy represents the next evolution in regenerative aesthetics. Unlike traditional PRP, PRF contains a fibrin matrix that releases growth factors slowly over time, providing prolonged healing and rejuvenation benefits. This advanced treatment offers superior and longer-lasting results.",
    howItWorks: "Blood is drawn and processed at lower speeds without anticoagulants, creating a fibrin scaffold that naturally traps platelets, white blood cells, and stem cells. This fibrin matrix acts as a sustained-release system, slowly dispensing growth factors over 10-14 days rather than just a few hours like PRP. The result is enhanced tissue regeneration and collagen production.",
    benefits: [
      "Extended growth factor release for prolonged benefits",
      "Contains white blood cells for enhanced healing",
      "100% natural—no additives or anticoagulants",
      "Superior collagen stimulation compared to PRP",
      "Longer-lasting results",
      "Can be combined with other treatments for enhanced effects"
    ],
    idealCandidates: "PRF Biotherapy is ideal for patients seeking maximum regenerative benefits from autologous treatments. It's particularly effective for those with moderate aging signs, volume loss, or anyone looking for natural, long-lasting rejuvenation without synthetic fillers.",
    whatToExpect: "Similar to PRP, the treatment takes 60-90 minutes. The processing is gentler on blood components. PRF can be injected or applied topically with microneedling. Expect similar comfort levels to PRP treatments.",
    recovery: "Mild swelling and redness for 24-72 hours is normal. Results appear gradually, with peak improvement at 4-8 weeks. Benefits continue to develop for up to 3 months as the fibrin matrix slowly releases growth factors. Maintenance treatments every 6-12 months maintain results."
  },
  {
    name: "Hydrafacial",
    image: hydrafacialImg,
    overview: "Hydrafacial is a revolutionary multi-step facial treatment that combines cleansing, exfoliation, extraction, hydration, and antioxidant protection simultaneously. This patented technology delivers instant, noticeable results with no downtime, making it one of the most popular medical-grade facials worldwide.",
    howItWorks: "The Hydrafacial uses a unique vortex-fusion delivery system with specialized tips. Step one cleanses and exfoliates dead skin cells. Step two uses gentle acid peel to loosen debris. Step three painlessly extracts impurities using vortex suction. Step four saturates skin with intensive hydrating serums containing hyaluronic acid, peptides, and antioxidants. The entire process is soothing and comfortable.",
    benefits: [
      "Immediate visible results—the 'Hydrafacial glow'",
      "Deep cleanses and unclogs pores",
      "Hydrates and plumps the skin",
      "Reduces fine lines and wrinkles",
      "Evens skin tone and improves texture",
      "No downtime—perfect before events"
    ],
    idealCandidates: "Hydrafacial is suitable for virtually everyone—all skin types, ages, and concerns. It's especially beneficial for those with oily or congested skin, fine lines, uneven tone, or anyone wanting a quick skin refresh. It's safe during pregnancy and for sensitive skin types.",
    whatToExpect: "Treatment takes 30-45 minutes and is often described as a 'cool, soothing sensation.' There's no discomfort involved. Your skin will immediately look refreshed, hydrated, and glowing. Some patients see reduced pore size and improved texture after just one session.",
    recovery: "There is zero downtime. You can apply makeup immediately and return to all normal activities. Skin may appear slightly flushed for 30 minutes. For best results, monthly treatments are recommended to maintain the 'Hydrafacial glow.'"
  },
  {
    name: "Microdermabrasion",
    image: microdermabrasionImg,
    overview: "Microdermabrasion is a gentle, non-invasive resurfacing treatment that uses fine crystals or a diamond-tipped wand to mechanically exfoliate the outer layer of dead skin cells. This tried-and-true technique reveals fresher, younger-looking skin while stimulating cell renewal and collagen production.",
    howItWorks: "The treatment uses either crystal microdermabrasion (spraying fine crystals) or diamond-tip microdermabrasion (using an abrasive diamond wand) to gently abrade the skin's surface. Simultaneously, a vacuum suction removes the exfoliated cells and debris. This mechanical exfoliation triggers the skin's natural healing response, promoting new cell growth and increased collagen production.",
    benefits: [
      "Reduces appearance of fine lines",
      "Improves sun-damaged skin",
      "Minimizes age spots and hyperpigmentation",
      "Reduces enlarged pores",
      "Improves acne and superficial scarring",
      "Enhances absorption of skincare products"
    ],
    idealCandidates: "Microdermabrasion is ideal for those with mild skin concerns including dull skin, minor discoloration, superficial scarring, or those new to professional skincare treatments. It's gentler than chemical peels and suitable for most skin types.",
    whatToExpect: "Treatment takes 30-45 minutes. You'll feel a scratching sensation and light suction, which most find comfortable. Skin appears slightly pink immediately after. The procedure is often called a 'lunchtime treatment' due to its convenience and minimal recovery.",
    recovery: "Mild redness fades within a few hours. Skin may feel tight or dry for 24 hours—proper moisturization is essential. You can resume normal activities immediately. A series of 6-10 treatments spaced 2-4 weeks apart yields best results."
  },
  {
    name: "Hand & Foot Treatment",
    image: handFootImg,
    overview: "Our specialized Hand & Foot Rejuvenation Treatment addresses the often-neglected signs of aging on hands and feet. These areas frequently reveal age through thin skin, visible veins, sun spots, and loss of volume. Our comprehensive approach restores youthful appearance to these highly visible areas.",
    howItWorks: "This multi-faceted treatment may include gentle exfoliation to remove dead skin, targeted treatments for age spots and sun damage, hydrating masks, and optional injectable treatments for volume restoration. For hands, we address crepey skin and prominent veins. For feet, we focus on skin smoothing and callus reduction alongside rejuvenation.",
    benefits: [
      "Reduces age spots and sun damage",
      "Improves skin texture and smoothness",
      "Restores lost volume (with injectable options)",
      "Minimizes appearance of veins and tendons",
      "Deep hydration for soft, supple skin",
      "Comprehensive anti-aging for neglected areas"
    ],
    idealCandidates: "This treatment is perfect for anyone noticing aging signs on their hands and feet—age spots, thin skin, visible veins, or rough texture. It's especially popular among those who maintain facial rejuvenation but notice their hands 'give away' their age.",
    whatToExpect: "Treatment duration varies based on selected options, typically 45-90 minutes. Exfoliation treatments are comfortable; injectable options use numbing for minimal discomfort. Hands and feet will immediately feel softer and look more refreshed.",
    recovery: "Non-injectable treatments have no downtime. Injectable options may cause minor swelling or bruising for 2-5 days. Results from exfoliation are immediate; injectable results develop over 1-2 weeks. Maintenance treatments every 3-6 months preserve results."
  }
];

const FacialTreatments = () => {
  const whatsappBase = "https://wa.me/2349015012285?text=";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="hero-overlay" />
        <div className="absolute inset-0 oily-sheen" />
        <div className="relative z-10 text-center text-white px-4">
          <Link to="/services" className="subheading text-white/80 mb-4 hover:text-white transition-colors">
            ← Back to Services
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide mt-4">
            Facial Treatments
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Advanced skin rejuvenation and renewal therapies for radiant, youthful skin
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16 glossy-surface">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-secondary mb-6">
            Transform Your Skin
          </h2>
          <div className="divider-elegant" />
          <p className="text-muted-foreground leading-relaxed">
            Our facial treatments combine cutting-edge technology with proven techniques to address 
            a wide range of skin concerns. From gentle exfoliation to advanced regenerative therapies, 
            each treatment is tailored to reveal your skin's natural radiance and restore a youthful, 
            healthy glow.
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
            Ready to Transform Your Skin?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Contact us for a personalized consultation to determine the best facial treatment for your unique skin needs.
          </p>
          <a
            href={`${whatsappBase}${encodeURIComponent("Hello, I would like to schedule a consultation for Facial Treatments")}`}
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

export default FacialTreatments;
