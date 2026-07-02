import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CategoryShowcase from "@/components/CategoryShowcase";
import FeaturedProducts from "@/components/FeaturedProducts";
import Features from "@/components/Features";
import CTASection from "@/components/CTASection";

const Index = () => {
  useEffect(() => {
    document.title = "SAIMPEX - Premium Button Wholesale & Garment Accessories";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans-elegant">
      <Header />
      <main className="flex-1 w-full overflow-x-hidden">
        {/* Hero - Full viewport editorial intro */}
        <Hero />

        {/* Category Showcase - Editorial product Grid */}
        <CategoryShowcase />

        {/* Featured Products - Best Sellers with Hover Interactions */}
        <FeaturedProducts />

        {/* Features - Trust Indicators and Value Props */}
        <Features />

        {/* CTA - Premium Invitation Section */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
