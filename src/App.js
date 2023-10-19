import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Import Link for navigation
import Home from "./Home/Home";
import Work from "./Work/Work";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
