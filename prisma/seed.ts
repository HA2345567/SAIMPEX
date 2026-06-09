import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const initialProducts = [
  // ==================== POLYESTER SERIES ====================
  {
    name: "Polyester Casual Button",
    category: "Polyester Series",
    description: "Curated basic polyester buttons with a soft matte surface. High durability, machine washable, and perfect for high-volume corporate apparel.",
    sku: "BTN-PLY-001",
    specs: [
      { label: "Material", value: "High-Grade Polyester" },
      { label: "Size", value: "18L (11.5mm)" },
      { label: "Finish", value: "Matte Chalk Finish" },
      { label: "Application", value: "Casual Shirts" }
    ],
    min_order_quantity: 2000,
    in_stock: true,
    image_url: "/images/products/matte_black_buttons_pile.png"
  },
  {
    name: "Classic Chalk Shirt Button",
    category: "Polyester Series",
    description: "Ultra-premium polyester shirt buttons with classic dhed center. Excellent color fastness and chemical resistance for industrial laundry.",
    sku: "BTN-PLY-002",
    specs: [
      { label: "Material", value: "Polyester resin" },
      { label: "Size", value: "16L (10mm)" },
      { label: "Finish", value: "Chalk Matte" },
      { label: "Application", value: "Dress Shirts" }
    ],
    min_order_quantity: 2000,
    in_stock: true,
    image_url: "/images/products/polyester_series_hero.png"
  },
  {
    name: "Pearlised Polyester Button",
    category: "Polyester Series",
    description: "Decorative polyester buttons showing a high-luster pearl effect on both sides. Mimics natural shell appearance with synthetic durability.",
    sku: "BTN-PLY-003",
    specs: [
      { label: "Material", value: "Pearlised Polyester" },
      { label: "Size", value: "20L (12.5mm)" },
      { label: "Finish", value: "High Luster Pearl" },
      { label: "Application", value: "Blouses & Knitwear" }
    ],
    min_order_quantity: 1500,
    in_stock: true,
    image_url: "/images/products/pearl_decorative_buttons.jpg"
  },
  {
    name: "Four-Hole Matte Suit Button",
    category: "Polyester Series",
    description: "Heavy duty polyester suit buttons featuring a slightly raised rim and matte texture. Designed to handle high steam ironing.",
    sku: "BTN-PLY-004",
    specs: [
      { label: "Material", value: "Urea-Mimic Polyester" },
      { label: "Size", value: "24L (15mm)" },
      { label: "Finish", value: "Soft Matte" },
      { label: "Application", value: "Suits & Blazers" }
    ],
    min_order_quantity: 1000,
    in_stock: true,
    image_url: "/images/products/plastic_buttons_collection.jpg"
  },
  {
    name: "Polyester Dished Blazer Button",
    category: "Polyester Series",
    description: "Thick, premium-weight dished polyester button with a wide outer rim. Ideal for heavy outerwear and wool blazers.",
    sku: "BTN-PLY-005",
    specs: [
      { label: "Material", value: "High-density Polyester" },
      { label: "Size", value: "30L (19mm)" },
      { label: "Finish", value: "Satin Finish" },
      { label: "Application", value: "Outerwear & Jackets" }
    ],
    min_order_quantity: 1000,
    in_stock: true,
    image_url: "/images/products/buttons-showcase.jpg"
  },

  // ==================== METAL & ALLOYS ====================
  {
    name: "Royal Crest Blazer Button",
    category: "Metal & Alloys",
    description: "Exquisite zinc-alloy blazer button featuring an embossed royal crest design. Standard fit for custom blazers and suits. Hand-polished to an antique gold finish.",
    sku: "BTN-MET-001",
    specs: [
      { label: "Material", value: "Zinc Alloy" },
      { label: "Size", value: "24L (15mm)" },
      { label: "Finish", value: "Antique Gold" },
      { label: "Application", value: "Blazers & Jackets" }
    ],
    min_order_quantity: 500,
    in_stock: true,
    image_url: "/images/products/royal_crest.png"
  },
  {
    name: "Signature Denim Shank Button",
    category: "Metal & Alloys",
    description: "Classic rivet style jeans button with swivelling shank. Distressed brass finish with SAIMPEX logo engraving option.",
    sku: "BTN-MET-002",
    specs: [
      { label: "Material", value: "Brass & Iron Shank" },
      { label: "Size", value: "27L (17mm)" },
      { label: "Finish", value: "Distressed Antique Brass" },
      { label: "Application", value: "Denim & Workwear" }
    ],
    min_order_quantity: 1000,
    in_stock: true,
    image_url: "/images/products/antique_brass_button.png"
  },
  {
    name: "Heavy Zinc Alloy Snap Button",
    category: "Metal & Alloys",
    description: "Four-part spring press stud snap buttons. High holding power for heavy denim, canvas coats, and leather jackets.",
    sku: "BTN-MET-003",
    specs: [
      { label: "Material", value: "Zinc Alloy Face / Brass socket" },
      { label: "Size", value: "15mm Snap" },
      { label: "Finish", value: "Polished Nickel" },
      { label: "Application", value: "Outerwear & Leather" }
    ],
    min_order_quantity: 1000,
    in_stock: true,
    image_url: "/images/products/metal_alloys_hero.png"
  },
  {
    name: "Engraved Gold Rim Shank",
    category: "Metal & Alloys",
    description: "Exquisite dome-shaped metal shank button with an engraved gold border. Designed for couture fashion houses and ladies coats.",
    sku: "BTN-MET-004",
    specs: [
      { label: "Material", value: "Zinc Alloy / Copper" },
      { label: "Size", value: "28L (18mm)" },
      { label: "Finish", value: "24k Gold Plated" },
      { label: "Application", value: "Premium Couture" }
    ],
    min_order_quantity: 500,
    in_stock: true,
    image_url: "/images/products/gold_button_macro.png"
  },
  {
    name: "Gunmetal Utility Fastener",
    category: "Metal & Alloys",
    description: "Heavy-duty gunmetal finished metal buttons for military coats, trench coats, and technical wear.",
    sku: "BTN-MET-005",
    specs: [
      { label: "Material", value: "Brass & Steel" },
      { label: "Size", value: "24L (15mm)" },
      { label: "Finish", value: "Gunmetal PVD" },
      { label: "Application", value: "Technical Apparel" }
    ],
    min_order_quantity: 1000,
    in_stock: true,
    image_url: "/images/products/gunmetal_buttons_pile.png"
  },

  // ==================== BUCKLES & HARDWARE ====================
  {
    name: "Vintage Brass Buckle",
    category: "Buckles & Hardware",
    description: "Rugged and heavily detailed brass buckle for trench coats, belts, and luxury bags. Designed with a timeless vintage patina.",
    sku: "HDW-BKL-001",
    specs: [
      { label: "Material", value: "Solid Brass" },
      { label: "Size", value: "35mm Inner Width" },
      { label: "Finish", value: "Antique Brass Patina" },
      { label: "Application", value: "Belts & Outerwear" }
    ],
    min_order_quantity: 500,
    in_stock: true,
    image_url: "/images/products/brass_buckle.png"
  },
  {
    name: "Double D-Ring Metal Buckle",
    category: "Buckles & Hardware",
    description: "Duo D-rings constructed from thick welded steel wire. Perfect for canvas belts, military bags, and outerwear closures.",
    sku: "HDW-BKL-002",
    specs: [
      { label: "Material", value: "Steel wire" },
      { label: "Size", value: "40mm Inner" },
      { label: "Finish", value: "Black Nickel" },
      { label: "Application", value: "Straps & Belts" }
    ],
    min_order_quantity: 1000,
    in_stock: true,
    image_url: "/images/products/buckles_hardware_hero.png"
  },
  {
    name: "Silver Trench Coat Adjuster",
    category: "Buckles & Hardware",
    description: "Rectangular slide buckle adjuster designed for trench coat waistbelts and cuff straps. Elegant minimalist rectangular wireframe.",
    sku: "HDW-BKL-003",
    specs: [
      { label: "Material", value: "Zinc Alloy" },
      { label: "Size", value: "50mm Belt Width" },
      { label: "Finish", value: "Chrome Silver" },
      { label: "Application", value: "Trench Coats" }
    ],
    min_order_quantity: 500,
    in_stock: true,
    image_url: "/images/products/silver_buckle.png"
  },
  {
    name: "Heavy Duty Snap Fasteners",
    category: "Buckles & Hardware",
    description: "Standard spring snaps designed for industrial workwear jackets, overalls, and high-tension utility application.",
    sku: "HDW-BKL-004",
    specs: [
      { label: "Material", value: "Marine-Grade Brass" },
      { label: "Size", value: "12mm Stud" },
      { label: "Finish", value: "Nickel Plated" },
      { label: "Application", value: "Overalls & Tents" }
    ],
    min_order_quantity: 1500,
    in_stock: true,
    image_url: "/images/products/snap-buttons.jpg"
  },
  {
    name: "Industrial Press Studs",
    category: "Buckles & Hardware",
    description: "Uncapped open metal press studs with heavy-tension spring wires. Ideal for heavy denim jackets and canvas utility bags.",
    sku: "HDW-BKL-005",
    specs: [
      { label: "Material", value: "Stainless Steel" },
      { label: "Size", value: "15mm Capless" },
      { label: "Finish", value: "Raw Matte Steel" },
      { label: "Application", value: "Workwear Jackets" }
    ],
    min_order_quantity: 2000,
    in_stock: true,
    image_url: "/images/products/snap_buttons_industrial.jpg"
  },

  // ==================== RING ADJUSTERS ====================
  {
    name: "Rose Gold Detail Slider",
    category: "Ring Adjusters",
    description: "Precision-molded metal slider adjusters. Finished in a gorgeous rose gold coat, perfect for premium lingerie and luxury swimwear design.",
    sku: "HDW-RNG-001",
    specs: [
      { label: "Material", value: "Zinc Alloy" },
      { label: "Size", value: "8mm Inner Width" },
      { label: "Finish", value: "Rose Gold Plated" },
      { label: "Application", value: "Lingerie & Swimwear" }
    ],
    min_order_quantity: 1500,
    in_stock: true,
    image_url: "/images/products/gold_slider.png"
  },
  {
    name: "Bespoke Trouser Hooks",
    category: "Ring Adjusters",
    description: "Industrial strength brass trouser hooks and bars. Designed for heavy daily usage while maintaining a sleek, hidden appearance.",
    sku: "HDW-RNG-002",
    specs: [
      { label: "Material", value: "Solid Brass" },
      { label: "Size", value: "Standard 10mm" },
      { label: "Finish", value: "Nickel Free" },
      { label: "Application", value: "Trousers & Skirts" }
    ],
    min_order_quantity: 1000,
    in_stock: true,
    image_url: "/images/products/silver_hooks.png"
  },
  {
    name: "Sleek Metal Ring Adjuster",
    category: "Ring Adjusters",
    description: "Circular zinc alloy O-rings. Polished borders, used for bag straps, adjustments, and decorative belt attachments.",
    sku: "HDW-RNG-003",
    specs: [
      { label: "Material", value: "Zinc Alloy" },
      { label: "Size", value: "25mm Inner Diameter" },
      { label: "Finish", value: "Gold Flash Plated" },
      { label: "Application", value: "Handbags & Belts" }
    ],
    min_order_quantity: 1000,
    in_stock: true,
    image_url: "/images/products/ring_adjusters_hero.png"
  },
  {
    name: "Durable Hook & Eye Set",
    category: "Ring Adjusters",
    description: "Classic metal hook and eye fasteners for dress collars, corsetry waistbands, and active sizing adjusters.",
    sku: "HDW-RNG-004",
    specs: [
      { label: "Material", value: "Low carbon Steel" },
      { label: "Size", value: "Size 3" },
      { label: "Finish", value: "Silver Plating" },
      { label: "Application", value: "Collars & Lingerie" }
    ],
    min_order_quantity: 2000,
    in_stock: true,
    image_url: "/images/products/hooks-category.png"
  },
  {
    name: "Metal O-Ring Loop",
    category: "Ring Adjusters",
    description: "Soldered metal rings with smooth circular joints. High load tolerance for backpacks, heavy coats, and utility harness bindings.",
    sku: "HDW-RNG-005",
    specs: [
      { label: "Material", value: "Welded Iron" },
      { label: "Size", value: "30mm Width" },
      { label: "Finish", value: "Satin Nickel" },
      { label: "Application", value: "Backpacks & Coats" }
    ],
    min_order_quantity: 1000,
    in_stock: true,
    image_url: "/images/products/rings-category.png"
  },

  // ==================== WOODEN COLLECTION ====================
  {
    name: "Sustainably Sourced Wooden Button",
    category: "Wooden Collection",
    description: "Lightweight and eco-friendly wooden buttons. Carefully crafted from pruned olive branches, displaying natural concentric grain patterns.",
    sku: "BTN-WDN-001",
    specs: [
      { label: "Material", value: "Olive Wood" },
      { label: "Size", value: "20L (12.5mm)" },
      { label: "Finish", value: "Natural Beeswax Finish" },
      { label: "Application", value: "Shirts & Knitwear" }
    ],
    min_order_quantity: 1000,
    in_stock: true,
    image_url: "/images/products/wooden_collection_hero.png"
  },
  {
    name: "Olive Wood Grain Button",
    category: "Wooden Collection",
    description: "Chunky wooden buttons featuring distinct, dark wood grain swirls. Double face coated with a thin layer of protective satin lacquer.",
    sku: "BTN-WDN-002",
    specs: [
      { label: "Material", value: "Natural Olive Wood" },
      { label: "Size", value: "24L (15mm)" },
      { label: "Finish", value: "Clear Satin Lacquer" },
      { label: "Application", value: "Knitwear Cardigans" }
    ],
    min_order_quantity: 1000,
    in_stock: true,
    image_url: "/images/products/wooden_buttons_pile.png"
  },
  {
    name: "Beeswax Finish Duffle Button",
    category: "Wooden Collection",
    description: "Classic horn-shaped wooden duffle toggle buttons. Made from sustainable birchwood and hand-finished with pure organic beeswax.",
    sku: "BTN-WDN-003",
    specs: [
      { label: "Material", value: "Birch Wood" },
      { label: "Size", value: "50mm Length" },
      { label: "Finish", value: "Natural Beeswax" },
      { label: "Application", value: "Duffle Coats" }
    ],
    min_order_quantity: 500,
    in_stock: true,
    image_url: "/images/products/wooden-buttons.jpg"
  },
  {
    name: "Coconut Shell 2-Hole Button",
    category: "Wooden Collection",
    description: "Eco-friendly buttons made from recycled coconut shell. Textured natural back with a smooth, light beige front surface.",
    sku: "BTN-WDN-004",
    specs: [
      { label: "Material", value: "Coconut Shell" },
      { label: "Size", value: "18L (11.5mm)" },
      { label: "Finish", value: "Tumbled Natural" },
      { label: "Application", value: "Linen Shirts" }
    ],
    min_order_quantity: 2000,
    in_stock: true,
    image_url: "/images/products/shell_coconut_buttons.jpg"
  },
  {
    name: "Natural Grain Wooden Shank",
    category: "Wooden Collection",
    description: "Premium wooden button fitted with a metal loop shank backing. Allows sew-on attachment without drilling holes through the wood face.",
    sku: "BTN-WDN-005",
    specs: [
      { label: "Material", value: "Rosewood & Brass loop" },
      { label: "Size", value: "28L (18mm)" },
      { label: "Finish", value: "Hand Sanded Oil Finish" },
      { label: "Application", value: "Heavy Coats" }
    ],
    min_order_quantity: 500,
    in_stock: true,
    image_url: "/images/products/wooden_buttons_natural.jpg"
  },

  // ==================== STOPPERS & CORDS ====================
  {
    name: "Sportswear Stoppers & Cords",
    category: "Stoppers & Cords",
    description: "Essential functional trims for sportswear and outerwear functionality, featuring spring-loaded dual-hole lock mechanism.",
    sku: "TRM-STP-001",
    specs: [
      { label: "Material", value: "Nylon & Stainless Steel Spring" },
      { label: "Size", value: "Standard Dual-Hole" },
      { label: "Finish", value: "Matte Black" },
      { label: "Application", value: "Sportswear Drawstrings" }
    ],
    min_order_quantity: 2000,
    in_stock: true,
    image_url: "/images/products/stoppers_cords_hero.png"
  },
  {
    name: "Obsidian Shell Cord Toggle",
    category: "Stoppers & Cords",
    description: "Luxury shell-toggle cord lock designed for premium casual coats. Displays a dark obsidian shimmer that catches the light.",
    sku: "TRM-STP-002",
    specs: [
      { label: "Material", value: "Natural Mother of Pearl Shell" },
      { label: "Size", value: "40mm Length" },
      { label: "Finish", value: "Polished Shell Shimmer" },
      { label: "Application", value: "Parka Jackets" }
    ],
    min_order_quantity: 500,
    in_stock: true,
    image_url: "/images/products/obsidian_toggle.png"
  },
  {
    name: "Architectural Carved Toggle",
    category: "Stoppers & Cords",
    description: "Luxury toggle constructed from carved black buffalo horn. High density and weight with unique white and grey marbling.",
    sku: "TRM-STP-003",
    specs: [
      { label: "Material", value: "Black Buffalo Horn" },
      { label: "Size", value: "45mm Toggle" },
      { label: "Finish", value: "Buffed High Polish" },
      { label: "Application", value: "Outerwear Toggles" }
    ],
    min_order_quantity: 500,
    in_stock: true,
    image_url: "/images/products/horn_button_detail.png"
  },
  {
    name: "Metal Snap Lock Stopper",
    category: "Stoppers & Cords",
    description: "Sleek cylindrical metal cord locks with single vertical spring buttons. Ideal for high-end luxury skiwear and custom windbreakers.",
    sku: "TRM-STP-004",
    specs: [
      { label: "Material", value: "Zinc Alloy / Copper" },
      { label: "Size", value: "Single Hole 5mm Cord" },
      { label: "Finish", value: "Polished Gunmetal" },
      { label: "Application", value: "Activewear & Hoodies" }
    ],
    min_order_quantity: 1000,
    in_stock: true,
    image_url: "/images/products/custom_logo_buttons.jpg"
  },
  {
    name: "Technical Apparel Drawcord Lock",
    category: "Stoppers & Cords",
    description: "Industrial strength cord end-stoppers. Prevents cords from fraying or slipping through channels. Easy clip-lock setup.",
    sku: "TRM-STP-005",
    specs: [
      { label: "Material", value: "Polyacetal (POM)" },
      { label: "Size", value: "10mm x 15mm" },
      { label: "Finish", value: "Textured Matte Black" },
      { label: "Application", value: "Technical Outerwear" }
    ],
    min_order_quantity: 2000,
    in_stock: true,
    image_url: "/images/products/luxury_metal_buttons.jpg"
  },

  // ==================== ZIPPERS & TAPES ====================
  {
    name: "Premium Gold Zipper Pull",
    category: "Zippers & Tapes",
    description: "Heavy-duty custom design zipper pull with a high-shine mirror gold finish. Smooth glide tech, YKK-grade quality.",
    sku: "ZIP-ZIP-001",
    specs: [
      { label: "Material", value: "Zinc Alloy / Copper" },
      { label: "Size", value: "#5 Slider" },
      { label: "Finish", value: "Polished Gold" },
      { label: "Application", value: "Jackets & Handbags" }
    ],
    min_order_quantity: 500,
    in_stock: true,
    image_url: "/images/products/gold_zipper.png"
  },
  {
    name: "Heavy Duty Brass Zipper",
    category: "Zippers & Tapes",
    description: "Thick metal zipper teeth on durable woven cotton tape. Heavy-duty construction built for denim and leather bomber jackets.",
    sku: "ZIP-ZIP-002",
    specs: [
      { label: "Material", value: "Brass Teeth / Cotton Tape" },
      { label: "Size", value: "#8 Gauge" },
      { label: "Finish", value: "Antique Brass" },
      { label: "Application", value: "Leather Jackets" }
    ],
    min_order_quantity: 500,
    in_stock: true,
    image_url: "/images/products/gold_zipper_detail.png"
  },
  {
    name: "Metal Closed-End Zipper",
    category: "Zippers & Tapes",
    description: "Standard trouser fly zippers. Flexible and lightweight nylon coils with metal sliders for smooth, lockable glide.",
    sku: "ZIP-ZIP-003",
    specs: [
      { label: "Material", value: "Nylon Coil / Brass Slider" },
      { label: "Size", value: "#3 Gauge" },
      { label: "Finish", value: "Satin Nickel Puller" },
      { label: "Application", value: "Trousers & Pockets" }
    ],
    min_order_quantity: 1000,
    in_stock: true,
    image_url: "/images/products/zippers_tapes_hero.png"
  },
  {
    name: "Premium Zipper Tapes",
    category: "Zippers & Tapes",
    description: "Woven polyester and cotton blended zipper tapes. High tensile strength, color-fast, and compatible with custom metal sliders.",
    sku: "ZIP-ZIP-004",
    specs: [
      { label: "Material", value: "Polyester-Cotton Blend" },
      { label: "Size", value: "24mm Width Tape" },
      { label: "Finish", value: "Custom Dyed" },
      { label: "Application", value: "Zipper Manufacturing" }
    ],
    min_order_quantity: 2000,
    in_stock: true,
    image_url: "/images/products/zippers-category.png"
  },
  {
    name: "Vintage Metal Open-End Zipper",
    category: "Zippers & Tapes",
    description: "A selection of antique finished open-end zippers for vintage work coats and heritage denim jackets.",
    sku: "ZIP-ZIP-005",
    specs: [
      { label: "Material", value: "Brass & Copper teeth" },
      { label: "Size", value: "#5 Open-End" },
      { label: "Finish", value: "Antique Patina" },
      { label: "Application", value: "Vintage Workwear" }
    ],
    min_order_quantity: 500,
    in_stock: true,
    image_url: "/images/products/vintage_collection.jpg"
  }
];

async function main() {
  console.log('Seeding database with 35 unique products...');

  // Clear existing products
  await prisma.product.deleteMany({});
  console.log('Deleted existing products.');

  for (const product of initialProducts) {
    const created = await prisma.product.create({
      data: {
        name: product.name,
        category: product.category,
        description: product.description,
        sku: product.sku,
        specs: product.specs,
        min_order_quantity: product.min_order_quantity,
        in_stock: product.in_stock,
        image_url: product.image_url,
      }
    });
    console.log(`Created product: ${created.name} (SKU: ${created.sku})`);
  }

  console.log('Database seeded successfully with 35 unique products!');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
