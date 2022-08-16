import React from "react";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import {
  FaMapMarkedAlt,
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaTwitterSquare,
  FaTelegram,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-wrapper col-12 mx-auto">
        <div className="contactForm col-lg-9">
          <div className="contactIntro text-center container">
            <h3
              style={{
                color: "cyan",
                animation: "heartbeat 1.5s ease-in-out infinite both",
              }}
              className="p-3"
            >
              Get in Touch<span className="titleSpan about"></span>
            </h3>

            <p>Feel free to drop us a line below</p>
          </div>
          <form action="" className="col-10 col-lg-7 mx-auto me-lg-5">
            <h5 className="p-2 text-center">Start your project</h5>
            <div className="contactName col-11 mb-2 d-flex justify-content-between mx-auto">
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="firstName p-1 rounded"
                placeholder="First Name"
              />
              <input
                type="name"
                name="lastName"
                id="lastName"
                className="lastName rounded"
                placeholder="Last Name"
              />
            </div>

            <input
              type="email"
              name="email"
              id="email"
              className="email d-block col-11 mb-2 mx-auto p-1 rounded"
              placeholder="email address"
            />

            <textarea
              className="d-block col-11 mb-2 mx-auto p-1 rounded"
              name="message"
              placeholder="message"
              rows="8"
            ></textarea>

            <button type="submit" className="contactBtn rounded p-1 px-4">
              submit
              <FaPaperPlane className="ms-2" />
            </button>
          </form>
        </div>
        <div className="subContactForm col-lg-4">
          <h4 style={{ color: "cyan" }} className="mb-4">
            Contact us
          </h4>
          <div className="phone d-flex">
            <FiPhoneCall />
            <div className="ps-4 mb-3">
              <p>+96 785460219</p>
              <p>Mon-Fri 9am-6pm</p>
            </div>
          </div>
          <div className="email d-flex">
            <FiMail />
            <div className="ps-4 mb-3">
              <p>zhtet1636@gmail.com</p>
              <p>Online support</p>
            </div>
          </div>
          <div className="city d-flex mb-4">
            <FaMapMarkedAlt />
            <div className="ps-4">
              <p>Taikkyi, Yangon</p>
              <p>second street MyaSapal</p>
            </div>
          </div>
          <div className="contactSocial">
            <h5 className="pb-2">Connect with me on social media</h5>

            <a href="https://www.facebook.com/kz.htet.6616">
              <FaFacebookSquare />
            </a>
            <a href="https://www.linkedin.com/in/zaw-htet-92559723a/">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/zawhtet31246098/">
              <FaInstagramSquare />
            </a>
            <a href="">
              <FaTwitterSquare />
            </a>
            <a href="https://web.telegram.org/z/">
              <FaTelegram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer text-center pt-5">
        <h6>@2022 / created by Mr.Zaw / All Rights Reserved.</h6>
      </div>
    </div>
  );
};

export default Contact;
