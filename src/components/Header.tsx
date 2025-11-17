import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, User, Heart, ShoppingBag, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { name: "Shop", href: "#Products" },
    { name: "Best Sellers", href: "#best" },
    { name: "About", href: "#about" },
    { name: "Blog", href: "/blog", isPage: true },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);

    if (href.startsWith("#")) {
      // If already on home page, scroll
      if (location.pathname === "/") {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to home page with hash
        navigate(`/${href}`);
      }
    } else {
      navigate(href);
    }
  };

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
              {mobileMenuOpen ? <X className="h-8 w-8 animate-scale-in" /> : <Menu className="h-8 w-8 animate-scale-in" />}
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) =>
                item.isPage ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground hover:text-primary transition-all duration-300 text-sm font-medium tracking-wide relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="text-foreground hover:text-primary transition-all duration-300 text-sm font-medium tracking-wide relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.name}
                  </button>
                )
              )}
            </div>

            {/* Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none">
              <Link
                to="/"
                className="text-2xl lg:text-3xl font-light tracking-[0.3em] text-foreground transition-all duration-300 hover:tracking-[0.35em]"
              >
                KITSAC
              </Link>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4 lg:space-x-6">
              <Button variant="ghost" className="hidden sm:flex hover-scale p-0" aria-label="Account">
                <div className="w-12 h-12 flex items-center justify-center">
                  <User className="w-8 h-8" />
                </div>
              </Button>
              <Button variant="ghost" className="hover-scale p-0" aria-label="Search">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Search className="w-8 h-8" />
                </div>
              </Button>
              <Button variant="ghost" className="hidden sm:flex hover-scale p-0" aria-label="Wishlist">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Heart className="w-8 h-8" />
                </div>
              </Button>
              <Button variant="ghost" className="hover-scale p-0" aria-label="Cart">
                <div className="w-12 h-12 flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8" />
                </div>
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40 lg:hidden animate-fade-in" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed top-16 left-0 right-0 bottom-0 bg-card z-40 lg:hidden animate-slide-in-right overflow-y-auto">
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col space-y-6">
                {navItems.map((item, index) =>
                  item.isPage ? (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-foreground hover:text-primary transition-all duration-300 text-lg font-medium py-3 border-b border-border hover:border-primary animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className="text-foreground hover:text-primary transition-all duration-300 text-lg font-medium py-3 border-b border-border hover:border-primary animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {item.name}
                    </button>
                  )
                )}

                <div className="pt-6 flex flex-col space-y-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                  <Button variant="outline" className="w-full justify-start space-x-3 h-12">
                    <User className="h-8 w-8" />
                    <span>My Account</span>
                  </Button>
                  <Button variant="outline" className="w-full justify-start space-x-3 h-12">
                    <Heart className="h-8 w-8" />
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
