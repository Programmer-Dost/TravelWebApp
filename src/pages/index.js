import Sidebar from "../components/Sidebar/index";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/footer/Footer"
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Footer />
    </>
  );
};

export default Home;
