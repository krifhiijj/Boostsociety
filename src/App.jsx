import React from "react";
import "./components/global.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
{/*import StatsSection from "./components/StatesSection";*/}
import PartnersSection from "./components/PartnersSection";
import CollaborativeProjects from "./components/CollaborativeProjects";
import FeatureSection from "./components/FeatureSection";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer"; // ✅ Import Footer component

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/*<StatsSection />*/}
      <PartnersSection />
      <CollaborativeProjects />
      <FeatureSection />
      <HowItWorks />
      <Testimonials />
      <Footer /> {/* ✅ Added Footer component at the bottom */}
    </div>
  );
};

export default App;

