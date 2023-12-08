import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "../common/Navbar";
import { Home } from "../home/Home";
import { About } from "./About";
import { Services } from "./Services";
import Testimonials from "./Testimonials";
import { Blog } from "./Blog";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Link, Element } from "react-scroll";
import ScrollToTop from "react-scroll-to-top";
import { WhatsApp } from '@mui/icons-material';

export const Pages = () => {
  const [showWhatsApp, setShowWhatsApp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;

      if (currentPosition > window.innerHeight) {
        setShowWhatsApp(false);
      } else {
        setShowWhatsApp(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const whatsappNumber = '+2347084857763';

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </Router>

      {/* WhatsApp button with icon */}
      {showWhatsApp && (
        <button
          className="fixed bottom-20 right-2 bg-green-500 hover:bg-green-600 text-white md:text-sm text-sm md:px-4 px-2 md:py-2  py-1 rounded-md flex items-center gap-2  block sm:block md:block xsm:block font-normal"
          onClick={handleWhatsAppClick}
        >
          <WhatsApp fontSize="small" /> How may we help you?
        </button>
      )}

      {/* Scroll-to-top button */}
      <Link
        to="top"
        smooth={true}
        duration={500}
        className="scroll-to-top fixed bottom-0.5 right-1 bg-primaryColor text-white p-2 rounded-full cursor-pointer transition-opacity hover:opacity-80"
        onClick={scrollToTop}
      ></Link>

      {/* Add the Element component with an ID corresponding to the Link */}
      <Element name="top" className="element" />

      {/* Scroll-to-top button from react-scroll-to-top */}
      <ScrollToTop
        smooth
        component={
          <div className="fixed bottom-0.5 right-2 bg-primaryColor text-white p-2 rounded-full cursor-pointer transition-opacity hover:opacity-80">^</div>
        }
        topPosition={100}
        style={{ zIndex: 999 }}
      />
    </>
  );
};

export default Pages;
