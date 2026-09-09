import { Award, MessageCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import botoxTreatment from "@/assets/botox-treatment.jpg";
import toxinDysportForehead from "@/assets/toxin-dysport-forehead.jpg";
import toxinXeominGlabellar from "@/assets/toxin-xeomin-glabellar.jpg";
import toxinJeuveauFrown from "@/assets/toxin-jeuveau-frown.jpg";

const treatments = [
  {
    name: "Botox",
    overview: "Botox (onabotulinumtoxinA) is the world's most recognized and trusted botulinum toxin brand, with over 20 years of FDA approval and billions of successful treatments worldwide. As the gold standard in aesthetic medicine, Botox offers proven, predictable results for wrinkle reduction and has expanded applications including migraine treatment, excessive sweating, and muscle spasticity.",
    howItWorks: "Botox contains purified botulinum toxin type A that works by blocking the release of acetylcholine, a neurotransmitter responsible for triggering muscle contractions. When injected into specific facial muscles, Botox prevents these muscles from contracting, thereby smoothing the overlying skin and reducing the appearance of dynamic wrinkles caused by repetitive facial expressions.",
    benefits: [
      "Over 20 years of FDA-approved safety data",
      "Billions of treatments performed globally",
      "Predictable, consistent results",
      "Effective for wrinkles, migraines, and hyperhidrosis",
      "Quick treatment with minimal discomfort",
      "Results lasting 3-4 months"
    ],
    idealCandidates: "Botox is ideal for adults seeking to reduce or prevent dynamic wrinkles—those formed by muscle movement like frown lines, crow's feet, and forehead creases. It's also excellent for patients with chronic migraines, excessive sweating, or those new to aesthetic treatments who want a proven option.",
    whatToExpect: "Treatment takes just 10-20 minutes. Small injections are placed precisely in targeted muscles using ultra-fine needles. Most patients describe the sensation as tiny pinches. No anesthesia is typically needed. You can return to normal activities immediately.",
    recovery: "No downtime required. Avoid rubbing treated areas for 4 hours and strenuous exercise for 24 hours. Results begin appearing in 3-5 days, with full effects visible at 10-14 days. Results typically last 3-4 months, with some patients extending duration with regular treatments.",
    image: botoxTreatment
  },
  {
    name: "Dysport",
    overview: "Dysport (abobotulinumtoxinA) is an FDA-approved botulinum toxin known for its fast-acting formula and natural spread characteristics. Particularly popular for treating larger areas like the forehead, Dysport offers slightly quicker onset than some alternatives and is favored by many for its ability to create smooth, natural-looking results.",
    howItWorks: "Dysport uses a unique formulation of botulinum toxin type A with a slightly smaller protein complex than some alternatives. This allows for more diffuse spreading within treated muscles, which can be advantageous for covering larger areas evenly. Like all neuromodulators, it works by blocking nerve signals to muscles, preventing contraction and smoothing wrinkles.",
    benefits: [
      "Fast onset—results in 2-3 days",
      "Excellent spread for larger treatment areas",
      "Natural-looking results",
      "FDA-approved with strong safety profile",
      "May last longer in some patients",
      "Ideal for forehead and glabellar lines"
    ],
    idealCandidates: "Dysport is excellent for patients with larger treatment areas like broad foreheads or those who desire a more diffuse, natural result. It's also ideal for patients who want faster onset of results or those who haven't achieved desired outcomes with other toxins.",
    whatToExpect: "Treatment sessions are quick—typically 15-20 minutes. Multiple small injections are placed in targeted muscles. The procedure is well-tolerated, though numbing cream can be applied for sensitive patients. Results appear faster than some alternatives.",
    recovery: "Minimal to no downtime. Avoid touching treated areas for 4 hours and exercise for 24 hours. Many patients see initial results in just 24-48 hours, with full effects at 7-10 days. Results typically last 3-4 months, sometimes longer.",
    image: toxinDysportForehead
  },
  {
    name: "Xeomin",
    overview: "Xeomin (incobotulinumtoxinA) is a 'naked' botulinum toxin—purified to remove all accessory proteins, leaving only the active therapeutic component. This unique formulation reduces the risk of antibody formation, making it an excellent choice for long-term treatment and for patients who may have developed resistance to other toxins.",
    howItWorks: "Xeomin's purification process removes all complexing proteins, leaving only the 150 kDa active neurotoxin. This 'naked' molecule works the same way as other botulinum toxins—blocking nerve signals to muscles—but without the extra proteins that can trigger antibody formation. This may help maintain effectiveness over years of treatment.",
    benefits: [
      "Pure formula reduces resistance risk",
      "No refrigeration required—stable formulation",
      "Ideal for long-term treatment plans",
      "Excellent for patients with toxin resistance",
      "FDA-approved with proven efficacy",
      "Results comparable to other premium toxins"
    ],
    idealCandidates: "Xeomin is particularly suited for patients planning long-term toxin treatment who want to minimize resistance risk. It's also ideal for those who have noticed diminishing results from other toxins and anyone preferring a pure, additive-free formulation.",
    whatToExpect: "Treatment takes 15-20 minutes. Precise injections target specific muscles responsible for wrinkles. The experience is similar to other toxin treatments—quick and comfortable. Most patients require no anesthesia.",
    recovery: "Return to activities immediately. Standard precautions apply—avoid rubbing the area and heavy exercise for 24 hours. Results typically appear in 3-4 days, reaching full effect at 1-2 weeks. Duration is similar to other toxins at 3-4 months.",
    image: toxinXeominGlabellar
  },
  {
    name: "Jeuveau",
    overview: "Jeuveau (prabotulinumtoxinA-xvfs) is the newest FDA-approved botulinum toxin, developed specifically for aesthetic purposes. Nicknamed 'Newtox,' Jeuveau was created exclusively for cosmetic use rather than being adapted from therapeutic applications, representing a modern approach to aesthetic neuromodulation.",
    howItWorks: "Jeuveau uses a proprietary manufacturing process called Hi-Pure technology to produce a highly purified botulinum toxin type A. It works through the same mechanism as other neuromodulators—blocking acetylcholine release to prevent muscle contraction—but was specifically optimized for aesthetic applications, particularly treating moderate to severe glabellar lines.",
    benefits: [
      "Developed exclusively for aesthetic use",
      "Modern Hi-Pure manufacturing technology",
      "FDA-approved for glabellar lines",
      "Competitive pricing may offer value",
      "Fast-acting with results in 2-3 days",
      "Effective alternative to established brands"
    ],
    idealCandidates: "Jeuveau is ideal for patients seeking a modern, aesthetically-focused toxin option. It's excellent for treating frown lines (glabellar complex) and appeals to patients interested in newer innovations or those seeking cost-effective alternatives to legacy brands.",
    whatToExpect: "Treatment is quick—about 15 minutes. Five injections are typically placed in the glabellar region (between the eyebrows). The procedure is comfortable for most patients without anesthesia. You can resume normal activities immediately.",
    recovery: "Zero downtime. Avoid touching the treated area for 4 hours and intense exercise for 24 hours. Results often appear within 2-3 days, with full effect at 7-10 days. Duration is approximately 3-4 months, comparable to other FDA-approved toxins.",
    image: toxinJeuveauFrown
  }
];

const AmericanToxins = () => {
  const whatsappBase = "https://wa.me/2349015012285?text=";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="hero-overlay" />
        <div className="absolute inset-0 oily-sheen" />
        <div className="relative z-10 text-center text-white px-4">
          <Link to="/services" className="subheading text-white/80 mb-4 hover:text-white transition-colors">
            ← Back to Services
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide mt-4">
            American Botulinum Toxin Type A
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            FDA-approved neuromodulators with decades of proven safety and efficacy
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16 glossy-surface">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Award className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-secondary mb-6">
            The Gold Standard in Wrinkle Reduction
          </h2>
          <div className="divider-elegant" />
          <p className="text-muted-foreground leading-relaxed">
            American FDA-approved botulinum toxins represent the pinnacle of safety, efficacy, and 
            clinical research in aesthetic medicine. With decades of data supporting their use and 
            billions of treatments performed worldwide, these trusted neuromodulators deliver 
            predictable, natural-looking wrinkle reduction.
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
                
                {"image" in treatment && treatment.image && (
                  <div className="mb-8">
                    <img
                      src={treatment.image}
                      alt={`${treatment.name} treatment`}
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
            Experience FDA-Approved Excellence
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Trust your aesthetic treatments to proven, FDA-approved neuromodulators. Schedule a consultation to find the right toxin for your goals.
          </p>
          <a
            href={`${whatsappBase}${encodeURIComponent("Hello, I would like to schedule a consultation for American Botulinum Toxin treatments")}`}
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

export default AmericanToxins;
