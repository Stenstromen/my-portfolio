import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact"
import NavBar from "./Pages/NavBar";
import Footer from "./Pages/Footer";

document.body.style = "background: #fff7f0;";

function App() {
  return (
    <div>
      <NavBar />
      
      <Routes>
        <Route path="/Projects" element={<Projects />} />
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
