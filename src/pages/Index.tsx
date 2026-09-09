import Layout from "@/components/layout/Layout";
import HeroSlideshow from "@/components/home/HeroSlideshow";
import ScrollReveal from "@/components/ScrollReveal";
import {
  WelcomeEmbrace,
  BeautyDestinations,
  TransformationArt,
  NurturingExpertise,
  VoicesOfConfidence,
  MeetYourGuides,
  CredentialsTrust,
  BeginJourney,
} from "@/components/home/journey";

const Index = () => {
  return (
    <Layout>
      <HeroSlideshow />
      
      <ScrollReveal animation="fade-up">
        <WelcomeEmbrace />
      </ScrollReveal>
      
      <ScrollReveal animation="fade-up" delay={100}>
        <BeautyDestinations />
      </ScrollReveal>
      
      <ScrollReveal animation="fade-up">
        <TransformationArt />
      </ScrollReveal>
      
      <ScrollReveal animation="zoom-in">
        <NurturingExpertise />
      </ScrollReveal>
      
      <ScrollReveal animation="fade-up" delay={100}>
        <VoicesOfConfidence />
      </ScrollReveal>
      
      <ScrollReveal animation="fade-up">
        <MeetYourGuides />
      </ScrollReveal>
      
      <ScrollReveal animation="fade-up">
        <CredentialsTrust />
      </ScrollReveal>
      
      <ScrollReveal animation="zoom-in" delay={100}>
        <BeginJourney />
      </ScrollReveal>
    </Layout>
  );
};

export default Index;
