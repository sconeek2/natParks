import React from "react";
import { Link } from "react-router-dom";
import "../CSS/navbar.css";

const Navbar = () => {
  return (
    <div>
      <ul className="navbar">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/mountains">Mountains</Link>
        </li>
        <li>
          <Link to="/search">Parks</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
