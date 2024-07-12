// import { Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import AboutSection from "./pages/About_Section/AboutSection";
import ClientSection from "./pages/Client_Section/ClientSection";
import Features from "./pages/Features/Features";
import Footer from "./pages/Footer/Footer";
import HeroSection from "./pages/Hero_Section/HeroSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <HeroSection />
        <ClientSection />
        <AboutSection />
        <Features />
        <Footer />
      </div>
    </div>
  );
}

export default App;
