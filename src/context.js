import React, { useContext, useEffect, useState } from "react";
import { projectData } from "./component/data/datas";
import { testimonialData } from "./component/data/datas";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openExperience, setOpenExperience] = useState(false);
  const [detailData, setDetailData] = useState("");
  const [testiData, setTestiData] = useState(testimonialData[0]);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const clickMenu = () => {
    setSidebarOpen(true);
  };
  const closeMenu = () => {
    setSidebarOpen(false);
  };

  const clickExperience = () => {
    setOpenExperience(true);
  };
  const clickEducation = () => {
    setOpenExperience(false);
  };

  const clickMoreDetail = (id) => {
    setDetailData(projectData[id]);
  };
  const clickTestiImg = (id) => {
    {
      testimonialData.map((item) => {
        if (item.id === id) {
          setTestiData(item);
        }
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        sidebarOpen,
        clickMenu,
        closeMenu,
        openExperience,
        setOpenExperience,
        clickExperience,
        clickEducation,
        clickMoreDetail,
        detailData,
        clickTestiImg,
        testiData,
        goToTop,
        showTopBtn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
