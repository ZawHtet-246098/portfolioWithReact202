import React from "react";
import datas from "./data/datas";
import SingleService from "./SingleService";

const Service = () => {
  return (
    <div className="container service" id="service">
      <div data-aos="zoom-in" className="serviceTitle col-lg-5 mx-auto">
        <h1
          style={{ animation: "heartbeat 1.5s ease-in-out infinite both" }}
          className="p-2 pt-5"
        >
          what we do?
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quis
          voluptate at ex aspernatur accusamus.
        </p>
      </div>
      <div className="singleServicesContainer">
        {datas.map((item) => {
          return <SingleService key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Service;
