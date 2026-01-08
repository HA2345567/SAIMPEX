import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ShieldCheck, Sparkles, CheckCircle2, TrendingUp, Globe, Award, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">

      {/* Base Background - Clean White */}
      <div className="absolute inset-0 bg-background" />

      {/* Spotlight Effect - Aceternity Style */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(223, 153, 87, 0.15), transparent 80%)`,
        }}
      />

      {/* Animated Grid Background - Aceternity Style */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>

      {/* Enhanced Animated Orbs with Gradient */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Top Left - Warm Bronze */}
        <div
          className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl animate-pulse"
          style={{
            animationDuration: '6s',
            background: 'radial-gradient(circle, hsla(30, 61%, 50%, 0.4) 0%, hsla(35, 70%, 45%, 0.2) 40%, transparent 70%)',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />

        {/* Center - Gold Glow */}
        <div
          className="absolute top-1/3 left-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl animate-pulse"
          style={{
            animationDuration: '8s',
            animationDelay: '1s',
            background: 'radial-gradient(circle, hsla(35, 70%, 45%, 0.3) 0%, hsla(30, 61%, 50%, 0.15) 50%, transparent 70%)',
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        />

        {/* Bottom Right - Deep Industrial Blue */}
        <div
          className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl animate-pulse"
          style={{
            animationDuration: '7s',
            animationDelay: '2s',
            background: 'radial-gradient(circle, hsla(215, 28%, 17%, 0.3) 0%, hsla(220, 13%, 13%, 0.15) 50%, transparent 70%)',
            transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`
          }}
        />

        {/* Additional accent orbs */}
        <div
          className="absolute top-2/3 left-1/4 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl animate-pulse"
          style={{
            animationDuration: '9s',
            animationDelay: '3s',
            background: 'radial-gradient(circle, hsla(30, 61%, 50%, 0.25) 0%, transparent 60%)',
            transform: `translate(${mousePosition.x * 0.008}px, ${mousePosition.y * 0.008}px)`
          }}
        />
      </div>

      {/* Subtle Noise Texture for Depth */}
      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Content Section */}
          <div className="flex flex-col items-start text-left space-y-8">

            {/* Animated Badge with Shimmer Effect */}
            <div className="relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-accent/30 backdrop-blur-xl overflow-hidden group">
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <Award className="w-4 h-4 text-accent relative z-10" />
              <span className="text-sm font-semibold font-display tracking-wide text-accent relative z-10">Premier B2B Exporter Since 2013</span>
            </div>

            {/* Main Headline with Gradient Animation */}
            <div className="space-y-6">
              <h1 className="font-display font-bold tracking-tight text-balance leading-[1.05]">
                <span className="block animate-fade-in-up">
                  Premium Garment
                </span>
                <span className="block relative mt-2 animate-fade-in-up animation-delay-200">
                  <span
                    className="relative bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent animate-gradient"
                    style={{
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      backgroundSize: '200% 100%'
                    }}
                  >
                    Accessories
                  </span>
                  {/* Animated Underline */}
                  <div className="absolute -bottom-3 left-0 w-full h-1 overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-accent/0 via-accent to-accent/0 animate-shimmer" />
                  </div>
                </span>
                <span className="block text-muted-foreground text-3xl md:text-4xl lg:text-5xl font-medium mt-3 animate-fade-in-up animation-delay-400">
                  for Global Fashion
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed max-w-xl animate-fade-in-up animation-delay-600">
                Supplying wholesalers and exporters worldwide with premium buttons, zippers, buckles, ring adjusters, hooks and all garment accessories.
              </p>

              {/* Trust Indicator with Avatar Stack */}
              <div className="flex items-center gap-3 text-foreground animate-fade-in-up animation-delay-800">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent/60 border-2 border-background flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <Users className="w-5 h-5 text-white" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-accent">100+ Global Brands</span>
                  <span className="text-xs text-muted-foreground">Trust Our Quality</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons with Hover Effects */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4 animate-fade-in-up animation-delay-1000">
              <Button
                size="lg"
                className="relative h-14 px-8 rounded-xl bg-gradient-to-r from-accent to-accent/90 text-white font-semibold shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
                asChild
              >
                <Link to="/contact">
                  {/* Animated Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative z-10 flex items-center gap-2">
                    Get a Quote
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="relative h-14 px-8 rounded-xl border-2 border-border/50 font-semibold hover:bg-accent/5 hover:border-accent/50 transition-all duration-300 group overflow-hidden"
                asChild>
                <Link to="/catalog">
                  <span className="relative z-10">View Catalog</span>
                  {/* Border Animation */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 rounded-xl border-2 border-accent/50 animate-pulse" />
                  </div>
                </Link>
              </Button>
            </div>

            {/* Stats Grid with Hover Animation */}
            <div className="grid grid-cols-3 gap-8 pt-8 w-full max-w-lg animate-fade-in-up animation-delay-1200">
              {[
                { value: "100+", label: "Global Clients" },
                { value: "10+", label: "Years Experience" },
                { value: "1M+", label: "Units Annually" }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="relative group cursor-pointer"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                  <div className="relative space-y-1.5">
                    <div className="text-4xl font-bold font-display bg-gradient-to-br from-accent to-accent/70 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual Content with Aceternity Effects */}
          <div className="relative animate-fade-in-up animation-delay-400">

            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-accent/20 group">

              <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                <img
                  src="/images/hero-premium.png"
                  alt="Premium Garment Accessories - Buttons, Zippers, and Hardware"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 mix-blend-overlay" />

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>
              </div>
            </div>



          </div>

        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes aurora {
          0%, 100% {
            background-position: 0% 50%;
            opacity: 0.4;
          }
          25% {
            background-position: 50% 25%;
            opacity: 0.5;
          }
          50% {
            background-position: 100% 50%;
            opacity: 0.4;
          }
          75% {
            background-position: 50% 75%;
            opacity: 0.3;
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          50% {
            transform: translateY(-100px) translateX(20px);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        
        .animation-delay-800 {
          animation-delay: 800ms;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        
        .animation-delay-1200 {
          animation-delay: 1200ms;
        }
        
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        
        .animate-aurora {
          animation: aurora 15s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-float-particle {
          animation: float-particle 4s ease-in-out infinite;
        }
        
        .bg-grid-white\/\[0\.02\] {
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
        }
      `}</style>
    </div>
  );
};

export default Hero;