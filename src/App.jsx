import React from "react";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import ProductSection from "./components/ProductSection";
import CustomizeSection from "./components/CustomizeSection";
import FeaturesSection from "./components/FeaturesSection";
import EcoSection from "./components/EcoSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <ProductSection/>
      <CustomizeSection/>
      <FeaturesSection/>
      <EcoSection/>
      <Footer />
    </div>   
  );
}

export default App;
