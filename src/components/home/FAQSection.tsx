import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Are your treatments safe for darker skin tones?",
    answer: "Absolutely! All our treatments are specifically designed and tested for melanin-rich skin. Our aestheticians are specially trained to understand the unique needs of Black skin, ensuring safe, effective results without risks like hyperpigmentation or scarring.",
  },
  {
    question: "What skin concerns do you specialize in?",
    answer: "We specialize in treating hyperpigmentation, melasma, acne and acne scars, uneven skin tone, dark spots, and general skin rejuvenation. Our treatments are customized to address each client's unique concerns while respecting the characteristics of melanin-rich skin.",
  },
  {
    question: "How long does a typical treatment session take?",
    answer: "Treatment times vary depending on the service. Facials typically take 60-90 minutes, while advanced treatments like microneedling may take 45-60 minutes. During your consultation, we'll provide a detailed timeline for your specific treatment plan.",
  },
  {
    question: "Do you offer consultations before treatments?",
    answer: "Yes! We offer complimentary skin consultations where we assess your skin type, discuss your concerns and goals, and recommend a personalized treatment plan. This ensures you receive the most effective treatments for your unique skin.",
  },
  {
    question: "What products do you use and sell?",
    answer: "We use premium skincare products specifically formulated for melanin-rich skin. Our product selection includes clinical-grade formulations that are gentle yet effective, avoiding harsh ingredients that can cause irritation or damage to darker skin tones.",
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book an appointment by contacting us via WhatsApp, calling our spa directly, or visiting us in person at our Wuse Zone 6 location. We recommend booking in advance, especially for weekend appointments and popular services.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-32 glossy-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="subheading mb-4">Common Questions</p>
            <h2 className="font-serif text-4xl md:text-5xl text-secondary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about our services and treatments.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 border-none"
              >
                <AccordionTrigger className="text-left font-serif text-lg text-secondary hover:text-primary py-6 relative z-10">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 relative z-10">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
