import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Link for navigation
import Home from "./Home/Home";
import Work from "./Work/Work";
import Blog from "./Blog/Blog";
import Services from "./Services/Services";
import About from "./About/About";
import Contact from "./Contact/Contact";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
