import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useGlobalContext } from "./context";

import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import RouteHomePage from "./component/RouteHomePage";

import ProjectDetail from "./component/ProjectComp/ProjectDetail";

const App = () => {
  const { sidebarOpen } = useGlobalContext();
  return (
    <BrowserRouter>
      <Navbar />
      {sidebarOpen && <Sidebar />}
      <Routes>
        <Route path="/" element={<RouteHomePage />} />
        <Route path="/detail" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
