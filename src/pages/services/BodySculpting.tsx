import { Target, MessageCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import woodTherapyImg from "@/assets/treatments/wood-therapy.jpg";
import bodySculptingImg from "@/assets/treatments/body-sculpting.jpg";
import lymphaticImg from "@/assets/treatments/lymphatic-drainage.jpg";
import massageImg from "@/assets/treatments/massage-therapy.jpg";

const treatments = [
  {
    name: "Wood Fat Reduction Treatment",
    image: woodTherapyImg,
    overview: "Wood therapy (Maderotherapy) is a traditional body sculpting technique that uses specially designed wooden tools to break down stubborn fat deposits, reduce cellulite, and contour the body. This natural, non-invasive approach has been used for centuries and is now experiencing renewed popularity for its effectiveness in body shaping and lymphatic stimulation.",
    howItWorks: "Trained therapists use various wooden instruments—rollers, cups, and sculpting tools—to apply deep pressure and specific massage movements to target areas. This mechanical action breaks down fat cells, stimulates lymphatic drainage, and promotes blood circulation. The repetitive rolling and kneading movements help dislodge fat deposits from connective tissue, making them easier for the body to metabolize.",
    benefits: [
      "Breaks down stubborn fat deposits",
      "Reduces appearance of cellulite",
      "Contours and shapes body areas",
      "Stimulates lymphatic drainage",
      "Improves blood circulation",
      "100% natural—no chemicals or surgery"
    ],
    idealCandidates: "Wood therapy is ideal for individuals with localized fat deposits, cellulite, or those seeking body contouring without invasive procedures. It works best for people close to their ideal weight who want to target specific problem areas like thighs, abdomen, arms, or buttocks.",
    whatToExpect: "Sessions typically last 45-90 minutes depending on areas treated. The treatment involves firm pressure—expect some intensity, though it should not be painful. Redness and warmth in treated areas is normal. A series of 8-12 sessions is recommended for best results.",
    recovery: "No downtime is required. You may experience temporary redness, warmth, or mild tenderness in treated areas. Drinking plenty of water helps flush released toxins. Results are progressive, with visible improvement after 4-6 sessions. Maintenance sessions help sustain results."
  },
  {
    name: "Body Sculpting",
    image: bodySculptingImg,
    overview: "Our non-surgical body sculpting treatments use advanced technologies to reduce fat, tighten skin, and contour the body without surgery or significant downtime. These modern approaches offer alternatives to liposuction for those seeking to refine their silhouette and address stubborn areas resistant to diet and exercise.",
    howItWorks: "Depending on the specific technology used, body sculpting may utilize radiofrequency, ultrasound, cryolipolysis (fat freezing), or electromagnetic energy to target fat cells. These technologies either destroy fat cells directly (which the body then naturally eliminates) or stimulate muscle contractions equivalent to thousands of exercises. Some treatments combine multiple modalities.",
    benefits: [
      "Non-surgical alternative to liposuction",
      "Targets stubborn fat deposits",
      "Skin tightening benefits",
      "Minimal to no downtime",
      "Treats multiple body areas",
      "Progressive, natural-looking results"
    ],
    idealCandidates: "Body sculpting is ideal for individuals at or near their goal weight with localized fat deposits that don't respond to diet and exercise. Good candidates have realistic expectations and understand that these treatments refine rather than dramatically transform body shape.",
    whatToExpect: "Treatment duration varies by technology—typically 30-60 minutes per area. Most procedures are comfortable; some involve warmth, cooling, or muscle contractions. Multiple sessions are usually needed. Your practitioner will recommend the best approach for your goals.",
    recovery: "Most body sculpting treatments have minimal downtime. You may experience temporary redness, swelling, or tenderness. Fat reduction results appear gradually over 8-12 weeks as the body eliminates destroyed fat cells. Muscle-building treatments may cause temporary muscle fatigue."
  },
  {
    name: "Lymphatic Drainage Massage",
    image: lymphaticImg,
    overview: "Lymphatic drainage massage is a specialized, gentle massage technique designed to stimulate the lymphatic system and promote the natural removal of waste, toxins, and excess fluid from the body. This therapeutic treatment reduces swelling, supports immune function, and leaves you feeling lighter, refreshed, and rejuvenated.",
    howItWorks: "Using very light, rhythmic, pumping movements, the therapist stimulates lymph vessels just beneath the skin. This encourages lymph fluid—which carries waste products and immune cells—to move toward lymph nodes where it can be processed. The technique follows specific pathways that mirror the lymphatic system's natural flow.",
    benefits: [
      "Reduces fluid retention and bloating",
      "Decreases swelling and puffiness",
      "Supports immune system function",
      "Promotes detoxification",
      "Accelerates post-procedure healing",
      "Deeply relaxing and stress-reducing"
    ],
    idealCandidates: "Lymphatic drainage is excellent for those experiencing water retention, post-surgical swelling, sluggish immunity, or general fatigue and toxicity. It's particularly beneficial after cosmetic procedures, during pregnancy (with precautions), and for anyone seeking gentle detoxification.",
    whatToExpect: "Sessions last 60-90 minutes. The touch is much lighter than traditional massage—this is intentional and necessary for lymphatic stimulation. The experience is deeply relaxing. You may need to use the restroom frequently afterward as fluid elimination increases.",
    recovery: "No recovery time needed. You may feel lighter and more energetic immediately. Increased urination in the hours following treatment is normal and beneficial. Drink plenty of water to support the detoxification process. Regular sessions enhance cumulative benefits."
  },
  {
    name: "Massage Therapy",
    image: massageImg,
    overview: "Our therapeutic massage services address physical tension, stress, and muscular discomfort through skilled manual techniques. Whether you seek relaxation, pain relief, or recovery support, our trained therapists customize each session to your specific needs using various modalities from Swedish to deep tissue.",
    howItWorks: "Massage therapy works by manipulating soft tissues—muscles, tendons, ligaments, and fascia—to release tension, improve circulation, and promote healing. Different techniques address different needs: Swedish massage uses flowing strokes for relaxation; deep tissue targets chronic tension; sports massage aids athletic recovery. The therapist adapts pressure and technique to your requirements.",
    benefits: [
      "Relieves muscle tension and pain",
      "Reduces stress and anxiety",
      "Improves circulation and flexibility",
      "Supports injury recovery",
      "Enhances sleep quality",
      "Promotes overall wellbeing"
    ],
    idealCandidates: "Massage therapy benefits virtually everyone—those with chronic muscle tension, stress, athletic recovery needs, or anyone seeking relaxation and self-care. Different modalities suit different needs, from gentle relaxation massage to intensive therapeutic work.",
    whatToExpect: "Sessions typically last 60-90 minutes. You'll discuss your needs and any problem areas with your therapist. You undress to your comfort level and are draped throughout. Communicate about pressure—it should be effective without being painful. Deep tissue may cause temporary tenderness.",
    recovery: "Most people feel relaxed and rejuvenated after massage. Deep tissue work may cause mild soreness for 24-48 hours—this is normal. Drink water to help flush released toxins. Avoid strenuous activity immediately after. Regular massage provides cumulative benefits."
  }
];

const BodySculpting = () => {
  const whatsappBase = "https://wa.me/2349015012285?text=";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="hero-overlay" />
        <div className="absolute inset-0 oily-sheen" />
        <div className="relative z-10 text-center text-white px-4">
          <Link to="/services" className="subheading text-white/80 mb-4 hover:text-white transition-colors">
            ← Back to Services
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide mt-4">
            Fat Dissolving & Body Therapy
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Body contouring and therapeutic treatments for your best silhouette
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16 glossy-surface">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Target className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-secondary mb-6">
            Sculpt, Contour, Rejuvenate
          </h2>
          <div className="divider-elegant" />
          <p className="text-muted-foreground leading-relaxed">
            Our body therapy services combine traditional techniques with modern technology to help 
            you achieve your body goals. From targeted fat reduction to therapeutic massage, each 
            treatment is designed to enhance your natural shape, promote wellness, and leave you 
            feeling refreshed and confident.
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
            Shape Your Best Self
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Ready to refine your silhouette? Contact us to discuss the best body treatment options for your goals.
          </p>
          <a
            href={`${whatsappBase}${encodeURIComponent("Hello, I would like to schedule a consultation for Body Sculpting treatments")}`}
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

export default BodySculpting;