// Central place for every Rose Beauty business detail used across the site.
export const site = {
  name: "Rose Beauty",
  fullName: "Rose Beauty Home Service Spa",
  shortDescription:
    "A professional home service spa in Lagos. We bring massage, beauty and wellness treatments to your home, hotel, office or event.",
  city: "Lagos",
  country: "Nigeria",

  // Contact
  phoneDisplay: "081 031 272 217",
  phoneHref: "tel:081031272217",
  whatsappNumber: "23481031272217",
  email: "Roselynelijah8@gmail.com",

  // Availability
  availability: "By appointment, seven days a week",

  areas: [
    "Lekki",
    "Victoria Island",
    "Ikoyi",
    "Ajah",
    "Ikeja",
    "Yaba",
    "Surulere",
    "Gbagada",
    "Magodo",
    "Maryland",
  ],

  locationTypes: [
    "Your home",
    "Your hotel room",
    "Your office",
    "A serviced apartment",
    "An event or private party",
    "Any other private space you choose",
  ],
} as const;

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const defaultWhatsAppMessage =
  "Hello Rose Beauty, I would like to book a treatment.";
