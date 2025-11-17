import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-main.jpg";

const Hero = () => {
  return (
    <section className="relative bg-hero-bg overflow-hidden">
      <div className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
        {/* Hero Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Glass Skin Duo Luxury Skincare Collection"
            className="w-full h-full object-cover animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-hero-bg/80 via-hero-bg/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif italic text-brand-burgundy leading-tight animate-fade-in" style={{ animationDelay: '0.3s' }}>
                Glass Skin Duo
              </h1>
              <p className="text-lg lg:text-xl text-foreground tracking-widest font-light animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Two Icons, One Ritual
              </p>
              <p className="text-base text-muted-foreground max-w-md leading-relaxed animate-fade-in" style={{ animationDelay: '0.5s' }}>
                Discover the secret to radiant, glass-like skin with our award-winning duo. 
                Experience the transformation that thousands love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Button 
                  className="bg-brand-burgundy hover:bg-brand-burgundy/90 text-primary-foreground px-8 py-6 text-base font-medium tracking-wider group hover-scale"
                  size="lg"
                >
                  SHOP NOW
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-foreground hover:bg-foreground hover:text-background px-8 py-6 text-base font-medium tracking-wider hover-scale"
                  size="lg"
                >
                  LEARN MORE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
