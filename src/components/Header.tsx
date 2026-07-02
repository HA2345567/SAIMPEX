import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-12">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/images/logo-new.png"
              alt="S. A. IMPEX Logo"
              className={`w-auto transition-all duration-300 ${
                isScrolled ? "h-8" : "h-10"
              }`}
            />
            <span className="text-xl font-luxury font-medium tracking-tight text-primary">
              S. A. IMPEX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link
              to="/products"
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/products" || location.pathname.startsWith("/product/")
                  ? "text-primary"
                  : "text-primary/60 hover:text-primary"
              }`}
            >
              Products
            </Link>
            <Link
              to="/catalog"
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/catalog"
                  ? "text-primary"
                  : "text-primary/60 hover:text-primary"
              }`}
            >
              Catalog
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/contact"
                  ? "text-primary"
                  : "text-primary/60 hover:text-primary"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-5 py-2.5 h-10 transition-colors"
            >
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 text-primary hover:bg-secondary rounded-md transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 shadow-lg">
          <nav className="flex flex-col gap-4">
            <Link
              to="/products"
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-primary/80 hover:text-primary transition-colors"
            >
              Products
            </Link>
            <Link
              to="/catalog"
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-primary/80 hover:text-primary transition-colors"
            >
              Catalog
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-primary/80 hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <div className="h-px bg-border my-2" />
            <Button
              asChild
              className="w-full bg-primary text-primary-foreground py-6 text-sm font-medium"
            >
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Get Quote
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

