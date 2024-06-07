import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Resources from "./pages/Resources";
import WebApp from "./pages/WebApp";

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "darkgrey",
      }}
    >
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/Webapp" element={<WebApp />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
