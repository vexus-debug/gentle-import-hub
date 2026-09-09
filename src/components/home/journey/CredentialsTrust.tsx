import { Shield, Award, Star, CheckCircle } from "lucide-react";

const credentials = [
  {
    icon: Shield,
    title: "Licensed & Certified",
    description: "All practitioners are fully licensed and continuously trained",
  },
  {
    icon: Award,
    title: "Premium Products",
    description: "Only FDA-approved and internationally certified products",
  },
  {
    icon: Star,
    title: "Excellence Standards",
    description: "Adherence to the highest international medical spa standards",
  },
  {
    icon: CheckCircle,
    title: "Safety First",
    description: "Rigorous safety protocols and sterile environments",
  },
];

const CredentialsTrust = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-r from-muted/40 via-background to-muted/40 dark:from-muted/20 dark:via-background dark:to-muted/20">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 dark:opacity-[0.03] pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <p className="subheading mb-4">Credentials & Trust</p>
          <h2 className="font-serif text-3xl md:text-4xl text-secondary dark:text-foreground mb-4">
            Your Safety, Our <span className="text-primary italic">Promise</span>
          </h2>
          <div className="w-16 h-[2px] mx-auto bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {credentials.map((credential, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/15 to-spa-gold/10 dark:from-primary/20 dark:to-spa-gold/15 mb-6 group-hover:scale-110 transition-transform duration-300">
                <credential.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-lg text-secondary dark:text-foreground mb-2">{credential.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{credential.description}</p>
            </div>
          ))}
        </div>
        
        {/* Trust banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center items-center gap-x-8 gap-y-4 px-8 py-6 rounded-2xl bg-gradient-to-r from-card via-spa-beige/30 dark:via-spa-beige/10 to-card border border-border/50">
            <span className="text-sm text-muted-foreground">Trusted by</span>
            <span className="font-serif text-xl text-secondary dark:text-foreground">2,500+ Happy Clients</span>
            <span className="text-sm text-muted-foreground">in Nigeria & Beyond</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsTrust;
