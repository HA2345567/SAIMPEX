import { ShieldCheck, Truck, Gem, Clock, ArrowUpRight, Download, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const features = [
  {
    icon: Gem,
    title: "Premium Materials",
    description: "Sourced from the world's finest mines. We utilize high-grade Zinc Alloy, Natural Shells, and Sustainable Polyesters for an unmatched finish.",
    index: "01"
  },
  {
    icon: Globe,
    title: "Global Logistics",
    description: "Expedited shipping to 50+ countries with real-time tracking. Your products arrive on time, every time.",
    index: "02"
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "ISO 9001:2015 certified processes with 3-stage visual inspection. Zero compromise on excellence.",
    index: "03"
  },
  {
    icon: Clock,
    title: "Rapid Turnaround",
    description: "From concept to prototype in 48 hours. Speed without compromise, quality without question.",
    index: "04"
  }
];

const stats = [
  { val: "500+", label: "Global Partners" },
  { val: "20+", label: "Years Experience" },
  { val: "50M", label: "Monthly Capacity" },
  { val: "ISO", label: "Certified 9001:2015" }
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

const Features = () => {
  return (
    <section className="relative py-0 bg-background text-primary overflow-hidden">
      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-0">
        {/* ═════ Editorial Layout: Side Header + Grid ═════ */}
        <div className="flex flex-col lg:flex-row">
          {/* Left Panel: Sticky Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[40%] xl:w-[35%] p-8 lg:p-12 xl:p-16 flex flex-col justify-between bg-background relative"
          >
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
              <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
            </div>

            <div className="space-y-8 relative z-10">
              {/* Decorative Label */}
              <div className="flex items-center gap-4">
                <span className="w-10 h-px bg-accent" />
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-accent">
                  Our Promise
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-luxury leading-[1.05] text-primary">
                The <span className="italic text-accent">Fine</span> <br />
                Print<span className="hidden lg:inline">.</span>
              </h2>

              <p className="text-muted-foreground text-base lg:text-lg font-light leading-relaxed max-w-sm">
                Refining the details that the world's best fashion houses rely on. Every thread, every finish, every standard upheld.
              </p>
            </div>

            <div className="hidden lg:block pt-12 relative z-10">
              <Button
                variant="link"
                className="text-primary p-0 text-base font-medium decoration-border hover:text-accent hover:decoration-accent transition-colors group"
              >
                Download Company Profile
                <Download className="ml-3 w-4 h-4 group-hover:translate-x-0.5 transition-transform text-accent" />
              </Button>
            </div>
          </motion.div>

          {/* Right Border */}
          <div className="hidden lg:block w-px border-l border-border" />

          {/* Right Panel: 2x2 Grid */}
          <div className="w-full lg:w-[60%] xl:w-[65%]">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2"
            >
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className={`
                      group relative p-10 lg:p-12 xl:p-16 bg-background hover:bg-card transition-colors duration-500
                      border-b border-border
                      ${i === 0 || i === 2 ? 'md:border-r border-border' : ''}
                      ${i === 0 ? 'border-b border-border' : ''}
                      ${i < 2 ? 'md:border-b border-border' : ''}
                    `}
                  >
                    {/* Index Number */}
                    <div className="flex justify-between items-start mb-10">
                      <span className="text-sm font-luxury font-bold text-muted-foreground/40 group-hover:text-accent transition-colors duration-300">
                        {feature.index}
                      </span>
                      <div className="p-3 rounded-full bg-secondary group-hover:bg-accent group-hover:text-primary transition-all duration-500 border border-border group-hover:border-accent">
                        <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary stroke-[1.5] transition-colors duration-300" />
                      </div>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-luxury mb-4 text-primary group-hover:text-accent transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-muted-foreground text-sm lg:text-base leading-relaxed font-light">
                      {feature.description}
                    </p>

                    {/* Bottom Gold Line (hover) */}
                    <div className="absolute bottom-0 left-0 h-1 bg-accent w-0 group-hover:w-full transition-all duration-700 ease-out origin-left" />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* ═════ Stats Bar ═════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-y border-border grid grid-cols-2 md:grid-cols-4 divide-x divide-border bg-secondary/30"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="py-12 lg:py-16 px-6 text-center group hover:bg-card transition-colors duration-500"
            >
              <div className="text-3xl lg:text-4xl xl:text-5xl font-luxury text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                {stat.val}
              </div>
              <div className="text-[10px] lg:text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground group-hover:text-primary transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
