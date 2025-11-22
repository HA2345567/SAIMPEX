import { Badge, Globe, Package, Shield, Truck, Zap, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Quality Assured",
    description: "ISO certified manufacturing with strict quality control at every stage of production",
    gradient: "from-blue-500/10 to-purple-500/10",
  },
  {
    icon: Globe,
    title: "Global Export",
    description: "Serving 20+ countries with reliable international shipping and export documentation",
    gradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    icon: Package,
    title: "Custom Manufacturing",
    description: "Logo buttons, custom colors, and sizes tailored to your specific requirements",
    gradient: "from-orange-500/10 to-red-500/10",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "7-14 days turnaround with express shipping options for urgent orders",
    gradient: "from-cyan-500/10 to-blue-500/10",
  },
  {
    icon: Badge,
    title: "Premium Materials",
    description: "High-grade materials sourced from trusted suppliers with quality certifications",
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: Zap,
    title: "Quick Response",
    description: "Average 2-hour response time for all inquiries and quote requests",
    gradient: "from-yellow-500/10 to-orange-500/10",
  },
];

const Features = () => {
  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <Target className="h-4 w-4 text-accent" />
            <span className="text-sm font-semibold text-accent">Our Advantages</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Why Choose <span className="text-accent">SAIMPEX</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-leading service and quality that makes us the preferred partner for manufacturers worldwide
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-card overflow-hidden animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 space-y-4">
                  {/* Icon with Gradient Background */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-display font-bold group-hover:text-accent transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <div className="h-1 w-12 bg-gradient-to-r from-accent to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center space-y-2 animate-fade-in">
            <div className="text-4xl font-display font-bold text-accent">500+</div>
            <p className="text-sm text-muted-foreground">Happy Clients</p>
          </div>
          <div className="text-center space-y-2 animate-fade-in delay-100">
            <div className="text-4xl font-display font-bold text-accent">50M+</div>
            <p className="text-sm text-muted-foreground">Buttons Produced</p>
          </div>
          <div className="text-center space-y-2 animate-fade-in delay-200">
            <div className="text-4xl font-display font-bold text-accent">15+</div>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div className="text-center space-y-2 animate-fade-in delay-300">
            <div className="text-4xl font-display font-bold text-accent">20+</div>
            <p className="text-sm text-muted-foreground">Countries Served</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
