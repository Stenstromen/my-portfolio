/* eslint-disable no-undef */
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import NavBar from "./Pages/NavBar";
import Footer from "./Pages/Footer";
import { useEffect, useState } from "react";

document.body.style = "background: #4f5d75;";

function App() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    return window.addEventListener("resize", () => {
      window.innerWidth < 425 ? setIsMobile(true) : setIsMobile(false);
    });
  }, []);

  useEffect(() => {
    return window.innerWidth < 425 ? setIsMobile(true) : setIsMobile(false);
  }, []);
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar isMobile={isMobile} />
        <Routes>
          <Route path="/Projects" element={<Projects isMobile={isMobile} />} />
          <Route path="/" element={<Home isMobile={isMobile} />} />
          <Route path="/Contact" element={<Contact isMobile={isMobile} />} />
        </Routes>
        <Footer isMobile={isMobile} />
      </Router>
    </div>
  );
}

export default App;
