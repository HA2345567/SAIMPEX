import buttonsImg from "@/assets/buttons-showcase.jpg";
import metalButtons from "@/assets/metal-buttons.jpg";
import woodenButtons from "@/assets/wooden-buttons.jpg";
import snapButtons from "@/assets/snap-buttons.jpg";
import zippersImg from "@/assets/zippers-category.png";
import bucklesImg from "@/assets/buckles-category.jpg";
import hooksImg from "@/assets/hooks-category.png";
import ringsImg from "@/assets/rings-category.png";

export const PRODUCTS_DATA = [
    {
        id: "mb-01",
        name: "Round Aluminium Button",
        category: "Metal Buttons",
        image: metalButtons,
        description: "Prominent & Leading manufacturer, exporter, importer, distributor and wholesaler of Aluminium Mould Button. Ideal for garments requiring lightweight yet durable accessories.",
        specs: [
            { label: "Color", value: "Aluminium Silver" },
            { label: "Size/Dimension", value: "8mm-30mm" },
            { label: "Material", value: "Aluminium" },
            { label: "Shape", value: "Round" },
            { label: "Pack Type", value: "Packet / Gross" },
            { label: "Surface Finish", value: "Polished" },
        ]
    },
    {
        id: "zb-02",
        name: "Zinc Alloy Coat Button",
        category: "Metal Buttons",
        image: buttonsImg,
        description: "Premium quality zinc alloy buttons with custom embossing options. Perfect for blazers, coats, and heavy woolen garments.",
        specs: [
            { label: "Color", value: "Antique Gold" },
            { label: "Size/Dimension", value: "18mm, 24mm, 30mm" },
            { label: "Material", value: "Zinc Alloy" },
            { label: "Shape", value: "Round / Dome" },
            { label: "Pack Type", value: "10 Gross Box" },
            { label: "Plating", value: "Gold / Nickel Free" },
        ]
    },
    {
        id: "zp-03",
        name: "#5 Metal Zipper Antique",
        category: "Zippers & Sliders",
        image: zippersImg,
        description: "Heavy duty metal zippers with smooth gliding mechanism. YKK standard compliant, suitable for denim and leather jackets.",
        specs: [
            { label: "Teeth Color", value: "Antique Brass" },
            { label: "Size / Length", value: "Custom Lengths" },
            { label: "Material", value: "Brass Teeth / Poly Tape" },
            { label: "Tape Color", value: "Black / Navy / DTM" },
            { label: "Slider Type", value: "Auto Lock" },
            { label: "Usage", value: "Jackets, Bags" },
        ]
    },
    {
        id: "bk-04",
        name: "Adjustable Roller Buckle",
        category: "Metal Buckles",
        image: bucklesImg,
        description: "Classic metal roller buckles for belts and bag straps. High durability and excellent finish.",
        specs: [
            { label: "Color", value: "Silver / Gunmetal" },
            { label: "Size (Inner)", value: "25mm, 32mm, 38mm" },
            { label: "Material", value: "Iron / Zinc" },
            { label: "Shape", value: "Rectangular" },
            { label: "Finish", value: "Electroplated" },
            { label: "Pin Type", value: "Single Pin" },
        ]
    },
    {
        id: "hk-05",
        name: "Trouser Hook & Bar",
        category: "Hooks & Eyes",
        image: hooksImg,
        description: "Industrial grade trouser hooks available in various finishes. Ensures secure closure for formal wear.",
        specs: [
            { label: "Color", value: "Nickel / Black Nickel" },
            { label: "Size", value: "#2 Standard" },
            { label: "Material", value: "Stainless Steel / Brass" },
            { label: "Type", value: "Non-Crushable" },
            { label: "Pack Type", value: "1000 Sets / Box" },
            { label: "Application", value: "Trousers, Skirts" },
        ]
    }
];

export const SIDEBAR_CATEGORIES = [
    { name: "Metal Buttons", count: 12 },
    { name: "Plastic Buttons", count: 8 },
    { name: "Zippers & Sliders", count: 15 },
    { name: "Metal Buckles", count: 6 },
    { name: "Snap Fasteners", count: 9 },
    { name: "Hooks & Eyes", count: 4 },
    { name: "Ring Adjustors", count: 5 },
    { name: "Clothing Labels", count: 7 },
];
