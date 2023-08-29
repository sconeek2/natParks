import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../CSS/hero.css";

const Hero = ({ link1, link2, link1text, link2text }) => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(
    getCurrentPage(location.pathname)
  );

  function getCurrentPage(pathname) {
    if (pathname === "/home") {
      return "Home";
    } else if (pathname === "/search") {
      return "Search";
    } else if (pathname === "/mountains") {
      return "Mountain";
    } else {
      return "Unknown";
    }
  }

  return (
    <div className="hero-container">
      {currentPage === "Home" && <h1>Discover the great outdoors!</h1>}
      {currentPage === "Search" && <h1>Find Your Parks!</h1>}
      {currentPage === "Mountain" && <h1>Explore the great mountains!</h1>}
      <div className="button-container">
        {currentPage === "Home" && (
          <div>
            <Link className="button" to={link1}>
              {link1text}
            </Link>
            <Link className="button" to={link2}>
              {link2text}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
