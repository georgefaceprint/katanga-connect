export const exchangeRate = 2500; // 1 USD = 2500 CDF

export const commonLocations = ["Lubumbashi", "Kolwezi", "Likasi", "Kipushi", "Kasumbalesa", "Kalemie", "Fungurume", "Mutshatsha", "Goma (via flight)"];

export const translations = {
  en: {
    portalTitle: "Katanga Destination Portal",
    portalSubtitle: "Discover the Heart of the Copperbelt. Book Stays, Tours, and Events.",
    revenueDashboard: "Revenue Dashboard",
    goToPortal: "Go to Portal",
    searchPlaceholder: "Search locations...",
    secureStay: "Secure Your Stay",
    bookService: "Book Service",
    rooms: "Rooms",
    basePrice: "Base Price",
    tourismLevy: "Tourism Tax (2%)",
    vat: "VAT (16%)",
    total: "Total",
    payCash: "Pay 80% Cash (USD) at Property",
    confirmBooking: "Confirm Booking",
    revenueTracking: "Provincial Revenue Tracking",
    totalCollected: "Total Tax Collected",
    occupancyRate: "Avg Occupancy",
    activeBeds: "Active Beds",
    compliance: "Tax Compliance",
    monthlyTrend: "Monthly Trend",
    inspectors: "Inspector Pending Approvals",
    approveFacility: "Approve Facility",
    stays: "Stays",
    activities: "Activities & Mine Tours",
    weddings: "Weddings & Events",
    restaurants: "Restaurants & Dining",
    historicalSites: "Heritage & History",
    history: "The History",
    whyVisit: "Why Visit",
    addToItinerary: "Add to Itinerary",
    distance: "Distance",
    capacity: "Capacity",
    available: "Available",
    amenities: "Amenities",
    location: "Location",
    onboardNav: "Register Business",
    submitApp: "Submit to Inspectors",
    facilitiesLabel: "Room Types & Count"
  },
  fr: {
    portalTitle: "Portail Destination Katanga",
    portalSubtitle: "Découvrez le Cœur de la Ceinture de Cuivre. Réservez Séjours, Visites et Événements.",
    revenueDashboard: "Tableau de Bord des Revenus",
    goToPortal: "Aller au Portail",
    searchPlaceholder: "Rechercher des lieux...",
    secureStay: "Sécurisez Votre Séjour",
    bookService: "Réserver un Service",
    rooms: "Chambres",
    basePrice: "Prix de Base",
    tourismLevy: "Taxe de Tourisme (2%)",
    vat: "TVA (16%)",
    total: "Total",
    payCash: "Payer 80% en Espèces (USD) sur Place",
    confirmBooking: "Confirmer la Réservation",
    revenueTracking: "Suivi des Revenus Provinciaux",
    totalCollected: "Total des Taxes Perçues",
    occupancyRate: "Taux d'Occupation",
    activeBeds: "Lits Actifs",
    compliance: "Conformité Fiscale",
    monthlyTrend: "Tendance Mensuelle",
    inspectors: "Approbations des Inspecteurs",
    approveFacility: "Approuver l'Installation",
    stays: "Séjours",
    activities: "Activités & Visites Minières",
    weddings: "Mariages & Événements",
    restaurants: "Restaurants et Restauration",
    historicalSites: "Patrimoine et Histoire",
    history: "L'Histoire",
    whyVisit: "Pourquoi Visiter",
    addToItinerary: "Ajouter à l'Itinéraire",
    distance: "Distance",
    capacity: "Capacité",
    available: "Disponible",
    amenities: "Commodités",
    location: "Emplacement",
    onboardNav: "Enregistrer une Entreprise",
    submitApp: "Soumettre aux Inspecteurs",
    facilitiesLabel: "Types de Chambres et Quantité"
  }
};

export const hotels = [
  {
    id: 1,
    name: "Pullman Lubumbashi Grand Karavia",
    city: "Lubumbashi",
    proximity: ["Kipushi", "Kasumbalesa"],
    rating: 5,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000",
    description: {
      en: "Luxurious resort overlooking Lake Kipopo. The pinnacle of Congolese hospitality.",
      fr: "Complexe luxueux avec vue sur le lac Kipopo. Le summum de l'hospitalité congolaise."
    },
    pointsOfInterest: [{ name: "Lake Kipopo", distance: "0.2 km" }, { name: "Luano Airport", distance: "15 km" }],
    rooms: [
      { id: '1a', type: 'Standard Room', capacity: 2, priceUSD: 180, available: 15, amenities: ['WiFi', 'AC', 'Lake View'] },
      { id: '1b', type: 'Executive Suite', capacity: 2, priceUSD: 350, available: 5, amenities: ['WiFi', 'AC', 'Lounge Access', 'Balcony'] },
      { id: '1c', type: 'Presidential Suite', capacity: 4, priceUSD: 1200, available: 1, amenities: ['Private Pool', 'Butler', 'Spa Access'] }
    ],
    amenities: ["Pool", "WiFi", "Gym", "Spa", "Restaurant"],
    status: "Approved"
  },
  {
    id: 2,
    name: "Novotel Lubumbashi",
    city: "Lubumbashi",
    proximity: ["Kipushi", "Likasi"],
    rating: 4,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000",
    description: {
      en: "Contemporary comfort in the city center. Ideal for business and modern travelers.",
      fr: "Confort contemporain en centre-ville. Idéal pour les affaires et les voyageurs modernes."
    },
    pointsOfInterest: [{ name: "City Center", distance: "0 km" }, { name: "Luano Airport", distance: "12 km" }, { name: "National Museum", distance: "1.5 km" }],
    rooms: [
      { id: '2a', type: 'Classic Room', capacity: 2, priceUSD: 140, available: 20, amenities: ['WiFi', 'AC', 'City View'] },
      { id: '2b', type: 'Superior Room', capacity: 3, priceUSD: 190, available: 10, amenities: ['WiFi', 'AC', 'Coffee Machine'] }
    ],
    amenities: ["WiFi", "Meeting Rooms", "Restaurant", "Bar"],
    status: "Approved"
  },
  {
    id: 3,
    name: "Aurore Hotel",
    city: "Lubumbashi",
    proximity: ["Golf", "Kipushi"],
    rating: 4,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=1000",
    description: {
      en: "A boutique hotel offering personalized services and an elegant atmosphere.",
      fr: "Un hôtel de charme offrant des services personnalisés et une atmosphère élégante."
    },
    rooms: [
      { id: '3a', type: 'Deluxe Room', capacity: 2, priceUSD: 160, available: 8, amenities: ['WiFi', 'AC', 'Mini Bar'] },
      { id: '3b', type: 'Family Suite', capacity: 4, priceUSD: 280, available: 3, amenities: ['WiFi', 'AC', 'Kitchenette'] }
    ],
    amenities: ["Garden", "Parking", "WiFi", "Fine Dining"],
    status: "Approved"
  },
  {
    id: 4,
    name: "Hotel Tumbatumba",
    city: "Kolwezi",
    proximity: ["Mutshatsha", "Fungurume"],
    rating: 4,
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1000",
    description: {
      en: "Modern comfort in the mining capital. Ideal for business travelers.",
      fr: "Confort moderne dans la capitale minière. Idéal pour les voyageurs d'affaires."
    },
    rooms: [
      { id: '4a', type: 'Miner Standard', capacity: 2, priceUSD: 130, available: 12, amenities: ['WiFi', 'AC'] },
      { id: '4b', type: 'Corporate Suite', capacity: 2, priceUSD: 220, available: 4, amenities: ['WiFi', 'Workstation', 'Meeting Room'] }
    ],
    amenities: ["WiFi", "Meeting Rooms", "Restaurant"],
    status: "Approved"
  },
  {
    id: 5,
    name: "Lake View Resort Kalemie",
    city: "Kalemie",
    proximity: ["Tanganyika"],
    rating: 4,
    image: "https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&q=80&w=1000",
    description: {
      en: "Stunning views of Lake Tanganyika. A perfect getaway for sunset lovers.",
      fr: "Vue imprenable sur le lac Tanganyika. Une escapade parfaite pour les amoureux du coucher de soleil."
    },
    rooms: [
      { id: '5a', type: 'Lakeside Cabana', capacity: 2, priceUSD: 160, available: 10, amenities: ['Lake View', 'Private Deck'] }
    ],
    amenities: ["Lake View", "Restaurant", "Boat Tours"],
    status: "Approved"
  }
];

export const activities = [
  {
    id: 101,
    name: "Kamoto Corporate Mine Tour",
    city: "Kolwezi",
    proximity: ["Mutshatsha", "Fungurume"],
    priceUSD: 150,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1000",
    description: {
      en: "Full guided tour of an active copper and cobalt mine. Includes safety gear and lunch.",
      fr: "Visite guidée complète d'une mine active de cuivre et de cobalt."
    },
    amenities: ["Safety Gear", "Lunch", "Expert Guide", "Transport"],
    status: "Approved"
  },
  {
    id: 102,
    name: "Lubumbashi Art & History Festival",
    city: "Lubumbashi",
    proximity: ["Kipushi", "Kasumbalesa"],
    priceUSD: 25,
    image: "https://images.unsplash.com/photo-1606775986241-118bd31c03e6?auto=format&fit=crop&q=80&w=1000",
    description: {
      en: "A vibrant showcase of Katangese music, art, and food.",
      fr: "Une vitrine vibrante de la musique, de l'art et de la nourriture katangaise."
    },
    amenities: ["Music", "Food Stalls", "Art Exhibits"],
    status: "Approved"
  },
  {
    id: 103,
    name: "Lubumbashi Zoo & Botanical Gardens",
    city: "Lubumbashi",
    proximity: ["City Center"],
    priceUSD: 10,
    image: "https://images.unsplash.com/photo-1544979590-37e9747eb9e6?auto=format&fit=crop&q=80&w=1000",
    description: {
      en: "Features a wide range of African wildlife, including lions and giraffes, within a 30-hectare wooded park.",
      fr: "Présente une grande variété de faune africaine, notamment des lions et des girafes, dans un parc boisé de 30 hectares."
    },
    amenities: ["Wildlife Viewing", "Botanical Garden", "Guided Tours"],
    status: "Approved"
  },
  {
    id: 104,
    name: "J.A.C.K. Primate Rehabilitation Centre",
    city: "Lubumbashi",
    proximity: ["Zoo"],
    priceUSD: 15,
    image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&q=80&w=1000",
    description: {
      en: "A sanctuary dedicated to the rehabilitation of primates confiscated in Katanga. Learn about conservation efforts.",
      fr: "Un sanctuaire dédié à la réhabilitation des primates confisqués au Katanga. Découvrez les efforts de conservation."
    },
    amenities: ["Primate Sanctuary", "Education Center", "Souvenir Shop"],
    status: "Approved"
  },
  {
    id: 105,
    name: "Kundelungu National Park",
    city: "Lubumbashi",
    proximity: ["North Katanga"],
    priceUSD: 40,
    image: "https://images.unsplash.com/photo-1433086466340-b770de85e348?auto=format&fit=crop&q=80&w=1000",
    description: {
      en: "Popular for hiking, exploring spectacular waterfalls, and observing wildlife in its natural habitat.",
      fr: "Populaire pour la randonnée, l'exploration de cascades spectaculaires et l'observation de la faune."
    },
    amenities: ["Hiking", "Waterfalls", "Camping", "Birdwatching"],
    status: "Approved"
  },
  {
    id: 106,
    name: "Stade Tout Puissant Mazembe",
    city: "Lubumbashi",
    proximity: ["Commune de Kamalondo"],
    priceUSD: 5,
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80&w=1000",
    description: {
      en: "Visit the home stadium of the world-renowned TP Mazembe football team. Tour the facilities.",
      fr: "Visitez le stade du TP Mazembe, équipe de football de renommée mondiale. Visitez les installations."
    },
    amenities: ["Stadium Tour", "Sports Shop", "Fan Zone"],
    status: "Approved"
  },
  {
    id: 107,
    name: "Kafubu River Lodge Activities",
    city: "Lubumbashi",
    proximity: ["Kafubu River"],
    priceUSD: 45,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1000",
    description: {
      en: "Offers quad biking, cycling, and fishing at the beautiful confluence of the Kiswishi and Kafubu rivers.",
      fr: "Propose du quad, du vélo et de la pêche au magnifique confluent des rivières Kiswishi et Kafubu."
    },
    amenities: ["Quad Biking", "Cycling", "Fishing", "Riverside Dining"],
    status: "Approved"
  },
  {
    id: 108,
    name: "Lake Tshangalele Fishing",
    city: "Likasi",
    proximity: ["Likasi"],
    priceUSD: 20,
    image: "https://images.unsplash.com/photo-1512466699224-9d91577a1e3f?auto=format&fit=crop&q=80&w=1000",
    description: {
      en: "Enjoy a day of peaceful fishing at Lake Tshangalele. Boat rentals available.",
      fr: "Profitez d'une journée de pêche paisible au lac Tshangalele. Location de bateaux disponible."
    },
    amenities: ["Fishing", "Boat Rental", "Picnic Area"],
    status: "Approved"
  },
  {
    id: 109,
    name: "Marché De La Rwashi",
    city: "Lubumbashi",
    proximity: ["Rwashi"],
    priceUSD: 0,
    image: "https://images.unsplash.com/photo-1488459733480-87002047a07a?auto=format&fit=crop&q=80&w=1000",
    description: {
      en: "Experience the vibrant heart of local commerce. A bustling market full of authentic Katangan life.",
      fr: "Découvrez le cœur vibrant du commerce local. Un marché animé plein de vie katangaise authentique."
    },
    amenities: ["Local Food", "Crafts", "Cultural Experience"],
    status: "Approved"
  }
];

export const weddings = [
  {
    id: 201,
    name: "Riviera Royal Gardens",
    city: "Lubumbashi",
    proximity: ["Likasi"],
    priceUSD: 5000,
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
    description: {
      en: "High-end luxury garden venue perfect for Congolese grand weddings. Capacity up to 1000 guests.",
      fr: "Lieu de jardin de luxe haut de gamme parfait pour les grands mariages congolais. Capacité jusqu'à 1000 invités."
    },
    amenities: ["Marquee Tent", "Decor", "Catering Service", "VIP Lounge"],
    status: "Approved"
  },
  {
    id: 202,
    name: "Oasis Events Hall",
    city: "Kolwezi",
    proximity: ["Fungurume"],
    priceUSD: 3500,
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=1000",
    description: {
      en: "Modern indoor hall for glittering events and receptions. State of the art lighting.",
      fr: "Salle intérieure moderne pour des événements et des réceptions étincelants."
    },
    amenities: ["AC", "Stage", "Lighting", "DJ Equip"],
    status: "Approved"
  }
];

export const restaurants = [
  {
    id: 301,
    name: "La Grotte",
    city: "Lubumbashi",
    proximity: ["City Center"],
    rating: 5,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000",
    description: {
      en: "Premium dining experience serving refined international and Congolese cuisine.",
      fr: "Expérience gastronomique premium proposant une cuisine internationale et congolaise raffinée."
    },
    priceUSD: 50,
    pointsOfInterest: [{ name: "City Center", distance: "1 km" }],
    amenities: ["Fine Dining", "Parking", "Wine Bar", "AC"],
    status: "Approved"
  },
  {
    id: 302,
    name: "Chez maman mika",
    city: "Kolwezi",
    proximity: ["Gecamines"],
    rating: 4,
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1000",
    description: {
      en: "Authentic local flavors. The absolute best Fufu and fresh tilapia.",
      fr: "Saveurs locales authentiques. Le meilleur Fufu absolu et tilapia frais."
    },
    priceUSD: 15,
    pointsOfInterest: [{ name: "Gecamines Camp", distance: "1.5 km" }],
    amenities: ["Local Cuisine", "Outdoor Seating", "Live Music"],
    status: "Approved"
  }
];

export const historicalSites = [
  {
    id: 401,
    name: "The Gecamines Chimney",
    city: "Lubumbashi",
    proximity: ["Industrial Zone"],
    rating: 5,
    image: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=1000",
    history: {
      en: "Built in the early 20th century, this towering chimney is a symbol of the region's rich industrial past and the founding of the mining giant, Gecamines.",
      fr: "Construite au début du 20ème siècle, cette imposante cheminée est un symbole du riche passé industriel de la région."
    },
    whyVisit: {
      en: "It stands as a testament to the copper boom that shaped Katanga. Perfect for photography and understanding the sheer scale of colonial-era engineering.",
      fr: "Elle témoigne du boom du cuivre qui a façonné le Katanga. Parfait pour la photographie."
    },
    status: "Approved"
  },
  {
    id: 402,
    name: "National Museum of Lubumbashi",
    city: "Lubumbashi",
    proximity: ["City Center"],
    rating: 4,
    image: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?auto=format&fit=crop&q=80&w=1000",
    history: {
      en: "Established in the colonial era, the museum houses extensive archaeological and ethnographic collections that trace the deep history of Katanga.",
      fr: "Créé à l'époque coloniale, le musée abrite de vastes collections archéologiques et ethnographiques."
    },
    whyVisit: {
      en: "View authentic traditional masks, ancient copper crosses (croisettes), and pre-colonial artifacts.",
      fr: "Découvrez d'authentiques masques traditionnels, d'anciennes croix de cuivre (croisettes) et des artefacts précoloniaux."
    },
    status: "Approved"
  },
  {
    id: 403,
    name: "Lumumba Execution Site (Shilatembo)",
    city: "Lubumbashi",
    proximity: ["Likasi Road"],
    rating: 5,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1000",
    history: {
      en: "The historic site where Patrice Lumumba, the first Prime Minister of the DRC, was executed in January 1961. It is a place of immense national and pan-African significance.",
      fr: "Le site historique où Patrice Lumumba, le premier Premier ministre de la RDC, a été exécuté en janvier 1961. C'est un lieu d'une immense importance nationale et panafricaine."
    },
    whyVisit: {
      en: "Pay homage to a national hero and reflect on Congo's journey to independence. The site features monuments and memorial plaques.",
      fr: "Rendez hommage à un héros national et réfléchissez au parcours du Congo vers l'indépendance. Le site présente des monuments et des plaques commémoratives."
    },
    status: "Approved"
  },
  {
    id: 404,
    name: "Cathédrale Saints Pierre et Paul",
    city: "Lubumbashi",
    proximity: ["City Center"],
    rating: 4,
    image: "https://images.unsplash.com/photo-1548013146-72479768b921?auto=format&fit=crop&q=80&w=1000",
    history: {
      en: "A beautiful Romanesque-style cathedral built in the 1920s during the colonial era. It is one of the most prominent landmarks in Lubumbashi.",
      fr: "Une magnifique cathédrale de style roman construite dans les années 1920 à l'époque coloniale. C'est l'un des monuments les plus importants de Lubumbashi."
    },
    whyVisit: {
      en: "Admire the stunning architecture and peaceful atmosphere. It's a key part of the city's religious and architectural heritage.",
      fr: "Admirez l'architecture époustouflante et l'atmosphère paisible. C'est un élément clé du patrimoine religieux et architectural de la ville."
    },
    status: "Approved"
  },
  {
    id: 405,
    name: "Monument de l'identité Katangaise",
    city: "Lubumbashi",
    proximity: ["City Roundabout"],
    rating: 4,
    image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&q=80&w=1000",
    history: {
      en: "An iconic monument celebrating the local identity and pride of the Katangan people, located at a bustling city intersection.",
      fr: "Un monument emblématique célébrant l'identité locale et la fierté du peuple katangais."
    },
    whyVisit: {
      en: "A must-see landmark for understanding the local spirit and catching the pulse of the city.",
      fr: "Un monument incontournable pour comprendre l'esprit local et prendre le pouls de la ville."
    },
    status: "Approved"
  },
  {
    id: 406,
    name: "Galerie d'Art Contemporain (Lubumbashi)",
    city: "Lubumbashi",
    proximity: ["City Center"],
    rating: 5,
    image: "https://images.unsplash.com/photo-1518998053502-bd6cc7f11e9b?auto=format&fit=crop&q=80&w=1000",
    history: {
      en: "Showcases a curated selection of contemporary local and regional art. A hub for modern Congolese creativity.",
      fr: "Présente une sélection d'art contemporain local et régional. Un pôle de créativité congolaise moderne."
    },
    whyVisit: {
      en: "Explore the cutting edge of Katangan art and meet local artists.",
      fr: "Explorez l'art katangais d'avant-garde et rencontrez des artistes locaux."
    },
    status: "Approved"
  },
  {
    id: 407,
    name: "Terril of Lubumbashi",
    city: "Lubumbashi",
    proximity: ["Industrial Area"],
    rating: 4,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1000",
    history: {
      en: "A massive man-made mountain of copper-cobalt slag, representing a century of industrial output from the nearby smelter.",
      fr: "Une montagne artificielle massive de scories de cuivre-cobalt, représentant un siècle de production industrielle."
    },
    whyVisit: {
      en: "The most unique skyline feature in Lubumbashi. A surreal witness to the scale of global mining operations.",
      fr: "La caractéristique la plus unique de l'horizon de Lubumbashi. Un témoin irréel de l'ampleur des opérations minières."
    },
    status: "Approved"
  }
];

export const pendingApprovals = [
  {
    id: 'p1',
    type: 'Accommodation',
    name: 'Kipushi Sunset Inn',
    city: 'Kipushi',
    licenseNumber: 'RCCM/KIP/2026',
    requestedRooms: 15,
    status: 'Pending'
  },
  {
    id: 'p2',
    type: 'Service',
    name: 'Kasumbalesa VIP Car Rentals',
    city: 'Kasumbalesa',
    licenseNumber: 'RCCM/KAS/2040',
    requestedRooms: 0,
    status: 'Pending'
  }
];

export const dashboardData = {
  totalRevenueUSD: 1450000,
  taxCollectedCDF: 72500000, 
  occupancy: "82%",
  activeBeds: 1250,
  complianceRate: "94%"
};
