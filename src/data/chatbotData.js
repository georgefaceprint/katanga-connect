export const chatbotData = {
  en: {
    welcome: "Hello, I'm Tshuma! How can I help you explore Katanga today?",
    reset: "Conversation reset. How else can I assist you?",
    noMatch: "I'm not quite sure about that. Try asking about 'tax', 'hotels', or 'stadium distance'.",
    suggestions: [
      "How can I list my business?",
      "Weekend getaway ideas?",
      "Why is it called 'Copperbelt'?",
      "Tourism tax and VAT?",
      "Distance to Mazembe Stadium?"
    ],
    intents: [
      {
        keywords: ["tax", "levy", "commission", "fee", "vat", "tva"],
        answer: "A flat 2% Provincial Tourism Tax and 16% VAT apply. Our portal handles automatic remittance to the Katanga Provincial Government to ensure your business remains 100% compliant."
      },
      {
        keywords: ["join", "onboard", "register", "list my", "business", "provider"],
        answer: "Welcome partner! Use the 'Register Business' button in the header. We accept Hotels, Restaurants, Tour Operators, and Car Hire. Benefits include government certification, automated tax handling, and global visibility."
      },
      {
        keywords: ["holiday", "vacation", "weekend", "getaway", "visit", "trip"],
        answer: "For a weekend, try the Kipopo Lake for relaxation or the Upemba National Park for wildlife. If you love history, a 'Mining Route' tour in Kolwezi is a must-see journey through the world's richest cobalt deposits!"
      },
      {
        keywords: ["fact", "trivia", "history", "copper", "name", "origin"],
        answer: "Fun Fact: Katanga produces over 60% of the world's cobalt! The name 'Katanga' comes from 'M'siri's' kingdom. The region has been the economic heartbeat of Central Africa for over a century."
      },
      {
        keywords: ["stadium", "tp mazembe", "mazembe", "football", "soccer"],
        answer: "The iconic TP Mazembe Stadium is in Kamalondo. It's the home of the 'Ravens' and a symbol of Katangan pride. It's about 4.5km from the city center."
      },
      {
        keywords: ["zoo", "animals", "plants", "nature"],
        answer: "The Lubumbashi Zoo is perfect for families. It houses lions, primates, and a diverse botanical collection. It's a green lung right in the middle of our copper city."
      }
    ]
  },
  fr: {
    welcome: "Bonjour, je suis Tshuma ! Je suis votre concierge Katangais. Comment puis-je vous aider ?",
    reset: "Conversation réinitialisée. Prêt pour une nouvelle aventure ?",
    noMatch: "Je n'ai pas encore cette information. Essayez de demander 'comment rejoindre', 'idées vacances' ou 'faits amusants'.",
    suggestions: [
      "Comment lister mon entreprise ?",
      "Idées pour un week-end ?",
      "Pourquoi le 'Copperbelt' ?",
      "Taxe de tourisme et TVA ?",
      "Distance au Stade Mazembe ?"
    ],
    intents: [
      {
        keywords: ["taxe", "frais", "tva", "commission", "redevance"],
        answer: "Une taxe de tourisme provinciale de 2% et une TVA de 16% s'appliquent. Notre portail gère automatiquement le versement au Gouvernement Provincial du Katanga."
      },
      {
        keywords: ["rejoindre", "enregistrer", "inscrire", "entreprise", "prestataire", "lister"],
        answer: "Bienvenue partenaire ! Utilisez le bouton 'Enregistrer une Entreprise'. Nous acceptons les Hôtels, Restos, et Agences. Les avantages incluent la certification gouvernementale et une visibilité mondiale."
      },
      {
        keywords: ["vacances", "weekend", "séjour", "visiter", "voyage", "idées"],
        answer: "Pour un week-end, essayez le Lac de Kipopo pour la détente ou le Parc National de l'Upemba. Pour les passionnés d'histoire, un tour de la 'Route des Mines' à Kolwezi est incontournable !"
      },
      {
        keywords: ["fait", "histoire", "cuivre", "nom", "origine", "culture"],
        answer: "Le saviez-vous ? Le Katanga produit plus de 60% du cobalt mondial ! Le nom vient du royaume de M'siri. C'est le poumon économique de l'Afrique Centrale depuis plus d'un siècle."
      },
      {
        keywords: ["stade", "tp mazembe", "mazembe", "football", "sport"],
        answer: "L'emblématique stade TP Mazembe se trouve à Kamalondo. C'est la maison des 'Corbeaux' et un symbole de la fierté Katangaise. À 4,5 km du centre-ville."
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
