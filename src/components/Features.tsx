import { BadgeCheck, ShieldCheck, Truck, Clock, Gem, Globe2, Award, Zap } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description: "ISO certified manufacturing with strict quality control at every stage.",
  },
  {
    icon: Truck,
    title: "Global Logistics",
    description: "Expedited shipping to over 50 countries with real-time tracking.",
  },
  {
    icon: Gem,
    title: "Premium Materials",
    description: "Sourced from the finest suppliers for unmatched durability and finish.",
  },
  {
    icon: Clock,
    title: "Rapid Turnaround",
    description: "From prototype to production in record time, meeting your deadlines.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-medium rounded-full bg-accent/5 text-accent border border-accent/10 mb-4 tracking-wider uppercase font-display">
            Why Partner With Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-foreground">
            The Saimpex <span className="text-accent relative">Advantage</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-body">
            Setting the standard for excellence in garment accessory manufacturing.
          </p>
        </div>

        {/* Features Grid - Refined */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border/40 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-lg font-bold font-display text-foreground mb-3">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed font-body">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats - Minimal & Premium */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border/40">
          {[
            { val: "500+", label: "Global Partners" },
            { val: "50M+", label: "Buttons Shipped" },
            { val: "20+", label: "Years Excellence" },
            { val: "2hr", label: "Response Time" }
          ].map((stat, i) => (
            <div key={i} className="text-center px-4">
              <div className="text-4xl font-bold font-display text-foreground mb-1 tracking-tight">{stat.val}</div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest font-body">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
