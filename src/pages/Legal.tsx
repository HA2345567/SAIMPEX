import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, FileText, Scale } from "lucide-react";

const Legal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Legal Information | SAIMPEX";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background font-body">
      <Header />

      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="hover:bg-accent/10 hover:text-accent gap-2">
              <Link to="/">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </Link>
            </Button>
          </div>

          {/* Heading */}
          <div className="border-b border-border pb-8 mb-12">
            <h1 className="text-4xl md:text-5xl font-serif text-primary tracking-tight mb-4">
              Legal <span className="italic text-accent">Briefing.</span>
            </h1>
            <p className="text-stone-600 font-light text-lg">
              Terms of Trade, Privacy Policies, and Cookie Disclosures for SAIMPEX clients and ateliers worldwide.
            </p>
          </div>

          {/* Content sections */}
          <div className="space-y-16">
            {/* Terms of Trade */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 text-accent">
                <Scale className="w-6 h-6" />
                <h2 className="text-2xl font-serif text-primary">Terms of Trade</h2>
              </div>
              <div className="text-stone-700 space-y-4 font-light leading-relaxed">
                <p>
                  All transactions, sample requests, and custom mold commissions are subject to our standard export policies. Wholesale contracts require a Minimum Order Quantity (MOQ) as detailed on individual product specification sheets.
                </p>
                <p>
                  Payment conditions are negotiated per contract, typically structured as a percentage down payment with remaining balances due upon bill of lading. Production slots are allocated exclusively upon confirmation of deposit clearances.
                </p>
              </div>
            </section>

            {/* Privacy Policy */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 text-accent">
                <Shield className="w-6 h-6" />
                <h2 className="text-2xl font-serif text-primary">Privacy & Confidentiality</h2>
              </div>
              <div className="text-stone-700 space-y-4 font-light leading-relaxed">
                <p>
                  At SAIMPEX, we understand the critical nature of intellectual property in couture and retail fashion design. All custom stamp molds, branded button castings, and prototype files are protected under strict Non-Disclosure Agreements (NDAs).
                </p>
                <p>
                  We collect customer contact coordinates and inquiry history solely to process orders and coordinate priority logistics. We never distribute, sell, or disclose proprietary design blueprints or client portfolios to third-party brokers.
                </p>
              </div>
            </section>

            {/* Cookies Disclosure */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 text-accent">
                <FileText className="w-6 h-6" />
                <h2 className="text-2xl font-serif text-primary">Cookies & Analytics</h2>
              </div>
              <div className="text-stone-700 space-y-4 font-light leading-relaxed">
                <p>
                  This digital folio uses basic session tokens and web storage parameters to cache catalog navigation and support administrator portal authorizations. We do not engage in invasive behavioral tracking or cross-site profiling.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Legal;
