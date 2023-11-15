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
import K8s from "./Pages/K8s";
import NavBar from "./Pages/NavBar";
import Footer from "./Pages/Footer";

function App() {
  return (
    <div className="AppContainer">
      <Head />
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        <div className="MainContent">
          <Routes>
            <Route path="/Projects" element={<Projects />} />
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/k8s" element={<K8s />} />
          </Routes>
        </div>
        <Footer />
      </Router>
      <Head />
    </div>
  );
}

export default App;
