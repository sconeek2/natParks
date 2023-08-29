import React from "react";
import "./App.css";
import Home from "./Home";
import Mountains from "./Mountains";
import Search from "./Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router className="router">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/mountains" element={<Mountains />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
