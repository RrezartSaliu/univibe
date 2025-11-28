import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">

       
        <Link to="/" className="navbar-logo">
          UniVibe
        </Link>

        
        <nav className="navbar-links">
          <Link to="/" className="nav-link">Дома</Link>
          <Link to="/events" className="nav-link">Настани</Link>
          <Link to="/about" className="nav-link">За нас</Link>

          <button className="login-btn">Најави се</button>
        </nav>
      </div>
    </header>
  );
}
