import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { clickMenu } = useGlobalContext();
  return (
    <nav className="row justify-content-between navbar text-white ">
      <div className="col-md-2 py-3 px-0 d-flex justify-content-between">
        <Link to="/" className="text-decoration-none text-white">
          <h3
            style={{
              color: "cyan",
              animation: "heartbeat 1.5s ease-in-out infinite both",
            }}
            className="mb-0 ms-5"
          >
            Mr.Zaw
          </h3>
        </Link>
        <div
          className="menu-icon d-md-none me-5 h2"
          onClick={() => clickMenu()}
        >
          <GiHamburgerMenu className="menuCloseIcon" />
        </div>
      </div>
      <ul className="col-md-10 col-lg-9 d-none d-md-flex me-lg-5 mb-0 list-unstyled  align-items-center justify-content-end navbar-links">
        <li className="px-3 mb-2">Home</li>
        <li className="px-3 mb-2">
          <a href="#service">Service</a>
        </li>
        <li className="px-3 mb-2">
          <a href="#about">About</a>
        </li>
        {/* <li className="px-3 mb-2">
          <a href="#service">Skill</a>
        </li> */}
        <li className="px-3 mb-2">
          <a href="#project">Projects</a>
        </li>
        <li className="px-3 mb-2">
          <a href="#testimonial">Testimonial</a>
        </li>
        <li className="px-3 mb-2">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="underline"></div>
    </nav>
  );
};

export default Navbar;
