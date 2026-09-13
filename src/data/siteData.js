import { DISPLAY_PHONE } from '../config/contact';

export const phoneNumbers = [DISPLAY_PHONE];

export const fleet = [
  {
    id: "dzire",
    name: "Maruti Swift Dzire",
    models: "Swift Dzire / Tour S (Sedan)",
    category: "Comfort Sedan",
    capacityCategory: "sedan",
    tag: "Most Popular",
    seat: "4 Passengers",
    seatsCount: 4,
    bags: "3 Bags",
    icon: "🚗",
    image: "/images/Cars/swift-dzire.jpg",
    poster: "/images/Cars/swift-dzire.jpg",
    features: ["AC", "Music System", "Comfortable Seating", "Spacious Boot"],
  },
  {
    id: "ertiga",
    name: "Maruti Ertiga",
    models: "Maruti Suzuki Ertiga (MPV)",
    category: "Family MPV",
    capacityCategory: "suv",
    tag: "Spacious & Reliable",
    seat: "6-7 Passengers",
    seatsCount: 7,
    bags: "4 Bags",
    icon: "🚙",
    image: "/images/Cars/ertiga.jpg",
    poster: "/images/Cars/ertiga.jpg",
    features: [
      "Dual AC",
      "Pushback Seats",
      "Extra Luggage Space",
      "USB Chargers",
    ],
  },
  {
    id: "innova-crysta",
    name: "Toyota Innova Crysta",
    models: "Innova Crysta / SUV",
    category: "Premium SUV",
    capacityCategory: "suv",
    tag: "Premium Comfort",
    seat: "7 Passengers",
    seatsCount: 7,
    bags: "5 Bags",
    icon: "🚙",
    image: "/images/Cars/innova-crysta.jpg",
    poster: "/images/Cars/innova-crysta.jpg",
    features: [
      "Rear Climate Control",
      "Captain Seats",
      "Smooth Suspension",
      "VIP Comfort",
    ],
  },
  {
    id: "force-urbania",
    name: "Force Urbania ",
    models: "Force Urbania Luxury Van",
    category: "Luxury Van",
    capacityCategory: "van",
    tag: "Luxury & Comfort",
    seat: "17 Passengers",
    seatsCount: 17,
    bags: "12 Bags",
    icon: "🚐",
    image: "/images/Cars/force-urbania.jpg",
    poster: "/images/Cars/force-urbania.jpg",
    features: [
      "Individual AC Vents",
      "Reclining Seats",
      "Panoramic Windows",
      "Air Suspension Feel",
    ],
  },
  {
    id: "tempo-traveller",
    name: "Tempo Traveller",
    models: "Force Tempo Traveller 17S",
    category: "Group Travel Van",
    capacityCategory: "van",
    tag: "Group Travel Special",
    seat: "17 Passengers",
    seatsCount: 17,
    bags: "12 Bags",
    icon: "🚐",
    image: "/images/Cars/tempo-traveller.jpg",
    poster: "/images/Cars/force-urbania.jpg",
    features: [
      "Powerful AC",
      "Spacious Luggage Boot",
      "Curtains & LED Lights",
      "Comfort Seats",
    ],
  },
  {
    id: "mini-bus-26",
    name: "Mini Bus",
    models: "Tata Starbus / BharatBenz Mini Coach",
    category: "Mini Tourist Bus",
    capacityCategory: "bus",
    tag: "Ideal for Large Groups",
    seat: "20-26 Passengers",
    seatsCount: 26,
    bags: "25+ Bags",
    icon: "🚌",
    image: "/images/Cars/mini-bus-26.jpg",
    poster: "/images/Cars/force-urbania.jpg",
    features: [
      "Chilled AC",
      "2x2 Pushback Seats",
      "Sound System + Mic",
      "Overhead Racks",
    ],
  },
  {
    id: "tourist-bus-40",
    name: "AC Tourist Bus",
    models: "Deluxe Tata / Ashok Leyland Coach",
    category: "Medium Tourist Bus",
    capacityCategory: "bus",
    tag: "Corporate & Tour Groups",
    seat: "32-40 Passengers",
    seatsCount: 40,
    bags: "35+ Bags",
    icon: "🚌",
    image: "/images/Cars/tourist-bus-40.jpg",
    poster: "/images/Cars/tourist-bus-40.jpg",
    features: [
      "Central AC",
      "Deluxe Pushback Seats",
      "LED Screen Entertainment",
      "Ample Underbelly Storage",
    ],
  },
  {
    id: "big-bus-52",
    name: "Big Bus AC",
    models: "Large Tourist Coach (Tata / Ashok Leyland)",
    category: "Full Size Tourist Bus",
    capacityCategory: "bus",
    tag: "Up to 52 Passengers",
    seat: "52 Passengers",
    seatsCount: 52,
    bags: "50+ Bags",
    icon: "🚌",
    image: "/images/Cars/big-bus-52.jpg",
    poster: "/images/Cars/big-bus-52.jpg",
    features: [
      "High-Capacity Cooling",
      "Ergonomic 2x2 Seating",
      "Huge Luggage Space",
      "Highway Cruise Ready",
    ],
  },
];

// Backward-compatible alias for existing sections.
export const cars = fleet;

export const routes = [
  {
    from: "Jabalpur",
    to: "Kanha National Park",
    category: "Wildlife",
    badge: "Popular",
    time: "Approx. 4–5 hrs",
    car: "Innova / Ertiga",
    description:
      "Direct Jabalpur to Kanha National Park taxi service for safari and nature trips.",
    image:
      "/images/routes/kanha-national-park.jpg",
    imageAlt: "Kanha National Park landscape and safari route",
    credit: "Wikimedia Commons",
  },
  {
    from: "Jabalpur",
    to: "Bandhavgarh National Park",
    category: "Wildlife",
    badge: "Safari",
    time: "Approx. 3.5–4.5 hrs",
    car: "Innova / SUV",
    description:
      "Comfortable transfer for Bandhavgarh wildlife stays and weekend safari plans.",
    image:
      "/images/routes/bandhavgarh-national-park.jpg",
    imageAlt: "Bandhavgarh National Park wildlife landscape",
    credit: "Wikimedia Commons",
  },
  {
    from: "Jabalpur",
    to: "Amarkantak",
    category: "Pilgrimage",
    badge: "Temple",
    time: "Approx. 4–5 hrs",
    car: "Sedan / Ertiga",
    description:
      "Outstation cab from Jabalpur to Amarkantak for family and pilgrimage travel.",
    image:
      "/images/routes/Amarkantak.jpg",
    imageAlt: "Amarkantak temple and pilgrimage destination",
    credit: "Wikimedia Commons",
  },
  {
    from: "Jabalpur",
    to: "Pachmarhi Hill Station",
    category: "Hill Station",
    badge: "Nature",
    time: "Approx. 5–6 hrs",
    car: "Ertiga / Innova",
    description:
      "Road trip taxi service from Jabalpur to Pachmarhi with one-way or round-trip options.",
    image:
      "/images/routes/Pachmarhi.jpg",
    imageAlt: "Pachmarhi hill station valley view",
    credit: "Wikimedia Commons",
  },
  {
    from: "Jabalpur",
    to: "Khajuraho",
    category: "Heritage",
    badge: "Heritage",
    time: "Approx. 5–6 hrs",
    car: "Sedan / Innova",
    description:
      "Jabalpur to Khajuraho taxi service with optional local sightseeing.",
    image:
      "/images/routes/Khajuraho.jpg",
    imageAlt: "Kandariya Mahadeva Temple in Khajuraho",
    credit: "Wikimedia Commons",
  },
  {
    from: "Jabalpur",
    to: "Panna National Park",
    category: "Wildlife",
    badge: "Safari",
    time: "Approx. 5–6 hrs",
    car: "Innova / SUV",
    description:
      "Private cab option for Panna wildlife travel and Khajuraho combination trips.",
    image:
      "/images/routes/Panna-National-Park.jpg",
    imageAlt: "Panna National Park wildlife landscape",
    credit: "Wikimedia Commons",
  },
  {
    from: "Jabalpur",
    to: "Bhopal",
    category: "City",
    badge: "MP",
    time: "Approx. 5–6 hrs",
    car: "Sedan / Ertiga",
    description:
      "Jabalpur to Bhopal taxi for business, family and airport-related journeys.",
    image:
      "/images/routes/Bhopal.jpg",
    imageAlt: "Upper Lake in Bhopal",
    credit: "Wikimedia Commons",
  },
  {
    from: "Jabalpur",
    to: "Ujjain",
    category: "Pilgrimage",
    badge: "Jyotirlinga",
    time: "Approx. 7–9 hrs",
    car: "Innova / Ertiga",
    description:
      "Long-distance taxi for Mahakaleshwar darshan and family pilgrimage plans.",
    image:
      "/images/routes/Ujjain.jpg",
    imageAlt: "Mahakaleshwar Temple in Ujjain",
    credit: "Wikimedia Commons",
  },
  {
    from: "Jabalpur",
    to: "Indore",
    category: "City",
    badge: "MP",
    time: "Approx. 8–9 hrs",
    car: "Innova / Sedan",
    description:
      "Reliable outstation cab for Jabalpur–Indore travel and onward local sightseeing.",
    image:
      "/images/routes/Indore.jpg",
    imageAlt: "Rajwada Palace in Indore",
    credit: "Wikimedia Commons",
  },
  {
    from: "Jabalpur",
    to: "Omkareshwar",
    category: "Pilgrimage",
    badge: "Jyotirlinga",
    time: "Approx. 9–10 hrs",
    car: "Innova / Ertiga",
    description:
      "Jabalpur to Omkareshwar taxi service for pilgrimage and multi-city MP tours.",
    image:
      "/images/routes/Omkareshwar.jpg",
    imageAlt: "Omkareshwar town and Narmada river area",
    credit: "Wikimedia Commons",
  },
  {
    from: "Jabalpur",
    to: "Nagpur",
    category: "City",
    badge: "Popular",
    time: "Approx. 4–5 hrs",
    car: "Sedan / Ertiga",
    description:
      "Comfortable Jabalpur to Nagpur taxi service for business, family and airport travel.",
    image:
      "/images/routes/Nagpur.jpg",
    imageAlt: "Nagpur city skyline",
    credit: "Wikimedia Commons"
  },
  {
    from: "Jabalpur",
    to: "Rewa",
    category: "City",
    badge: "MP",
    time: "Approx. 4–5 hrs",
    car: "Sedan / Innova",
    description:
      "Reliable outstation cab from Jabalpur to Rewa for family visits and local travel.",
       image:
      "/images/routes/rewa.jpg",
    imageAlt: "Rewa city skyline",
    credit: "Wikimedia Commons"
  },
];



export const jabalpurPlaces = [
  {
    name: "Bhedaghat Marble Rocks",
    region: "Jabalpur",
    description:
      "Scenic Narmada river cliffs and marble canyon views, ideal for a Jabalpur half-day or full-day sightseeing taxi.",
    image: "/images/JabalpurPlace/Jabalpur-Sightseeing.webp",
  },
  {
    name: "Dhuandhar Falls",
    region: "Bhedaghat",
    description:
      "Visit the famous waterfall on the Narmada with a private cab and flexible local sightseeing time.",
    image: "/images/JabalpurPlace/Dhuandhar-Falls.webp",
  },
  {
    name: "Chausath Yogini Temple",
    region: "Bhedaghat",
    description:
      "A historic hilltop temple overlooking the Narmada, commonly combined with Marble Rocks and Dhuandhar Falls.",
    image: "/images/JabalpurPlace/Chausath-Yogini-Temple.jpg",
  },
  {
    name: "Bargi Dam",
    region: "Jabalpur",
    description:
      "A peaceful Narmada-side getaway for boating, scenic drives and relaxed family day trips from Jabalpur.",
    image: "/images/JabalpurPlace/Bargi-Dam.jpg",
  },
  {
    name: "Madan Mahal Fort",
    region: "Jabalpur",
    description:
      "Historic fort and city viewpoint associated with Gond heritage, suitable for a local Jabalpur sightseeing route.",
    image: "/images/JabalpurPlace/Madan-Mahal-Fort.webp",
  },
  {
    name: "Gwarighat",
    region: "Narmada Ghat",
    description:
      "Popular riverside ghat in Jabalpur for Narmada views, evening visits and local spiritual sightseeing.",
    image: "/images/JabalpurPlace/Gwarighat.jpg",
  },
];

export const wildTours = [
  {
    name: "Kanha Wildlife Escape",
    duration: "2–3 days",
    daysNights: "2 Days / 1 Night",
    price: "Get Quote",
    highlights: "Safari • Forest stay • Nature drive",
    description:
      "Private cab travel from Jabalpur to Kanha with a comfortable vehicle matched to your group size.",
    image:
      "/images/wildTours/Kanha.jpg",
  },
  {
    name: "Bandhavgarh Tiger Trail",
    duration: "2–3 days",
    daysNights: "2 Days / 1 Night",
    price: "Get Quote",
    highlights: "Safari • Tiger reserve • Forest route",
    description:
      "Plan a relaxed road trip to Bandhavgarh with return travel arranged around your safari timings.",
    image:
      "/images/wildTours/Bandhavgarh.jpg",
  },
  {
    name: "Panna + Khajuraho Combo",
    duration: "2–4 days",
    daysNights: "3 Days / 2 Nights",
    price: "Get Quote",
    highlights: "Wildlife • Temples • Heritage",
    description:
      "Combine Panna National Park with Khajuraho in a flexible private taxi itinerary.",
    image:
      "/images/wildTours/Panna.jpg",
  },
  {
    name: "Pench & Satpura Road Trip",
    duration: "2–4 days",
    daysNights: "3 Days / 2 Nights",
    price: "Get Quote",
    highlights: "Forest drive • Wildlife • Family trip",
    description:
      "A multi-stop MP wildlife option for groups that want private road travel and flexible sightseeing.",
    image:
      "/images/wildTours/Pench-satpura.jpg",
  },
];

export const travelCategories = [
  {
    title: "Pilgrimage Tours",
    icon: "🛕",
    description:
      "Flexible private taxi plans for Ujjain, Omkareshwar, Amarkantak and nearby temple circuits.",
    packages: ["Mahakaleshwar", "Omkareshwar", "Amarkantak", "Temple Circuit"],
  },
  {
    title: "Jabalpur Local Tours",
    icon: "📍",
    description:
      "City sightseeing for Bhedaghat, Marble Rocks, Dhuandhar Falls and nearby attractions.",
    packages: ["Bhedaghat", "Dhuandhar", "Marble Rocks", "Full Day City"],
  },
  {
    title: "Wedding & Events",
    icon: "💍",
    description:
      "Cars, SUVs and buses for guest transport, wedding entries and multi-point movement.",
    packages: ["Bridal Car", "Guest Shuttle", "SUV Fleet", "52-Seater Bus"],
  },
  {
    title: "Corporate & Group Travel",
    icon: "🚌",
    description:
      "Pre-planned group movement with vehicle sizes selected for employee or event capacity.",
    packages: ["Tempo Traveller", "Mini Bus", "Big Bus", "Corporate Trips"],
  },
];

export const popularCities = [
  {
    name: "Delhi",
    region: "North India",
    description:
      "Capital-city travel, airport transfers and intercity road trips.",
    image: "/images/cities/Delhi.jpg",
  },
  {
    name: "Jaipur",
    region: "Rajasthan",
    description:
      "Heritage forts, city sightseeing and Rajasthan road-trip access.",
    image: "/images/cities/Jaipur.jpg",
  },
  {
    name: "Mumbai",
    region: "West India",
    description: "Business travel, airport transfers and coastal city routes.",
    image:
      "/images/cities/Mumbai.jpg",
  },
  {
    name: "Varanasi",
    region: "North India",
    description: "Pilgrimage trips, temple visits and family travel packages.",
    image:
      "/images/cities/Varanasi.jpg",
  },
  {
    name: "Bhopal",
    region: "Madhya Pradesh",
    description:
      "MP capital travel for business, family and onward connections.",
    image:
      "/images/cities/Bhopal.jpg",
  },
  {
    name: "Ujjain",
    region: "Madhya Pradesh",
    description: "Mahakaleshwar pilgrimage and nearby temple-circuit travel.",
    image:
      "/images/cities/Ujjain.jpg",
  },
];

export const mpCities = [
  "Jabalpur",
  "Bhopal",
  "Indore",
  "Ujjain",
  "Gwalior",
  "Sagar",
  "Rewa",
  "Satna",
  "Katni",
  "Seoni",
  "Chhindwara",
  "Mandla",
  "Balaghat",
  "Narsinghpur",
  "Narmadapuram",
  "Damoh",
  "Shahdol",
  "Umaria",
  "Khargone",
  "Khandwa",
];

export const seoKeywords = {
  core: [
    "jabalpur taxi service",
    "taxi service near me",
    "cab booking jabalpur",
    "24 hours taxi service jabalpur",
    "jabalpur airport taxi",
    "dumna airport pickup drop",
    "jabalpur outstation taxi",
    "local taxi service jabalpur",
    "jabalpur car rental",
    "best taxi service in jabalpur",
    "reliable taxi service jabalpur",
    "affordable taxi service jabalpur",
  ],
  groups: {
    "Core Services": [
      "Jabalpur airport pickup service",
      "Jabalpur airport drop service",
      "Jabalpur Dumna Airport taxi",
      "railway station pickup drop Jabalpur",
      "Jabalpur Junction taxi service",
      "Jabalpur local sightseeing taxi",
      "Bhedaghat taxi service",
      "Dhuandhar Falls taxi",
      "24/7 cab booking Jabalpur",
      "taxi near me in Jabalpur",
    ],
    "Outstation Routes": [
      "Jabalpur to Amarkantak Taxi Service",
      "Jabalpur to Bandhavgarh National Park Taxi Service",
      "Jabalpur to Kanha National Park Taxi Service",
      "Jabalpur to Panna National Park Taxi Service",
      "Jabalpur to Pachmarhi Hill Station Taxi Service",
      "Jabalpur to Khajuraho Taxi Service",
      "Jabalpur to Bhopal Taxi Service",
      "Jabalpur to Ujjain Mahakaleshwar Taxi Service",
      "Jabalpur to Indore Taxi Service",
      "Jabalpur to Omkareshwar Taxi Service",
      "Jabalpur to Pench National Park Taxi Service",
      "Jabalpur one way outstation taxi",
      "Jabalpur round trip cab booking",
    ],
    "Vehicle Categories": [
      "Innova Crysta taxi Jabalpur",
      "Toyota Innova Crysta cab booking",
      "Ertiga taxi Jabalpur",
      "Maruti Ertiga MUV rental Jabalpur",
      "4 seater sedan taxi Jabalpur",
      "AC sedan cab Jabalpur",
      "SUV taxi Jabalpur",
      "7 seater taxi Jabalpur",
      "Tempo Traveller Jabalpur",
      "26 seater bus Jabalpur",
      "52 seater bus Jabalpur",
    ],
    "Regional & All-India": [
      "Madhya Pradesh taxi service",
      "Madhya Pradesh car rental service",
      "MP all city taxi service",
      "Madhya Pradesh pickup drop service",
      "taxi service across Madhya Pradesh",
      "all India taxi service",
      "all India car rental with driver",
      "Jabalpur to anywhere in India taxi",
      "interstate taxi service Jabalpur",
      "best travel agency in Madhya Pradesh",
      "wedding cab booking Madhya Pradesh",
      "corporate taxi service MP",
    ],
    "Reliability & Local Intent": [
      "trusted taxi service near me",
      "reliable cab service near me",
      "best rated taxi Jabalpur",
      "professional driver taxi Jabalpur",
      "on time airport taxi Jabalpur",
      "clean car taxi service Jabalpur",
      "family safe taxi Jabalpur",
      "local driver cab booking Jabalpur",
      "WhatsApp taxi booking Jabalpur",
      "instant taxi booking Jabalpur",
    ],
  },
};
