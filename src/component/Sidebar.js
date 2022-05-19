import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Sidebar = () => {
  const { closeMenu } = useGlobalContext();
  return (
    <div className="sidebar text-white d-md-none">
      <div
        className="text-end h1 me-3 sidebar-menu-header-text p-3"
        onClick={() => closeMenu()}
      >
        <FaTimes className="menuOpenIcon" />
      </div>
      <div className="text-center mt-3">
        <Link to="/" className="text-decoration-none">
          <h1 className="sidebar-menu-header-text">Mr.Zaw</h1>
        </Link>
        <span>Web Develper(FrontEnd)</span>
      </div>
      <ul className="col-11 mx-auto d-block mt-3 text-center list-unstyled  align-items-center justify-content-end sidebar-links">
        <li className="px-3 mb-2" onClick={() => closeMenu()}>
          <a className="text-decoration-none text-white" href="#home">
            Home
          </a>
        </li>
        <li className="px-3 mb-2" onClick={() => closeMenu()}>
          <a className="text-decoration-none text-white" href="#service">
            Service
          </a>
        </li>
        <li className="px-3 mb-2" onClick={() => closeMenu()}>
          <a className="text-decoration-none text-white" href="#about">
            About
          </a>
        </li>

        <li className="px-3 mb-2" onClick={() => closeMenu()}>
          <a className="text-decoration-none text-white" href="#project">
            Projects
          </a>
        </li>
        <li className="px-3 mb-2" onClick={() => closeMenu()}>
          <a className="text-decoration-none text-white" href="#testimonial">
            Testimonial
          </a>
        </li>
        <li className="px-3 mb-2" onClick={() => closeMenu()}>
          <a className="text-decoration-none text-white" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
