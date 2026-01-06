-- Seed 50 products across various categories

INSERT INTO public.products (sku, name, category, image_url, description, min_order_quantity, specs)
VALUES

-- 1. METAL BUTTONS
(
  'mb-01',
  'Classic Round Aluminium Button',
  'Metal Buttons',
  '/images/products/matte_black_buttons_pile.png',
  'Lightweight aluminium button with a polished silver finish. Ideal for shirts and blouses.',
  500,
  '[{"label": "Size", "value": "18L"}, {"label": "Finish", "value": "Silver"}, {"label": "Material", "value": "Aluminium"}]'::jsonb
),
(
  'mb-02',
  'Antique Gold Blazer Button',
  'Metal Buttons',
  '/images/products/antique_brass_button.png',
  'Premium zinc alloy button with antique gold plating and crest embossing.',
  200,
  '[{"label": "Size", "value": "32L"}, {"label": "Finish", "value": "Antique Gold"}, {"label": "Material", "value": "Zinc Alloy"}]'::jsonb
),
(
  'mb-03',
  'Gunmetal Flat Shank Button',
  'Metal Buttons',
  '/images/products/gunmetal_buttons_pile.png',
  'Sleek gunmetal finish with a flat surface. Perfect for modern jackets.',
  500,
  '[{"label": "Size", "value": "24L"}, {"label": "Finish", "value": "Gunmetal"}, {"label": "Material", "value": "Brass"}]'::jsonb
),
(
  'mb-04',
  'Textured Bronze Coat Button',
  'Metal Buttons',
  '/images/products/antique_brass_button.png',
  'Heavyweight button with a hammered bronze texture for winter coats.',
  300,
  '[{"label": "Size", "value": "40L"}, {"label": "Finish", "value": "Bronze"}, {"label": "Material", "value": "Zinc Alloy"}]'::jsonb
),
(
  'mb-05',
  'Minimalist Matte Black Button',
  'Metal Buttons',
  '/images/products/gunmetal_buttons_pile.png',
  'Matte black finish for a stealthy, modern look.',
  1000,
  '[{"label": "Size", "value": "20L"}, {"label": "Finish", "value": "Matte Black"}, {"label": "Material", "value": "Alloy"}]'::jsonb
),
(
  'mb-06',
  'Vintage Copper Shank Button',
  'Metal Buttons',
  '/images/products/antique_brass_button.png',
  'Copper finish with vintage detailing.',
  500,
  '[{"label": "Size", "value": "28L"}, {"label": "Finish", "value": "Copper"}, {"label": "Material", "value": "Brass"}]'::jsonb
),
(
  'mb-07',
  'High-Polish Gold Dome Button',
  'Metal Buttons',
  '/images/products/gunmetal_buttons_pile.png',
  'Luxury gold plated dome button for uniforms and blazers.',
  500,
  '[{"label": "Size", "value": "30L"}, {"label": "Finish", "value": "Gold Plated"}, {"label": "Material", "value": "Brass"}]'::jsonb
),
(
  'mb-08',
  'Engraved Logo Jeans Button',
  'Metal Buttons',
  '/images/products/antique_brass_button.png',
  'Custom engraving available. Standard jeans tack button.',
  2000,
  '[{"label": "Size", "value": "17mm"}, {"label": "Finish", "value": "Nickel"}, {"label": "Type", "value": "Tack Button"}]'::jsonb
),

-- 2. SNAP BUTTONS
(
  'sb-01',
  'Standard Silver Snap Fastener',
  'Snap Buttons',
  '/images/products/snap-buttons.jpg',
  'Reliable snap fastener for general apparel use.',
  2000,
  '[{"label": "Size", "value": "12mm"}, {"label": "Type", "value": "Spring Snap"}, {"label": "Material", "value": "Brass"}]'::jsonb
),
(
  'sb-02',
  'Heavy Duty Gunmetal Snap',
  'Snap Buttons',
  '/images/products/snap-buttons.jpg',
  'Reinforced snap button for leather jackets and bags.',
  1000,
  '[{"label": "Size", "value": "15mm"}, {"label": "Finish", "value": "Gunmetal"}, {"label": "Strength", "value": "Heavy Duty"}]'::jsonb
),
(
  'sb-03',
  'Pearl Top Snap Button',
  'Snap Buttons',
  '/images/products/snap-buttons.jpg',
  'Decorative pearl-finish top snap for western shirts.',
  1000,
  '[{"label": "Size", "value": "10mm"}, {"label": "Top", "value": "Faux Pearl"}, {"label": "Ring", "value": "Prong"}]'::jsonb
),
(
  'sb-04',
  'Hidden Magnetic Snap',
  'Snap Buttons',
  '/images/products/snap-buttons.jpg',
  'Invisible magnetic closure for handbags and pockets.',
  500,
  '[{"label": "Size", "value": "14mm"}, {"label": "Type", "value": "Magnetic"}, {"label": "Finish", "value": "Nickel"}]'::jsonb
),
(
  'sb-05',
  'Antiqued Brass Press Stud',
  'Snap Buttons',
  '/images/products/snap-buttons.jpg',
  'Vintage style press stud for denim applications.',
  2000,
  '[{"label": "Size", "value": "12.5mm"}, {"label": "Finish", "value": "Antique Brass"}, {"label": "Material", "value": "Brass"}]'::jsonb
),
(
  'sb-06',
  'Rubberized Matte Snap',
  'Snap Buttons',
  '/images/products/snap-buttons.jpg',
  'Soft-touch rubber coating for technical functionality.',
  1000,
  '[{"label": "Size", "value": "13mm"}, {"label": "Finish", "value": "Matte Black Rubber"}, {"label": "Type", "value": "Spring"}]'::jsonb
),
(
  'sb-07',
  'Mini Ring Snap (Baby)',
  'Snap Buttons',
  '/images/products/snap-buttons.jpg',
  'Nickel-free ring snap suitable for baby garments.',
  5000,
  '[{"label": "Size", "value": "9mm"}, {"label": "Feature", "value": "Nickel Free"}, {"label": "Type", "value": "Ring Snap"}]'::jsonb
),

-- 3. NATURAL / WOODEN BUTTONS
(
  'nb-01',
  'Olive Wood 4-Hole Button',
  'Natural Buttons',
  '/images/products/wooden_buttons_pile.png',
  'Authentic olive wood with varying grain patterns.',
  500,
  '[{"label": "Size", "value": "24L"}, {"label": "Material", "value": "Olive Wood"}, {"label": "Type", "value": "4-Hole"}]'::jsonb
),
(
  'nb-02',
  'Burnt Edge Coconut Button',
  'Natural Buttons',
  '/images/products/wooden_buttons_pile.png',
  'Eco-friendly coconut shell button with rustic burnt edges.',
  1000,
  '[{"label": "Size", "value": "18L"}, {"label": "Material", "value": "Coconut Shell"}, {"label": "Style", "value": "Rustic"}]'::jsonb
),
(
  'nb-03',
  'Polished Horn Button',
  'Natural Buttons',
  '/images/products/wooden_buttons_pile.png',
  'Genuine horn button in dark brown hues for suits.',
  300,
  '[{"label": "Size", "value": "32L"}, {"label": "Material", "value": "Buffalo Horn"}, {"label": "Finish", "value": "Polished"}]'::jsonb
),
(
  'nb-04',
  'Mother of Pearl Shirt Button',
  'Natural Buttons',
  '/images/products/wooden_buttons_pile.png',
  'Iridescent MOP button for high-end shirting.',
  500,
  '[{"label": "Size", "value": "16L"}, {"label": "Material", "value": "Mother of Pearl"}, {"label": "Grade", "value": "A"}]'::jsonb
),
(
  'nb-05',
  'Bamboo Toggle Button',
  'Natural Buttons',
  '/images/products/wooden_buttons_pile.png',
  'Cylindrical bamboo toggle for duffle coats.',
  500,
  '[{"label": "Length", "value": "40mm"}, {"label": "Material", "value": "Bamboo"}, {"label": "Type", "value": "Toggle"}]'::jsonb
),
(
  'nb-06',
  'Recycled Paper Button',
  'Natural Buttons',
  '/images/products/wooden_buttons_pile.png',
  'Sustainable button made from compressed recycled paper.',
  2000,
  '[{"label": "Size", "value": "22L"}, {"label": "Material", "value": "Recycled Paper"}, {"label": "Color", "value": "Beige"}]'::jsonb
),
(
  'nb-07',
  'Corozo Nut Suit Button',
  'Natural Buttons',
  '/images/products/horn_button_detail.png',
  'Vegetable ivory corozo buttons, dyeable to any color.',
  500,
  '[{"label": "Size", "value": "28L"}, {"label": "Material", "value": "Corozo"}, {"label": "Feature", "value": "Sustainable"}]'::jsonb
),

-- 4. ZIPPERS
(
  'zp-01',
  '#5 Metal Zipper Antique Brass',
  'Zippers',
  '/images/products/gold_zipper_detail.png',
  'Standard #5 metal zipper for denim.',
  1000,
  '[{"label": "Size", "value": "#5"}, {"label": "Teeth", "value": "Antique Brass"}, {"label": "Tape", "value": "Cotton"}]'::jsonb
),
(
  'zp-02',
  'Invisible Nylon Coil Zipper',
  'Zippers',
  '/images/products/gold_zipper_detail.png',
  'Concealed zipper for dresses and skirts.',
  2000,
  '[{"label": "Size", "value": "#3"}, {"label": "Type", "value": "Invisible Coil"}, {"label": "Color", "value": "DTM"}]'::jsonb
),
(
  'zp-03',
  'Two-Way Separating Jacket Zipper',
  'Zippers',
  '/images/products/gold_zipper_detail.png',
  'Double slider plastic molded zipper for outerwear.',
  500,
  '[{"label": "Size", "value": "#8"}, {"label": "Type", "value": "Vislon/Molded"}, {"label": "Feature", "value": "2-Way"}]'::jsonb
),
(
  'zp-04',
  'Waterproof Coil Zipper',
  'Zippers',
  '/images/products/gold_zipper_detail.png',
  'PU coated tape for water resistance on activewear.',
  1000,
  '[{"label": "Size", "value": "#5"}, {"label": "Finish", "value": "Waterproof"}, {"label": "Color", "value": "Black Matte"}]'::jsonb
),
(
  'zp-05',
  'Luxury Riri-Style Zipper',
  'Zippers',
  '/images/products/gold_zipper_detail.png',
  'High-polished teeth for luxury handbags.',
  200,
  '[{"label": "Size", "value": "#6"}, {"label": "Teeth", "value": "Polished Gold"}, {"label": "Glide", "value": "Extra Smooth"}]'::jsonb
),
(
  'zp-06',
  'Jeans Fly Zipper (Brass)',
  'Zippers',
  '/images/products/gold_zipper_detail.png',
  'Short closed-end zipper specifically for trousers.',
  3000,
  '[{"label": "Size", "value": "#4"}, {"label": "Material", "value": "Brass"}, {"label": "Lock", "value": "Auto Lock"}]'::jsonb
),
(
  'zp-07',
  'Oversized Plastic Decoration Zipper',
  'Zippers',
  '/images/products/gold_zipper_detail.png',
  'Chunky #10 zipper for statement pieces.',
  500,
  '[{"label": "Size", "value": "#10"}, {"label": "Material", "value": "Plastic"}, {"label": "Style", "value": "Streetwear"}]'::jsonb
),

-- 5. BUCKLES
(
  'bk-01',
  'Classic Pin Buckle',
  'Buckles',
  '/images/products/silver_buckle.png',
  'Standard pin buckle for leather belts.',
  500,
  '[{"label": "Width", "value": "35mm"}, {"label": "Finish", "value": "Silver"}, {"label": "Material", "value": "Zinc Alloy"}]'::jsonb
),
(
  'bk-02',
  'Double Ring Buckle',
  'Buckles',
  '/images/products/silver_buckle.png',
  'D-ring pair for adjustable fabric belts.',
  1000,
  '[{"label": "Width", "value": "40mm"}, {"label": "Finish", "value": "Nickel"}, {"label": "Style", "value": "Casual"}]'::jsonb
),
(
  'bk-03',
  'Quick Release Side Buckle',
  'Buckles',
  '/images/products/buckles-category.jpg',
  'Plastic side release buckle for backpacks.',
  2000,
  '[{"label": "Size", "value": "25mm"}, {"label": "Material", "value": "Acetate/Nylon"}, {"label": "Color", "value": "Black"}]'::jsonb
),
(
  'bk-04',
  'Ornate Western Buckle',
  'Buckles',
  '/images/products/buckles-category.jpg',
  'Large engraved plate buckle for western wear.',
  100,
  '[{"label": "Style", "value": "Western"}, {"label": "Finish", "value": "Antique Silver"}, {"label": "Theme", "value": "Floral"}]'::jsonb
),
(
  'bk-05',
  'Auto-Grip Webbing Buckle',
  'Buckles',
  '/images/products/buckles-category.jpg',
  'Slider buckle for military style webbing belts.',
  1000,
  '[{"label": "Width", "value": "32mm"}, {"label": "Finish", "value": "Matte Black"}, {"label": "Type", "value": "Roller"}]'::jsonb
),
(
  'bk-06',
  'Tri-Glide Slide',
  'Buckles',
  '/images/products/buckles-category.jpg',
  'Adjuster slide for straps.',
  5000,
  '[{"label": "Size", "value": "20mm"}, {"label": "Material", "value": "Metal"}, {"label": "Finish", "value": "Gold"}]'::jsonb
),
(
  'bk-07',
  'Heavy Duty Cobra-Style Buckle',
  'Buckles',
  '/images/products/buckles-category.jpg',
  'Load bearing tactical buckle.',
  200,
  '[{"label": "Width", "value": "45mm"}, {"label": "Material", "value": "Aluminium"}, {"label": "Type", "value": "Safety Lock"}]'::jsonb
),

-- 6. HOOKS & EYES
(
  'hk-01',
  'Standard Trouser Hook',
  'Hooks & Eyes',
  '/images/products/hooks-category.png',
  '2-piece trouser closure system.',
  5000,
  '[{"label": "Type", "value": "No-Sew"}, {"label": "Finish", "value": "Nickel"}, {"label": "Application", "value": "Pants"}]'::jsonb
),
(
  'hk-02',
  'Bra Hook and Eye Tape',
  'Hooks & Eyes',
  '/images/products/hooks-category.png',
  'Pre-sewn tape with 3 rows of hooks.',
  1000,
  '[{"label": "Width", "value": "50mm"}, {"label": "Color", "value": "Nude"}, {"label": "Rows", "value": "3x2"}]'::jsonb
),
(
  'hk-03',
  'Skirt Hook',
  'Hooks & Eyes',
  '/images/products/hooks-category.png',
  'Large flat hook for skirt waistbands.',
  2000,
  '[{"label": "Material", "value": "Brass"}, {"label": "Finish", "value": "Black"}, {"label": "Size", "value": "Large"}]'::jsonb
),
(
  'hk-04',
  'Fur Hook',
  'Hooks & Eyes',
  '/images/products/hooks-category.png',
  'Fabric covered hook for fur coats.',
  500,
  '[{"label": "Color", "value": "Brown/Black"}, {"label": "Type", "value": "Covered"}, {"label": "Size", "value": "Medium"}]'::jsonb
),
(
  'hk-05',
  'Collar Hook',
  'Hooks & Eyes',
  '/images/products/hooks-category.png',
  'Tiny wire hook for securing collars.',
  10000,
  '[{"label": "Size", "value": "#1"}, {"label": "Finish", "value": "Silver"}, {"label": "Material", "value": "Steel"}]'::jsonb
),
(
  'hk-06',
  'Swivel Snap Hook',
  'Hooks & Eyes',
  '/images/products/hooks-category.png',
  'Dog-leash style hook for bag straps.',
  1000,
  '[{"label": "Size", "value": "25mm"}, {"label": "Finish", "value": "Gold"}, {"label": "Feature", "value": "Swivel Eye"}]'::jsonb
),
(
  'hk-07',
  'Lanyard Carabiner',
  'Hooks & Eyes',
  '/images/products/hooks-category.png',
  'Small carabiner for ID cards.',
  5000,
  '[{"label": "Size", "value": "10mm"}, {"label": "Material", "value": "Zinc"}, {"label": "Style", "value": "Lobster Claw"}]'::jsonb
),

-- 7. RINGS & SLIDERS (Using rings image for category visual)
(
  'rs-01',
  'O-Ring Welded',
  'Rings & Sliders',
  '/images/products/rings-category.png',
  'Seamless welded O-ring for harness details.',
  2000,
  '[{"label": "Diagnosis", "value": "30mm"}, {"label": "Thickness", "value": "4mm"}, {"label": "Finish", "value": "Nickel"}]'::jsonb
),
(
  'rs-02',
  'D-Ring',
  'Rings & Sliders',
  '/images/products/rings-category.png',
  'Standard D-ring for strap ends.',
  3000,
  '[{"label": "Width", "value": "25mm"}, {"label": "Finish", "value": "Antique Brass"}, {"label": "Material", "value": "Iron"}]'::jsonb
),
(
  'rs-03',
  'Rectangular Loop',
  'Rings & Sliders',
  '/images/products/rings-category.png',
  'Rectangle wire loop for bag handles.',
  2000,
  '[{"label": "Width", "value": "38mm"}, {"label": "Finish", "value": "Gunmetal"}, {"label": "Grade", "value": "Handbag"}]'::jsonb
),
(
  'rs-04',
  'Slider Adjuster',
  'Rings & Sliders',
  '/images/products/rings-category.png',
  'Moving bar slider for adjustable straps.',
  2000,
  '[{"label": "Size", "value": "20mm"}, {"label": "Material", "value": "Zinc"}, {"label": "Finish", "value": "Rose Gold"}]'::jsonb
),
(
  'rs-05',
  'Key Ring Split',
  'Rings & Sliders',
  '/images/products/rings-category.png',
  'Standard split ring for keychains.',
  5000,
  '[{"label": "Diameter", "value": "25mm"}, {"label": "Finish", "value": "Nickel"}, {"label": "Type", "value": "Flat Split"}]'::jsonb
),
(
  'rs-06',
  'Oval Eyelet / Grommet',
  'Rings & Sliders',
  '/images/products/rings-category.png',
  'Oval shaped grommet for decorative holes.',
  1000,
  '[{"label": "Size", "value": "30x15mm"}, {"label": "Finish", "value": "Black"}, {"label": "Includes", "value": "Washer"}]'::jsonb
),
(
  'rs-07',
  'Stopper / Cord Lock',
  'Rings & Sliders',
  '/images/products/rings-category.png',
  'Metal spring toggle for drawstrings.',
  500,
  '[{"label": "Hole Size", "value": "5mm"}, {"label": "Material", "value": "Alloy"}, {"label": "Spring", "value": "Steel"}]'::jsonb
),

-- 8. POLYESTER BUTTONS
(
  'pb-01',
  'Standard 4-Hole Galaxy Polyester Button',
  'Polyester Buttons',
  '/images/products/buttons-showcase.jpg',
  'Durable and versatile polyester button with a galaxy finish. Industry standard for shirts.',
  1000,
  '[{"label": "Size", "value": "14L - 32L"}, {"label": "Finish", "value": "Galaxy / Pearl"}, {"label": "Type", "value": "4-Hole"}]'::jsonb
),
(
  'pb-02',
  'Chalk White Shirt Button',
  'Polyester Buttons',
  '/images/products/buttons-showcase.jpg',
  'Classic chalk white finish, high heat resistant. Perfect for formal shirts.',
  2000,
  '[{"label": "Size", "value": "16L, 18L"}, {"label": "Color", "value": "Chalk White"}, {"label": "Shape", "value": "Dish / Flat"}]'::jsonb
),
(
  'pb-03',
  'Horn Effect Polyester Button',
  'Polyester Buttons',
  '/images/products/buttons-showcase.jpg',
  'Realistic faux horn look made from durable polyester.',
  1000,
  '[{"label": "Size", "value": "24L"}, {"label": "Effect", "value": "Burnt Horn"}, {"label": "Material", "value": "Polyester Resin"}]'::jsonb
),
(
  'pb-04',
  'Dyed-to-Match Suit Button',
  'Polyester Buttons',
  '/images/products/buttons-showcase.jpg',
  'Matte finish suit button, easily dyeable to match any fabric.',
  500,
  '[{"label": "Size", "value": "32L"}, {"label": "Finish", "value": "Matte / Satin"}, {"label": "Usage", "value": "Suits, Blazers"}]'::jsonb
),
(
  'pb-05',
  'Clear Transparent Button',
  'Polyester Buttons',
  '/images/products/buttons-showcase.jpg',
  'Crystal clear polyester button for invisible closure or inner fastening.',
  1000,
  '[{"label": "Size", "value": "18L"}, {"label": "Clarity", "value": "High"}, {"label": "Type", "value": "2-Hole"}]'::jsonb
),
(
  'pb-06',
  'Rim Button (Fisheye)',
  'Polyester Buttons',
  '/images/products/buttons-showcase.jpg',
  'Classic fisheye design with a prominent rim.',
  1000,
  '[{"label": "Size", "value": "20L"}, {"label": "Style", "value": "Fisheye"}, {"label": "Color", "value": "Various"}]'::jsonb
),
(
  'pb-07',
  'Laser Engraved Polyester Button',
  'Polyester Buttons',
  '/images/products/buttons-showcase.jpg',
  'Custom logo laser engraving available on the rim or center.',
  2000,
  '[{"label": "Size", "value": "22L"}, {"label": "Customization", "value": "Laser Logo"}, {"label": "Base", "value": "Polyester"}]'::jsonb
)
ON CONFLICT (sku) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  image_url = EXCLUDED.image_url,
  description = EXCLUDED.description,
  min_order_quantity = EXCLUDED.min_order_quantity,
  specs = EXCLUDED.specs;
