// lib/products.js
// ═════════════════════════════════════════════════════════════════════════════
//  HOW TO MANAGE
//  • Every product is ONE separate block below. Nothing is shared between them,
//    so editing one product never changes another.
//  • ADD a product  → copy the "BLANK TEMPLATE" block, paste it inside the
//                     `products` array (before the closing `];`), fill it in.
//  • REMOVE a product → delete its whole block ( { ... }, ).
//  • ORDER on the website = order of the blocks in this array.
//  • `slug` = the page address  (/shop-heritage/<slug>)  → must be UNIQUE,
//    lowercase, words joined with hyphens, never change it after going live.
//  • `images`: first image = card photo + big photo; the rest = thumbnails.
//    Put the files in  public/images/products/
// ═════════════════════════════════════════════════════════════════════════════

export const products = [
  // ───────────────────────────────────────────────────────────────────────────
  // 1) THE RUSTIC TIMBER DINING ENSEMBLE
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "rustic-timber-dining-ensemble",
    title: "The Rustic Timber Dining Ensemble",
    category: "Heritage Furniture | Rustic Dining",
    tagline: "A Celebration of Natural Craftsmanship",
    period: "To be confirmed",
    material: "Wood; species to be identified",
    origin: "To be confirmed",
    price: "₹80,000 - ₹2,50,000",
    images: [
      "/images/products/1.png",
      "/images/products/1.png",
      "/images/products/1.png",
      "/images/products/1.png",
      "/images/products/1.png",
      "/images/products/1.png",
      "/images/products/1.png",
    ],

    // two paragraphs shown under the enquiry button
    intro: [
      "Rooted in the beauty of natural timber, this distinctive dining ensemble brings together organic textures, sculptural forms, and rustic elegance. Its substantial tabletop and individually characterful wooden chairs create a warm, inviting setting inspired by the enduring charm of heritage interiors.",
      "Designed to be more than a functional centrepiece, it celebrates the timeless tradition of gathering around a table — where craftsmanship, conversation, and meaningful moments come together.",
    ],

    // column 1 — PRODUCT DETAILS
    details: {
      lead: "The Rustic Timber Dining Ensemble",
      paragraphs: [
        "A celebration of natural beauty and timeless craftsmanship, The Rustic Timber Dining Ensemble brings together the warmth of solid wood, organic forms, and understated rustic elegance. Featuring a substantial wooden tabletop with natural, characterful edges and complementary wooden chairs, this ensemble creates an inviting setting for memorable gatherings.",
        "The natural grain, rich textures, and earthy tones lend each piece a distinctive character, reflecting the enduring appeal of traditional woodworking. Its rustic aesthetic blends effortlessly with heritage homes, country estates, boutique retreats, and contemporary interiors seeking a touch of old-world charm. Designed to be both functional and visually striking, this dining ensemble serves as more than a place to gather – it becomes the heart of a space where stories are shared and traditions continue.",
      ],
      features: [
        "Handcrafted aesthetic with a distinctive rustic character.",
        "Substantial wooden tabletop with natural, organic edges.",
        "Complementary wooden chairs with sculptural forms.",
        "Warm timber tones and naturally expressive wood grain.",
        "Versatile styling for heritage, rustic, and contemporary interiors.",
        "A statement dining ensemble for homes, hospitality spaces, and private retreats.",
      ],
    },

    // column 2 — CARE & PRESERVATION
    care: {
      intro:
        "Thoughtfully cared for, wooden furniture can retain its character and beauty for years to come. Follow these recommendations to preserve the natural appeal of your Rustic Timber Dining Ensemble.",
      tips: [
        { title: "Regular dusting:", text: "Clean the tabletop and chairs with a soft, dry cloth to prevent dust accumulation." },
        { title: "Protect from sunlight:", text: "Avoid prolonged exposure to direct sunlight and excessive heat, which may cause fading, drying, or warping." },
        { title: "Attend to spills promptly:", text: "Wipe spills immediately with a slightly damp cloth and dry the surface thoroughly." },
        { title: "Prevent scratches and stains:", text: "Use coasters, placemats, and table runners to protect the tabletop from heat, moisture, and everyday wear." },
        { title: "Choose suitable cleaning products:", text: "Avoid abrasive cleaners, harsh chemicals, and excessive water. Use wood-care products appropriate for the specific finish." },
        { title: "Maintain structural integrity:", text: "Check joints and fastenings periodically to ensure the table and chairs remain stable." },
        { title: "Handle with care:", text: "Lift furniture when moving it rather than dragging it across floors." },
        { title: "Preserve the finish:", text: "Apply polish or wood conditioner only when suitable for the wood and its existing finish." },
      ],
      note: {
        title: "A Note on Preservation",
        text: "Natural timber develops character over time. Gentle care, a stable indoor environment, and mindful use will help preserve the ensemble’s distinctive grain, warm tones, and rustic appeal for years to come.",
      },
    },

    // column 3 — DELIVERY & SHIPPING
    delivery: {
      intro: "Each piece of furniture receives careful handling to ensure it reaches its destination in excellent condition.",
      items: [
        { title: "Estimated dispatch timeline:", text: "Approximately 3 - 4 weeks, subject to confirmation." },
        { title: "Shipping charges:", text: "Complimentary shipping is available for serviceable cities, towns, and PIN codes within the applicable delivery network." },
        { title: "Special delivery requests:", text: "For urgent enquiries or specific delivery requirements, please contact our team before placing your order." },
        { title: "Delivery arrangements:", text: "Timelines may vary depending on the destination, product availability, and transportation requirements." },
      ],
      closing:
        "For delivery confirmation and further assistance, please contact Royale Treasure with your location and product details.",
    },
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 2) THE MARQUEE DINING HALL        (SAMPLE TEXT — replace with real content)
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "marquee-dining-hall",
    title: "The Marquee Dining Hall",
    category: "Heritage Furniture | Event Dining",
    tagline: "A Celebration of Gathering",
    period: "To be confirmed",
    material: "Wood; species to be identified",
    origin: "To be confirmed",
    price: "₹1,20,000 - ₹3,50,000",
    images: [
      "/images/products/2.png",
      "/images/products/2.png",
      "/images/products/2.png",
      "/images/products/2.png",
      "/images/products/2.png",
      "/images/products/2.png",
      "/images/products/2.png",
    ],

    intro: [
      "Sample description for The Marquee Dining Hall. Replace this with the story of the piece — its character, craftsmanship, and the spaces it suits.",
      "Add a second paragraph here, or delete this line if one paragraph is enough.",
    ],

    details: {
      lead: "The Marquee Dining Hall",
      paragraphs: [
        "Sample product details. Describe the piece, its materials, and the craftsmanship behind it.",
        "Add a second details paragraph here, or delete this line.",
      ],
      features: [
        "Add the first key feature here.",
        "Add the second key feature here.",
        "Add the third key feature here.",
      ],
    },

    care: {
      intro: "Sample care introduction. Explain how to look after this piece so it lasts for years to come.",
      tips: [
        { title: "Regular dusting:", text: "Clean with a soft, dry cloth to prevent dust accumulation." },
        { title: "Protect from sunlight:", text: "Avoid prolonged exposure to direct sunlight and excessive heat." },
        { title: "Handle with care:", text: "Lift furniture when moving it rather than dragging it across floors." },
      ],
      note: {
        title: "A Note on Preservation",
        text: "Sample closing note about caring for this piece over time.",
      },
    },

    delivery: {
      intro: "Each piece of furniture receives careful handling to ensure it reaches its destination in excellent condition.",
      items: [
        { title: "Estimated dispatch timeline:", text: "Approximately 3 - 4 weeks, subject to confirmation." },
        { title: "Shipping charges:", text: "Complimentary shipping is available for serviceable cities, towns, and PIN codes within the applicable delivery network." },
        { title: "Special delivery requests:", text: "For urgent enquiries or specific delivery requirements, please contact our team before placing your order." },
        { title: "Delivery arrangements:", text: "Timelines may vary depending on the destination, product availability, and transportation requirements." },
      ],
      closing:
        "For delivery confirmation and further assistance, please contact Royale Treasure with your location and product details.",
    },
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 3) THE STAINED GLASS LOUNGE       (SAMPLE TEXT — replace with real content)
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "stained-glass-lounge",
    title: "The Stained Glass Lounge",
    category: "Heritage Furniture | Living Room",
    tagline: "A Study in Colour and Craft",
    period: "To be confirmed",
    material: "Wood and glass; details to be identified",
    origin: "To be confirmed",
    price: "₹95,000 - ₹2,80,000",
    images: [
      "/images/products/3.png",
      "/images/products/3.png",
      "/images/products/3.png",
      "/images/products/3.png",
      "/images/products/3.png",
      "/images/products/3.png",
      "/images/products/3.png",
    ],

    intro: [
      "Sample description for The Stained Glass Lounge. Replace this with the story of the piece — its character, craftsmanship, and the spaces it suits.",
      "Add a second paragraph here, or delete this line if one paragraph is enough.",
    ],

    details: {
      lead: "The Stained Glass Lounge",
      paragraphs: [
        "Sample product details. Describe the piece, its materials, and the craftsmanship behind it.",
        "Add a second details paragraph here, or delete this line.",
      ],
      features: [
        "Add the first key feature here.",
        "Add the second key feature here.",
        "Add the third key feature here.",
      ],
    },

    care: {
      intro: "Sample care introduction. Explain how to look after this piece so it lasts for years to come.",
      tips: [
        { title: "Regular dusting:", text: "Clean with a soft, dry cloth to prevent dust accumulation." },
        { title: "Protect from sunlight:", text: "Avoid prolonged exposure to direct sunlight and excessive heat." },
        { title: "Handle with care:", text: "Lift furniture when moving it rather than dragging it across floors." },
      ],
      note: {
        title: "A Note on Preservation",
        text: "Sample closing note about caring for this piece over time.",
      },
    },

    delivery: {
      intro: "Each piece of furniture receives careful handling to ensure it reaches its destination in excellent condition.",
      items: [
        { title: "Estimated dispatch timeline:", text: "Approximately 3 - 4 weeks, subject to confirmation." },
        { title: "Shipping charges:", text: "Complimentary shipping is available for serviceable cities, towns, and PIN codes within the applicable delivery network." },
        { title: "Special delivery requests:", text: "For urgent enquiries or specific delivery requirements, please contact our team before placing your order." },
        { title: "Delivery arrangements:", text: "Timelines may vary depending on the destination, product availability, and transportation requirements." },
      ],
      closing:
        "For delivery confirmation and further assistance, please contact Royale Treasure with your location and product details.",
    },
  },

   {
    slug: "rustic-timber-dining-ensemble-collection",
    title: "The Rustic Timber Dining Ensemble",
    category: "Heritage Furniture | Rustic Dining",
    tagline: "A Celebration of Natural Craftsmanship",
    period: "To be confirmed",
    material: "Wood; species to be identified",
    origin: "To be confirmed",
    price: "₹80,000 - ₹2,50,000",
    images: [
      "/images/products/1.png",
      "/images/products/1.png",
      "/images/products/1.png",
      "/images/products/1.png",
      "/images/products/1.png",
      "/images/products/1.png",
      "/images/products/1.png",
    ],

    // two paragraphs shown under the enquiry button
    intro: [
      "Rooted in the beauty of natural timber, this distinctive dining ensemble brings together organic textures, sculptural forms, and rustic elegance. Its substantial tabletop and individually characterful wooden chairs create a warm, inviting setting inspired by the enduring charm of heritage interiors.",
      "Designed to be more than a functional centrepiece, it celebrates the timeless tradition of gathering around a table — where craftsmanship, conversation, and meaningful moments come together.",
    ],

    // column 1 — PRODUCT DETAILS
    details: {
      lead: "The Rustic Timber Dining Ensemble",
      paragraphs: [
        "A celebration of natural beauty and timeless craftsmanship, The Rustic Timber Dining Ensemble brings together the warmth of solid wood, organic forms, and understated rustic elegance. Featuring a substantial wooden tabletop with natural, characterful edges and complementary wooden chairs, this ensemble creates an inviting setting for memorable gatherings.",
        "The natural grain, rich textures, and earthy tones lend each piece a distinctive character, reflecting the enduring appeal of traditional woodworking. Its rustic aesthetic blends effortlessly with heritage homes, country estates, boutique retreats, and contemporary interiors seeking a touch of old-world charm. Designed to be both functional and visually striking, this dining ensemble serves as more than a place to gather – it becomes the heart of a space where stories are shared and traditions continue.",
      ],
      features: [
        "Handcrafted aesthetic with a distinctive rustic character.",
        "Substantial wooden tabletop with natural, organic edges.",
        "Complementary wooden chairs with sculptural forms.",
        "Warm timber tones and naturally expressive wood grain.",
        "Versatile styling for heritage, rustic, and contemporary interiors.",
        "A statement dining ensemble for homes, hospitality spaces, and private retreats.",
      ],
    },

    // column 2 — CARE & PRESERVATION
    care: {
      intro:
        "Thoughtfully cared for, wooden furniture can retain its character and beauty for years to come. Follow these recommendations to preserve the natural appeal of your Rustic Timber Dining Ensemble.",
      tips: [
        { title: "Regular dusting:", text: "Clean the tabletop and chairs with a soft, dry cloth to prevent dust accumulation." },
        { title: "Protect from sunlight:", text: "Avoid prolonged exposure to direct sunlight and excessive heat, which may cause fading, drying, or warping." },
        { title: "Attend to spills promptly:", text: "Wipe spills immediately with a slightly damp cloth and dry the surface thoroughly." },
        { title: "Prevent scratches and stains:", text: "Use coasters, placemats, and table runners to protect the tabletop from heat, moisture, and everyday wear." },
        { title: "Choose suitable cleaning products:", text: "Avoid abrasive cleaners, harsh chemicals, and excessive water. Use wood-care products appropriate for the specific finish." },
        { title: "Maintain structural integrity:", text: "Check joints and fastenings periodically to ensure the table and chairs remain stable." },
        { title: "Handle with care:", text: "Lift furniture when moving it rather than dragging it across floors." },
        { title: "Preserve the finish:", text: "Apply polish or wood conditioner only when suitable for the wood and its existing finish." },
      ],
      note: {
        title: "A Note on Preservation",
        text: "Natural timber develops character over time. Gentle care, a stable indoor environment, and mindful use will help preserve the ensemble’s distinctive grain, warm tones, and rustic appeal for years to come.",
      },
    },

    // column 3 — DELIVERY & SHIPPING
    delivery: {
      intro: "Each piece of furniture receives careful handling to ensure it reaches its destination in excellent condition.",
      items: [
        { title: "Estimated dispatch timeline:", text: "Approximately 3 - 4 weeks, subject to confirmation." },
        { title: "Shipping charges:", text: "Complimentary shipping is available for serviceable cities, towns, and PIN codes within the applicable delivery network." },
        { title: "Special delivery requests:", text: "For urgent enquiries or specific delivery requirements, please contact our team before placing your order." },
        { title: "Delivery arrangements:", text: "Timelines may vary depending on the destination, product availability, and transportation requirements." },
      ],
      closing:
        "For delivery confirmation and further assistance, please contact Royale Treasure with your location and product details.",
    },
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 2) THE MARQUEE DINING HALL        (SAMPLE TEXT — replace with real content)
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "marquee-dining-hall-collection",
    title: "The Marquee Dining Hall",
    category: "Heritage Furniture | Event Dining",
    tagline: "A Celebration of Gathering",
    period: "To be confirmed",
    material: "Wood; species to be identified",
    origin: "To be confirmed",
    price: "₹1,20,000 - ₹3,50,000",
    images: [
      "/images/products/2.png",
      "/images/products/2.png",
      "/images/products/2.png",
      "/images/products/2.png",
      "/images/products/2.png",
      "/images/products/2.png",
      "/images/products/2.png",
    ],

    intro: [
      "Sample description for The Marquee Dining Hall. Replace this with the story of the piece — its character, craftsmanship, and the spaces it suits.",
      "Add a second paragraph here, or delete this line if one paragraph is enough.",
    ],

    details: {
      lead: "The Marquee Dining Hall",
      paragraphs: [
        "Sample product details. Describe the piece, its materials, and the craftsmanship behind it.",
        "Add a second details paragraph here, or delete this line.",
      ],
      features: [
        "Add the first key feature here.",
        "Add the second key feature here.",
        "Add the third key feature here.",
      ],
    },

    care: {
      intro: "Sample care introduction. Explain how to look after this piece so it lasts for years to come.",
      tips: [
        { title: "Regular dusting:", text: "Clean with a soft, dry cloth to prevent dust accumulation." },
        { title: "Protect from sunlight:", text: "Avoid prolonged exposure to direct sunlight and excessive heat." },
        { title: "Handle with care:", text: "Lift furniture when moving it rather than dragging it across floors." },
      ],
      note: {
        title: "A Note on Preservation",
        text: "Sample closing note about caring for this piece over time.",
      },
    },

    delivery: {
      intro: "Each piece of furniture receives careful handling to ensure it reaches its destination in excellent condition.",
      items: [
        { title: "Estimated dispatch timeline:", text: "Approximately 3 - 4 weeks, subject to confirmation." },
        { title: "Shipping charges:", text: "Complimentary shipping is available for serviceable cities, towns, and PIN codes within the applicable delivery network." },
        { title: "Special delivery requests:", text: "For urgent enquiries or specific delivery requirements, please contact our team before placing your order." },
        { title: "Delivery arrangements:", text: "Timelines may vary depending on the destination, product availability, and transportation requirements." },
      ],
      closing:
        "For delivery confirmation and further assistance, please contact Royale Treasure with your location and product details.",
    },
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 3) THE STAINED GLASS LOUNGE       (SAMPLE TEXT — replace with real content)
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "stained-glass-lounge-collection",
    title: "The Stained Glass Lounge",
    category: "Heritage Furniture | Living Room",
    tagline: "A Study in Colour and Craft",
    period: "To be confirmed",
    material: "Wood and glass; details to be identified",
    origin: "To be confirmed",
    price: "₹95,000 - ₹2,80,000",
    images: [
      "/images/products/3.png",
      "/images/products/3.png",
      "/images/products/3.png",
      "/images/products/3.png",
      "/images/products/3.png",
      "/images/products/3.png",
      "/images/products/3.png",
    ],

    intro: [
      "Sample description for The Stained Glass Lounge. Replace this with the story of the piece — its character, craftsmanship, and the spaces it suits.",
      "Add a second paragraph here, or delete this line if one paragraph is enough.",
    ],

    details: {
      lead: "The Stained Glass Lounge",
      paragraphs: [
        "Sample product details. Describe the piece, its materials, and the craftsmanship behind it.",
        "Add a second details paragraph here, or delete this line.",
      ],
      features: [
        "Add the first key feature here.",
        "Add the second key feature here.",
        "Add the third key feature here.",
      ],
    },

    care: {
      intro: "Sample care introduction. Explain how to look after this piece so it lasts for years to come.",
      tips: [
        { title: "Regular dusting:", text: "Clean with a soft, dry cloth to prevent dust accumulation." },
        { title: "Protect from sunlight:", text: "Avoid prolonged exposure to direct sunlight and excessive heat." },
        { title: "Handle with care:", text: "Lift furniture when moving it rather than dragging it across floors." },
      ],
      note: {
        title: "A Note on Preservation",
        text: "Sample closing note about caring for this piece over time.",
      },
    },

    delivery: {
      intro: "Each piece of furniture receives careful handling to ensure it reaches its destination in excellent condition.",
      items: [
        { title: "Estimated dispatch timeline:", text: "Approximately 3 - 4 weeks, subject to confirmation." },
        { title: "Shipping charges:", text: "Complimentary shipping is available for serviceable cities, towns, and PIN codes within the applicable delivery network." },
        { title: "Special delivery requests:", text: "For urgent enquiries or specific delivery requirements, please contact our team before placing your order." },
        { title: "Delivery arrangements:", text: "Timelines may vary depending on the destination, product availability, and transportation requirements." },
      ],
      closing:
        "For delivery confirmation and further assistance, please contact Royale Treasure with your location and product details.",
    },
  },

   {
    slug: "rustic-timber-dining-ensemble",
    title: "The Rustic Timber Dining Ensemble",
    category: "Heritage Furniture | Rustic Dining",
    tagline: "A Celebration of Natural Craftsmanship",
    period: "To be confirmed",
    material: "Wood; species to be identified",
    origin: "To be confirmed",
    price: "₹80,000 - ₹2,50,000",
    images: [
      "/images/products/1.png",
      "/images/products/1.png",
      "/images/products/1.png",
      "/images/products/1.png",
      "/images/products/1.png",
      "/images/products/1.png",
      "/images/products/1.png",
    ],

    // two paragraphs shown under the enquiry button
    intro: [
      "Rooted in the beauty of natural timber, this distinctive dining ensemble brings together organic textures, sculptural forms, and rustic elegance. Its substantial tabletop and individually characterful wooden chairs create a warm, inviting setting inspired by the enduring charm of heritage interiors.",
      "Designed to be more than a functional centrepiece, it celebrates the timeless tradition of gathering around a table — where craftsmanship, conversation, and meaningful moments come together.",
    ],

    // column 1 — PRODUCT DETAILS
    details: {
      lead: "The Rustic Timber Dining Ensemble",
      paragraphs: [
        "A celebration of natural beauty and timeless craftsmanship, The Rustic Timber Dining Ensemble brings together the warmth of solid wood, organic forms, and understated rustic elegance. Featuring a substantial wooden tabletop with natural, characterful edges and complementary wooden chairs, this ensemble creates an inviting setting for memorable gatherings.",
        "The natural grain, rich textures, and earthy tones lend each piece a distinctive character, reflecting the enduring appeal of traditional woodworking. Its rustic aesthetic blends effortlessly with heritage homes, country estates, boutique retreats, and contemporary interiors seeking a touch of old-world charm. Designed to be both functional and visually striking, this dining ensemble serves as more than a place to gather – it becomes the heart of a space where stories are shared and traditions continue.",
      ],
      features: [
        "Handcrafted aesthetic with a distinctive rustic character.",
        "Substantial wooden tabletop with natural, organic edges.",
        "Complementary wooden chairs with sculptural forms.",
        "Warm timber tones and naturally expressive wood grain.",
        "Versatile styling for heritage, rustic, and contemporary interiors.",
        "A statement dining ensemble for homes, hospitality spaces, and private retreats.",
      ],
    },

    // column 2 — CARE & PRESERVATION
    care: {
      intro:
        "Thoughtfully cared for, wooden furniture can retain its character and beauty for years to come. Follow these recommendations to preserve the natural appeal of your Rustic Timber Dining Ensemble.",
      tips: [
        { title: "Regular dusting:", text: "Clean the tabletop and chairs with a soft, dry cloth to prevent dust accumulation." },
        { title: "Protect from sunlight:", text: "Avoid prolonged exposure to direct sunlight and excessive heat, which may cause fading, drying, or warping." },
        { title: "Attend to spills promptly:", text: "Wipe spills immediately with a slightly damp cloth and dry the surface thoroughly." },
        { title: "Prevent scratches and stains:", text: "Use coasters, placemats, and table runners to protect the tabletop from heat, moisture, and everyday wear." },
        { title: "Choose suitable cleaning products:", text: "Avoid abrasive cleaners, harsh chemicals, and excessive water. Use wood-care products appropriate for the specific finish." },
        { title: "Maintain structural integrity:", text: "Check joints and fastenings periodically to ensure the table and chairs remain stable." },
        { title: "Handle with care:", text: "Lift furniture when moving it rather than dragging it across floors." },
        { title: "Preserve the finish:", text: "Apply polish or wood conditioner only when suitable for the wood and its existing finish." },
      ],
      note: {
        title: "A Note on Preservation",
        text: "Natural timber develops character over time. Gentle care, a stable indoor environment, and mindful use will help preserve the ensemble’s distinctive grain, warm tones, and rustic appeal for years to come.",
      },
    },

    // column 3 — DELIVERY & SHIPPING
    delivery: {
      intro: "Each piece of furniture receives careful handling to ensure it reaches its destination in excellent condition.",
      items: [
        { title: "Estimated dispatch timeline:", text: "Approximately 3 - 4 weeks, subject to confirmation." },
        { title: "Shipping charges:", text: "Complimentary shipping is available for serviceable cities, towns, and PIN codes within the applicable delivery network." },
        { title: "Special delivery requests:", text: "For urgent enquiries or specific delivery requirements, please contact our team before placing your order." },
        { title: "Delivery arrangements:", text: "Timelines may vary depending on the destination, product availability, and transportation requirements." },
      ],
      closing:
        "For delivery confirmation and further assistance, please contact Royale Treasure with your location and product details.",
    },
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 2) THE MARQUEE DINING HALL        (SAMPLE TEXT — replace with real content)
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "marquee-dining-hall",
    title: "The Marquee Dining Hall",
    category: "Heritage Furniture | Event Dining",
    tagline: "A Celebration of Gathering",
    period: "To be confirmed",
    material: "Wood; species to be identified",
    origin: "To be confirmed",
    price: "₹1,20,000 - ₹3,50,000",
    images: [
      "/images/products/2.png",
      "/images/products/2.png",
      "/images/products/2.png",
      "/images/products/2.png",
      "/images/products/2.png",
      "/images/products/2.png",
      "/images/products/2.png",
    ],

    intro: [
      "Sample description for The Marquee Dining Hall. Replace this with the story of the piece — its character, craftsmanship, and the spaces it suits.",
      "Add a second paragraph here, or delete this line if one paragraph is enough.",
    ],

    details: {
      lead: "The Marquee Dining Hall",
      paragraphs: [
        "Sample product details. Describe the piece, its materials, and the craftsmanship behind it.",
        "Add a second details paragraph here, or delete this line.",
      ],
      features: [
        "Add the first key feature here.",
        "Add the second key feature here.",
        "Add the third key feature here.",
      ],
    },

    care: {
      intro: "Sample care introduction. Explain how to look after this piece so it lasts for years to come.",
      tips: [
        { title: "Regular dusting:", text: "Clean with a soft, dry cloth to prevent dust accumulation." },
        { title: "Protect from sunlight:", text: "Avoid prolonged exposure to direct sunlight and excessive heat." },
        { title: "Handle with care:", text: "Lift furniture when moving it rather than dragging it across floors." },
      ],
      note: {
        title: "A Note on Preservation",
        text: "Sample closing note about caring for this piece over time.",
      },
    },

    delivery: {
      intro: "Each piece of furniture receives careful handling to ensure it reaches its destination in excellent condition.",
      items: [
        { title: "Estimated dispatch timeline:", text: "Approximately 3 - 4 weeks, subject to confirmation." },
        { title: "Shipping charges:", text: "Complimentary shipping is available for serviceable cities, towns, and PIN codes within the applicable delivery network." },
        { title: "Special delivery requests:", text: "For urgent enquiries or specific delivery requirements, please contact our team before placing your order." },
        { title: "Delivery arrangements:", text: "Timelines may vary depending on the destination, product availability, and transportation requirements." },
      ],
      closing:
        "For delivery confirmation and further assistance, please contact Royale Treasure with your location and product details.",
    },
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 3) THE STAINED GLASS LOUNGE       (SAMPLE TEXT — replace with real content)
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "stained-glass-lounge",
    title: "The Stained Glass Lounge",
    category: "Heritage Furniture | Living Room",
    tagline: "A Study in Colour and Craft",
    period: "To be confirmed",
    material: "Wood and glass; details to be identified",
    origin: "To be confirmed",
    price: "₹95,000 - ₹2,80,000",
    images: [
      "/images/products/3.png",
      "/images/products/3.png",
      "/images/products/3.png",
      "/images/products/3.png",
      "/images/products/3.png",
      "/images/products/3.png",
      "/images/products/3.png",
    ],

    intro: [
      "Sample description for The Stained Glass Lounge. Replace this with the story of the piece — its character, craftsmanship, and the spaces it suits.",
      "Add a second paragraph here, or delete this line if one paragraph is enough.",
    ],

    details: {
      lead: "The Stained Glass Lounge",
      paragraphs: [
        "Sample product details. Describe the piece, its materials, and the craftsmanship behind it.",
        "Add a second details paragraph here, or delete this line.",
      ],
      features: [
        "Add the first key feature here.",
        "Add the second key feature here.",
        "Add the third key feature here.",
      ],
    },

    care: {
      intro: "Sample care introduction. Explain how to look after this piece so it lasts for years to come.",
      tips: [
        { title: "Regular dusting:", text: "Clean with a soft, dry cloth to prevent dust accumulation." },
        { title: "Protect from sunlight:", text: "Avoid prolonged exposure to direct sunlight and excessive heat." },
        { title: "Handle with care:", text: "Lift furniture when moving it rather than dragging it across floors." },
      ],
      note: {
        title: "A Note on Preservation",
        text: "Sample closing note about caring for this piece over time.",
      },
    },

    delivery: {
      intro: "Each piece of furniture receives careful handling to ensure it reaches its destination in excellent condition.",
      items: [
        { title: "Estimated dispatch timeline:", text: "Approximately 3 - 4 weeks, subject to confirmation." },
        { title: "Shipping charges:", text: "Complimentary shipping is available for serviceable cities, towns, and PIN codes within the applicable delivery network." },
        { title: "Special delivery requests:", text: "For urgent enquiries or specific delivery requirements, please contact our team before placing your order." },
        { title: "Delivery arrangements:", text: "Timelines may vary depending on the destination, product availability, and transportation requirements." },
      ],
      closing:
        "For delivery confirmation and further assistance, please contact Royale Treasure with your location and product details.",
    },
  },

  // ───────────────────────────────────────────────────────────────────────────
  // ▼▼▼  BLANK TEMPLATE — copy this block to add a new product  ▼▼▼
  //      (remove the // at the start of every line, then fill it in)
  // ───────────────────────────────────────────────────────────────────────────
  // {
  //   slug: "new-product-name",
  //   title: "New Product Name",
  //   category: "Heritage Furniture | Category",
  //   tagline: "One line under the category",
  //   period: "To be confirmed",
  //   material: "To be confirmed",
  //   origin: "To be confirmed",
  //   price: "₹00,000 - ₹00,000",
  //   images: ["/images/products/new-product-1.jpg"],
  //
  //   intro: ["Paragraph 1.", "Paragraph 2."],
  //
  //   details: {
  //     lead: "New Product Name",
  //     paragraphs: ["Paragraph 1.", "Paragraph 2."],
  //     features: ["Feature 1.", "Feature 2."],
  //   },
  //
  //   care: {
  //     intro: "Care introduction.",
  //     tips: [{ title: "Tip title:", text: "Tip text." }],
  //     note: { title: "A Note on Preservation", text: "Closing note." },
  //   },
  //
  //   delivery: {
  //     intro: "Delivery introduction.",
  //     items: [{ title: "Estimated dispatch timeline:", text: "Approximately 3 - 4 weeks." }],
  //     closing: "Closing delivery line.",
  //   },
  // },
];

// ─────────────────────────────────────────────────────────────────────────────
// Helpers used by the pages (no need to edit below this line)
// ─────────────────────────────────────────────────────────────────────────────
export const getProduct = (slug) => products.find((p) => p.slug === slug);
export const getRelated = (slug, n = 3) => products.filter((p) => p.slug !== slug).slice(0, n);

// Dev-only safety net: warns in the console if a block is incomplete
if (process.env.NODE_ENV === "development") {
  const required = ["slug", "title", "category", "tagline", "period", "material", "origin", "price", "images", "intro", "details", "care", "delivery"];
  const seen = new Set();
  products.forEach((p, i) => {
    const name = p.title || `product #${i + 1}`;
    required.forEach((k) => {
      if (p[k] === undefined || p[k] === null || p[k] === "") console.warn(`[products.js] "${name}" is missing: ${k}`);
    });
    if (p.slug && !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(p.slug)) console.warn(`[products.js] "${name}": slug should be lowercase-with-hyphens`);
    if (p.slug && seen.has(p.slug)) console.warn(`[products.js] duplicate slug: ${p.slug}`);
    seen.add(p.slug);
    if (Array.isArray(p.images) && p.images.length === 0) console.warn(`[products.js] "${name}" has no images`);
  });
}