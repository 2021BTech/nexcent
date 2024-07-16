import Navbar from "./components/navbar/Navbar";
import AboutSection from "./pages/About_Section/AboutSection";
import BlogSection from "./pages/Blog_Section/BlogSection";
import ClientSection from "./pages/Client_Section/ClientSection";
import Features from "./pages/Features_Section/Features";
import Footer from "./pages/Footer_Section/Footer";
import HeroSection from "./pages/Hero_Section/HeroSection";

function App() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="w-full h-screen">
        <HeroSection />
        <ClientSection />
        <AboutSection />
        <Features />
        <BlogSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
