import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroProductLeft from "@/assets/hero-product-left.jpg";
import heroModelRight from "@/assets/hero-model-right.jpg";

const Hero = () => {
  return (
    <section className="relative bg-hero-bg overflow-hidden">
      <div className="container mx-auto px-0 lg:px-8">
        <div className="grid lg:grid-cols-2 min-h-[500px] lg:min-h-[600px]">
          {/* Left Side - Product Image */}
          <div className="relative overflow-hidden">
            <img
              src={heroProductLeft}
              alt="Glass Skin Duo Product Set"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Model Image */}
          <div className="relative overflow-hidden">
            <img
              src={heroModelRight}
              alt="Model with Glass Skin Duo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Centered Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 py-8 bg-hero-bg/60 backdrop-blur-sm rounded-lg max-w-lg">
              <h1 className="text-5xl lg:text-7xl font-serif italic text-brand-burgundy mb-2">
                Glass Skin Duo
              </h1>
              <p className="text-sm lg:text-base text-foreground mb-6 tracking-wider">
                Two Icons, One Ritual
              </p>
              <Button 
                className="bg-brand-burgundy hover:bg-brand-burgundy/90 text-primary-foreground px-8 py-6 text-base font-medium tracking-wider group"
                size="lg"
              >
                SHOP NOW
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
