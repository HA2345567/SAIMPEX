import { ShieldCheck, Truck, Gem, Clock, ArrowUpRight, Globe, Leaf, Zap, Fingerprint, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Gem,
    title: "Premium Materials",
    description: "Sourced from the world's finest mines. We utilize high-grade Zinc Alloy, Natural Shells, and Sustainable Polyesters for an unmatched finish.",
    index: "01"
  },
  {
    icon: Truck,
    title: "Global Logistics",
    description: "Expedited shipping to 50+ countries with real-time tracking.",
    index: "02"
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description: "ISO 9001:2015 certified processes with 3-stage visual inspection.",
    index: "03"
  },
  {
    icon: Clock,
    title: "Rapid Turnaround",
    description: "From concept to prototype in 48 hours. Speed without compromise.",
    index: "04"
  }
];

const Features = () => {
  return (
    <section className="py-0 bg-[#EBE9E4] text-slate-900 relative">
      <div className="container mx-auto px-0">

        {/* Editorial Layout: Side Header + Grid */}
        <div className="flex flex-col lg:flex-row border-t border-stone-300">

          {/* Left Panel: Sticky Title (Desktop) */}
          <div className="w-full lg:w-1/3 lg:border-r border-stone-300 p-12 lg:p-16 flex flex-col justify-between bg-[#EBE9E4]">
            <div className="space-y-8">
              <span className="block text-xs font-bold tracking-[0.3em] uppercase text-stone-500">
                Our Promise
              </span>
              <h2 className="text-5xl md:text-6xl font-serif leading-[1.1] text-slate-900">
                The <span className="italic text-stone-500">Fine</span> <br />
                Print.
              </h2>
              <p className="text-lg text-stone-600 font-light leading-relaxed max-w-xs">
                Refining the details that the world's best fashion houses rely on.
              </p>
            </div>
            <div className="hidden lg:block pt-20">
              <Button variant="link" className="text-slate-900 p-0 text-lg decoration-stone-400 hover:text-stone-500 transition-colors">
                Download Company Profile <ArrowUpRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right Panel: 2x2 Grid */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className={`
                                group relative p-12 lg:p-16 border-stone-300 bg-[#EBE9E4] hover:bg-[#E5E2DC] transition-colors duration-500
                                border-b md:border-b-0
                                ${i === 0 ? 'md:border-r md:border-b' : ''}
                                ${i === 1 ? 'md:border-b' : ''}
                                ${i === 2 ? 'md:border-r' : ''}
                                ${i === 3 ? '' : ''}
                            `}
                >
                  <div className="flex justify-between items-start mb-12">
                    <span className="text-sm font-serif font-bold text-stone-400">{feature.index}</span>
                    <Icon className="w-8 h-8 text-stone-800 stroke-[1.5]" />
                  </div>

                  <h3 className="text-2xl font-serif mb-4 text-slate-900">{feature.title}</h3>
                  <p className="text-stone-600 leading-relaxed font-sans">{feature.description}</p>

                  {/* Hover Reveal Line */}
                  <div className="absolute bottom-0 left-0 h-1 bg-stone-900 w-0 group-hover:w-full transition-all duration-700 ease-out" />
                </div>
              );
            })}
          </div>

        </div>

        {/* Minimal Stats Bar */}
        <div className="border-y border-stone-300 grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-300 bg-[#EBE9E4]">
          {[
            { val: "500+", label: "Global Partners" },
            { val: "20+", label: "Years Experience" },
            { val: "50M", label: "Monthly Capacity" },
            { val: "ISO", label: "Certified 9001:2015" }
          ].map((stat, i) => (
            <div key={i} className="py-12 px-6 text-center group hover:bg-[#E5E2DC] transition-colors">
              <div className="text-3xl md:text-4xl font-serif text-slate-900 mb-2">{stat.val}</div>
              <div className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-stone-500">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
