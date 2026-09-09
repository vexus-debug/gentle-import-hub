import swedish from "@/assets/rose/swedish.jpg";
import deepTissue from "@/assets/rose/deep-tissue.jpg";
import hotStone from "@/assets/rose/hot-stone.jpg";
import homeMassage from "@/assets/rose/hero-home-massage.jpg";
import couples from "@/assets/rose/hero-couples.jpg";
import hotel from "@/assets/rose/hero-hotel-spa.jpg";
import manicure from "@/assets/rose/manicure.jpg";
import pedicure from "@/assets/rose/pedicure.jpg";
import bodyTreatment from "@/assets/rose/body-treatment.jpg";
import surprise from "@/assets/rose/surprise.jpg";
import events from "@/assets/rose/events.jpg";

export type ServiceCategory = "Massage" | "Beauty" | "Body Care" | "Packages";

export interface Service {
  slug: string;
  name: string;
  category: ServiceCategory;
  /** One line used on cards and in the booking list */
  summary: string;
  /** Two or three sentences on the detail page */
  intro: string;
  bestFor: string[];
  whatToExpect: string[];
  duration: string;
  image: string;
  imageAlt: string;
  /** Search phrase this page is written around */
  seoPhrase: string;
}

export const services: Service[] = [
  {
    slug: "swedish-massage",
    name: "Swedish Massage",
    category: "Massage",
    summary: "Long, flowing strokes that switch your body out of stress mode.",
    intro:
      "The treatment most people mean when they say they need a massage. Warm oil, steady flowing strokes and light-to-medium pressure that loosens tight muscles and settles your nervous system. It is the easiest place to start if you have never booked a massage before.",
    bestFor: [
      "General stress and a busy Lagos week",
      "First-time massage clients",
      "Poor sleep and restlessness",
      "Recovery after long hours sitting or driving",
    ],
    whatToExpect: [
      "Your therapist arrives with a professional couch, fresh linen, towels and oils.",
      "A short chat about pressure, problem areas and anything you would rather we avoid.",
      "Full-body work with you covered at all times, only the area being worked on exposed.",
      "Water, a few quiet minutes, and your space put back exactly as we found it.",
    ],
    duration: "60 or 90 minutes",
    image: swedish,
    imageAlt: "Therapist performing a relaxing Swedish massage with warm oil",
    seoPhrase: "Swedish massage in Lagos, at home",
  },
  {
    slug: "deep-tissue-massage",
    name: "Deep Tissue Massage",
    category: "Massage",
    summary: "Firm, focused pressure for knots that will not let go.",
    intro:
      "Slower and firmer than a Swedish massage, working through the deeper layers of muscle where long-standing tension sits. Your therapist builds pressure gradually and checks in with you, so it stays intense rather than painful.",
    bestFor: [
      "Stubborn shoulder, neck and lower-back tension",
      "Desk work, long commutes and heavy training",
      "Anyone who normally asks for firmer pressure",
    ],
    whatToExpect: [
      "A discussion of exactly where the pain sits and how it behaves.",
      "Gradual pressure with constant feedback — you set the limit.",
      "Focused work on problem areas, with flowing strokes in between.",
      "Aftercare advice on water, heat and simple stretches.",
    ],
    duration: "60 or 90 minutes",
    image: deepTissue,
    imageAlt: "Therapist applying firm deep tissue pressure to a client's back",
    seoPhrase: "deep tissue massage in Lagos, at home",
  },
  {
    slug: "hot-stone-massage",
    name: "Hot Stone Massage",
    category: "Massage",
    summary: "Warm basalt stones that melt tension before hands even begin.",
    intro:
      "Smooth heated stones are placed along the body and used as an extension of the therapist's hands. The heat opens tight muscle quickly, so deeper relief is possible with gentler pressure. Deeply comforting, and a favourite for evening bookings.",
    bestFor: [
      "Tension that returns as soon as it is released",
      "Cold, achy joints and heavy legs",
      "Anyone who wants deep relief without heavy pressure",
    ],
    whatToExpect: [
      "Stones are heated and temperature-checked before they touch your skin.",
      "Warm stones rest along the back while the therapist works.",
      "Flowing massage using stones and hands together.",
      "A slow, warm finish — best booked when you can rest afterwards.",
    ],
    duration: "75 or 90 minutes",
    image: hotStone,
    imageAlt: "Warm basalt stones placed along a client's back during a hot stone massage",
    seoPhrase: "hot stone massage in Lagos, at home",
  },
  {
    slug: "lymphatic-massage",
    name: "Lymphatic Massage",
    category: "Massage",
    summary: "Light, rhythmic drainage work to reduce puffiness and heaviness.",
    intro:
      "A very gentle, rhythmic technique that encourages fluid movement through the body. Nothing about it is forceful — the pressure is light on purpose. Often requested for swollen legs, bloating and that generally heavy, sluggish feeling.",
    bestFor: [
      "Puffy legs, ankles and general water retention",
      "Long flights and long days on your feet",
      "Post-procedure recovery where your doctor has cleared massage",
    ],
    whatToExpect: [
      "A calm, unhurried session with very light pressure.",
      "Slow directional strokes towards the body's drainage points.",
      "Advice on hydration and simple movement afterwards.",
    ],
    duration: "60 or 90 minutes",
    image: homeMassage,
    imageAlt: "Gentle lymphatic drainage massage in a client's home",
    seoPhrase: "lymphatic drainage massage in Lagos",
  },
  {
    slug: "back-massage",
    name: "Back Massage",
    category: "Massage",
    summary: "Concentrated work on back, shoulders and neck. In and out in half an hour.",
    intro:
      "Everything focused on the area that carries your day. A short, high-value session for people who cannot spare a full hour but cannot carry the tension any longer either.",
    bestFor: [
      "Lunch breaks and late-evening bookings",
      "Screen-related neck and shoulder pain",
      "Trying Rose Beauty for the first time",
    ],
    whatToExpect: [
      "A quick set-up — a couch or a comfortable seated position.",
      "Thirty focused minutes on back, shoulders and neck.",
      "Simple posture and stretch pointers to hold the relief.",
    ],
    duration: "30 or 45 minutes",
    image: deepTissue,
    imageAlt: "Focused back and shoulder massage",
    seoPhrase: "back and shoulder massage in Lagos, at home",
  },
  {
    slug: "spot-massage",
    name: "Spot Massage",
    category: "Massage",
    summary: "One problem area, treated properly, in a short session.",
    intro:
      "You tell us exactly where it hurts — neck, lower back, calves, feet, arms — and the whole session goes there. Precise, practical and quick.",
    bestFor: [
      "One recurring painful area",
      "Athletes and gym recovery",
      "Anyone short on time",
    ],
    whatToExpect: [
      "A short assessment of the area and how it moves.",
      "Targeted release techniques on that area only.",
      "Guidance on what to do between sessions.",
    ],
    duration: "30 minutes",
    image: swedish,
    imageAlt: "Targeted spot massage on a single problem area",
    seoPhrase: "targeted spot massage in Lagos",
  },
  {
    slug: "four-hands-massage",
    name: "Four Hands Massage",
    category: "Massage",
    summary: "Two therapists, perfectly synchronised. The most indulgent thing on our list.",
    intro:
      "Two therapists work on you at the same time in mirrored movements. Because your mind cannot track both pairs of hands, it gives up trying — and that is exactly why people describe it as the deepest switch-off they have had.",
    bestFor: [
      "Birthdays, anniversaries and rare treat days",
      "People who find it hard to properly relax",
      "Anyone who wants a full-body result in less time",
    ],
    whatToExpect: [
      "Two therapists arrive together, with one shared consultation.",
      "Synchronised full-body work at the pressure you choose.",
      "Advance booking recommended so both therapists are free.",
    ],
    duration: "60 or 90 minutes",
    image: couples,
    imageAlt: "Two therapists performing a synchronised four hands massage",
    seoPhrase: "four hands massage in Lagos",
  },
  {
    slug: "manicure",
    name: "Manicure",
    category: "Beauty",
    summary: "Salon-standard nails at your dining table, with your own kettle nearby.",
    intro:
      "Shaping, cuticle care, a hand massage and a clean finish — regular polish or gel. All tools are sanitised, and disposables are used where they should be. No salon queue, no waiting for a free chair.",
    bestFor: [
      "Busy work weeks and school runs",
      "Getting ready for an event at home",
      "Booking together with a friend or your partner",
    ],
    whatToExpect: [
      "Soak, shape, cuticle care and buff.",
      "A hand and forearm massage with cream or oil.",
      "Polish or gel in the colour you choose.",
      "Everything cleared away before we leave.",
    ],
    duration: "45 to 60 minutes",
    image: manicure,
    imageAlt: "Elegant manicure with a natural polish finish",
    seoPhrase: "home manicure in Lagos",
  },
  {
    slug: "pedicure",
    name: "Pedicure",
    category: "Beauty",
    summary: "A proper foot soak, scrub and polish while you sit on your own sofa.",
    intro:
      "Warm soak, careful heel and callus work, nail shaping, a foot and calf massage, then polish. The part most people skip until their feet complain — done properly, in your own space.",
    bestFor: [
      "Dry, cracked heels and tired feet",
      "Weddings, events and holidays",
      "Pairing with a manicure for a full reset",
    ],
    whatToExpect: [
      "A warm soak with salts, set up wherever you are comfortable.",
      "Heel, callus, nail and cuticle care.",
      "Foot and calf massage.",
      "Polish or gel, then a full clean-up.",
    ],
    duration: "60 minutes",
    image: pedicure,
    imageAlt: "Relaxing home pedicure foot soak with flower petals",
    seoPhrase: "home pedicure in Lagos",
  },
  {
    slug: "body-treatments",
    name: "Body Treatments",
    category: "Body Care",
    summary: "Scrubs, polishes and wraps for skin that feels neglected.",
    intro:
      "Full-body exfoliation and nourishing treatments that leave skin smoother and evenly hydrated. Choose a scrub and polish, or add a wrap for a longer, more indulgent session. Tell us your skin type when you book and we bring products to match.",
    bestFor: [
      "Dull, dry or rough-feeling skin",
      "Before a holiday, wedding or shoot",
      "Anyone who wants results they can feel the same day",
    ],
    whatToExpect: [
      "A short skin consultation and a patch check if needed.",
      "Full-body exfoliation, then a rinse in your own shower.",
      "Nourishing lotion or oil applied with a light massage.",
    ],
    duration: "60 to 90 minutes",
    image: bodyTreatment,
    imageAlt: "Natural body scrubs, oils and towels arranged for a body treatment",
    seoPhrase: "home body scrub and body treatment in Lagos",
  },
  {
    slug: "couples-spa",
    name: "Couples Spa Experience",
    category: "Packages",
    summary: "Two therapists, two treatments, side by side in your own space.",
    intro:
      "You and your partner are treated at the same time, in the same room, by two therapists. We bring everything — couches, linen, candles and oils — and set the room up before you walk in. Popular for anniversaries, birthdays and Sunday resets.",
    bestFor: [
      "Anniversaries, birthdays and proposals",
      "Couples with clashing schedules",
      "Hotel staycations in Lagos",
    ],
    whatToExpect: [
      "Two therapists arrive early to set the room.",
      "Each of you chooses your own treatment and pressure.",
      "Simultaneous treatments, then quiet time together.",
    ],
    duration: "60 or 90 minutes each",
    image: couples,
    imageAlt: "Couples spa experience with two massage couches set up side by side",
    seoPhrase: "couples spa and couples massage in Lagos",
  },
  {
    slug: "surprise-packages",
    name: "Surprise Packages",
    category: "Packages",
    summary: "Gift a spa day that turns up at their door. We handle the surprise.",
    intro:
      "Tell us who it is for, roughly what they enjoy and the moment you want to create. We plan the treatment, bring the set-up and arrive at the time you choose — birthdays, anniversaries, new mums, or a friend who has had a hard month.",
    bestFor: [
      "Birthdays and anniversaries",
      "New mothers and people recovering from a hard season",
      "Sending something to someone in another part of Lagos",
    ],
    whatToExpect: [
      "A short WhatsApp conversation to plan it with you.",
      "Timing coordinated with you, not the recipient.",
      "Everything brought and set up on arrival.",
    ],
    duration: "Planned around the occasion",
    image: surprise,
    imageAlt: "Elegant purple and gold spa gift box with towels, oil and a candle",
    seoPhrase: "spa gift and surprise spa package in Lagos",
  },
  {
    slug: "beauty-wellness-packages",
    name: "Beauty & Wellness Packages",
    category: "Packages",
    summary: "Massage, nails and body care combined into one longer visit.",
    intro:
      "Instead of booking three separate appointments, combine them. A common package is a massage, a manicure and a pedicure in a single visit — one therapist team, one arrival, one relaxed afternoon.",
    bestFor: [
      "A full self-care day without leaving home",
      "Pre-wedding and pre-event preparation",
      "Regular monthly upkeep",
    ],
    whatToExpect: [
      "We plan the order of treatments so nothing gets rushed.",
      "A single set-up and a single arrival window.",
      "Package pricing confirmed on WhatsApp before you commit.",
    ],
    duration: "2 to 4 hours",
    image: bodyTreatment,
    imageAlt: "Beauty and wellness package products laid out ready for a session",
    seoPhrase: "beauty and wellness packages in Lagos",
  },
  {
    slug: "hotel-spa-services",
    name: "Hotel Spa Services",
    category: "Packages",
    summary: "In-room spa treatments wherever you are staying in Lagos.",
    intro:
      "Staying in a hotel, short-let or serviced apartment? We come to your room. Your therapist arrives discreetly, in uniform, with everything needed, and works around your schedule — including late arrivals after a long flight or a full day of meetings.",
    bestFor: [
      "Business travellers and long-haul arrivals",
      "Staycations and hotel weekends",
      "Guests staying in short-lets and serviced apartments",
    ],
    whatToExpect: [
      "We confirm your hotel's guest policy with you beforehand.",
      "Discreet, uniformed arrival at reception.",
      "Full set-up and complete clean-up in your room.",
    ],
    duration: "30 to 120 minutes",
    image: hotel,
    imageAlt: "Massage couch set up in a luxury hotel suite with a city view",
    seoPhrase: "hotel spa services and in-room massage in Lagos",
  },
  {
    slug: "event-and-group-treatments",
    name: "Event & Group Treatments",
    category: "Packages",
    summary: "Spa treatments for bridal parties, offices and private events.",
    intro:
      "We bring a team to your event. Chair massages for a corporate wellness day, nails for a bridal party, or short treatments rotating through guests at a private celebration. Tell us the guest count and the time window and we plan the rotation.",
    bestFor: [
      "Corporate wellness days and staff appreciation",
      "Bridal parties and baby showers",
      "Birthdays and private celebrations",
    ],
    whatToExpect: [
      "A planning conversation about guests, space and timing.",
      "A therapist team sized to your guest list.",
      "A treatment schedule so no guest is left waiting.",
    ],
    duration: "Planned around your event",
    image: events,
    imageAlt: "Seated chair massage at a corporate wellness event",
    seoPhrase: "event and corporate massage services in Lagos",
  },
];

export const serviceCategories: { name: ServiceCategory; blurb: string }[] = [
  { name: "Massage", blurb: "Seven techniques, chosen around how your body actually feels." },
  { name: "Beauty", blurb: "Hands and feet cared for properly, without a salon trip." },
  { name: "Body Care", blurb: "Exfoliation and nourishing treatments for smoother skin." },
  { name: "Packages", blurb: "Couples, gifts, hotels and events — planned with you." },
];

export const getService = (slug?: string) =>
  services.find((service) => service.slug === slug);
