import React, { lazy, Suspense } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const NavBar = lazy(() => import("./Pages/NavBar"));
  const Projects = lazy(() => import("./Pages/Projects"));
  const Home = lazy(() => import("./Pages/Home"));
  const Contact = lazy(() => import("./Pages/Contact"));
  const K8s = lazy(() => import("./Pages/K8s"));
  const DetBlevIngenCD = lazy(() => import("./Pages/DetBlevIngenCD"));
  const PGP = lazy(() => import("./Pages/PGP"));
  const NotFound = lazy(() => import("./Pages/NotFound"));
  const Footer = lazy(() => import("./Pages/Footer"));

  return (
    <div className="AppContainer">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <NavBar />
          <div className="MainContent">
            <Routes>
              <Route path="/Projects" element={<Projects />} />
              <Route path="/" element={<Home />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/k8s" element={<K8s />} />
              <Route path="/det-blev-ingen-cd" element={<DetBlevIngenCD />} />
              <Route path="/pgp" element={<PGP />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
