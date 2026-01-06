import { Badge, Shield, Truck, Zap, Target, Globe, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Quality Assured",
    description: "ISO certified manufacturing with strict quality control at every stage of production",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "7-14 days turnaround with express shipping options for urgent orders",
  },
  {
    icon: Badge,
    title: "Premium Materials",
    description: "High-grade materials sourced from trusted suppliers with quality certifications",
  },
  {
    icon: Zap,
    title: "Quick Response",
    description: "Average 2-hour response time for all inquiries and quote requests",
  },
];

const Features = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-2">
            <Target className="h-4 w-4" />
            <span className="text-sm font-semibold font-display tracking-wide uppercase">Why Choose Us</span>
          </div>
          <h2 className="font-display">
            The Saimpex <span className="bg-gradient-accent bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>Advantage</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-body">
            Industry-leading service and quality that makes us the preferred partner for manufacturers worldwide.
          </p>
        </div>

        {/* Features Grid - Clean 4-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-3xl glass border border-border/50 hover:border-accent/30 hover-lift"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-accent flex items-center justify-center text-white mb-6 shadow-glow group-hover:scale-110 transition-transform">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-xl font-bold font-display text-foreground mb-3">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed font-body">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats - Simplified Clean Look */}
        <div className="mt-20 pt-10 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { val: "500+", label: "Happy Clients" },
            { val: "50M+", label: "Buttons Produced" },
            { val: "20+", label: "Years Experience" },
            { val: "24/7", label: "Priority Support" }
          ].map((stat, i) => (
            <div key={i} className="text-center group cursor-default">
              <div className="text-4xl md:text-5xl font-bold font-display text-accent mb-2">{stat.val}</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider font-body">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
