/**
 * ============================================================================
 *  SITE CONTENT — edit this file to update the expo website.
 *  Every piece of copy, link, date, price and image path on the page lives
 *  here. Components in /components only handle layout and styling.
 *
 *  Images: put files in /public and reference them from the root,
 *  e.g. "/images/carousel/new-photo.jpg".
 * ============================================================================
 */

// ---------------------------------------------------------------------------
// Registration forms (monday.com). Re-used by the hero buttons.
// ---------------------------------------------------------------------------
export const forms = {
  english: "https://forms.monday.com/forms/05fb8b2d7f7f06fc0e35a232e39dd4ac?r=apse2",
  thai: "https://forms.monday.com/forms/0f717eebee8ab8c10e1be3b17161beb9?r=apse2",
  korean: "https://forms.monday.com/forms/3f22c711a95070f96e333322d1906cce?r=apse2",
  portuguese: "https://forms.monday.com/forms/8b9b88f6c29f0ed3967c71803cb71431?r=apse2",
  spanish: "https://forms.monday.com/forms/65235b4ea1e09a093c26407b5b7d583f?r=apse2",
  mongolian: "https://forms.monday.com/forms/05fb8b2d7f7f06fc0e35a232e39dd4ac?r=apse2",
  /** Davao EXPO registration (short link: https://wkf.ms/4rst1UJ). */
  davao: "https://forms.monday.com/forms/05fb8b2d7f7f06fc0e35a232e39dd4ac?r=apse2",
};

// ---------------------------------------------------------------------------
// SEO
// ---------------------------------------------------------------------------
export const seo = {
  title: "Australia Study & Migration EXPO 2026 · Davao City | U&I Global Philippines",
  description:
    "Join the U&I Global Australia Study & Migration EXPO in Davao City on 5 December 2026, 11am–4pm at The Royal Mandaya Hotel. Free 1-on-1 consultations with Australian school and university representatives and migration experts.",
};

// ---------------------------------------------------------------------------
// Header / navigation
// ---------------------------------------------------------------------------
export const brand = {
  logo: "/images/U&I-logo.png",
  logoAlt: "U&I Global Australia",
};

export const nav = {
  desktop: [
    { label: "Why Attend", href: "#why-attend" },
    { label: "Events", href: "#dates" },
  ],
  mobile: [
    { label: "Why Attend", href: "#why-attend" },
    { label: "Schedule", href: "#dates" },
    { label: "Register Now", href: "#register" },
  ],
  cta: { label: "Register Now", href: "#register" },
};

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------
export const hero = {
  logo: { src: "/images/expo-logo/full.webp", alt: "Australia Study Migration Expo 2026" },
  /** City skyline icons orbiting the logo. `tint` = "gold" | "white". */
  cities: [
    { src: "/cities/10.png", tint: "gold" },
    { src: "/cities/9.png", tint: "white" },
    { src: "/cities/6.png", tint: "gold" },
    { src: "/cities/7.png", tint: "white" },
    { src: "/cities/2.png", tint: "gold" },
    { src: "/cities/8.png", tint: "white" },
    { src: "/cities/5.png", tint: "gold" },
    { src: "/cities/3.png", tint: "white" },
    { src: "/cities/1.png", tint: "gold" },
    { src: "/cities/11.png", tint: "white" },
    { src: "/cities/4.png", tint: "gold" },
    { src: "/cities/12.png", tint: "white" },
  ] as { src: string; tint: "gold" | "white" }[],
  eyebrow: "U&I Global Philippines · Davao 2026",
  strap: "STUDY • MIGRATION",
  /** City name under the EXPO logo. */
  city: "Davao City",
  /** Event details shown under the EXPO logo, as on the Davao poster. */
  details: {
    date: "5 DEC 2026",
    time: "11am–4pm",
    venue: "The Royal Mandaya Hotel",
    address: "Sultan and Rajah Hall, 2nd Floor, J. Palma Gil St, Poblacion District, Davao City, 8000",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Royal+Mandaya+Hotel+Davao+City",
    mapEmbed: "https://maps.google.com/maps?q=The+Royal+Mandaya+Hotel,+J.+Palma+Gil+St,+Davao+City&z=16&output=embed",
    mapLabel: "Open in Google Maps",
  },
  /** Trust line along the bottom of the poster. */
  trust: ["Australia State Government Official Agent", "Since 1997 · 29 Years Experience & Trust"],
  trustSeal: { number: "29", label: "Years" },
  titleLead: "Your Pathway to Australia",
  titleHighlight: "Starts Here",
  intro:
    "Join us at the 2026 Australia Study & Migration Expo. Free 1-on-1 consultations with University, TAFE, and College representatives and migration experts.",
  cities_line: "Davao City · 5 December 2026",
  primaryCta: { label: "Register Now", href: forms.english },
  secondaryCta: { label: "Learn More", href: "#why-attend" },
  /** Language registration buttons under the hero. hoverText = "navy" | "teal". */
  /** Extra per-language register buttons under the hero (none on this single-language site). */
  languageButtons: [] as { label: string; href: string; hoverText: "navy" | "teal" }[],
};

// ---------------------------------------------------------------------------
// Event dates & recaps
// ---------------------------------------------------------------------------
export const dates = {
  title: "Event Dates & Locations",
  subtitle: "Find us in a city near you.",

  /** Dark recap cards shown above the event grid. Remove items to hide. */
  recaps: [
    {
      title: "Brisbane EXPO Recap",
      text: [
        "That's a wrap on the Brisbane EXPO!",
        "A big thank you to our attendees, schools, and partners who made the event a success.",
      ],
      photoAlt: "Brisbane Expo",
      photos: [
        "/images/brisbane-recap/bne-mix-01.jpg",
        "/images/brisbane-recap/bne-mix-02.jpg",
        "/images/brisbane-recap/bne-mix-03.jpg",
        "/images/brisbane-recap/bne-mix-04.jpg",
        "/images/brisbane-recap/bne-mix-05.jpg",
        "/images/brisbane-recap/bne-mix-06.jpg",
        "/images/brisbane-recap/bne-mix-07.jpg",
        "/images/brisbane-recap/bne-mix-08.jpg",
        "/images/brisbane-recap/bne-mix-09.jpg",
        "/images/brisbane-recap/bne-mix-10.jpg",
        "/images/brisbane-recap/bne-mix-11.jpg",
        "/images/brisbane-recap/bne-mix-12.jpg",
        "/images/brisbane-recap/bne-mix-13.jpg",
        "/images/brisbane-recap/bne-mix-14.jpg",
      ],
      /** Optional giveaway block (set to null to hide). */
      giveaway: null as null | {
        kicker: string;
        line: { before: string; win: string; middle: string; two: string; after: string };
        place: string;
        cta: { label: string; href: string };
        note: string;
      },
      /** Optional promo tiles (empty array to hide). */
      promos: [] as string[],
      nextStop: null as null | { label: string; value: string },
    },
    {
      title: "Melbourne EXPO Recap",
      text: [
        "That's a wrap on the Melbourne EXPO! A big thank you to our attendees, schools, and partners who made the event a success.",
      ],
      photoAlt: "Melbourne Expo",
      photos: [
        "/images/melbourne-recap/mel-mix-01.jpg",
        "/images/melbourne-recap/mel-mix-02.jpg",
        "/images/melbourne-recap/mel-mix-03.jpg",
        "/images/melbourne-recap/mel-mix-04.jpg",
        "/images/melbourne-recap/mel-mix-05.jpg",
        "/images/melbourne-recap/mel-mix-06.jpg",
        "/images/melbourne-recap/mel-mix-07.jpg",
        "/images/melbourne-recap/mel-mix-08.jpg",
        "/images/melbourne-recap/mel-mix-09.jpg",
        "/images/melbourne-recap/mel-mix-10.jpg",
        "/images/melbourne-recap/mel-mix-11.jpg",
        "/images/melbourne-recap/mel-mix-12.jpg",
        "/images/melbourne-recap/mel-mix-13.jpg",
        "/images/melbourne-recap/mel-mix-14.jpg",
      ],
      giveaway: null,
      promos: [],
      nextStop: null,
    },
  ],

  /**
   * Upcoming events, in date order. The first one is shown as the large featured card.
   * `when` (YYYY-MM-DD) drives the calendar badge; leave it out for "Coming soon".
   * `poster` is optional — when set, "View Poster" opens it over the page.
   * `past: true` greys an event out as completed (listed last, not clickable).
   */
  events: [
    { when: "2026-12-05", date: "5 December 2026", city: "DAVAO", location: "The Royal Mandaya Hotel, Davao City", poster: "/images/expo-poster-davao.jpg" },
    { when: "2026-11-28", date: "28 November 2026", city: "BANGKOK", location: "Novotel Bangkok on Siam Square", poster: "/images/expo-poster-bangkok-specials.jpg" },
    { when: "2026-12-17", date: "17 December 2026", city: "GOLD COAST", location: "Gold Coast" },
    { when: "2026-10-15", date: "15 October 2026", city: "BRISBANE", location: "Brisbane", past: true },
    { when: "2026-10-01", date: "1 October 2026", city: "MELBOURNE", location: "Melbourne", past: true },
  ] as { when?: string; date: string; city: string; location: string; poster?: string; past?: boolean }[],
};

// ---------------------------------------------------------------------------
// Why attend
// ---------------------------------------------------------------------------
export const whyAttend = {
  title: "Why Attend the Expo?",
  text: "Open the door to your future in Australia. Meet universities, TAFEs, language schools and vocational colleges, and get advice on study, visas and planning your path in Australia, all in one event.",
  /** icon: "users" | "shield" | "dollar" | "clipboard" */
  items: [
    { icon: "users", photo: "/images/why/consult-rep.webp", title: "1:1 consultations", sub: "Talk directly with school representatives" },
    { icon: "shield", photo: "/images/why/consult-team.webp", title: "Visa & migration advice", sub: "Free initial visa advice from our specialists" },
    { icon: "dollar", photo: "/images/why/crowd-tables.webp", title: "Scholarship opportunities", sub: "Find the right scholarship and special promotions" },
    { icon: "clipboard", photo: "/images/why/consult-rows.webp", title: "Initial eligibility check", sub: "Document checks and study planning" },
  ] as { icon: "users" | "shield" | "dollar" | "clipboard"; photo: string; title: string; sub: string }[],
  /** Crowd shots from past U&I EXPOs, shown as a strip under the reasons. */
  photos: [
    { src: "/images/why/crowd-hall.webp", alt: "A packed U&I EXPO hall" },
    { src: "/images/why/crowd-talks.webp", alt: "Students consulting with schools at a U&I EXPO" },
  ],
  topicsTitle: "Consult 1-on-1 with the U&I Global team for any course you are interested in",
  topics: [
    "Health and nursing",
    "Education and teaching",
    "Engineering and IT",
    "Business and accounting",
    "Skills-shortage careers for your future in Australia",
    "Bachelor's, Master's and PhD",
    "English pathways into degree study",
  ],
  promo: {
    title: "TAFEs, universities and leading Australian institutions are joining, with a variety of courses to choose from!",
    text: "Special offers and great-value promotions, only at the EXPO!",
    cta: "Register Now",
    tagline: "Planning to study in Australia? Don't miss this one.",
  },
};



// ---------------------------------------------------------------------------
// Pathways
// ---------------------------------------------------------------------------
export const pathways = {
  background: "/images/background/bg-1.png",
  title: "Find Your Pathway",
  subtitle: "Whether you're planning your move or already here, we have expert guidance tailored for you.",
  cards: [
    {
      variant: "primary",
      icon: "globe",
      photo: "/images/carousel/JIN06850.jpg",
      title: "Planning to Study in Australia?",
      sub: "For International Students (Offshore)",
      points: [
        "Course & university selection guidance",
        "Student visa application support",
        "Scholarship opportunities",
        "Pre-departure preparation",
      ],
      cta: { label: "Get Started", href: "#register" },
    },
    {
      variant: "navy",
      icon: "pin",
      photo: "/images/carousel/expo-10.jpg",
      title: "Already in Australia?",
      sub: "For Onshore Students",
      points: [
        "Visa extension & renewal advice",
        "Course transfer & upgrade options",
        "Permanent residency pathways",
        "Migration policy updates",
      ],
      cta: { label: "Get Started", href: "#register" },
    },
  ] as {
    variant: "primary" | "navy";
    icon: "globe" | "pin";
    photo: string;
    title: string;
    sub: string;
    points: string[];
    cta: { label: string; href: string };
  }[],
};

// ---------------------------------------------------------------------------
// EXPO-day specials (placeholder: the Bangkok perks until the Davao offers are confirmed)
// ---------------------------------------------------------------------------
export const specials = {
  title: "Register early for exclusive expo-day benefits!",
  free: "FREE!",
  /** icon: file in /images/art/icon-<name>.webp. `free` adds the green "FREE!" mark. */
  items: [
    { icon: "visa", text: "Student visa fee scholarship of up to $2,050*", free: false },
    // Hidden for now: { icon: "ticket", text: "20% off flights to Australia & New Zealand", free: false },
    { icon: "van", text: "Airport pick-up", free: true },
    { icon: "cap", text: "Course Selection Guidance and Application Assistance", free: false },
    { icon: "ielts", text: "IELTS / PTE 1-Month FREE mock test and review*", free: false },
    // Hidden for now: { icon: "koala", text: "Australian souvenir for the first 29 guests!**", free: false },
  ] as { icon: "cap" | "ielts" | "van" | "ticket" | "visa" | "koala"; text: string; free: boolean }[],
  notes: [
    "*Terms and conditions apply.",
    // Hidden for now: "**The first 29 guests to check in receive an Australian souvenir (celebrating 29 years of U&I Global).",
  ],
  cta: "Register Now",
};

// ---------------------------------------------------------------------------
// Specialists — the U&I team at the Davao EXPO
// ---------------------------------------------------------------------------
export const specialists = {
  title: "Free consultation with our specialists",
  subtitle: "Meet the U&I team who will look after you at the Davao EXPO.",
  /** Shown on each card as the call to book. */
  bookLabel: "Book a consultation",
  /** Which booking button the cards show: "line" or "facebook". */
  bookVia: "facebook" as "line" | "facebook",
  /** Shown (greyed out) on a card whose link isn't ready yet. */
  bookingSoonLabel: "Booking link coming soon" as string | undefined,
  /** Desktop layout: cards per row, and start a new row after these cards (0-based). */
  perRow: 3 as 3 | 4,
  breakAfter: [1] as number[], // after Suzzy (Rashell's card is hidden); make it [2] when Rashell is shown
  /** Shown on a card that has no photo yet. */
  photoSoon: "Photo coming soon" as string | undefined,
  /**
   * Philippines team on the top row, Australia offices below.
   * link: the specialist's Facebook, opened to book a consultation. bookingSoon: show the button greyed out until it's ready.
   * background: optional photo of their city, shown soft and blurred behind the cut-out.
   * points: leave empty until their specialisations are confirmed.
   */
  items: [
    {
      name: "Lillian",
      photo: "/images/specialists/ph/lillian-photo.png",
      background: "/images/specialists/bg/davao-soft.jpg",
      link: "https://www.facebook.com/profile.php?id=61578799293848",
      branch: "Davao office",
      points: ["5+ years of Australian education counselling experience", "Study plans for various backgrounds including health, education and business", "Full support from application to visa"],
    },
    {
      name: "Suzzy",
      photo: "/images/specialists/ph/suzzy-photo.png",
      background: "/images/specialists/bg/cdo-soft.jpg",
      link: "https://www.facebook.com/profile.php?id=61590555390155",
      branch: "Cagayan de Oro office",
      points: [
        "5+ years of Australian education counselling experience",
        "TAFE specialist for Nursing, Trades, Business, and Education",
        "Exclusive School Scholarship for University courses",
      ],
    },
    {
      name: "Rashell",
      // Hidden until her photo, Facebook link and points are ready; delete this line to show the card
      hidden: true,
      background: "/images/specialists/bg/cebu-soft.jpg",
      bookingSoon: true,
      branch: "Cebu office",
      points: [],
    },
    {
      name: "Gaselle",
      photo: "/images/specialists/ph/gaselle-clear.png",
      link: "https://www.facebook.com/gaselle.uandi",
      background: "/images/specialists/bg/brisbane-soft.webp",
      branch: "Brisbane & Gold Coast office",
      points: [
        "Education and Engineering Course Specialist",
        "Pathway guidance from vocational to university degree courses",
        "Free consultations for study pathway plans for Undergraduate and Postgraduate studies",
      ],
    },
    {
      name: "Jose",
      photo: "/images/specialists/ph/jose-clear.png",
      link: "https://www.facebook.com/jose.uandi/",
      background: "/images/specialists/bg/goldcoast-soft.webp",
      branch: "Brisbane & Gold Coast office",
      points: [
        "University Business and Health Care Course Specialist",
        "Experience with Graduate Visa",
        "Trusted assistance with course selection and visa application",
      ],
    },
    {
      name: "Thea",
      photo: "/images/specialists/ph/thea-new.png",
      link: "https://www.facebook.com/profile.php?id=61594543236091",
      background: "/images/specialists/bg/melbourne-soft.webp",
      branch: "Melbourne office",
      // "Alumni of <school>" line to come once the school is confirmed
      points: ["Specialist in Diploma pathways into University degrees", "Hospitality and Trades pathway guidance", "Arrival set-up assistance for new students in Australia"],
    },
  ] as { name: string; hidden?: boolean; photo?: string; link?: string; bookingSoon?: boolean; branch: string; points: string[]; background?: string }[],
};

// ---------------------------------------------------------------------------
// School specials & scholarships — partner school posters in a moving carousel
// ---------------------------------------------------------------------------
export const schools = {
  title: "School specials & scholarships",
  /** Each line shows on its own line. */
  subtitle: ["Prepared especially for guests of the U&I Global EXPO Davao", "Tap a poster to see the full details"],
  specialistLabel: "Specialist",
  /**
   * specialist: who to talk to about this school at the EXPO (matches a name in `specialists`).
   * hideCaption: leave out the school/specialist line under that poster.
   */
  items: [
    { school: "APIC – Asia Pacific International College", poster: "/images/schools/ph2-apic.webp" },
    { school: "Greystone Institute", poster: "/images/schools/ph2-greystone.webp" },
    { school: "Griffith University", poster: "/images/schools/ph2-griffith.webp" },
    { school: "Box Hill Institute", poster: "/images/schools/ph2-boxhill.webp" },
    { school: "Monaro Higher Education", poster: "/images/schools/ph2-monaro.webp" },
    { school: "TAFE Queensland", poster: "/images/schools/ph2-tafeqld.webp" },
    { school: "ECA College", poster: "/images/schools/ph2-eca.webp" },
    { school: "Kaplan Business School Australia", poster: "/images/schools/ph2-kaplan.webp" },
  ] as { school: string; specialist?: string; poster: string; hideCaption?: boolean }[],
};

// ---------------------------------------------------------------------------
// Expo exclusive offer — its own section above the benefits (set to null to hide)
// ---------------------------------------------------------------------------
export const expoExclusive = {
  kicker: "Expo Exclusive",
  amount: "$2,500",
  label: "Visa Fee Rebate*",
  points: ["No CoE Fee*", "No Enrollment Fee*"],
  note: "*Terms and conditions apply.",
  cta: "Claim at the Expo",
} as null | { kicker: string; amount: string; label: string; points: string[]; note: string; cta: string };

// ---------------------------------------------------------------------------
// Benefits (navy band)
// ---------------------------------------------------------------------------
export const benefits = {
  title: "100% Guaranteed Lowest Tuition Fee",
  subtitle: "Six expo-day benefits that stack with every scholarship.",
  items: [
    { no: "01", tag: "FREE", title: "Enrollment Fee" },
    { no: "02", tag: "FREE", title: "Processing Fee" },
    { no: "03", tag: "FREE", title: "Migration Agent Consultation" },
    { no: "04", tag: "FREE", title: "PTE/IELTS Mock Test" },
    { no: "05", tag: "1:1", title: "Consultation with School" },
    { no: "06", tag: "UP TO $1,600", title: "Expo Special" },
  ],
};

// ---------------------------------------------------------------------------
// Videos (YouTube Shorts — paste the video ID from the URL)
// ---------------------------------------------------------------------------
export const videos = {
  title: "Watch Our Story",
  subtitle: "A closer look at our recent U&I Global EXPOs.",
  items: [
    { youtubeId: "-MD3NdgEmd0", label: "Brisbane", title: "U&I Global Expo: Brisbane" },
    { youtubeId: "hvsTGmumFzY", label: "Gold Coast", title: "U&I Global Expo: Gold Coast" },
    { youtubeId: "CKSN9_QDApY", label: "Melbourne", title: "U&I Global Expo: Melbourne" },
    { youtubeId: "UsbnLNu_RDI", label: "Bangkok", title: "U&I Global Expo: Bangkok" },
  ],
};

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------
export const about = {
  /** Wrap the highlighted part in **double asterisks**. */
  title: "About **U&I Global**",
  subtitle: "Australian study advice since 1997",
  /** Use **double asterisks** to bold-highlight a phrase. */
  paragraphs: [
    "For over 29 years U&I Global has helped students plan their study abroad, from choosing a course and institution to mapping out their future education pathway.",
    "With teams and networks in many countries, we give personal advice and connect students with quality education opportunities.",
    "**Step into our 30th year with U&I Global in 2027.**",
  ],
};

// ---------------------------------------------------------------------------
// Why partner
// ---------------------------------------------------------------------------
export const partner = {
  title: "Why do students and parents choose U&I Global Australia?",
  items: [
    { emoji: "🇦🇺", text: "Head Office based in Australia with branches in the Philippines" },
    { emoji: "🏢", text: "Registered Australian company operating for nearly 30 years" },
    { emoji: "🎓", text: "An officially accredited education agent for universities, TAFEs and Education Queensland International (EQI) institutions" },
    { emoji: "⭐", text: "Almost 30 years, since 1997, looking after students from around the world coming to Australia" },
    { emoji: "✈️", text: "Looking after students in their study journey from the Philippines all the way to Australia" },
    { emoji: "🤝", text: "Free study consultations with our specialised team" },
  ],
};


// ---------------------------------------------------------------------------
// Your move to Australia
// ---------------------------------------------------------------------------
export const move = {
  title: "More Than Study",
  subtitle: "We help you settle in Australia: U&I looks after you all the way through your journey.",
  /** icon: name of an icon in components/icons.tsx (see Move.tsx) */
  items: [
    { icon: "home", title: "Accommodation Support", text: "U&I Global team in Australia assists students with finding accommodation on arrival." },
    { icon: "briefcase", title: "Job Search Support", text: "Assistance with job interviews with our partner network and U&I Alumni." },
    { icon: "device", title: "Arrival Assistance", text: "Free airport pick-up, SIM cards, transport cards, opening a bank account and finding places near your home when you land." },
    { icon: "clipboard", title: "TFN / ABN Guidance", text: "Step-by-step help applying for your Tax File Number and Australian Business Number." },
    { icon: "globe", title: "Life in Australia Guidance", text: "Advice on everyday life and the essential services you will need in Australia." },
    { icon: "users", title: "Student Community & Events", text: "Events at U&I offices in Australia where students meet, make friends and build connections." },
  ] as { icon: "home" | "briefcase" | "device" | "clipboard" | "globe" | "users"; title: string; text: string }[],
};


// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------
export const testimonials = {
  title: "What Our Students Say",
  subtitle: "Real reviews from students U&I has helped.",
  labels: { service: "Service", consultant: "Consultant", course: "Course", school: "School", readMore: "Read more", source: "Review", showMore: "See more reviews", showLess: "Show fewer reviews", close: "Close" },
  tabs: { reviews: "Student reviews", grants: "Visa grants", study: "Study experiences" },
  /** Visa grant posts (placeholder: from the U&I Thailand page), newest first. */
  grants: { alt: "Visa granted", images: ["/images/grants/ph-grant-01.webp", "/images/grants/ph-grant-02.webp", "/images/grants/ph-grant-03.webp", "/images/grants/ph-grant-04.webp", "/images/grants/ph-grant-05.webp", "/images/grants/ph-grant-06.webp", "/images/grants/ph-grant-07.webp", "/images/grants/ph-grant-08.webp", "/images/grants/ph-grant-09.webp", "/images/grants/ph-grant-10.webp", "/images/grants/ph-grant-11.webp", "/images/grants/ph-grant-12.webp", "/images/grants/ph-grant-13.webp", "/images/grants/ph-grant-14.webp", "/images/grants/ph-grant-15.webp", "/images/grants/ph-grant-16.webp", "/images/grants/ph-grant-17.webp", "/images/grants/ph-grant-18.webp", "/images/grants/ph-grant-19.webp"] },
  /** Students reviewing their schools (hidden for now; set { alt, images } to bring the tab back). */
  study: null as null | { alt: string; images: string[] },
  /**
   * Student reviews: Google reviews of U&I Global Australia Philippines, in the students' own words.
   * No photos yet, so each card shows the student's initial; add `photo` as they come in.
   */
  items: [
    {
      name: "Babylou C.",
      photo: "/images/reviews/ph/babylou.jpg",
      service: "Visa application",
      consultant: "Gaselle",
      quote: "A huge thank you to U&I Global Australia Philippines, especially Gaselle, for making my visa journey so much easier. My application was lodged at the last minute, and it was a risky case because some supporting documents were still pending. Despite the challenges, Gaselle handled everything with professionalism, patience, and genuine care.\nI was beyond grateful when my visa was approved in just 10 days! Thank you for believing in my case and guiding me every step of the way. I highly recommend U&I Global Australia Philippines to anyone looking for reliable and dedicated migration support. 🙌✨",
    },
    {
      name: "Mary Joy P.",
      photo: "/images/reviews/ph/maryjoy.jpg",
      service: "Student visa",
      consultant: "Jose",
      quote: "I had a great experience with U&I Agency for my student visa application. They made the entire process incredibly easy and stress-free. My agent, Jose, was fantastic—he was efficient, professional, and everything went through without any issues. The whole experience was fast and smooth. Thank you, U&I and Jose, for your great work!",
    },
    {
      name: "Heaven S.",
      photo: "/images/reviews/ph/heaven.jpg",
      service: "Visa application",
      consultant: "Gaselle",
      quote: "A very special thank you to Miss Gaselle for her patience and support throughout the whole process. She was always easy to reach out to and talk to whenever I had questions or needed guidance. I truly appreciate all the help she gave me every step of the way.\n\nImagine, I got it in only 3 weeks!\n\nIf you are looking for a visa agent, Miss Gaselle and U&I Philippines is definitely the place to go. Highly recommended! ⭐",
    },
    {
      name: "Ain A.",
      photo: "/images/reviews/ph/ain.jpg",
      service: "Student visa & PTE mock test",
      consultant: "Suzzy",
      quote: "My experience with U&I Global has been truly positive and beyond my expectations. I honestly didn't expect my application process to move so quickly. The agents were very hands-on, responsive, and always ready to answer my questions whenever I had concerns.\n\nThey also helped me improve my Genuine Student (GS) Statement, making sure my answers were clear, convincing, and well-supported. My documents were processed promptly but with great care and attention to detail. We went through several rounds of checking and rechecking to ensure that all information was accurate, consistent, and properly backed up by supporting documents.\n\nI really appreciate their patience, dedication, and guidance throughout my application journey. Their assistance made the process much smoother, less stressful, and more manageable. I am truly grateful to U&I Global for helping me take this important step toward achieving my dream of studying in Australia. Thank you for your excellent service and support!\n\nGood morning po, Ma'am Suzzy! I sent you an email po regarding my PTE score report from the 2nd retake yesterday, August 5. Thank you po for offering free mock exam, nakatulong po siya. 🥹",
    },
    {
      name: "Genne T.",
      photo: "/images/reviews/ph/genellene.jpg",
      service: "Visa application",
      consultant: "Feb and Gaselle",
      quote: "My visa was lodged on 12 March and approved in just 9 days!\n\nI cannot thank Ms. Feb Franzene Barrios and Ms. Gaselle at U & I Global enough for their incredible support. From my very first inquiry all the way through to the final processing, they were with me every step of the way.\n\nWhat really set them apart was their empathy. They weren't just processing paperwork; they were always there to listen to all the \"drama\" and anxieties that come with visa applications. They handled my endless questions with so much patience and professionalism that our conversations often turned from stressful inquiries into ease and laughter.\n\nHighly recommended!! If you are looking for a team that is efficient, supportive, and genuinely invested in your success, look no further than Feb and Gaselle. They made a daunting process feel like a breeze!",
    },
    {
      name: "Joash G.",
      photo: "/images/reviews/ph/joash.jpg",
      service: "Student visa",
      consultant: "Jose",
      quote: "I had a really good experience with U&I Global during my student visa application. Jose was very approachable, helpful, and easy to talk to. He guided me through every step, answered my questions clearly, and made the whole process much less stressful. I’m very grateful for all the support and assistance. Thank you so much!!!",
    },
    {
      name: "Johanna Charisse M.",
      photo: "/images/reviews/ph/johanna.jpg",
      service: "Student visa",
      consultant: "Gaselle",
      quote: "A Rare, Genuine Gem 💎\n\nBack in 2023, I was just one of the many fresh international students—lost, unsure, and trying to find my place. When a friend invited me to a Study Expo by U&I, I said yes without even knowing how much I would need that moment later on.\n\nThat’s where I met Ma’am Gasselle—a petite, warm, and genuinely kind lady my friend introduced me to. Life surprised me with challenges that pushed me to my limits, and when I finally needed help from an education agent, the only name that came to mind was U&I… and Ma’am Gasselle.\n\nFrom having absolutely no clue about anything, she guided me through every step with patience and care. We went through many ups and downs during my visa process, yet not once did I doubt that she truly cares for the students she helps. She puts her heart into her work, and it shows in every conversation, every reminder, every effort she gives.\n\nIt is rare to find an agent who is truly genuine.\nAnd I feel blessed to have found one.\n\nHeartfelt. Practical. Reliable.\nThank you, Ma’am Gasselle, for everything.",
    },
    {
      name: "Denise V.",
      photo: "/images/reviews/ph/denise.jpg",
      service: "Visa application",
      consultant: "Jose",
      quote: "I feel incredibly fortunate to have had my visa application handled by Mr. Jose Palileo at U&I Migration. My case was quite complex, but Mr. Jose managed it with impressive efficiency, professionalism, and attention to detail. He kept the process smooth and clear every step of the way.\n\nTo my surprise and relief, my visa was approved, and I truly believe his expertise made all the difference. I highly recommend U&I Migration and Mr. Jose to anyone seeking reliable and knowledgeable assistance with their visa application.",
    },
    {
      name: "Jade D.",
      photo: "/images/reviews/ph/jade.jpg",
      service: "Visa application",
      consultant: "Gaselle and Jose",
      quote: "My sincere appreciation goes to the U and I Team for their remarkable service and assistance with my visa application.\n\nTheir dedication and expertise made a big difference in achieving a successful outcome. The team was responsive, supportive, and professional throughout the entire process.\n\nThank you for your valuable help and for making this journey much easier and more manageable.\n\nSalamat Miss Gaselle and Sir Jose din 🤗💕",
    },
    {
      name: "Jaimee Kaye S.",
      service: "Student visa",
      consultant: "Dee Jay and Gaselle",
      quote: "Hello and Good day everyone!\n\nI would like to extend my deepest gratitude to U and I Global for their exceptional assistance in processing my student visa. A special thank you to Ate Dee Jay and Ate Gaselle for their outstanding support they were incredibly approachable, understanding, and patient throughout every step of the process.\n\nTheir professionalism and dedication made the entire experience smooth and stress-free. If you are searching for a reliable and trustworthy agency, I highly recommend U and I Global for their excellent service and commitment to helping their clients succeed.\n\nI’m truly thankful my visa has been approved!\n\nMaraming Salamat po☺️",
    },
    {
      name: "Arianne Grace L.",
      photo: "/images/reviews/ph/arianne.jpg",
      service: "Student visa",
      // Jouana started the case and Gaselle took it over; the quote is kept as written
      consultant: "Jouana, then Gaselle",
      quote: "Thank you U&I and kudos to Miss Jouana! Miss Jouana is the best! She provides excellent guidance and support throughout the process. Her approachability, kindness, and expertise in sharing information about potential courses for a student visa were truly invaluable. She also handled everything with such ease and speed. Five stars isn't enough - I'd give her ten stars if I could! 🥰💕",
    },
    {
      name: "Ronabel A.",
      photo: "/images/reviews/ph/ronabel.jpg",
      service: "Visa application",
      consultant: "Jose",
      quote: "I would like to express my heartfelt gratitude to Sir Jose of U&I Global for his unwavering support and guidance throughout my visa application journey. From the very beginning, he patiently answered all my questions and guided me step by step with so much care and professionalism. His encouragement made the whole process feel lighter and gave me confidence along the way. I truly appreciate his dedication and kindness. Thank you so much, Sir Jose! I’m definitely looking forward to working with him again on my next visa journey. Godbless!!!",
    },
    {
      name: "Gherwin A.",
      photo: "/images/reviews/ph/gherwin.jpg",
      service: "Visa application",
      quote: "I would like to express my sincere appreciation to the U and I Team for their outstanding support throughout my visa processing and approval journey.\nFrom the very beginning, they were professional, responsive, and incredibly knowledgeable. The entire process, which can often feel overwhelming and stressful, was handled with such care and efficiency that it gave me complete peace of mind. Every question I had was answered promptly, and they guided me step by step, ensuring that all requirements were met without confusion or delay.\nWhat truly stood out was their dedication and attention to detail. They went above and beyond to make sure everything was in order, and their expertise played a huge role in the successful outcome of my application.\nI am genuinely grateful for their support and would highly recommend their services to anyone seeking reliable and trustworthy visa assistance. Thank you once again for making this important milestone possible!",
    },
    {
      name: "Shermain A.",
      photo: "/images/reviews/ph/shermain.jpg",
      service: "Visa application",
      quote: "Thank you, U&I, for your excellent service and unwavering support throughout my visa application. Your professionalism, patience, and guidance made the entire process much smoother. I’m beyond grateful to finally receive my visa grant. Thank you for being part of this milestone—highly recommended! 🤍✨",
    },
    {
      name: "Erick and Karenn S.",
      photo: "/images/reviews/ph/erick-karenn.jpg",
      service: "Meet and greet event",
      quote: "It was my first time joining this kind of meet and greet event. It was really nice because you get to meet many different people from other countries, like Koreans and Taiwanese. It’s not just their event they also include a tour. Wow, I was really impressed! Thank you so much, U and I Global. Highly recommended ❤️❤️❤️❤️❤️",
    },
    {
      name: "Jasper V.",
      photo: "/images/reviews/ph/jasper.jpg",
      service: "Student visa and school application",
      consultant: "Jose",
      quote: "I had an excellent experience with Jose UandI from U&I Global Brisbane. He was professional, knowledgeable, and very helpful throughout my student visa and school application process. I really appreciated his guidance and support every step of the way. Highly recommended!",
    },
  ] as {
    name: string;
    /** Card photo; without one the card shows the student's initial. */
    photo?: string;
    /** Full review graphic from the Facebook page, shown in the pop-up instead of the photo. */
    review?: string;
    course?: string;
    school?: string;
    service?: string;
    consultant?: string;
    quote: string;
  }[],
};

// ---------------------------------------------------------------------------
// Infinite photo strip
// ---------------------------------------------------------------------------
export const photoStrip = {
  /** Seconds for one full loop. */
  durationSeconds: 30,
  photos: [
    { src: "/images/carousel/expo-01.JPG", alt: "U&I Expo event photo" },
    { src: "/images/carousel/expo-02.jpg", alt: "U&I Expo attendees" },
    { src: "/images/carousel/expo-03.jpg", alt: "U&I Expo consultation" },
    { src: "/images/carousel/expo-05.jpg", alt: "U&I Expo booth" },
    { src: "/images/carousel/expo-07-upright.jpeg", alt: "U&I Expo session" },
    { src: "/images/carousel/expo-08-upright.jpeg", alt: "U&I Expo gathering" },
    { src: "/images/carousel/expo-09-upright.jpeg", alt: "U&I Expo networking" },
    { src: "/images/carousel/expo-10.jpg", alt: "U&I Expo presentation" },
    { src: "/images/carousel/expo-11.jpg", alt: "U&I Expo highlights" },
    { src: "/images/carousel/1457079309490.jpeg", alt: "U&I Education event" },
    { src: "/images/carousel/1457079310341.jpeg", alt: "U&I Education seminar" },
    { src: "/images/carousel/20181116_143108.jpg", alt: "U&I Expo 2018 event" },
    { src: "/images/carousel/20181116_144716.jpg", alt: "U&I Expo 2018 attendees" },
    { src: "/images/carousel/IMG_9924.JPG", alt: "U&I Expo group photo" },
    { src: "/images/carousel/IMG_9951.JPG", alt: "U&I Expo team photo" },
    { src: "/images/carousel/JIN06850.jpg", alt: "U&I Expo venue" },
    { src: "/images/carousel/JIN06877-향상됨-노이즈 감소.jpg", alt: "U&I Expo moment" },
    { src: "/images/carousel/JIN06883.jpg", alt: "U&I Expo interaction" },
    { src: "/images/carousel/JIN06887-향상됨-노이즈 감소.jpg", alt: "U&I Expo engagement" },
    { src: "/images/carousel/KakaoTalk_20180814_165410770.jpg", alt: "U&I Education consultation" },
    { src: "/images/carousel/KakaoTalk_20180814_165448330.jpg", alt: "U&I Education meeting" },
    { src: "/images/carousel/KakaoTalk_20190502_143009700.jpg", alt: "U&I Expo 2019 event" },
    { src: "/images/carousel/KakaoTalk_20190502_143019982.jpg", alt: "U&I Expo 2019 session" },
    { src: "/images/carousel/KakaoTalk_20190502_143025182.jpg", alt: "U&I Expo 2019 attendees" },
    { src: "/images/carousel/KakaoTalk_20191003_181401135.jpg", alt: "U&I Education gathering" },
    { src: "/images/carousel/KakaoTalk_Moim_7NdO2E6sBpqeHWx3pNfn7avhAhxfQ5.jpg", alt: "U&I team moment" },
  ],
};

// ---------------------------------------------------------------------------
// Final CTA
// ---------------------------------------------------------------------------
export const finalCta = {
  title: "Secure Your Free Spot",
  subtitle: "Instant registration, and a U&I staff member will reach out to you shortly.",
  cta: { label: "Register for Free", href: "#register" },
  /** The monday.com form shown inline; filled in per site in content/i18n.ts. */
  form: { embed: "", url: "", title: "EXPO registration form", fallback: "Form not loading? Open it in a new tab" },
};

// ---------------------------------------------------------------------------
// Offices — omit `phone` / `email` to hide them.
// ---------------------------------------------------------------------------
export const offices = {
  title: "Our Offices",
  subtitle: "Get in touch with the U&I Global team in your region.",
  items: [
    { name: "Davao (Philippines)", phone: "0961-039-7386", email: "information@uandiedu.com", address: "2nd Floor, Lucita Building, P. Sobrecarey St corner Lapu-Lapu St, Davao City, 8000" },
    { name: "Cebu (Philippines)", email: "information@uandiedu.com", address: "Digitally integrated operational office managed by U&I staff" },
    { name: "Iloilo (Philippines)", email: "information@uandiedu.com", address: "Digitally integrated operational office managed by U&I staff" },
    { name: "Manila (Philippines)", email: "information@uandiedu.com", address: "Digitally integrated operational office managed by U&I staff" },
    { name: "Brisbane (Head Office)", phone: "+61 7 3270 7999", email: "information@uandiedu.com", address: "Level 3, 110 Mary St., Brisbane QLD 4000, Australia" },
    { name: "Melbourne", phone: "+61 3 9639 6148", email: "information@uandiedu.com", address: "Suite 202, Level 2, 517 Flinders Lane, Melbourne VIC 3000, Australia" },
    { name: "Gold Coast", phone: "+61 421 000 060", email: "information@uandiedu.com", address: "Level 1, Southport Central Commercial Tower 2, 2106/5 Lawson St., Southport QLD 4215, Australia" },
    { name: "Bangkok (Thailand)", phones: [{ number: "+66 81-116-5186", area: "Bangkok" }, { number: "+66 99-921-5899", area: "Chiang Mai" }], email: "information@uandiedu.com", address: "Samyan Mitrtown Office Tower, Floor 24, Mitrtown Office, 944 Rama IV Rd, Wang Mai, Pathum Wan, Bangkok 10330, Thailand" },
    { name: "Seoul (Korea)", phone: "+82 10 4008 5126", email: "information@uandiedu.com", address: "Digitally integrated operational office managed by U&I staff" },
    { name: "Busan (Korea)", phone: "+82 10 4008 5126", email: "information@uandiedu.com", address: "Level 9, 694 Jungang-daero, Busanjin-gu, Busan, Korea, 47216" },
    { name: "Ulaanbaatar (Mongolia)", email: "information@uandiedu.com", address: "Digitally integrated operational office managed by U&I staff" },
  ] as {
    name: string;
    phone?: string;
    /** Several numbers, each labelled with its city. */
    phones?: { number: string; area: string }[];
    email?: string;
    address?: string;
    /** For a country card: the cities with a U&I office. */
    cities?: string[];
  }[],
};

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------
export const footer = {
  tagline: "Your trusted partner for Australian education & migration.",
  trust: "Trusted by more than 30,000 students worldwide",
  links: [
    { label: "Why Attend", href: "#why-attend" },
    { label: "Schedule", href: "#dates" },
    { label: "Register Now", href: "#register" },
  ],
  contact: {
    email: "information@uandiedu.com",
    /** Phone lines shown in the top bar and footer. */
    phones: [{ number: "0961-039-7386", area: "Davao" }],
    address: "2nd Floor, Lucita Building, P. Sobrecarey St corner Lapu-Lapu St, Davao City, 8000",
  },
  copyright: "© 2026 U&I Global. All rights reserved.",
  privacyHref: "#",
};

/** "+61 7 3270 7999" -> "tel:+61732707999" */
export const tel = (p: string) => "tel:" + p.replace(/[^+\d]/g, "");

// ---------------------------------------------------------------------------
// Sister sites — flag links in the top bar to the other EXPO 2026 websites
// ---------------------------------------------------------------------------
export const sisterSites = [
  { flag: "au", label: "English", title: "EXPO 2026 main website (English)", href: "https://expo26-site-2.vercel.app", lang: "en" },
  { flag: "th", label: "ภาษาไทย", title: "EXPO 2026 Bangkok — Thai website", href: "https://expo26-site-th.vercel.app", lang: "th" },
] as { flag: "th" | "ph" | "au"; label: string; title: string; href: string; lang: string }[];

// ---------------------------------------------------------------------------
// Small interface labels used across components
// ---------------------------------------------------------------------------
export const ui = {
  openMenu: "Open menu",
  closeMenu: "Close menu",
  language: "Language",
  comingSoon: "Coming soon",
  completed: "Completed",
  benefitNo: "Benefit Nº",
  viewPoster: "View Poster",
  posterAlt: "Expo Poster",
  promoAlt: "Upcoming EXPO promo",
  playVideo: "Play video:",
  quickLinks: "Quick Links",
  contact: "Contact",
  privacy: "Privacy Policy",
  backToTop: "Back to top",
  back: "Back",
  previous: "Previous",
  next: "Next",
};
