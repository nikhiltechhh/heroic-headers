
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Videos from "@/components/Videos"
// import About from "@/components/About";
// import Float from "@/components/Float";
import Notifications from "@/components/Notifications";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Products />
      <Videos />
      {/* <About /> */}
      {/* <Float /> */}
      <Notifications />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;
