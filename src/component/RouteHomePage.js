import React from "react";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Projects from "./ProjectComp/Projects";
import Testimonial from "./Testimonial";
import ScrollToTop from "./ScrollToTop";
import Contact from "./Contact";

const RouteHomePage = () => {
  return (
    <div style={{ position: "relative" }}>
      <ScrollToTop />
      <Home />
      <Service />
      <About />
      <Projects />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default RouteHomePage;
