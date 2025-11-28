import React from "react";
import "./Footer.css";
import fbIcon from "../assets/facebook.png";
import igIcon from "../assets/instagram.png";

export default function Footer() {
  return (
    <footer className="footer">
      <p>Претплати се и биди во тек! ✨</p>

      <div className="newsletter">
        <input type="text" placeholder="Внеси e-mail адреса..." />
        <button>Претплати се</button>
      </div>

      <div className="socials">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <img src={fbIcon} alt="Facebook" />
        </a>

        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <img src={igIcon} alt="Instagram" />
        </a>
      </div>
    </footer>
  );
}
