import { Droplets, MessageCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import glutathioneImg from "@/assets/treatments/glutathione-iv.jpg";
import antiagingImg from "@/assets/treatments/antiaging-iv.jpg";
import brighteningImg from "@/assets/treatments/brightening-iv.jpg";
import hangoverImg from "@/assets/treatments/hangover-iv.jpg";
import energyImg from "@/assets/treatments/energy-iv.jpg";
import detoxImg from "@/assets/treatments/detox-iv.jpg";

const treatments = [
  {
    name: "Glutathione IV Therapy",
    image: glutathioneImg,
    overview: "Glutathione IV therapy delivers the body's most powerful antioxidant directly into your bloodstream. Known as the 'master antioxidant,' glutathione plays a crucial role in detoxification, immune function, and skin health. When administered intravenously, it bypasses digestive absorption issues, providing maximum cellular benefits including the highly sought-after skin brightening effect.",
    howItWorks: "Glutathione (GSH) is infused directly into the bloodstream via IV, achieving plasma levels impossible through oral supplementation. Once in circulation, it neutralizes free radicals, supports liver detoxification, recycles other antioxidants like vitamins C and E, and inhibits melanin production. The melanin inhibition is responsible for the gradual skin lightening effect many patients seek.",
    benefits: [
      "Master antioxidant for cellular protection",
      "Gradual, natural skin brightening",
      "Powerful liver detoxification support",
      "Boosts immune system function",
      "Increases energy and reduces fatigue",
      "Anti-aging at the cellular level"
    ],
    idealCandidates: "Glutathione IV is ideal for those seeking skin brightening, detoxification support, anti-aging benefits, or immune system enhancement. It's popular among those with dull skin, hyperpigmentation, liver concerns, or anyone wanting comprehensive antioxidant protection.",
    whatToExpect: "The IV infusion takes 30-45 minutes. A small needle is placed in your arm, and the solution infuses slowly. The experience is relaxing—many patients read or rest during treatment. A series of weekly sessions (8-12) is typically recommended for skin brightening goals.",
    recovery: "No downtime. You can return to normal activities immediately. You may notice increased energy and clearer thinking within hours. Skin brightening is gradual, becoming noticeable after 4-6 sessions. Maintenance sessions every 2-4 weeks sustain results."
  },
  {
    name: "Anti-aging Infusion",
    image: antiagingImg,
    overview: "Our Anti-aging IV Infusion delivers a potent blend of vitamins, antioxidants, and nutrients specifically formulated to combat aging at the cellular level. This comprehensive drip addresses oxidative stress, supports collagen production, enhances cellular repair, and provides the building blocks for youthful vitality from the inside out.",
    howItWorks: "The infusion typically contains high-dose vitamin C, B-complex vitamins, glutathione, amino acids, and minerals that support cellular health and collagen synthesis. Delivered intravenously, these nutrients achieve therapeutic blood levels that support mitochondrial function, reduce oxidative damage, and provide cells with optimal resources for repair and regeneration.",
    benefits: [
      "Combats cellular aging and oxidative stress",
      "Supports natural collagen production",
      "Enhances energy and vitality",
      "Improves skin quality and radiance",
      "Supports immune function",
      "Promotes mental clarity and focus"
    ],
    idealCandidates: "The Anti-aging Infusion is ideal for adults noticing signs of aging, those with high-stress lifestyles, anyone seeking to optimize cellular health, and patients who want to complement topical anti-aging treatments with internal support.",
    whatToExpect: "Infusion time is approximately 45-60 minutes. You'll relax in a comfortable setting while the nutrients infuse. Many patients report feeling energized during or shortly after treatment. Monthly sessions are typically recommended for ongoing anti-aging benefits.",
    recovery: "No recovery time needed. Most patients feel energized and refreshed. Some notice improved sleep quality. Skin improvements develop over multiple sessions. Regular monthly treatments provide cumulative anti-aging benefits."
  },
  {
    name: "Brightening Infusion",
    image: brighteningImg,
    overview: "The Brightening IV Infusion is specifically formulated to enhance skin radiance, even out skin tone, and promote a luminous complexion. Combining high-dose vitamin C, glutathione, and other skin-supporting nutrients, this drip targets the mechanisms of pigmentation while providing comprehensive antioxidant protection.",
    howItWorks: "The infusion delivers skin-specific nutrients directly to your bloodstream. High-dose vitamin C inhibits tyrosinase (the enzyme that produces melanin) and supports collagen synthesis. Glutathione further suppresses melanin production while providing antioxidant protection. Together, they work synergistically to brighten skin and prevent new pigmentation.",
    benefits: [
      "Promotes even, radiant skin tone",
      "Reduces hyperpigmentation and dark spots",
      "High-dose vitamin C for collagen support",
      "Comprehensive antioxidant protection",
      "Enhances overall skin health",
      "Visible brightening with continued treatment"
    ],
    idealCandidates: "The Brightening Infusion is perfect for those with hyperpigmentation, uneven skin tone, dull complexion, or anyone seeking a more radiant appearance. It's an excellent complement to topical brightening treatments and procedures.",
    whatToExpect: "Sessions last 30-45 minutes. The treatment is comfortable and relaxing. Results are gradual—most patients notice improvement after 4-6 weekly sessions. A series of 8-12 treatments followed by monthly maintenance is recommended for best results.",
    recovery: "Return to normal activities immediately. Drink plenty of water after treatment. Brightening effects are cumulative, with visible improvement developing over weeks. Protect skin from sun exposure to maintain results. Combine with good skincare for optimal outcomes."
  },
  {
    name: "Hangover Infusion",
    image: hangoverImg,
    overview: "The Hangover IV Infusion is your rapid recovery solution after overindulgence. This targeted drip quickly rehydrates, replenishes depleted nutrients, and alleviates symptoms like headache, nausea, and fatigue. Feel restored and functional in under an hour instead of suffering through a day of misery.",
    howItWorks: "Alcohol depletes fluids, vitamins (especially B vitamins), and electrolytes while producing toxic byproducts. The Hangover Infusion delivers rapid IV hydration with saline, B-complex vitamins to restore depleted levels, anti-nausea medication, anti-inflammatory agents for headache, and antioxidants to neutralize toxins. Direct IV delivery means faster relief than oral remedies.",
    benefits: [
      "Rapid rehydration—faster than drinking water",
      "Immediate relief from headache and nausea",
      "Restores depleted B vitamins",
      "Replenishes essential electrolytes",
      "Helps metabolize alcohol byproducts",
      "Get back to your day in under an hour"
    ],
    idealCandidates: "The Hangover Infusion is ideal for anyone recovering from excessive alcohol consumption who needs rapid relief. It's popular for morning-after situations, before important events following celebrations, or whenever quick recovery is essential.",
    whatToExpect: "Infusion takes 30-45 minutes. Many patients start feeling relief within the first 15 minutes. Nausea typically subsides quickly, followed by headache improvement. By the end of the session, most feel significantly better—ready to resume their day.",
    recovery: "That IS the recovery. Most patients leave feeling dramatically improved. Continue drinking water throughout the day. Eat light, nutritious food. The relief typically lasts—you shouldn't feel the hangover returning. One session is usually sufficient."
  },
  {
    name: "Energy Boosters Infusion",
    image: energyImg,
    overview: "The Energy Boosters IV Infusion delivers a powerful blend of B-vitamins, amino acids, and energizing nutrients directly into your bloodstream for sustained energy and mental clarity. Unlike caffeine or stimulants, this drip provides cellular fuel that supports natural energy production without crashes or jitters.",
    howItWorks: "B-vitamins (especially B12) are essential for cellular energy production. The infusion delivers high concentrations of the entire B-complex, along with amino acids that support neurotransmitter function, and magnesium for muscle and nerve function. This combination optimizes mitochondrial function—your cells' energy powerhouses—for sustained, natural energy.",
    benefits: [
      "Sustained energy without crashes",
      "Enhanced mental clarity and focus",
      "Supports cellular energy production",
      "Reduces fatigue and brain fog",
      "Improves mood and motivation",
      "Supports athletic performance and recovery"
    ],
    idealCandidates: "The Energy Infusion is ideal for those with chronic fatigue, demanding schedules, high-stress lifestyles, or anyone needing an energy boost without relying on caffeine. It's also excellent for athletes seeking performance support and faster recovery.",
    whatToExpect: "Infusion takes approximately 30-45 minutes. Many patients notice increased energy and mental clarity during or shortly after the drip. The energizing effects typically last several days. Regular weekly or bi-weekly sessions maintain optimal energy levels.",
    recovery: "No downtime—in fact, you'll likely feel ready to take on the world. Effects are typically felt within hours and last several days. For chronic fatigue, a series of treatments may be needed. Combine with healthy lifestyle habits for best results."
  },
  {
    name: "Detoxification Infusion",
    image: detoxImg,
    overview: "The Detoxification IV Infusion supports your body's natural cleansing processes by providing the liver and cells with essential nutrients for optimal detoxification. This comprehensive drip helps eliminate accumulated toxins, supports organ function, and leaves you feeling cleansed, refreshed, and revitalized.",
    howItWorks: "The liver is your primary detoxification organ, and it requires specific nutrients to function optimally. This infusion delivers glutathione (essential for liver detox pathways), high-dose vitamin C, B-vitamins, and minerals that support Phase I and Phase II liver detoxification. The result is enhanced toxin elimination and reduced toxic burden on cells.",
    benefits: [
      "Supports liver detoxification pathways",
      "Helps eliminate environmental toxins",
      "Master antioxidant protection with glutathione",
      "Reduces oxidative stress",
      "Improves energy and mental clarity",
      "Supports overall organ function"
    ],
    idealCandidates: "The Detoxification Infusion is ideal for those exposed to environmental toxins, anyone after periods of unhealthy eating or drinking, those with sluggish metabolism, and anyone seeking a comprehensive internal cleanse. It's also beneficial as periodic wellness maintenance.",
    whatToExpect: "Sessions last 45-60 minutes. The experience is relaxing and comfortable. You may experience increased urination as toxins are eliminated. Some patients feel temporarily fatigued as the body processes released toxins, followed by increased energy and clarity.",
    recovery: "Drink plenty of water following treatment to support toxin elimination. Some patients experience mild fatigue on the day of treatment, followed by improved energy. Eat clean, whole foods to support the detox process. A series of 3-4 treatments provides thorough cleansing."
  }
];

const IVTherapy = () => {
  const whatsappBase = "https://wa.me/2349015012285?text=";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="hero-overlay" />
        <div className="absolute inset-0 oily-sheen" />
        <div className="relative z-10 text-center text-white px-4">
          <Link to="/services" className="subheading text-white/80 mb-4 hover:text-white transition-colors">
            ← Back to Services
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide mt-4">
            IV Therapy Infusions
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Intravenous vitamin and wellness infusions for optimal health and vitality
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16 glossy-surface">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Droplets className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-secondary mb-6">
            Wellness From Within
          </h2>
          <div className="divider-elegant" />
          <p className="text-muted-foreground leading-relaxed">
            IV therapy delivers essential vitamins, minerals, and antioxidants directly into your 
            bloodstream, bypassing digestive absorption limitations. This means 100% bioavailability 
            and rapid results. Whether you seek energy, immunity, beauty benefits, or recovery, our 
            customized infusions provide targeted support for your wellness goals.
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
            Fuel Your Body's Potential
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Discover the IV therapy that matches your wellness goals. Book a consultation to create your personalized infusion plan.
          </p>
          <a
            href={`${whatsappBase}${encodeURIComponent("Hello, I would like to schedule a consultation for IV Therapy treatments")}`}
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

export default IVTherapy;