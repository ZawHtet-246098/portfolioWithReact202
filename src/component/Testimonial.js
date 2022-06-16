import React from "react";
import { testimonialData } from "./data/datas";
import { useGlobalContext } from "../context";
import { FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
  const { clickTestiImg, testiData, clickTestiImage } = useGlobalContext();

  return (
    <div
      className="testimonial col-12 col-lg-10 mx-auto d-md-flex mt-md-5 mb-4"
      id="testimonial"
    >
      <div
        data-aos="fade-up-right"
        data-aos-duration="1000"
        className="firstTestimonial col-md-6 m-1"
      >
        <div className="quoteDiv">
          <div className="quote">
            <FaQuoteRight />
          </div>
          <h1 className="col-6 mx-auto p-1">What Our Customers are saying?</h1>
        </div>
      </div>
      <div
        data-aos="fade-up-left"
        data-aos-duration="1000"
        className="secondTestimonial p-3 pt-lg-5 mt-3 text-center"
      >
        <h3
          style={{ animation: "heartbeat 1.5s ease-in-out infinite both" }}
          className="secondTestimonialTitle py-1 pb-4"
        >
          Help us improve our productivity
        </h3>
        <div className="testiImageSec mb-1">
          {testimonialData.map((item) => {
            return (
              <button
                className="testiImg"
                onClick={() => clickTestiImg(item.id)}
              >
                <img
                  onClick={() => clickTestiImage(item.id)}
                  style={{ width: "50px", borderRadius: "50%" }}
                  src={item.logo}
                  alt=""
                />
              </button>
            );
          })}
        </div>
        <div className="testimonialData">
          <h3 className="p-1">{testiData.title}</h3>
          <h5 className="py-1">{testiData.position}</h5>
          <p className="col-lg-8 col-12 mx-auto">
            {/* {testiData ? {logo} : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ipsa adipisci mollitia porro quia odio error, quasi ha corrupti dicta aperiam. Libero sint eligendi odio, molestiae est
          beatae aliquid.'} */}
            {testiData.detail}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
