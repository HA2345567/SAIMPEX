import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

// Importing new high-quality category images
import buttonsImg from "@/assets/buttons-new.png";
import zippersImg from "@/assets/zippers-new.png";
import bucklesImg from "@/assets/buckles-new.png";
import hooksImg from "@/assets/hooks-category-luxury.png"; // New Luxury Hooks
import ringsImg from "@/assets/rings-category-luxury.png"; // New Luxury Rings

const categories = [
    {
        id: "buttons",
        name: "Premium Buttons",
        desc: "Zinc Alloy, Brass, & Natural Shell",
        image: buttonsImg,
        size: "col-span-1 md:col-span-2 lg:col-span-2 row-span-2",
    },
    {
        id: "zippers",
        name: "Metal Zippers",
        desc: "High-grade YKK Standards",
        image: zippersImg,
        size: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
    },
    {
        id: "buckles",
        name: "Buckles",
        desc: "Classic & Modern",
        image: bucklesImg,
        size: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
    },
    {
        id: "hooks",
        name: "Hooks & Decor",
        desc: "Precision Fasteners",
        image: hooksImg,
        size: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
    },
    {
        id: "rings",
        name: "Hardware Rings",
        desc: "Functional & Decorative",
        image: ringsImg,
        size: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
    },
];

const CategoryShowcase = () => {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="space-y-4 max-w-2xl">
                        <span className="text-accent text-sm font-bold tracking-widest uppercase flex items-center gap-2">
                            <span className="w-8 h-px bg-accent"></span>
                            Our Collections
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary leading-tight">
                            Curated Categories.
                        </h2>
                    </div>

                    <Link to="/products" className="hidden md:inline-flex items-center gap-2 text-primary font-medium text-sm border-b border-primary/20 pb-1 hover:border-accent hover:text-accent transition-colors">
                        View Full Catalog <ArrowUpRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>

                {/* Stylish Blocks Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                    {categories.map((cat, index) => (
                        <Link
                            key={cat.id}
                            to="/products"
                            className={`${cat.size} group relative block overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 bg-gray-100 min-h-[350px]`}
                        >
                            {/* Number Detail */}
                            <div className="absolute top-6 left-6 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="text-4xl font-serif text-white/20 font-bold">{(index + 1).toString().padStart(2, '0')}</span>
                            </div>

                            {/* Image Container */}
                            <div className="absolute inset-0 w-full h-full">
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                            </div>

                            {/* Content Layer */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-3xl font-serif text-white mb-2 leading-none">
                                        {cat.name}
                                    </h3>
                                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                                        <p className="text-white/80 text-sm font-light tracking-wide mt-2 mb-4">
                                            {cat.desc}
                                        </p>
                                        <span className="inline-flex items-center text-xs font-bold text-white uppercase tracking-wider border-b border-white/50 pb-1">
                                            Explore <ArrowUpRight className="w-3 h-3 ml-1" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}

                    {/* CTA Block - Premium Dark Style to Contrast */}
                    <div className="col-span-1 md:col-span-4 row-span-1 bg-primary rounded-2xl p-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left group overflow-hidden relative shadow-lg min-h-[250px]">
                        {/* Abstract Decor */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2"></div>

                        <div className="relative z-10 space-y-4 max-w-2xl">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-serif text-white mb-3">Bespoke Order?</h3>
                                <p className="text-white/70 text-lg">Looking for something unique? Create custom hardware tailored to your exact specifications.</p>
                            </div>
                        </div>

                        <div className="relative z-10 mt-8 md:mt-0">
                            <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300 shadow-md group-hover:scale-105">
                                Get a Quote <ArrowUpRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CategoryShowcase;
