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
        className=" detailDiv col-10 mx-auto p-2"
      >
        <div className="exitBtn">
          <Link to="/">
            <FaTimes />
          </Link>
        </div>
        <img className="col-12 rounded" src={image} alt="" />
        <div className="py-3">
          <h3>Category: {title}</h3>
          <h4>Technological usage: {language}</h4>
          <p className="mb-0">More Info:</p>
          <p> {detail}</p>
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
