import { Badge, Globe, Package, Shield, Truck, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Quality Assured",
    description: "ISO certified manufacturing with strict quality control at every stage",
  },
  {
    icon: Globe,
    title: "Global Export",
    description: "Serving 20+ countries with reliable international shipping",
  },
  {
    icon: Package,
    title: "Custom Manufacturing",
    description: "Logo buttons, custom colors, and sizes as per your requirements",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick turnaround times with express shipping options available",
  },
  {
    icon: Badge,
    title: "Premium Materials",
    description: "High-grade materials sourced from trusted suppliers",
  },
  {
    icon: Zap,
    title: "Quick Response",
    description: "24-hour response time for all inquiries and quote requests",
  },
];

const Features = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-accent">SAIMPEX</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-leading service and quality that sets us apart
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50"
              >
                <CardContent className="p-8">
                  <div className="mb-4 inline-block p-4 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
