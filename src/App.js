// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";

function App() {
  return (
    <Router >

      <div className="app">
        {/* Set up routes with Routes */}
        <Routes>

         
          <Route path="/" element={ <Home />} />
          

        </Routes> 
      </div>
    </Router>
  );
}

export default App;
