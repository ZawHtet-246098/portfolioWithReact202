import React from "react";

const SingleService = ({ id, logo, title, detail }) => {
  return (
    <div
      data-aos="zoom-in"
      // data-aos-duration="1000"
      className="singleService"
    >
      <img src={logo} alt="" />
      <h3 className="py-sm-1">{title}</h3>
      <p>{detail}</p>
    </div>
  );
};

export default SingleService;
