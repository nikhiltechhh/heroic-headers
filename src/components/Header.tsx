import { Menu, Search, User, Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Shop", href: "#shop" },
    { name: "Best Sellers", href: "#bestsellers" },
    { name: "Build Your Own Bundle", href: "#bundle" },
    { name: "About", href: "#about" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop Navigation - Left */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Logo - Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none">
            <a href="/" className="text-2xl lg:text-3xl font-light tracking-[0.3em] text-foreground">
              AXIS-Y
            </a>
          </div>

          {/* Icons - Right */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            <Button variant="ghost" size="icon" className="hidden sm:flex" aria-label="Account">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex" aria-label="Wishlist">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Cart">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <div className="hidden lg:block text-sm font-medium tracking-wider">KR</div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
