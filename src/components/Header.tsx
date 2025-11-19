import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              SAIMPEX
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/catalog" className="text-foreground hover:text-primary transition-colors font-medium">
              Catalog
            </Link>
            <Link to="/products" className="text-foreground hover:text-primary transition-colors font-medium">
              Products
            </Link>
            <Link to="/gallery" className="text-foreground hover:text-primary transition-colors font-medium">
              Gallery
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+1234567890" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              +91 123 456 7890
            </a>
            <Button variant="premium" size="lg">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              to="/"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/catalog"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Catalog
            </Link>
            <Link
              to="/products"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/gallery"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 space-y-3">
              <a href="tel:+1234567890" className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mr-2" />
                +91 123 456 7890
              </a>
              <Button variant="premium" className="w-full">
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
