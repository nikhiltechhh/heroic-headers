import { Menu, Search, User, Heart, ShoppingBag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { name: "Shop", href: "#shop" },
    { name: "Best Sellers", href: "#bestsellers" },
    { name: "Build Your Own Bundle", href: "#bundle" },
    { name: "About", href: "#about" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <>
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 z-50 relative transition-transform hover:scale-110"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 animate-scale-in" />
              ) : (
                <Menu className="h-6 w-6 animate-scale-in" />
              )}
            </button>

            {/* Desktop Navigation - Left */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-all duration-300 text-sm font-medium tracking-wide relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Logo - Center */}
            <div className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none">
              <a href="/" className="text-2xl lg:text-3xl font-light tracking-[0.3em] text-foreground transition-all duration-300 hover:tracking-[0.35em]">
                AXIS-Y
              </a>
            </div>

            {/* Icons - Right */}
            <div className="flex items-center space-x-4 lg:space-x-6">
              <Button variant="ghost" size="icon" className="hidden sm:flex hover-scale" aria-label="Account">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-scale" aria-label="Search">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hidden sm:flex hover-scale" aria-label="Wishlist">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover-scale" aria-label="Cart">
                <ShoppingBag className="h-5 w-5" />
              </Button>
              <div className="hidden lg:block text-sm font-medium tracking-wider">KR</div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-16 left-0 right-0 bottom-0 bg-card z-40 lg:hidden animate-slide-in-right overflow-y-auto">
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col space-y-6">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-all duration-300 text-lg font-medium py-3 border-b border-border hover:border-primary animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                
                {/* Mobile Menu Additional Options */}
                <div className="pt-6 flex flex-col space-y-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <Button variant="outline" className="w-full justify-start space-x-3 h-12">
                    <User className="h-5 w-5" />
                    <span>My Account</span>
                  </Button>
                  <Button variant="outline" className="w-full justify-start space-x-3 h-12">
                    <Heart className="h-5 w-5" />
                    <span>Wishlist</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
