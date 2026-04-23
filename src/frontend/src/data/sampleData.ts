import type { Destination, Tour } from "../types";

export const sampleDestinations: Destination[] = [
  {
    id: 1,
    name: "Ujjain",
    overview:
      "The sacred city of Madhya Pradesh — one of the seven holiest cities in Hinduism, where the mighty Kshipra River flows and the legendary Mahakaleshwar Jyotirlinga temple stands as a beacon of devotion. Ujjain is steeped in mythology, ancient astronomy, and timeless spirituality that touches every soul that visits.",
    highlights: [
      "Mahakaleshwar Jyotirlinga Temple",
      "Kshipra River Ghats & Aarti",
      "Kal Bhairav Temple",
      "Bade Ganeshji Ka Mandir",
      "Simhastha Kumbh Mela",
      "Vedha Shala (Ancient Observatory)",
    ],
    imageUrl: "/assets/generated/dest-ujjain.dim_800x600.jpg",
  },
  {
    id: 2,
    name: "Kedarnath",
    overview:
      "One of the twelve sacred Jyotirlingas and an integral part of the Char Dham Yatra — Kedarnath Temple stands at 3,583 metres amidst the majestic Garhwal Himalayas of Uttarakhand. The trek to this divine abode of Lord Shiva is a transformative journey through breathtaking Himalayan landscapes, glacial rivers, and serene alpine meadows.",
    highlights: [
      "Kedarnath Jyotirlinga Temple",
      "Vasuki Tal Alpine Lake",
      "Gaurikund — Origin of the Trek",
      "Chorabari Glacier & Lake",
      "Bhairavnath Temple",
      "Himalayan Sunrise & Panoramic Views",
    ],
    imageUrl: "/assets/generated/dest-kedarnath.dim_800x600.jpg",
  },
  {
    id: 3,
    name: "Badrinath",
    overview:
      "The holiest of the Char Dham pilgrimage sites — Badrinath Temple is dedicated to Lord Vishnu and sits serenely on the banks of the Alaknanda River, framed by the snow-clad Neelkanth peak. This ancient temple at 3,133 metres is the spiritual culmination of the Char Dham Yatra, drawing millions of devotees seeking divine blessings.",
    highlights: [
      "Badrinath Vishnu Temple",
      "Tapt Kund Hot Springs",
      "Brahmakapal Pitru Tarpan",
      "Mana Village — Last Indian Village",
      "Vasudhara Waterfalls Trek",
      "Neelkanth Peak Views",
    ],
    imageUrl: "/assets/generated/dest-badrinath.dim_800x600.jpg",
  },
];

export const sampleTours: Tour[] = [
  {
    id: 1,
    name: "Ujjain Spiritual Darshan Tour",
    destination: "Ujjain",
    destinationId: 1,
    duration: "4 Days / 3 Nights",
    startingPrice: 8999,
    highlights: [
      "Mahakaleshwar Bhasma Aarti at dawn",
      "Kshipra River evening aarti ceremony",
      "Kal Bhairav Temple darshan",
      "Ancient Vedha Shala observatory visit",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Ujjain — The City of Mahakal",
        description:
          "Welcome to Ujjain, one of India's holiest cities! Transfer to your hotel near the temple zone. Evening visit to the illuminated Mahakaleshwar Temple for the grand Sandhya Aarti. Witness the divine atmosphere as priests perform aarti to the sounds of conches and bells beside the Kshipra River.",
      },
      {
        day: 2,
        title: "Mahakaleshwar Bhasma Aarti & City Temples",
        description:
          "Pre-dawn wake up for the legendary Bhasma Aarti at Mahakaleshwar — performed with sacred ash at 4 AM, this is one of the most spiritually profound rituals in all of India. Afternoon visits to Kal Bhairav Temple, Bade Ganeshji ka Mandir, and Harsiddhi Mata Temple.",
      },
      {
        day: 3,
        title: "Kshipra Ghats & Simhastha Circuit",
        description:
          "Morning holy dip at Ram Ghat on the sacred Kshipra River. Visit the Vedha Shala (ancient observatory established by Raja Jai Singh II). Afternoon explore the Sandipani Ashram where Lord Krishna received his education. Evening aarti ceremony at the main ghat.",
      },
      {
        day: 4,
        title: "Mangalnath Temple & Departure",
        description:
          "Morning darshan at Mangalnath Temple — believed to be the birthplace of Mars planet. Visit Chintaman Ganesh Temple before check-out. Transfer to departure point with blessings of Mahakal in your heart.",
      },
    ],
    inclusions: [
      "3 nights accommodation near temple zone",
      "Daily breakfast and dinner",
      "Air-conditioned vehicle for all transfers",
      "Bhasma Aarti special entry pass",
      "Experienced local guide",
      "All temple entry fees",
    ],
    exclusions: [
      "Train/bus fare to and from Ujjain",
      "Personal expenses and donations",
      "Travel insurance",
      "Meals not mentioned",
    ],
    galleryImages: [
      "/assets/generated/dest-ujjain.dim_800x600.jpg",
      "/assets/generated/ujjain-1.dim_800x600.jpg",
    ],
    departureDates: [
      "Oct 15, 2026",
      "Nov 5, 2026",
      "Dec 1, 2026",
      "Jan 10, 2027",
      "Feb 5, 2027",
    ],
    groupSize: "2–20 travelers",
  },
  {
    id: 2,
    name: "Kedarnath Himalayan Yatra",
    destination: "Kedarnath",
    destinationId: 2,
    duration: "6 Days / 5 Nights",
    startingPrice: 15999,
    highlights: [
      "Kedarnath Jyotirlinga darshan at dawn",
      "Scenic trek through Himalayan meadows",
      "Gaurikund hot springs ritual bath",
      "Vasuki Tal high-altitude lake excursion",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Haridwar / Rishikesh — Gateway to Char Dham",
        description:
          "Arrive at Haridwar or Rishikesh. Transfer to hotel and freshen up. Evening attend the magnificent Ganga Aarti at Har Ki Pauri — a mesmerising spectacle of fire lamps on the holy Ganges that sets the spiritual tone for the yatra ahead.",
      },
      {
        day: 2,
        title: "Haridwar to Gaurikund",
        description:
          "Early morning departure by vehicle through the Garhwal Himalayan foothills, passing scenic Devprayag, Rudraprayag, and Sonprayag. Arrive at Gaurikund (1,982m), the base for the Kedarnath trek. Take a holy dip in the Gaurikund hot water kund before resting for tomorrow's trek.",
      },
      {
        day: 3,
        title: "Gaurikund to Kedarnath — The Sacred Trek",
        description:
          "Begin the 16-km trek from Gaurikund to Kedarnath through breathtaking Himalayan scenery — forests of birch and rhododendron, rushing mountain streams, and alpine meadows. Arrive at Kedarnath (3,583m) and check in to your lodge. Evening darshan at the ancient Kedarnath Temple.",
      },
      {
        day: 4,
        title: "Kedarnath Temple Darshan & Optional Vasuki Tal",
        description:
          "Pre-dawn darshan at the Kedarnath Jyotirlinga — one of the most powerful spiritual experiences in India. For the adventurous, optional 8-km trek to Vasuki Tal, a glacial lake at 4,135m with panoramic views of Kedarnath peak and surrounding glaciers.",
      },
      {
        day: 5,
        title: "Kedarnath to Gaurikund & Return",
        description:
          "After morning aarti and final darshan, begin descent trek back to Gaurikund. Transfer to Rishikesh or Haridwar. Evening at leisure, reflecting on the sacred journey completed.",
      },
      {
        day: 6,
        title: "Departure with Blessings",
        description:
          "Morning visit to Triveni Sangam in Devprayag — the confluence of Alaknanda and Bhagirathi rivers forming the Ganges. Transfer to departure point. Carry home the divine blessings of Kedarnath Mahadev.",
      },
    ],
    inclusions: [
      "5 nights accommodation (hotels + basic mountain lodges)",
      "Daily breakfast and dinner",
      "Vehicle transfers Haridwar to Gaurikund and return",
      "Trek support and guidance",
      "Temple darshan assistance",
      "Experienced local Himalayan guide",
      "Emergency first aid kit",
    ],
    exclusions: [
      "Train/flight to Haridwar or Rishikesh",
      "Pony/palki for trek (available on request)",
      "Personal expenses and donations",
      "Travel and medical insurance (strongly recommended)",
    ],
    galleryImages: [
      "/assets/generated/dest-kedarnath.dim_800x600.jpg",
      "/assets/generated/kedarnath-1.dim_800x600.jpg",
    ],
    departureDates: [
      "May 10, 2026",
      "Jun 1, 2026",
      "Jun 20, 2026",
      "Sep 5, 2026",
      "Oct 1, 2026",
    ],
    groupSize: "2–16 travelers",
  },
  {
    id: 3,
    name: "Badrinath Char Dham Yatra",
    destination: "Badrinath",
    destinationId: 3,
    duration: "5 Days / 4 Nights",
    startingPrice: 12999,
    highlights: [
      "Badrinath Vishnu Temple main darshan",
      "Tapt Kund sacred hot spring ritual",
      "Mana Village — last village of India",
      "Vasudhara Waterfall scenic trek",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Rishikesh — The Gateway",
        description:
          "Arrive in Rishikesh and transfer to hotel. Evening Ganga Aarti at Triveni Ghat. Preparation and briefing for the Badrinath Yatra. Overnight in Rishikesh.",
      },
      {
        day: 2,
        title: "Rishikesh to Joshimath",
        description:
          "Drive along the Alaknanda River through Devprayag, Rudraprayag, and Nandprayag — five sacred confluences of the Himalayas. Arrive at Joshimath (1,890m), the winter seat of Badrinath. Visit Narsingh Temple. Overnight in Joshimath.",
      },
      {
        day: 3,
        title: "Joshimath to Badrinath — Divine Arrival",
        description:
          "Morning drive to Badrinath (3,133m) — one of India's most sacred destinations. Check in and proceed to Tapt Kund for a ritual bath in the natural hot spring fed by sulphur springs. Main darshan at the magnificent Badrinath Temple dedicated to Lord Vishnu. Attend evening aarti.",
      },
      {
        day: 4,
        title: "Badrinath Exploration — Mana Village & Vasudhara",
        description:
          "Early morning darshan at the temple. Visit Brahmakapal for ancestral rites (pitru tarpan). Drive to Mana Village (3,214m) — the last Indian village before the Tibet border. Visit Vyasa Gufa (cave of sage Vyasa), Ganesh Gufa, and Bhimpul. Optional trek to Vasudhara Waterfall (6 km) with stunning Himalayan views.",
      },
      {
        day: 5,
        title: "Final Darshan & Return",
        description:
          "Pre-sunrise darshan at Badrinath Temple for the Abhishek aarti. Peaceful departure with divine blessings. Drive back toward Rishikesh or Haridwar via the scenic Himalayan highway.",
      },
    ],
    inclusions: [
      "4 nights accommodation (hotels and guesthouses)",
      "Daily breakfast and dinner",
      "AC vehicle for all transfers and excursions",
      "Temple darshan and pooja assistance",
      "Experienced yatra guide",
      "Mana Village guided walk",
    ],
    exclusions: [
      "Train/flight to Rishikesh or Haridwar",
      "Personal expenses and donations",
      "Special pooja arrangements",
      "Travel and medical insurance (recommended)",
    ],
    galleryImages: [
      "/assets/generated/dest-badrinath.dim_800x600.jpg",
      "/assets/generated/badrinath-1.dim_800x600.jpg",
    ],
    departureDates: [
      "May 15, 2026",
      "Jun 5, 2026",
      "Jun 25, 2026",
      "Sep 10, 2026",
      "Oct 10, 2026",
    ],
    groupSize: "2–18 travelers",
  },
];
