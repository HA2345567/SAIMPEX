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
    <div className="min-h-screen flex flex-col bg-background font-body">
      <Header />
      <main className="flex-1 w-full overflow-x-hidden">
        <Hero />
        <CategoryShowcase />
        <FeaturedProducts />
        {/* <Features /> */}
        {/* <CTASection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
