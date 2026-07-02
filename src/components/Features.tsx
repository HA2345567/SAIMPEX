import { motion } from "framer-motion";
import { Globe, Award, Clock, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Export",
    description: "Delivering to 50+ countries with reliable logistics and real-time tracking."
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "ISO 9001:2015 certified manufacturing with rigorous quality control."
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "From concept to prototype in 48 hours. Production within 2-4 weeks."
  },
  {
    icon: ShieldCheck,
    title: "Quality Guarantee",
    description: "3-stage visual inspection on every order. Zero compromise on standards."
  }
];

const stats = [
  { value: "500+", label: "Partners" },
  { value: "20+", label: "Years" },
  { value: "50M", label: "Monthly Capacity" },
  { value: "ISO", label: "Certified" }
];

const Features = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
            Why Us
          </span>
          <h2 className="text-4xl md:text-5xl font-luxury text-primary mt-4 mb-6">
            Built for Scale
          </h2>
          <p className="text-muted-foreground">
            Trusted by leading fashion houses worldwide for consistent quality and reliable delivery.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-20">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="text-center lg:text-left space-y-4"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-secondary rounded-sm mx-auto lg:mx-0">
                <feature.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-luxury text-xl text-primary">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-border bg-secondary/30 py-10 lg:py-0"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center py-6 lg:py-12"
            >
              <div className="text-3xl lg:text-4xl font-luxury text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
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
