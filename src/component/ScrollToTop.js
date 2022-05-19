import React from "react";
import { useGlobalContext } from "../context";
import { FaAngleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const { showTopBtn, goToTop } = useGlobalContext();
  return (
    <div className="top-to-btm">
      {showTopBtn && (
        <FaAngleUp className="icon-position icon-style" onClick={goToTop} />
      )}
    </div>
  );
};

export default ScrollToTop;
