import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import buttonsImg from "@/assets/buttons-new.png";
import zippersImg from "@/assets/zippers-new.png";
import bucklesImg from "@/assets/buckles-new.png";
import hooksImg from "@/assets/hooks-category-luxury.png";
import ringsImg from "@/assets/rings-category-luxury.png";

const categories = [
  { id: "buttons", name: "Buttons", desc: "Metal, Natural Shell & Alloy", image: buttonsImg },
  { id: "zippers", name: "Zippers", desc: "YKK Standard Metal Zippers", image: zippersImg },
  { id: "buckles", name: "Buckles", desc: "Classic & Contemporary Designs", image: bucklesImg },
  { id: "hooks", name: "Hooks & Fasteners", desc: "Precision Hardware", image: hooksImg },
  { id: "rings", name: "Rings & Adjusters", desc: "Functional & Decorative", image: ringsImg },
];

const CategoryShowcase = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-primary/20" />
              <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                Collections
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-luxury text-primary">
              Product Categories
            </h2>
            <p className="text-muted-foreground max-w-lg">
              Five signature collections of premium garment hardware, crafted to exacting standards.
            </p>
          </div>

          <Link
            to="/products"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-primary/60 hover:text-primary transition-colors"
          >
            View All Products
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`group relative overflow-hidden bg-secondary ${
                index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <Link
                to="/products"
                className="block relative h-[300px] md:h-[350px] lg:h-[400px]"
              >
                {/* Image */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl lg:text-3xl font-luxury text-white mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {cat.desc}
                  </p>

                  {/* CTA */}
                  <div className="mt-4 flex items-center gap-2 text-white text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span>Explore</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            View All Products
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CategoryShowcase;
