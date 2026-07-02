import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Search } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled
        ? "bg-background/95 backdrop-blur-md border-border/25 shadow-md py-2"
        : "bg-transparent border-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-6">
        <div className={`flex items-center justify-between transition-all duration-500 relative ${
          isScrolled ? "h-14" : "h-20"
        }`}>

          {/* Left: Logo */}
          <div className="flex items-center shrink-0">
            <Link to="/" className="flex items-center gap-2 sm:gap-3">
              <img 
                src="/images/logo-new.png" 
                alt="S. A. IMPEX Logo" 
                className={`w-auto transition-all duration-500 ${
                  isScrolled ? "h-[44px] sm:h-[52px]" : "h-[60px] sm:h-[72px]"
                }`} 
              />
              <span className="text-xl sm:text-[26px] font-serif font-bold tracking-tight text-primary whitespace-nowrap">
                S. A. IMPEX<span className="text-accent">.</span>
              </span>
            </Link>
          </div>
 
          {/* Desktop Navigation (Centered) */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <Link
              to="/products"
              className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                location.pathname === "/products" || location.pathname.startsWith("/product/")
                  ? "text-accent"
                  : "text-primary/80 hover:text-accent"
              }`}
            >
              Products
            </Link>
            <Link
              to="/catalog"
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/catalog"
                  ? "text-accent"
                  : "text-primary/80 hover:text-accent"
              }`}
            >
              Catalog
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/contact"
                  ? "text-accent"
                  : "text-primary/80 hover:text-accent"
              }`}
            >
              Contact
            </Link>
          </nav>
 
          {/* Right: Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="text-primary hover:text-accent transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <div className="h-4 w-px bg-border/60" />
 
            <Button asChild className="bg-primary text-white hover:bg-primary/90 font-medium px-6 py-5">
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>
 
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-menu"
            className="lg:hidden p-2 text-primary hover:bg-secondary/50 rounded-md transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
 
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div id="mobile-nav-menu" className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border/40 p-6 shadow-xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4">
            <Link 
              to="/products" 
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg font-serif font-medium transition-colors ${
                location.pathname === "/products" || location.pathname.startsWith("/product/")
                  ? "text-accent"
                  : "text-primary"
              }`}
            >
              Products
            </Link>
            <Link 
              to="/catalog" 
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg font-serif font-medium transition-colors ${
                location.pathname === "/catalog"
                  ? "text-accent"
                  : "text-primary"
              }`}
            >
              Catalog
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg font-serif font-medium transition-colors ${
                location.pathname === "/contact"
                  ? "text-accent"
                  : "text-primary"
              }`}
            >
              Contact
            </Link>
            <div className="h-px bg-border/60 my-2" />
            <Button asChild className="w-full bg-primary text-white py-6 text-lg font-serif">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Inquire Now</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
