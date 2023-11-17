import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "../common/Navbar";
import { Home } from "../home/Home";
import { About } from "./About";
import { Services } from "./Services";
import  Testimonials   from "./Testimonials";
import { Blog } from "./Blog";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from "react-scroll"; // Import Link and Element from react-scroll
import ScrollToTop from "react-scroll-to-top"; // Import ScrollToTop component

export const Pages = () => {
  // Function to scroll to the top when the button is clicked
  const scrollToTop = () => {
    scroll.scrollToTop();
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

      {/* Scroll-to-top button */}
      <Link
        to="top" // Specify the ID of the element you want to scroll to (e.g., "top")
        smooth={true} // Enable smooth scrolling
        duration={500} // Duration of the scrolling animation in milliseconds
        className="scroll-to-top fixed bottom-6 right-6 bg-primaryColor text-white p-2 rounded-full cursor-pointer transition-opacity hover:opacity-80"
      >
       
      </Link>

      {/* Add the Element component with an ID corresponding to the Link */}
      <Element name="top" className="element" />

      {/* Scroll-to-top button from react-scroll-to-top */}
      <ScrollToTop
        smooth
        component={<div className="fixed bottom-6 right-6 bg-primaryColor text-white p-2 rounded-full cursor-pointer transition-opacity hover:opacity-80">^</div>}
        topPosition={100}
        style={{ zIndex: 999 }}
      />
    </>
  );
};
