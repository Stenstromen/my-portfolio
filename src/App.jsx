import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Pages/NavBar";
import Single from "./Pages/Single";
import K8s from "./Pages/K8s";
import DetBlevIngenCD from "./Pages/DetBlevIngenCD";
import PGP from "./Pages/PGP";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div className="AppContainer">
      <Router>
        <NavBar />
        <div className="MainContent">
          <Routes>
            <Route path="/" element={<Single />} />
            <Route path="/k8s" element={<K8s />} />
            <Route path="/det-blev-ingen-cd" element={<DetBlevIngenCD />} />
            <Route path="/pgp" element={<PGP />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
