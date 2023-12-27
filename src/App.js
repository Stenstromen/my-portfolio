/* eslint-disable no-undef */
import React, { lazy, Suspense } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "./Components/Head";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import K8s from "./Pages/K8s";

function App() {
  const NavBar = lazy(() => import("./Pages/NavBar"));
  const Footer = lazy(() => import("./Pages/Footer"));

  return (
    <div className="AppContainer">
      <Head />
      <Router basename={process.env.PUBLIC_URL}>
        <Suspense fallback={<div>Loading...</div>}>
          <NavBar />
        </Suspense>
        <div className="MainContent">
          <Routes>
            <Route path="/Projects" element={<Projects />} />
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/k8s" element={<K8s />} />
          </Routes>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>
      </Router>
      <Head />
    </div>
  );
}

export default App;
