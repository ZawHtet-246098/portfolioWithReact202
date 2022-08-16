import React from "react";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const ProjectDetail = () => {
  const { detailData } = useGlobalContext();

  console.log(detailData);

  if (!detailData) {
    return (
      <div
        style={{ color: "#919999" }}
        className="container mx-auto text-center pt-5 mt-5"
      >
        <h3>
          There are nothing for details! Go back and click the more detail btn!
        </h3>
        <button
          style={{
            border: "1px solid cyan",
            background: "transparent",
            borderRadius: "5px",
          }}
        >
          <Link
            style={{ color: "cyan" }}
            to="/#project"
            className="text-decoration-none "
          >
            Go Back To Home
          </Link>
        </button>
      </div>
    );
  }
  const { title, image, language, id, detail, codelink, previewLink } =
    detailData;
  return (
    <div className="container position-relative py-3">
      <div
        style={{ background: "#919999" }}
        className=" detailDiv col-12 mx-auto p-2"
      >
        <div className="exitBtn">
          <Link to="/">
            <FaTimes />
          </Link>
        </div>
        <img className="col-12 rounded" src={image} alt="" />
        <div className="py-3">
          <h5 style={{ display: "flex", fontWeight: "bold" }}>
            <div style={{ width: "150px" }}>Category</div>
            <div style={{ width: "90%" }}>{title}</div>{" "}
          </h5>
          <h5 style={{ fontWeight: "bold", display: "flex" }}>
            <div style={{ width: "150px" }}>language</div>
            <div style={{ width: "90%" }}>{language}</div>
          </h5>
          <h6 style={{ fontWeight: "bold", display: "flex" }}>
            <div style={{ width: "150px" }}>More Info</div>
            <div style={{ width: "90%" }}>{detail}</div>
          </h6>
        </div>

        <div className="detailButtons">
          <button>
            <a className="text-decoration-none" href={previewLink}>
              preview
            </a>{" "}
          </button>
          <button>
            <a className="text-decoration-none" href={codelink}>
              codes
            </a>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
