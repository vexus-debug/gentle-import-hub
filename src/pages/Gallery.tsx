import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { cn } from "@/lib/utils";

import facialTreatmentDevice from "@/assets/gallery/facial-treatment-device.jpg";
import glowingResult from "@/assets/gallery/glowing-result.jpg";
import prfTreatment from "@/assets/gallery/prf-treatment.jpg";
import consultationMarkings from "@/assets/gallery/consultation-markings.jpg";
import botoxInjection from "@/assets/gallery/botox-injection.jpg";
import foreheadInjection from "@/assets/gallery/forehead-injection.jpg";
import beforeAfter from "@/assets/gallery/before-after.jpg";
import skincareResultFront from "@/assets/gallery/skincare-result-front.jpg";
import skincareResultLeft from "@/assets/gallery/skincare-result-left.jpg";
import skincareResultRight from "@/assets/gallery/skincare-result-right.jpg";
import facialTreatmentSession1 from "@/assets/gallery/facial-treatment-session-1.jpg";
import facialTreatmentSession2 from "@/assets/gallery/facial-treatment-session-2.jpg";
import facialTreatmentSession3 from "@/assets/gallery/facial-treatment-session-3.jpg";
import workInProgress1 from "@/assets/gallery/work-in-progress-1.jpg";
import workInProgress2 from "@/assets/gallery/work-in-progress-2.jpg";
import workInProgress3 from "@/assets/gallery/work-in-progress-3.jpg";
import workInProgress4 from "@/assets/gallery/work-in-progress-4.jpg";
import workInProgress5 from "@/assets/gallery/work-in-progress-5.jpg";
import workInProgress6 from "@/assets/gallery/work-in-progress-6.jpg";
import workInProgress7 from "@/assets/gallery/work-in-progress-7.jpg";
import finishedWork1 from "@/assets/gallery/finished-work-1.jpg";
import finishedWork2 from "@/assets/gallery/finished-work-2.jpg";
import finishedWork3 from "@/assets/gallery/finished-work-3.jpg";
import skincareResult1 from "@/assets/gallery/skincare-result-1.jpg";
import skincareResult2 from "@/assets/gallery/skincare-result-2.jpg";
import skincareResult3 from "@/assets/gallery/skincare-result-3.jpg";
import skincareResult4 from "@/assets/gallery/skincare-result-4.jpg";
import skincareResult5 from "@/assets/gallery/skincare-result-5.jpg";
import skincareResult6 from "@/assets/gallery/skincare-result-6.jpg";
import skincareResult7 from "@/assets/gallery/skincare-result-7.jpg";
import skincareResult8 from "@/assets/gallery/skincare-result-8.jpg";
import skincareResult9 from "@/assets/gallery/skincare-result-9.jpg";
import skincareResult10 from "@/assets/gallery/skincare-result-10.jpg";
import treatmentSession1 from "@/assets/gallery/treatment-session-1.jpg";
import treatmentSession2 from "@/assets/gallery/treatment-session-2.jpg";
import treatmentSession3 from "@/assets/gallery/treatment-session-3.jpg";
import treatmentSession4 from "@/assets/gallery/treatment-session-4.jpg";
import treatmentSession5 from "@/assets/gallery/treatment-session-5.jpg";
import treatmentSession6 from "@/assets/gallery/treatment-session-6.jpg";
import treatmentSession7 from "@/assets/gallery/treatment-session-7.jpg";
import treatmentSession8 from "@/assets/gallery/treatment-session-8.jpg";
import treatmentSession9 from "@/assets/gallery/treatment-session-9.jpg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "treatments", name: "Treatments" },
    { id: "results", name: "Results" },
    { id: "skincare-results", name: "Skincare Results" },
    { id: "work-in-progress", name: "Work in Progress" },
    { id: "finished-work", name: "Finished Work" },
  ];

  const galleryItems = [
    {
      id: 1,
      category: "treatments",
      title: "Facial Treatment with Device",
      image: facialTreatmentDevice,
    },
    {
      id: 2,
      category: "results",
      title: "Glowing Skin Result",
      image: glowingResult,
    },
    {
      id: 3,
      category: "treatments",
      title: "PRF Biotherapy",
      image: prfTreatment,
    },
    {
      id: 4,
      category: "treatments",
      title: "Consultation & Markings",
      image: consultationMarkings,
    },
    {
      id: 5,
      category: "treatments",
      title: "Botox Injection",
      image: botoxInjection,
    },
    {
      id: 6,
      category: "treatments",
      title: "Forehead Treatment",
      image: foreheadInjection,
    },
    {
      id: 7,
      category: "results",
      title: "Before & After",
      image: beforeAfter,
    },
    {
      id: 8,
      category: "skincare-results",
      title: "Glowing Skin - Front View",
      image: skincareResultFront,
    },
    {
      id: 9,
      category: "skincare-results",
      title: "Glowing Skin - Side Profile",
      image: skincareResultLeft,
    },
    {
      id: 10,
      category: "skincare-results",
      title: "Glowing Skin - Right Profile",
      image: skincareResultRight,
    },
    {
      id: 11,
      category: "treatments",
      title: "Facial Treatment Session",
      image: facialTreatmentSession1,
    },
    {
      id: 12,
      category: "treatments",
      title: "Professional Skincare Application",
      image: facialTreatmentSession2,
    },
    {
      id: 13,
      category: "treatments",
      title: "Expert Facial Massage",
      image: facialTreatmentSession3,
    },
    {
      id: 14,
      category: "work-in-progress",
      title: "Skin Journey - Day 1",
      image: workInProgress1,
    },
    {
      id: 15,
      category: "work-in-progress",
      title: "Skin Transformation Progress",
      image: workInProgress2,
    },
    {
      id: 16,
      category: "work-in-progress",
      title: "Treatment in Progress",
      image: workInProgress3,
    },
    {
      id: 17,
      category: "work-in-progress",
      title: "Healing Journey",
      image: workInProgress4,
    },
    {
      id: 18,
      category: "work-in-progress",
      title: "Skin Renewal Process",
      image: workInProgress5,
    },
    {
      id: 19,
      category: "work-in-progress",
      title: "Progress Update",
      image: workInProgress6,
    },
    {
      id: 20,
      category: "work-in-progress",
      title: "Continued Improvement",
      image: workInProgress7,
    },
    {
      id: 21,
      category: "finished-work",
      title: "Beautiful Clear Skin",
      image: finishedWork1,
    },
    {
      id: 22,
      category: "finished-work",
      title: "Radiant Transformation",
      image: finishedWork2,
    },
    {
      id: 23,
      category: "finished-work",
      title: "Glowing Results",
      image: finishedWork3,
    },
    {
      id: 24,
      category: "skincare-results",
      title: "Hydrated Glowing Skin",
      image: skincareResult1,
    },
    {
      id: 25,
      category: "skincare-results",
      title: "Facial Treatment Result",
      image: skincareResult2,
    },
    {
      id: 26,
      category: "skincare-results",
      title: "Deep Hydration Result",
      image: skincareResult3,
    },
    {
      id: 27,
      category: "skincare-results",
      title: "Chemical Peel Progress",
      image: skincareResult4,
    },
    {
      id: 28,
      category: "skincare-results",
      title: "Skin Renewal Journey",
      image: skincareResult5,
    },
    {
      id: 29,
      category: "skincare-results",
      title: "Post-Treatment Glow",
      image: skincareResult6,
    },
    {
      id: 30,
      category: "skincare-results",
      title: "Skin Transformation",
      image: skincareResult7,
    },
    {
      id: 31,
      category: "skincare-results",
      title: "Radiant Profile",
      image: skincareResult8,
    },
    {
      id: 32,
      category: "skincare-results",
      title: "Fresh Facial Result",
      image: skincareResult9,
    },
    {
      id: 33,
      category: "skincare-results",
      title: "Beautiful Healthy Skin",
      image: skincareResult10,
    },
    {
      id: 34,
      category: "treatments",
      title: "Professional Facial Treatment",
      image: treatmentSession1,
    },
    {
      id: 35,
      category: "treatments",
      title: "Body Sculpting Session",
      image: treatmentSession2,
    },
    {
      id: 36,
      category: "treatments",
      title: "HydraFacial Treatment",
      image: treatmentSession3,
    },
    {
      id: 37,
      category: "treatments",
      title: "Body Contouring",
      image: treatmentSession4,
    },
    {
      id: 38,
      category: "treatments",
      title: "Lip Filler Injection",
      image: treatmentSession5,
    },
    {
      id: 39,
      category: "treatments",
      title: "Dermal Filler Application",
      image: treatmentSession6,
    },
    {
      id: 40,
      category: "treatments",
      title: "Male Lip Enhancement",
      image: treatmentSession7,
    },
    {
      id: 41,
      category: "treatments",
      title: "Temple Filler Treatment",
      image: treatmentSession8,
    },
    {
      id: 42,
      category: "treatments",
      title: "Aesthetic Practice Session",
      image: treatmentSession9,
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${facialTreatmentDevice})`,
          }}
        />
        <div className="hero-overlay" />
        <div className="absolute inset-0 oily-sheen" />
        <div className="relative z-10 text-center text-white px-4">
          <p className="subheading text-white/80 mb-4">Visual Stories</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-wide">
            Our Gallery
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 glossy-surface">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl text-secondary mb-6">
            A Glimpse Into ZealAesthetics
          </h2>
          <div className="divider-elegant" />
          <p className="text-muted-foreground leading-relaxed">
            Explore our gallery showcasing our beautiful spa facilities, treatment rooms, 
            training sessions, and the amazing transformations we create. Every image tells 
            a story of beauty, expertise, and dedication.
          </p>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="py-8 md:py-16 bg-muted oily-sheen">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "px-6 py-2 text-sm uppercase tracking-[0.15em] transition-all duration-500 relative overflow-hidden",
                  selectedCategory === category.id
                    ? "btn-luxury"
                    : "bg-transparent text-muted-foreground hover:text-secondary pearl-border hover:border-secondary"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square overflow-hidden glass-card"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 oily-sheen opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-xl text-white">{item.title}</h3>
                  <p className="text-white/70 text-sm capitalize">
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 glossy-dark text-secondary-foreground relative overflow-hidden">
        <div className="absolute inset-0 oily-sheen" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Ready to Experience ZealAesthetics?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Book a treatment or inquire about our training programs today. 
            Your journey to beauty and excellence starts here.
          </p>
          <a
            href="https://wa.me/2349015012285?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury bg-white text-secondary"
          >
            Book Your Visit
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
