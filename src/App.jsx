import React, { lazy, Suspense } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Pages/NavBar";

function App() {
  const Single = lazy(() => import("./Pages/Single"));
  const K8s = lazy(() => import("./Pages/K8s"));
  const DetBlevIngenCD = lazy(() => import("./Pages/DetBlevIngenCD"));
  const PGP = lazy(() => import("./Pages/PGP"));
  const NotFound = lazy(() => import("./Pages/NotFound"));

  return (
    <div className="AppContainer">
      <Router>
        <NavBar />
        <div className="MainContent">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Single />} />
              <Route path="/k8s" element={<K8s />} />
              <Route path="/det-blev-ingen-cd" element={<DetBlevIngenCD />} />
              <Route path="/pgp" element={<PGP />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </div>
  );
}

export default App;
