import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Importing high-quality category images
import buttonsImg from "@/assets/buttons-new.png";
import zippersImg from "@/assets/zippers-new.png";
import bucklesImg from "@/assets/buckles-new.png";
import hooksImg from "@/assets/hooks-category-luxury.png";
import ringsImg from "@/assets/rings-category-luxury.png";

const categories = [
  {
    id: "buttons",
    name: "Premium Buttons",
    desc: "Zinc Alloy, Brass & Natural Shell",
    tagline: "The Foundation of Style",
    image: buttonsImg,
    span: "col-span-1 md:col-span-2 lg:col-span-2 row-span-2",
    featured: true,
  },
  {
    id: "zippers",
    name: "Metal Zippers",
    desc: "High-grade YKK Standards",
    tagline: "Precision Engineering",
    image: zippersImg,
    span: "col-span-1 row-span-1",
    featured: false,
  },
  {
    id: "buckles",
    name: "Buckles",
    desc: "Classic & Modern Designs",
    tagline: "Statement Hardware",
    image: bucklesImg,
    span: "col-span-1 row-span-1",
    featured: false,
  },
  {
    id: "hooks",
    name: "Hooks & Fasteners",
    desc: "Precision Engineering",
    tagline: "Hidden Excellence",
    image: hooksImg,
    span: "col-span-1 row-span-1",
    featured: false,
  },
  {
    id: "rings",
    name: "Rings & Adjusters",
    desc: "Functional & Decorative",
    tagline: "Perfect Finish",
    image: ringsImg,
    span: "col-span-1 row-span-1",
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const CategoryShowcase = () => {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-background overflow-hidden">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* ═════ Editorial Header ═════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 lg:mb-20 gap-6 border-b border-border/50 pb-12"
        >
          <div className="space-y-6 max-w-2xl">
            {/* Decorative Eyebrow */}
            <div className="flex items-center gap-4">
              <span className="w-8 h-px bg-accent" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-accent">
                Our Collections
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-luxury text-primary leading-[1.05]">
              Curated <span className="italic text-accent">Excellence</span><span className="hidden lg:inline">.</span>
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg font-light max-w-md leading-relaxed">
              Five signature collections. Each piece a testament to precision craftsmanship.
            </p>
          </div>

          <Link
            to="/products"
            className="hidden md:inline-flex items-center gap-2 text-primary font-medium text-sm border-b border-primary/30 pb-1 hover:border-accent hover:text-accent transition-all duration-500 group"
          >
            View Full Catalog
            <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* ═════ Editorial Grid ═════ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              variants={itemVariants}
              className={`${cat.span} group relative`}
            >
              <Link
                to="/products"
                className="block relative overflow-hidden rounded-sm min-h-[280px] md:min-h-[320px] lg:min-h-[350px] h-full"
              >
                {/* ═════ Image Layer ═════ */}
                <div className="absolute inset-0 bg-secondary">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Cinematic Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500" />
                </div>

                {/* ═════ Collection Number (Editorial) ═════ */}
                <div className="absolute top-6 left-6 z-20 pointer-events-none">
                  <span className="text-4xl sm:text-5xl font-luxury font-bold text-white/15 group-hover:text-accent/30 transition-colors duration-500">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>

                {/* ═════ Content Layer ═════ */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end z-20">
                  {/* Tagline (reveals on hover) */}
                  <div className="mb-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <span className="inline-block px-3 py-1 text-[10px] font-semibold tracking-[0.2em] uppercase text-accent bg-accent/10 rounded-sm">
                      {cat.tagline}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-luxury text-white mb-2 group-hover:text-accent transition-colors duration-300">
                    {cat.name}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-sm font-light mb-6 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {cat.desc}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-wider transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                    <span className="border-b border-white/50 pb-0.5 group-hover:border-accent transition-colors">
                      Explore Collection
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* ═════ Gold Border Accent (hover) ═════ */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent/0 group-hover:border-accent/60 transition-all duration-500" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent/0 group-hover:border-accent/60 transition-all duration-500" />
              </Link>
            </motion.div>
          ))}

          {/* ═════ Bespoke CTA Card ═════ */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-2 lg:col-span-4 relative overflow-hidden bg-primary rounded-sm min-h-[300px] lg:min-h-[350px] mt-4 lg:mt-6"
          >
            {/* Abstract Gold Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] transform -translate-x-1/3 translate-y-1/3 pointer-events-none" />

            {/* Geometric Lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

            <div className="relative z-10 h-full flex flex-col lg:flex-row justify-between items-center text-center lg:text-left p-10 lg:p-16 gap-8">
              <div className="space-y-6 max-w-2xl">
                {/* Decorative Label */}
                <div className="inline-flex items-center gap-3 text-accent/80">
                  <span className="w-12 h-px bg-accent/40" />
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Custom Manufacturing</span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-luxury text-white leading-tight">
                  Bespoke Orders <span className="italic text-accent">Available</span><span className="hidden lg:inline">.</span>
                </h3>

                <p className="text-white/60 text-base sm:text-lg font-light max-w-md leading-relaxed">
                  Looking for something unique? Create custom hardware tailored to your exact specifications. From concept to delivery.
                </p>
              </div>

              <div className="flex-shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-accent text-primary px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-accent-hover hover:shadow-gold transition-all duration-500 shadow-lg group"
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-8 left-8 w-1 h-12 bg-accent/30" />
            <div className="absolute top-8 left-8 w-12 h-1 bg-accent/30" />
            <div className="absolute bottom-8 right-8 w-1 h-12 bg-accent/30" />
            <div className="absolute bottom-8 right-8 w-12 h-1 bg-accent/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
