import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";
import Footer from "../components/Footer";

import techIcon from "../assets/tech.png";
import careerIcon from "../assets/career-path.png";
import researchIcon from "../assets/innovation.png";
import cultureIcon from "../assets/workshop.png";
import healthIcon from "../assets/medical.png";
import sportIcon from "../assets/sport.png";
import eduIcon from "../assets/education.png";
import workshopIcon from "../assets/art.png";

export default function Categories() {
  return (
    <div className="categories-page">
      <div className="categories-inner">
        <div className="categories-content">
          <h2 className="cat-title">ИЗБЕРИ КАТЕГОРИЈА</h2>

          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Пребарај категорија..." />
          </div>

          <div className="categories-grid">
            <Link to="/categories/technology" className="cat-card">
              <img src={techIcon} className="cat-icon" alt="" />
              <p>Технологија</p>
            </Link>

            <Link to="/categories/career" className="cat-card">
              <img src={careerIcon} className="cat-icon" alt="" />
              <p>Кариeра</p>
            </Link>

            <Link to="/categories/research" className="cat-card">
              <img src={researchIcon} className="cat-icon" alt="" />
              <p>Истражување</p>
            </Link>

            <Link to="/categories/culture" className="cat-card">
              <img src={cultureIcon} className="cat-icon" alt="" />
              <p>Култура</p>
            </Link>

            <Link to="/categories/health" className="cat-card">
              <img src={healthIcon} className="cat-icon" alt="" />
              <p>Здравје</p>
            </Link>

            <Link to="/categories/sport" className="cat-card">
              <img src={sportIcon} className="cat-icon" alt="" />
              <p>Спорт</p>
            </Link>

            <Link to="/categories/education" className="cat-card">
              <img src={eduIcon} className="cat-icon" alt="" />
              <p>Едукација</p>
            </Link>

            <Link to="/categories/workshops" className="cat-card">
              <img src={workshopIcon} className="cat-icon" alt="" />
              <p>Работилници</p>
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
