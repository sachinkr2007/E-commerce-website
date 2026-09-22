export const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Audio",
  "Wearables",
  "Accessories",
  "Home & Office"
];

export const products = [
  {
    id: 1,
    name: "Sony WH-1000XM5 Noise-Canceling Headphones",
    category: "Audio",
    price: 29990,
    originalPrice: 34990,
    discount: 14,
    rating: 4.8,
    reviewsCount: 1420,
    stock: 12,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    description: "Industry-leading noise cancellation with two processors and 8 microphones for unprecedented sound clarity and crystal-clear hands-free calling.",
    features: [
      "Up to 30-hour battery life with quick charging",
      "Industry-leading active noise cancellation (ANC)",
      "Ultra-comfortable lightweight leather design",
      "Multipoint connection to switch between devices"
    ],
    brand: "Sony",
    isFeatured: true
  },
  {
    id: 2,
    name: "Apple Watch Series 9 GPS 45mm",
    category: "Wearables",
    price: 41900,
    originalPrice: 44900,
    discount: 7,
    rating: 4.9,
    reviewsCount: 980,
    stock: 8,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=80",
    description: "Smarter, brighter, and mightier. Featuring the powerful S9 SiP, Double Tap gesture, and advanced health sensors.",
    features: [
      "Always-On Retina display with up to 2000 nits",
      "ECG and Blood Oxygen tracking",
      "Crash Detection and Fall Detection safety features",
      "Water resistant to 50 meters"
    ],
    brand: "Apple",
    isFeatured: true
  },
  {
    id: 3,
    name: "Nike Air Max Pulse Casual Sneakers",
    category: "Fashion",
    price: 13995,
    originalPrice: 15995,
    discount: 13,
    rating: 4.7,
    reviewsCount: 650,
    stock: 15,
    badge: "Hot Deal",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
    description: "Pulling inspiration from the London music scene, the Air Max Pulse brings an underground touch to the iconic Air Max line.",
    features: [
      "Point-loaded Air cushioning for high responsiveness",
      "Textile-wrapped midsole with breathable mesh upper",
      "Durable rubber waffle outsole for traction",
      "Plush padded low-cut collar"
    ],
    brand: "Nike",
    isFeatured: true
  },
  {
    id: 4,
    name: "Apple MacBook Air 15-inch M3 Chip",
    category: "Electronics",
    price: 134900,
    originalPrice: 144900,
    discount: 7,
    rating: 4.9,
    reviewsCount: 810,
    stock: 5,
    badge: "Top Rated",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
    description: "Lean, mean, M3 machine. Incredibly thin and blazing fast laptop with expansive Liquid Retina display and all-day battery life.",
    features: [
      "Apple M3 8-core CPU with 10-core GPU",
      "15.3-inch Liquid Retina display with True Tone",
      "Up to 18 hours battery life",
      "1080p FaceTime HD camera with spatial audio speakers"
    ],
    brand: "Apple",
    isFeatured: true
  },
  {
    id: 5,
    name: "Marshall Stanmore III Bluetooth Speaker",
    category: "Audio",
    price: 34999,
    originalPrice: 39999,
    discount: 12,
    rating: 4.8,
    reviewsCount: 420,
    stock: 9,
    badge: "Premium",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80",
    description: "Re-engineered for a more immersive home audio experience, Stanmore III delivers expansive Marshall signature sound with vintage rock aesthetics.",
    features: [
      "Room-filling signature Marshall soundstage",
      "Bluetooth 5.2 with 3.5mm AUX and RCA inputs",
      "Iconic brass details and vintage textured vinyl",
      "Dynamic Loudness ensures music sounds crisp at all volumes"
    ],
    brand: "Marshall",
    isFeatured: true
  },
  {
    id: 6,
    name: "Fossil Townsman Chronograph Leather Watch",
    category: "Accessories",
    price: 12495,
    originalPrice: 14995,
    discount: 17,
    rating: 4.6,
    reviewsCount: 512,
    stock: 14,
    badge: "Classic",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&auto=format&fit=crop&q=80",
    description: "Taking its cues from 1960s architectural and automotive design, the Townsman is effortlessly sophisticated with an exposed mechanical dial.",
    features: [
      "Genuine brown leather strap with stainless steel buckle",
      "44mm case size with scratch-resistant mineral crystal",
      "5 ATM water resistance",
      "Precise quartz chronograph movement"
    ],
    brand: "Fossil",
    isFeatured: false
  },
  {
    id: 7,
    name: "Ray-Ban Classic Polarized Aviator Sunglasses",
    category: "Accessories",
    price: 9890,
    originalPrice: 11590,
    discount: 15,
    rating: 4.7,
    reviewsCount: 890,
    stock: 20,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&auto=format&fit=crop&q=80",
    description: "Timeless style meets cutting-edge polarized technology. Designed for U.S. aviators in 1937, now an international fashion icon.",
    features: [
      "100% UV400 protective polarized crystal lenses",
      "Lightweight gold-tone metal frame",
      "Adjustable silicone nose pads for tailored fit",
      "Includes leather protective case and cleaning cloth"
    ],
    brand: "Ray-Ban",
    isFeatured: true
  },
  {
    id: 8,
    name: "Levi's Vintage Trucker Denim Jacket",
    category: "Fashion",
    price: 4999,
    originalPrice: 6599,
    discount: 24,
    rating: 4.6,
    reviewsCount: 730,
    stock: 18,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&auto=format&fit=crop&q=80",
    description: "The original jean jacket since 1967. A blank canvas for self-expression, designed to wear in over time for a personalized look.",
    features: [
      "100% heavy-duty breathable cotton denim",
      "Classic point collar and front button placket",
      "Button-flap chest pockets and welt side pockets",
      "Adjustable button tabs at back waist"
    ],
    brand: "Levi's",
    isFeatured: false
  },
  {
    id: 9,
    name: "Samsung Galaxy S24 Ultra 5G (512GB)",
    category: "Electronics",
    price: 129999,
    originalPrice: 139999,
    discount: 7,
    rating: 4.9,
    reviewsCount: 1650,
    stock: 7,
    badge: "Flagship",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&auto=format&fit=crop&q=80",
    description: "Meet Galaxy S24 Ultra with Galaxy AI, Titanium frame, 200MP camera system, and built-in S Pen.",
    features: [
      "Snapdragon 8 Gen 3 for Galaxy with Ray Tracing",
      "6.8-inch QHD+ Dynamic AMOLED 2X 120Hz display",
      "Quad telephoto 200MP + 50MP + 12MP + 10MP cameras",
      "5000 mAh battery with 45W super-fast charging"
    ],
    brand: "Samsung",
    isFeatured: true
  },
  {
    id: 10,
    name: "Logitech MX Master 3S Wireless Performance Mouse",
    category: "Home & Office",
    price: 8995,
    originalPrice: 10995,
    discount: 18,
    rating: 4.9,
    reviewsCount: 2100,
    stock: 22,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80",
    description: "An icon remastered. Feel every single moment of your workflow with even more precision, tactility, and performance with quiet clicks.",
    features: [
      "8,000 DPI track-on-glass optical sensor",
      "MagSpeed electromagnetic scrolling (1000 lines/sec)",
      "Ergonomic silhouette crafted for palm comfort",
      "Connect up to 3 devices across Windows & macOS"
    ],
    brand: "Logitech",
    isFeatured: false
  },
  {
    id: 11,
    name: "Bose QuietComfort Ultra Wireless Earbuds",
    category: "Audio",
    price: 25900,
    originalPrice: 29900,
    discount: 13,
    rating: 4.7,
    reviewsCount: 540,
    stock: 11,
    badge: "New Arrival",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80",
    description: "Groundbreaking spatialized audio for more immersive listening. World-class noise cancellation custom-tuned to the shape of your ears.",
    features: [
      "CustomTune technology personalizes sound & ANC",
      "Bose Immersive Audio Spatial Experience",
      "Up to 6 hours listening time (24h with case)",
      "Simple touch controls on each earbud"
    ],
    brand: "Bose",
    isFeatured: false
  },
  {
    id: 12,
    name: "Keychron K2 Pro Wireless Mechanical Keyboard",
    category: "Home & Office",
    price: 9499,
    originalPrice: 11999,
    discount: 21,
    rating: 4.8,
    reviewsCount: 780,
    stock: 14,
    badge: "Hot Deal",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80",
    description: "QMK/VIA wireless custom mechanical keyboard allows anyone to master any keyboard keys or macro commands on its 75% compact layout.",
    features: [
      "Hot-swappable Gateron G Pro mechanical switches",
      "South-facing RGB backlight with 22+ modes",
      "Bluetooth 5.1 & Type-C wired connectivity",
      "Ergonomic angled aluminum frame with OSA PBT keycaps"
    ],
    brand: "Keychron",
    isFeatured: true
  },
  {
    id: 13,
    name: "Zara Tailored Wool Blend Overcoat",
    category: "Fashion",
    price: 7990,
    originalPrice: 9990,
    discount: 20,
    rating: 4.5,
    reviewsCount: 310,
    stock: 10,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=80",
    description: "Premium long coat crafted in a textured wool blend. Notch lapel collar, long sleeves with buttoned cuffs, and back vent for movement.",
    features: [
      "Premium Italian wool and cashmere blend",
      "Double-breasted front button fastening",
      "Interior welt pockets for wallet and smartphone",
      "Satin inner lining for smooth comfort"
    ],
    brand: "Zara",
    isFeatured: false
  },
  {
    id: 14,
    name: "Garmin Fenix 7 Pro Solar Multisport GPS Watch",
    category: "Wearables",
    price: 81990,
    originalPrice: 92990,
    discount: 12,
    rating: 4.9,
    reviewsCount: 430,
    stock: 4,
    badge: "Top Rated",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80",
    description: "The ultimate multisport GPS smartwatch with solar charging lens, built-in LED flashlight, and advanced training metrics for athletes.",
    features: [
      "Power Sapphire solar charging lens for weeks of battery",
      "Built-in multi-LED flashlight with variable intensities",
      "Topographical maps and NextFork map guides",
      "Hill score and Endurance score tracking"
    ],
    brand: "Garmin",
    isFeatured: false
  },
  {
    id: 15,
    name: "Samsonite Proxis Hardside Spinner Luggage 75cm",
    category: "Accessories",
    price: 36500,
    originalPrice: 42000,
    discount: 13,
    rating: 4.8,
    reviewsCount: 290,
    stock: 6,
    badge: "Luxury",
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=800&auto=format&fit=crop&q=80",
    description: "Made from Roxkin, an innovative multi-layered material that bounces back into shape, offering remarkable strength and lightness.",
    features: [
      "Proprietary ultra-resilient Roxkin material",
      "Dual-tube pull handle with smooth double wheels",
      "Integrated 3-digit TSA combination lock",
      "10-year global Samsonite WeCare warranty"
    ],
    brand: "Samsonite",
    isFeatured: false
  },
  {
    id: 16,
    name: "Nespresso Vertuo Pop Coffee Machine",
    category: "Home & Office",
    price: 16999,
    originalPrice: 19999,
    discount: 15,
    rating: 4.7,
    reviewsCount: 620,
    stock: 16,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&auto=format&fit=crop&q=80",
    description: "Brew 5 different coffee cup sizes with one simple touch. Centrifusion technology spins capsule up to 7,000 RPM for rich crema.",
    features: [
      "Barcode recognition technology automatically adjusts brewing",
      "Brews Espresso, Double Espresso, Gran Lungo, and Mug",
      "Fast 30-second heat-up time",
      "Made from 35% recycled plastic with eco-mode"
    ],
    brand: "Nespresso",
    isFeatured: true
  }
];

export const promotionalCoupons = [
  { code: "SAVE10", discountPercent: 10, minOrder: 999, description: "10% OFF on all orders above ₹999" },
  { code: "SACHIN500", flatDiscount: 500, minOrder: 2999, description: "Flat ₹500 OFF on orders above ₹2,999" },
  { code: "FESTIVE20", discountPercent: 20, minOrder: 4999, description: "20% Festive mega discount above ₹4,999" }
];
