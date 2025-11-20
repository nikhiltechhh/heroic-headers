
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Videos from "@/components/Videos"
// import About from "@/components/About";
// import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Products />
      <Videos />
      {/* <About /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
