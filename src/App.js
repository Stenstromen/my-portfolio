/* eslint-disable no-undef */
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "./Components/Head";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import NavBar from "./Pages/NavBar";
import Footer from "./Pages/Footer";

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        <Routes>
          <Route path="/Projects" element={<Projects />} />
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
      <Head />
    </div>
  );
}

export default App;
