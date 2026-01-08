import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Minimal Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">

                <div className="text-center mb-16 space-y-4">
                    <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-medium rounded-full bg-accent/5 text-accent border border-accent/10">
                        Our Collections
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
                        Curated Categories
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Discover our premium range of garment accessories, engineered for excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
                    {categories.map((cat) => (
                        <Link
                            key={cat.id}
                            to="/products"
                            className={`${cat.size} group relative overflow-hidden rounded-3xl bg-muted/50 border border-border/40 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5`}
                        >
                            {/* Image Container */}
                            <div className="absolute inset-0 overflow-hidden">
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-cover transition-transform duration-700 md:duration-1000 group-hover:scale-105"
                                    loading="lazy"
                                />
                                {/* Minimal Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white font-display mb-2 drop-shadow-md">
                                        {cat.name}
                                    </h3>
                                    <p className="text-white/80 text-sm md:text-base font-medium max-w-[90%] drop-shadow-sm">
                                        {cat.desc}
                                    </p>
                                </div>

                                {/* Refined Action Button */}
                                <div className="absolute top-6 right-6 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                    <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                                        <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </div>
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
