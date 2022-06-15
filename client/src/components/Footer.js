import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-3 mb-4 mt-auto">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <a href="/" className="nav-link px-2 text-muted">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link px-2 text-muted">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link px-2 text-muted">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="/donate" className="nav-link px-2 text-muted">
            Donate
          </a>
        </li>
      </ul>
      <p className="text-center text-muted">&copy; 2022 Travel Planner</p>
    </footer>
  );
};

export default Footer;
