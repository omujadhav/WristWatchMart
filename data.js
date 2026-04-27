// ===== WATCH DATA =====
// Brands: Auriva, Kronfeld, Velante, Norvik, Lúmex
// Categories: men, women, kids

const WATCHES = [

  // ===== MEN - AURIVA =====
  { id: 1, name: "Auriva Commander", brand: "Auriva", category: "men", price: 18500,
    dial: "#1a1a2e", case: "#c0c0c0", strap: "#2c2c2c", hand: "#e0c97a", index: "#e0c97a",
    desc: "Bold pilot-style design with luminous hands and a scratch-resistant mineral glass face. Ideal for the driven professional.", water: "100m", movement: "Automatic", case_size: "44mm" },

  { id: 2, name: "Auriva Horizon", brand: "Auriva", category: "men", price: 14200,
    dial: "#0d3b5e", case: "#d4af7a", strap: "#1a0a00", hand: "#ffffff", index: "#d4af7a",
    desc: "A nautical-inspired dress watch with sunburst blue dial and gold-tone bezel. Effortless sophistication.", water: "50m", movement: "Quartz", case_size: "42mm" },

  { id: 3, name: "Auriva Stealth", brand: "Auriva", category: "men", price: 22000,
    dial: "#0a0a0a", case: "#2b2b2b", strap: "#0f0f0f", hand: "#cc4444", index: "#888888",
    desc: "Full matte-black PVD coated case with a monochromatic dial. A statement of quiet power.", water: "200m", movement: "Automatic", case_size: "45mm" },

  { id: 4, name: "Auriva Nordic", brand: "Auriva", category: "men", price: 11800,
    dial: "#e8e8e8", case: "#b8b8b8", strap: "#2d4a3e", hand: "#1c1c1c", index: "#555555",
    desc: "Clean Scandinavian minimalism with a pearlescent dial and forest-green leather strap.", water: "30m", movement: "Quartz", case_size: "40mm" },

  { id: 5, name: "Auriva Apex", brand: "Auriva", category: "men", price: 31500,
    dial: "#1b2838", case: "#a0a0a0", strap: "#1b2838", hand: "#e8c84a", index: "#e8c84a",
    desc: "Multi-function chronograph with tachymeter bezel and three subdials. Racing DNA meets daily wear.", water: "100m", movement: "Automatic", case_size: "46mm" },

  // ===== MEN - KRONFELD =====
  { id: 6, name: "Kronfeld Baron", brand: "Kronfeld", category: "men", price: 26800,
    dial: "#2c4a1e", case: "#c8b060", strap: "#3a1a00", hand: "#f5f0e0", index: "#f5f0e0",
    desc: "Heritage field watch with a textured forest-green dial and vintage-gold case. Born from precision craftsmanship.", water: "50m", movement: "Automatic", case_size: "41mm" },

  { id: 7, name: "Kronfeld Tempest", brand: "Kronfeld", category: "men", price: 19400,
    dial: "#263352", case: "#c0c0c0", strap: "#263352", hand: "#ff8c42", index: "#aaaaaa",
    desc: "Storm-chaser inspired with an orbital bezel and high-contrast orange hands.", water: "300m", movement: "Automatic", case_size: "44mm" },

  { id: 8, name: "Kronfeld Atlas", brand: "Kronfeld", category: "men", price: 15600,
    dial: "#4a2c00", case: "#d4af7a", strap: "#2a1500", hand: "#fff8e7", index: "#d4af7a",
    desc: "Rich chocolate-brown sunburst dial with a warm gold case. A traveller's companion.", water: "30m", movement: "Quartz", case_size: "42mm" },

  { id: 9, name: "Kronfeld Forge", brand: "Kronfeld", category: "men", price: 38000,
    dial: "#1a1a1a", case: "#1a1a1a", strap: "#1a1a1a", hand: "#e8e8e8", index: "#e8e8e8",
    desc: "All-black forge edition. Carbon fiber bezel, full DLC coating. Extreme precision.", water: "200m", movement: "Automatic", case_size: "47mm" },

  { id: 10, name: "Kronfeld Meridian", brand: "Kronfeld", category: "men", price: 12900,
    dial: "#f5f5f0", case: "#c8c8c8", strap: "#1c1c3a", hand: "#c8a040", index: "#aaaaaa",
    desc: "Dress-sport hybrid with a cream dial and navy strap. Transitions seamlessly from boardroom to weekend.", water: "50m", movement: "Quartz", case_size: "40mm" },

  // ===== MEN - VELANTE =====
  { id: 11, name: "Velante Crest", brand: "Velante", category: "men", price: 24500,
    dial: "#2a1a4a", case: "#9a8ab0", strap: "#1a0a2a", hand: "#d4c8e0", index: "#9a8ab0",
    desc: "Purple-slate dial with silver-tone case. Velante's signature understated luxury for the modern gentleman.", water: "50m", movement: "Automatic", case_size: "42mm" },

  { id: 12, name: "Velante Vanguard", brand: "Velante", category: "men", price: 17800,
    dial: "#003030", case: "#b8d4d0", strap: "#002525", hand: "#ffffff", index: "#b8d4d0",
    desc: "Deep teal dial with aqua-toned bezel and indices. Distinct character for those who stand apart.", water: "100m", movement: "Quartz", case_size: "43mm" },

  // ===== MEN - NORVIK =====
  { id: 13, name: "Norvik Fjord", brand: "Norvik", category: "men", price: 9800,
    dial: "#c8d8e8", case: "#9aabb8", strap: "#2a3848", hand: "#1a2838", index: "#1a2838",
    desc: "Inspired by icy Nordic fjords. Light-blue dial with gunmetal case. Simple, precise, beautiful.", water: "30m", movement: "Quartz", case_size: "39mm" },

  { id: 14, name: "Norvik Taiga", brand: "Norvik", category: "men", price: 13400,
    dial: "#1e3020", case: "#c8c8c8", strap: "#1e3020", hand: "#e8e8e8", index: "#88aa88",
    desc: "Dense forest-green dial inspired by boreal wilderness. Durable and refined.", water: "100m", movement: "Automatic", case_size: "42mm" },

  { id: 15, name: "Norvik Drift", brand: "Norvik", category: "men", price: 8200,
    dial: "#e8e4d0", case: "#b0a888", strap: "#3a3020", hand: "#2a2010", index: "#888070",
    desc: "Sand-beige military field watch. Reliable daily wearer with a timeless aesthetic.", water: "30m", movement: "Quartz", case_size: "40mm" },

  // ===== MEN - LÚMEX =====
  { id: 16, name: "Lúmex Spectra", brand: "Lúmex", category: "men", price: 29000,
    dial: "#0a0a1a", case: "#606080", strap: "#0a0a1a", hand: "#60c0ff", index: "#60c0ff",
    desc: "Space-inspired with electric-blue luminous indices and hands. Glows brilliantly in low light.", water: "200m", movement: "Automatic", case_size: "45mm" },

  { id: 17, name: "Lúmex Volt", brand: "Lúmex", category: "men", price: 16500,
    dial: "#0f1a0f", case: "#4a8060", strap: "#0f1a0f", hand: "#40ff80", index: "#40ff80",
    desc: "High-tech field watch with neon-green lume. Extreme legibility in any condition.", water: "100m", movement: "Quartz", case_size: "43mm" },

  { id: 18, name: "Lúmex Eclipse", brand: "Lúmex", category: "men", price: 34500,
    dial: "#1a0a00", case: "#a06030", strap: "#1a0a00", hand: "#ff9940", index: "#ff9940",
    desc: "Bronze-case edition with a deep burnt-orange sunburst dial. Warmth and adventure.", water: "100m", movement: "Automatic", case_size: "44mm" },

  // ===== WOMEN - AURIVA =====
  { id: 19, name: "Auriva Bloom", brand: "Auriva", category: "women", price: 12400,
    dial: "#f5e6f0", case: "#e8c0d0", strap: "#d4a0b8", hand: "#c06080", index: "#d08090",
    desc: "Soft blush-pink dial with rose-gold indices. Feminine elegance with modern precision.", water: "30m", movement: "Quartz", case_size: "36mm" },

  { id: 20, name: "Auriva Serenity", brand: "Auriva", category: "women", price: 16800,
    dial: "#e8f0f8", case: "#c8d8e8", strap: "#a8c0d8", hand: "#4a6a8a", index: "#7090a8",
    desc: "Ice-blue minimalist dial with polished silver case. Grace and calm embodied.", water: "50m", movement: "Quartz", case_size: "34mm" },

  { id: 21, name: "Auriva Pearl", brand: "Auriva", category: "women", price: 21500,
    dial: "#f8f4e8", case: "#e8d898", strap: "#c8a850", hand: "#a88030", index: "#c8a850",
    desc: "Mother-of-pearl sunburst dial with gold-tone case. Timeless luxury for any occasion.", water: "30m", movement: "Quartz", case_size: "35mm" },

  { id: 22, name: "Auriva Blossom", brand: "Auriva", category: "women", price: 9600,
    dial: "#fce8d8", case: "#e8c0a8", strap: "#c8904a", hand: "#884430", index: "#d0a080",
    desc: "Warm apricot dial with a delicate slim profile. Perfect for everyday wear.", water: "30m", movement: "Quartz", case_size: "32mm" },

  { id: 23, name: "Auriva Luna", brand: "Auriva", category: "women", price: 28000,
    dial: "#1a1a2e", case: "#c8c8d8", strap: "#1a1a2e", hand: "#c8d0e8", index: "#c8d0e8",
    desc: "Night-sky midnight dial with diamond-dust indices and crescent moonphase display.", water: "50m", movement: "Automatic", case_size: "38mm" },

  // ===== WOMEN - KRONFELD =====
  { id: 24, name: "Kronfeld Muse", brand: "Kronfeld", category: "women", price: 18200,
    dial: "#2a4830", case: "#c8d8a8", strap: "#1a2818", hand: "#e8f0d8", index: "#c8d8a8",
    desc: "Sage-green sunray dial with champagne indices. Sophisticated and nature-inspired.", water: "30m", movement: "Quartz", case_size: "36mm" },

  { id: 25, name: "Kronfeld Reverie", brand: "Kronfeld", category: "women", price: 14600,
    dial: "#f0e0f0", case: "#d8c0d8", strap: "#b890b8", hand: "#806080", index: "#b890b8",
    desc: "Dreamy lavender dial with purple-toned case. A watch that feels like a work of art.", water: "30m", movement: "Quartz", case_size: "34mm" },

  { id: 26, name: "Kronfeld Soleil", brand: "Kronfeld", category: "women", price: 23500,
    dial: "#f8e848", case: "#e8c838", strap: "#c8a020", hand: "#1a1a00", index: "#1a1a00",
    desc: "Radiant yellow sunburst dial with a bold gold case. Bright, confident, memorable.", water: "30m", movement: "Quartz", case_size: "37mm" },

  { id: 27, name: "Kronfeld Grace", brand: "Kronfeld", category: "women", price: 11400,
    dial: "#f8f8f8", case: "#e0e0e0", strap: "#d0c8b8", hand: "#606060", index: "#888888",
    desc: "Ultra-minimal white dial with a whisper-thin silver case. Pure, effortless refinement.", water: "30m", movement: "Quartz", case_size: "33mm" },

  { id: 28, name: "Kronfeld Mystic", brand: "Kronfeld", category: "women", price: 31000,
    dial: "#1e0830", case: "#9870b0", strap: "#1e0830", hand: "#d8b8f0", index: "#b890d0",
    desc: "Deep aubergine dial with violet luminous markings. Mysterious and utterly captivating.", water: "50m", movement: "Automatic", case_size: "38mm" },

  // ===== WOMEN - VELANTE =====
  { id: 29, name: "Velante Opale", brand: "Velante", category: "women", price: 26500,
    dial: "#e8f0f8", case: "#d8e8f0", strap: "#a8c0d0", hand: "#4888b0", index: "#78a8c8",
    desc: "Opal-inspired iridescent dial that shimmers under different lighting. Truly one-of-a-kind.", water: "50m", movement: "Quartz", case_size: "36mm" },

  { id: 30, name: "Velante Doux", brand: "Velante", category: "women", price: 13800,
    dial: "#f8e0e8", case: "#f0c8d8", strap: "#e8a8b8", hand: "#c04060", index: "#e87090",
    desc: "Dusky rose dial with silver-rose case. Soft femininity with a contemporary edge.", water: "30m", movement: "Quartz", case_size: "34mm" },

  { id: 31, name: "Velante Lumière", brand: "Velante", category: "women", price: 19600,
    dial: "#fff8e0", case: "#f0e090", strap: "#c8a820", hand: "#604800", index: "#806020",
    desc: "Warm champagne sunburst dial with a honey-gold case. Daytime brilliance.", water: "30m", movement: "Quartz", case_size: "35mm" },

  // ===== WOMEN - NORVIK =====
  { id: 32, name: "Norvik Hvit", brand: "Norvik", category: "women", price: 7800,
    dial: "#f0f4f8", case: "#d0d8e0", strap: "#a0aab8", hand: "#304050", index: "#5a6a78",
    desc: "Crisp white Nordic design. Practical, beautiful, and built to last decades.", water: "30m", movement: "Quartz", case_size: "33mm" },

  { id: 33, name: "Norvik Elv", brand: "Norvik", category: "women", price: 10200,
    dial: "#d0e8e0", case: "#b0c8c0", strap: "#3a5850", hand: "#1a3830", index: "#4a6860",
    desc: "Minty river-green dial with a clean silver case. Grounded, fresh, and elegant.", water: "50m", movement: "Quartz", case_size: "35mm" },

  { id: 34, name: "Norvik Snø", brand: "Norvik", category: "women", price: 8900,
    dial: "#e8ecf4", case: "#c8ccd8", strap: "#283048", hand: "#283048", index: "#4858708",
    desc: "Snow-white and cool-grey minimalist design. A refined Nordic staple.", water: "30m", movement: "Quartz", case_size: "32mm" },

  // ===== WOMEN - LÚMEX =====
  { id: 35, name: "Lúmex Aurora", brand: "Lúmex", category: "women", price: 34000,
    dial: "#0a1828", case: "#4870a0", strap: "#0a1828", hand: "#80f8c0", index: "#60c0f0",
    desc: "Aurora borealis-inspired dial. Multi-color luminous display with sapphire crystal glass.", water: "100m", movement: "Automatic", case_size: "38mm" },

  { id: 36, name: "Lúmex Stella", brand: "Lúmex", category: "women", price: 22000,
    dial: "#1a0828", case: "#9878b0", strap: "#1a0828", hand: "#f0c8ff", index: "#d0a0e8",
    desc: "Starfield-effect dial with purple-violet case. For dreamers and visionaries.", water: "50m", movement: "Quartz", case_size: "36mm" },

  { id: 37, name: "Lúmex Neon Rose", brand: "Lúmex", category: "women", price: 18500,
    dial: "#200020", case: "#c04080", strap: "#200020", hand: "#ff60c0", index: "#ff60c0",
    desc: "Neon-accented deep-plum dial. Bold, modern, unapologetic.", water: "50m", movement: "Quartz", case_size: "37mm" },

  // ===== KIDS - AURIVA =====
  { id: 38, name: "Auriva Spark", brand: "Auriva", category: "kids", price: 2800,
    dial: "#1a90e8", case: "#60c0f0", strap: "#0060c0", hand: "#ffffff", index: "#ffffff",
    desc: "Bright blue easy-to-read dial with large indices. Perfect for young learners.", water: "50m", movement: "Quartz", case_size: "36mm" },

  { id: 39, name: "Auriva Star", brand: "Auriva", category: "kids", price: 3200,
    dial: "#f8e020", case: "#f0a820", strap: "#c87800", hand: "#1a1a00", index: "#1a1a00",
    desc: "Cheerful yellow with star-shaped indices. Durable, colorful, and fun.", water: "50m", movement: "Quartz", case_size: "34mm" },

  { id: 40, name: "Auriva Rocket", brand: "Auriva", category: "kids", price: 3600,
    dial: "#e83018", case: "#f06040", strap: "#c02010", hand: "#ffffff", index: "#ffffff",
    desc: "Bright red racing dial with rocket-hand design. Adventure starts here.", water: "50m", movement: "Quartz", case_size: "36mm" },

  { id: 41, name: "Auriva Ocean", brand: "Auriva", category: "kids", price: 2600,
    dial: "#10b0d0", case: "#50d0f0", strap: "#007890", hand: "#ffffff", index: "#ffffff",
    desc: "Ocean-blue dial with friendly fish index markers. Perfect for young explorers.", water: "100m", movement: "Quartz", case_size: "34mm" },

  // ===== KIDS - KRONFELD =====
  { id: 42, name: "Kronfeld Cub", brand: "Kronfeld", category: "kids", price: 2400,
    dial: "#50b850", case: "#80d880", strap: "#2a6820", hand: "#ffffff", index: "#ffffff",
    desc: "Lively green dial with large, clear numerals. Sturdy and child-proof design.", water: "50m", movement: "Quartz", case_size: "34mm" },

  { id: 43, name: "Kronfeld Pup", brand: "Kronfeld", category: "kids", price: 2900,
    dial: "#ff9020", case: "#ffc060", strap: "#c04000", hand: "#ffffff", index: "#ffffff",
    desc: "Warm orange with cartoon-inspired numerals. Bright, readable, playful.", water: "50m", movement: "Quartz", case_size: "35mm" },

  { id: 44, name: "Kronfeld Tiny", brand: "Kronfeld", category: "kids", price: 2200,
    dial: "#f060b0", case: "#f8a0d0", strap: "#c02080", hand: "#ffffff", index: "#ffffff",
    desc: "Pink bubblegum dial for little ones. Lightweight with a soft silicone strap.", water: "30m", movement: "Quartz", case_size: "32mm" },

  { id: 45, name: "Kronfeld Scout", brand: "Kronfeld", category: "kids", price: 3100,
    dial: "#4a8040", case: "#80b870", strap: "#284820", hand: "#ffffff", index: "#f0e0a0",
    desc: "Adventure-inspired olive field watch for older kids. Tough and reliable.", water: "100m", movement: "Quartz", case_size: "37mm" },

  // ===== KIDS - VELANTE =====
  { id: 46, name: "Velante Sprout", brand: "Velante", category: "kids", price: 3400,
    dial: "#80d860", case: "#a0f880", strap: "#307820", hand: "#1a3800", index: "#1a3800",
    desc: "Lime green energetic dial with large digits. For active, creative kids.", water: "50m", movement: "Quartz", case_size: "35mm" },

  { id: 47, name: "Velante Bubble", brand: "Velante", category: "kids", price: 3000,
    dial: "#a060e0", case: "#c090f8", strap: "#6030c0", hand: "#ffffff", index: "#ffffff",
    desc: "Violet bubble-shaped case with round indices. Quirky, durable, joyful.", water: "30m", movement: "Quartz", case_size: "36mm" },

  { id: 48, name: "Velante Petal", brand: "Velante", category: "kids", price: 2700,
    dial: "#f890c0", case: "#fcc0d8", strap: "#e04890", hand: "#601040", index: "#a03060",
    desc: "Floral-pink with petal-shaped indices. Sweet and stylish for young girls.", water: "30m", movement: "Quartz", case_size: "33mm" },

  // ===== KIDS - NORVIK =====
  { id: 49, name: "Norvik Lille", brand: "Norvik", category: "kids", price: 1900,
    dial: "#e8f0f8", case: "#b0c8e0", strap: "#3858a8", hand: "#1a2868", index: "#1a2868",
    desc: "Simple and sturdy. A first watch for young time-learners. Crisp and clean.", water: "30m", movement: "Quartz", case_size: "32mm" },

  { id: 50, name: "Norvik Skog", brand: "Norvik", category: "kids", price: 2300,
    dial: "#d0e8c8", case: "#a8c890", strap: "#305030", hand: "#1a3010", index: "#3a6028",
    desc: "Soft forest-green dial. Encourages nature-curiosity from an early age.", water: "50m", movement: "Quartz", case_size: "34mm" },

  { id: 51, name: "Norvik Snille", brand: "Norvik", category: "kids", price: 2100,
    dial: "#fff0d0", case: "#f0d898", strap: "#a87820", hand: "#402800", index: "#806040",
    desc: "Warm sand-toned dial with clear Arabic numerals. Timeless simplicity.", water: "30m", movement: "Quartz", case_size: "33mm" },

  // ===== KIDS - LÚMEX =====
  { id: 52, name: "Lúmex Glow", brand: "Lúmex", category: "kids", price: 3800,
    dial: "#0a1020", case: "#3060a0", strap: "#0a1828", hand: "#60e0ff", index: "#60e0ff",
    desc: "Glows in the dark with super-bright luminous hands. Kids love it!", water: "100m", movement: "Quartz", case_size: "38mm" },

  { id: 53, name: "Lúmex Flash", brand: "Lúmex", category: "kids", price: 3500,
    dial: "#101028", case: "#5050a0", strap: "#101028", hand: "#a0a0ff", index: "#a0a0ff",
    desc: "Space-themed with constellation-dot indices. Inspires a love of science.", water: "50m", movement: "Quartz", case_size: "36mm" },

  { id: 54, name: "Lúmex Zap", brand: "Lúmex", category: "kids", price: 3200,
    dial: "#101808", case: "#409030", strap: "#102008", hand: "#80ff40", index: "#80ff40",
    desc: "Lightning bolt hands in neon green. High energy, high visibility, super fun.", water: "50m", movement: "Quartz", case_size: "37mm" },

  // Extra to hit 55+
  { id: 55, name: "Auriva Prestige", brand: "Auriva", category: "men", price: 45000,
    dial: "#0a0a18", case: "#c0a050", strap: "#1a0a00", hand: "#c0a050", index: "#c0a050",
    desc: "Flagship collection. Sapphire crystal, exhibition caseback, 80hr power reserve.", water: "100m", movement: "Automatic", case_size: "41mm" },

  { id: 56, name: "Kronfeld Legacy", brand: "Kronfeld", category: "men", price: 42000,
    dial: "#1e1a10", case: "#b89050", strap: "#1e1a10", hand: "#d4b870", index: "#d4b870",
    desc: "Limited edition heritage design. Hand-engraved caseback and premium leather strap.", water: "50m", movement: "Automatic", case_size: "40mm" },

  { id: 57, name: "Velante Aura", brand: "Velante", category: "women", price: 39000,
    dial: "#f8f0f8", case: "#e8d8e8", strap: "#c0a0c0", hand: "#806080", index: "#a880a8",
    desc: "Marquise-cut crystal indices on a pearlescent dial. The pinnacle of feminine watchmaking.", water: "30m", movement: "Automatic", case_size: "36mm" },

  { id: 58, name: "Norvik Polar", brand: "Norvik", category: "men", price: 17500,
    dial: "#d0e8f8", case: "#b0c8d8", strap: "#182838", hand: "#0a1828", index: "#304860",
    desc: "Arctic-white dial with ice-blue indices. Built for the harshest conditions.", water: "200m", movement: "Automatic", case_size: "44mm" },

  { id: 59, name: "Lúmex Prism", brand: "Lúmex", category: "women", price: 27500,
    dial: "#180828", case: "#7860a0", strap: "#180828", hand: "#f8c0ff", index: "#d090e8",
    desc: "Iridescent prismatic dial that shifts hues in light. Futuristic and feminine.", water: "50m", movement: "Automatic", case_size: "37mm" },

  { id: 60, name: "Lúmex Astro", brand: "Lúmex", category: "kids", price: 4200,
    dial: "#080820", case: "#3040b0", strap: "#080820", hand: "#ffd040", index: "#ffd040",
    desc: "Planet-themed dial with solar system indices. Space exploration starts on the wrist.", water: "50m", movement: "Quartz", case_size: "38mm" },
];