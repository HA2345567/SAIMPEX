import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag, ChevronDown } from "lucide-react";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "glass border-b border-border/50 shadow-md py-3"
        : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* 1. Logo Section (Left) */}
          {/* 1. Logo Section (Left) */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo.png"
              alt="Saimpex Logo"
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <span className="text-xl font-bold font-display tracking-tight text-foreground group-hover:text-accent transition-colors">
              SAIMPEX
            </span>
          </Link>

          {/* 2. Navigation Section (Centered) */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <Link to="/" className="text-sm font-semibold font-display text-muted-foreground hover:text-accent transition-colors">
              Home
            </Link>

            <Link to="/products" className="text-sm font-semibold font-display text-muted-foreground hover:text-accent transition-colors">
              Products
            </Link>

            <Link to="/catalog" className="text-sm font-semibold font-display text-muted-foreground hover:text-accent transition-colors">
              Catalog
            </Link>

            <Link to="/contact" className="text-sm font-semibold font-display text-muted-foreground hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>

          {/* 3. Actions Section (Right) */}
          <div className="hidden md:flex items-center gap-4">
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="ghost" className="font-semibold font-display text-muted-foreground hover:text-foreground">
                  Sign In
                </Button>
              </SignInButton>
              <Button className="bg-gradient-accent text-white font-semibold font-display rounded-xl px-6 h-10 shadow-lg shadow-accent/20 hover:shadow-glow hover:-translate-y-0.5 transition-all" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </SignedOut>

            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-9 h-9 border-2 border-border hover:border-accent transition-colors"
                  }
                }}
              />
            </SignedIn>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass border-b border-border/50 p-4 shadow-xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-2">
            <Link to="/" className="p-3 rounded-xl hover:bg-muted text-foreground font-semibold font-display">Home</Link>
            <Link to="/products" className="p-3 rounded-xl hover:bg-muted text-foreground font-semibold font-display">
              Products
            </Link>
            <Link to="/catalog" className="p-3 rounded-xl hover:bg-muted text-foreground font-semibold font-display">
              Catalog
            </Link>
            <Link to="/contact" className="p-3 rounded-xl hover:bg-muted text-foreground font-semibold font-display">Contact</Link>

            <div className="h-px bg-border my-2" />

            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="ghost" className="w-full justify-start px-3 mb-2 font-semibold font-display">
                  Sign In
                </Button>
              </SignInButton>
              <Button className="w-full bg-gradient-accent text-white font-semibold font-display" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </SignedOut>
            <SignedIn>
              <div className="flex justify-start px-3">
                <UserButton showName />
              </div>
            </SignedIn>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
