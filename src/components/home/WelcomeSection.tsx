import { Heart, Leaf, Crown } from "lucide-react";

const WelcomeSection = () => {
  return (
    <section className="py-20 md:py-32 glossy-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="subheading mb-4">Our Story</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-secondary mb-6">
            Your Sanctuary for <span className="text-primary">Timeless Beauty</span>
          </h2>
          <div className="divider-elegant" />
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
            At ZealAesthetics, we believe every individual deserves personalized attention and expert care. 
            Our spa is more than a treatment center — it's a haven where you can embrace your natural 
            radiance while receiving care that truly understands your unique needs.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-12">
            Our team of skilled aestheticians are trained in the latest techniques and use 
            premium products to address a wide range of concerns, delivering visible results 
            with the utmost care and professionalism.
          </p>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center">
              <div className="glossy-icon inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-secondary mb-2 relative z-10">
                Client-Centered Care
              </h3>
              <p className="text-sm text-muted-foreground relative z-10">
                We celebrate and understand your unique beauty and wellness goals
              </p>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="glossy-icon inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-secondary mb-2 relative z-10">
                Premium Products
              </h3>
              <p className="text-sm text-muted-foreground relative z-10">
                Carefully selected formulations for safe, effective results
              </p>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="glossy-icon inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
                <Crown className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-secondary mb-2 relative z-10">
                Expert Care
              </h3>
              <p className="text-sm text-muted-foreground relative z-10">
                Trained professionals dedicated to delivering exceptional results
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
