export const chatbotData = {
  en: {
    welcome: "Hello, I'm Tshuma! How can I help you explore Katanga today?",
    reset: "Conversation reset. How else can I assist you?",
    noMatch: "I'm not quite sure about that. Try asking about 'tax', 'hotels', or 'stadium distance'.",
    suggestions: [
      "How far is TP Mazembe stadium?",
      "What is the tourism tax?",
      "Best hotel in Lubumbashi?",
      "Tell me about Lumumba's death place"
    ],
    intents: [
      {
        keywords: ["tax", "levy", "commission", "fee"],
        answer: "A flat 2% Provincial Tourism Tax and 16% VAT are applied to all bookings. These are automatically remitted to the Katanga Provincial Government."
      },
      {
        keywords: ["stadium", "tp mazembe", "mazembe", "football"],
        answer: "TP Mazembe Stadium is located in the Kamalondo commune, approximately 4.5 km from Lubumbashi City Center."
      },
      {
        keywords: ["zoo", "animals", "botanical"],
        answer: "The Lubumbashi Zoo is a 30-hectare park in the city center. It's one of the city's top attractions for families."
      },
      {
        keywords: ["lumumba", "shilatembo", "death", "hero"],
        answer: "Patrice Lumumba's execution site is at Shilatembo, on the road to Likasi. It's a site of national heritage."
      },
      {
        keywords: ["hotel", "stay", "accommodation"],
        answer: "The Pullman Grand Karavia and Novotel are top-tier choices in Lubumbashi. For Kolwezi, Hotel Tumbatumba is highly recommended."
      }
    ]
  },
  fr: {
    welcome: "Bonjour, je suis Tshuma ! Comment puis-je vous aider à explorer le Katanga aujourd'hui ?",
    reset: "Conversation réinitialisée. Comment puis-je vous aider d'autre ?",
    noMatch: "Je ne suis pas tout à fait sûr de cela. Essayez de poser des questions sur 'la taxe', 'les hôtels' ou 'la distance du stade'.",
    suggestions: [
      "À quelle distance se trouve le stade TP Mazembe ?",
      "Quelle est la taxe de tourisme ?",
      "Meilleur hôtel à Lubumbashi ?",
      "L'histoire de la mort de Lumumba"
    ],
    intents: [
      {
        keywords: ["taxe", "levée", "commission", "frais"],
        answer: "Une taxe de tourisme provinciale forfaitaire de 2% et une TVA de 16% s'appliquent à toutes les réservations."
      },
      {
        keywords: ["stade", "tp mazembe", "mazembe", "football"],
        answer: "Le stade TP Mazembe est situé dans la commune de Kamalondo, à environ 4,5 km du centre-ville de Lubumbashi."
      },
      {
        keywords: ["zoo", "animaux", "botanique"],
        answer: "Le zoo de Lubumbashi est un parc de 30 hectares au centre-ville. C'est l'une des principales attractions de la ville."
      },
      {
        keywords: ["lumumba", "shilatembo", "mort", "héros"],
        answer: "Le site d'exécution de Patrice Lumumba se trouve à Shilatembo, sur la route de Likasi. C'est un site du patrimoine national."
      },
      {
        keywords: ["hôtel", "séjour", "hébergement"],
        answer: "Le Pullman Grand Karavia et le Novotel sont des choix de premier ordre à Lubumbashi. Pour Kolwezi, l'Hôtel Tumbatumba est fortement recommandé."
      }
    ]
  }
};

// Simple distance calculator (mock relative to City Center)
export const getDistance = (place) => {
  const distances = {
    "zoo": "2.1 km",
    "stadium": "4.5 km",
    "tp mazembe": "4.5 km",
    "airport": "15.0 km",
    "museum": "1.5 km",
    "lake": "12.0 km",
    "kipopo": "12.0 km",
    "lumumba": "55.0 km"
  };
  
  const key = place.toLowerCase();
  for (const [k, v] of Object.entries(distances)) {
    if (key.includes(k)) return v;
  }
  return null;
};
