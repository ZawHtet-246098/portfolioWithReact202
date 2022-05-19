import React from "react";
import Typewriter from "typewriter-effect";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaAngleDoubleDown,
} from "react-icons/fa";
import { SiNetlify, SiVercel } from "react-icons/si";
import image from "./image/homepic.jpg";

const Home = () => {
  return (
    <div className="home d-md-flex col-lg-11 mx-auto" id="home">
      <div className="col-12 col-md-6 homeLeftDiv">
        <h6>Welcome to my portfolio page!</h6>
        <h1>
          Hi I'M <span>Zaw Htet</span>
        </h1>
        <h3 className="typingText">
          <Typewriter
            options={{
              strings: [
                "Ethusiastic Developer",
                "Forntend Developer",
                "MERN Developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>
        <p>
          I use animation as a third dimension by which to simplify experiences
          and kuiding htro ech and evevry interaction. I'm not adding motion
          just to spruce things up, but doing it in ways that.
        </p>
        <div className="homemaintwobutton">
          <button className="resumedownload">resume</button>
          <button className="tocontactpage">contact</button>
        </div>

        <div className="sociallinkbutton d-flex pt-lg-5 mt-5">
          <div className="firstsectionofsociallinkbutton me-md-5">
            <button>
              <a href="https://www.facebook.com/kz.htet.6616">
                <FaFacebookF />
              </a>
            </button>
            <button>
              <a href="https://www.instagram.com/zawhtet31246098/">
                <FaInstagram />
              </a>
            </button>
            <button>
              <a href="https://www.linkedin.com/in/zaw-htet-92559723a/">
                <FaLinkedinIn />
              </a>
            </button>
          </div>
          <div className="secondsectionofsociallinkbutton">
            <button>
              <a href="https://github.com/ZawHtet-246098">
                <FaGithub />
              </a>
            </button>
            <button>
              <a href="https://app.netlify.com/teams/zawhtet-246098/overview">
                <SiNetlify />
              </a>
            </button>
            <button>
              <a href="https://vercel.com/zawhtet-246098">
                <SiVercel />
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6  col-12 homerightdiv pt-5 mt-md-5">
        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          src={image}
          alt=""
        />
        <div className="scrolldowndiv">
          <p className="m-0">scrolldown</p>
          <FaAngleDoubleDown />
        </div>
      </div>
    </div>
  );
};

export default Home;
