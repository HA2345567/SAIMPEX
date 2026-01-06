import { Link } from "react-router-dom";
import { ArrowRight, CircleDot, Paperclip, MoveVertical, Link as LinkIcon, Square } from "lucide-react";

// Importing the new category images
import buttonsImg from "@/assets/buttons-category.png";
import zippersImg from "@/assets/zippers-category.png";
import bucklesImg from "@/assets/buckles-category.jpg";
import hooksImg from "@/assets/hooks-category.png";
import ringsImg from "@/assets/rings-category.png";

const IMAGES = {
    buttons: buttonsImg,
    zippers: zippersImg,
    buckles: bucklesImg,
    hooks: hooksImg,
    rings: ringsImg
};

const categories = [
    {
        id: "buttons",
        name: "Premium Buttons",
        desc: "Zinc Alloy, Brass, & Natural Shell",
        image: IMAGES.buttons,
        size: "col-span-12 md:col-span-6 lg:col-span-8 row-span-2",
        fallbackColor: "bg-blue-900"
    },
    {
        id: "zippers",
        name: "Zippers",
        desc: "YKK Standards, Metal & Nylon",
        image: IMAGES.zippers,
        size: "col-span-12 md:col-span-6 lg:col-span-4 row-span-1",
        fallbackColor: "bg-slate-800"
    },
    {
        id: "buckles",
        name: "Metal Buckles",
        desc: "For Belts, Bags & Accessories",
        image: IMAGES.buckles,
        size: "col-span-12 md:col-span-4 lg:col-span-4 row-span-1",
        fallbackColor: "bg-amber-900"
    },
    {
        id: "hooks",
        name: "Hooks & Eyes",
        desc: "Precision Engineered",
        image: IMAGES.hooks,
        size: "col-span-6 md:col-span-4 lg:col-span-4 row-span-1",
        fallbackColor: "bg-emerald-900"
    },
    {
        id: "rings",
        name: "Ring Adjustors",
        desc: "Sliders & O-Rings",
        image: IMAGES.rings,
        size: "col-span-6 md:col-span-4 lg:col-span-4 row-span-1",
        fallbackColor: "bg-purple-900"
    },
];

const CategoryShowcase = () => {
    return (
        <section className="section-padding bg-background relative overflow-hidden">
            {/* Background Mesh */}
            <div className="absolute inset-0 bg-gradient-mesh opacity-50 pointer-events-none" />
            
            <div className="container mx-auto px-4 relative z-10">

                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold font-display mb-4">
                        Product Categories
                    </div>
                    <h2 className="font-display mb-6">
                        Premium Collections
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-body">
                        Explore our curated range of garment accessories, crafted with precision and quality.
                    </p>
                </div>

                <div className="grid grid-cols-12 gap-6 auto-rows-[300px]">
                    {categories.map((cat) => (
                        <Link
                            key={cat.id}
                            to="/products"
                            className={`${cat.size} group relative overflow-hidden rounded-3xl bg-card border border-border/50 hover-lift hover:border-accent/30`}
                        >
                            {/* Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent group-hover:from-accent/90 transition-all duration-500" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                                <h3 className="text-2xl md:text-3xl font-bold font-display mb-2">
                                    {cat.name}
                                </h3>
                                <p className="text-white/90 text-sm md:text-base font-medium font-body">
                                    {cat.desc}
                                </p>

                                {/* Hover Arrow */}
                                <div className="mt-4 flex items-center gap-2 font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    <span className="text-sm font-display">Explore Collection</span>
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CategoryShowcase;
