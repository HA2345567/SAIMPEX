import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    document.title = "Page Not Found | SAIMPEX";
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background font-body">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center pt-32 pb-24 px-6 text-center">
        <div className="max-w-md space-y-8 p-12 bg-white/50 border border-border backdrop-blur-sm rounded-none shadow-xl">
          <span className="text-[12px] font-bold tracking-[0.4em] uppercase text-accent/80 block">
            Error Code 404
          </span>
          <h1 className="text-6xl md:text-7xl font-serif text-primary tracking-tight">
            Lost <span className="italic text-accent">Threads.</span>
          </h1>
          <p className="text-stone-600 font-light leading-relaxed">
            The collection, spec sheet, or route you are looking for does not exist in our system logs.
          </p>
          <Button asChild className="h-14 px-8 bg-primary text-white hover:bg-primary/90 font-medium w-full">
            <Link to="/" className="inline-flex items-center gap-2 justify-center">
              Return to Home <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
