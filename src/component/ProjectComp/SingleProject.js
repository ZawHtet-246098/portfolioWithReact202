import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";

const SingleProject = ({ title, codelink, previewLink, image, id }) => {
  const { clickMoreDetail } = useGlobalContext();
  return (
    <div
      // data-aos="fade-up"
      data-aos="flip-left"
      data-aos-duration="1000"
      className="mx-auto col-10 col-md-5 col-lg-3 singleProject"
      id={id}
    >
      <img className="col-12" src={image} alt="" />
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="py-1">{title}</h5>
        <button
          style={{
            zIndex: 100,
            background: "transparent",
            border: "1px solid cyan",
          }}
          className="px-3 me-1"
          onClick={() => clickMoreDetail(id)}
        >
          <Link to="/detail" className="text-white  text-decoration-none">
            more
          </Link>
        </button>
      </div>

      <div
        className="singleProjectButton text-white"
        // className={`${
        //   showHover ? "singleProjectButton open" : "singleProjectButton"
        // }`}
      >
        <div className="bottonCenter d-flex">
          <button className="m-3 py-2 px-4">
            <a className="text-decoration-none text-black" href={codelink}>
              codes
            </a>
          </button>
          <button className="m-3 py-2 px-4">
            <a className="text-decoration-none  text-black" href={previewLink}>
              Preview
            </a>
          </button>
        </div>
        <h5 style={{ paddingTop: "5rem" }} className="pt-5 mt-5 text-center ">
          {title}
        </h5>
      </div>
    </div>
  );
};

export default SingleProject;
