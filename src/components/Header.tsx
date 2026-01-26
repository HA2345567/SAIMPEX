import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled
        ? "bg-background/95 border-primary/5 shadow-sm py-4"
        : "bg-transparent border-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">

          {/* Left: Logo & Nav */}
          <div className="flex items-center gap-12">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src="/images/logo-new.png" alt="S. A. IMPEX Logo" className="h-24 w-auto" />
              <span className="text-3xl font-serif font-bold tracking-tight text-primary">
                S. A. IMPEX<span className="text-accent">.</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/products"
                className="text-sm font-medium text-primary/80 hover:text-accent transition-colors flex items-center gap-1"
              >
                Products
              </Link>
              <Link
                to="/catalog"
                className="text-sm font-medium text-primary/80 hover:text-accent transition-colors"
              >
                Catalog
              </Link>
              <Link
                to="/contact"
                className="text-sm font-medium text-primary/80 hover:text-accent transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Right: Actions */}
          <div className="hidden md:flex items-center gap-6">
            <button className="text-primary hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <div className="h-4 w-px bg-border/60" />

            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-sm font-bold text-primary hover:text-accent transition-colors">
                  Log In
                </button>
              </SignInButton>
              <Button className="rounded-none bg-primary text-white hover:bg-primary/90 font-medium px-6 py-5">
                <Link to="/contact">Get Quote</Link>
              </Button>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-primary hover:bg-secondary/50 rounded-md transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border/40 p-6 shadow-xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4">
            <Link to="/products" className="text-lg font-serif font-medium text-primary">Products</Link>
            <Link to="/catalog" className="text-lg font-serif font-medium text-primary">Catalog</Link>
            <Link to="/contact" className="text-lg font-serif font-medium text-primary">Contact</Link>
            <div className="h-px bg-border/60 my-2" />
            <Button className="w-full rounded-none bg-primary text-white py-6 text-lg font-serif">
              Inquire Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;