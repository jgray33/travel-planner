import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mb-2 mt-auto">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li>
          <Link className="nav-link px-2 link-secondary" to={`/`}>
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link px-2 link-secondary" to={`/about`}>
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link px-2 link-secondary" to={`/contact`}>
            Contact
          </Link>
        </li>
        <li>
          <Link className="nav-link px-2 link-secondary" to={`/donate`}>
            Donate
          </Link>
        </li>
      </ul>
      <p className="text-center text-muted">&copy; 2022 Travel Planner</p>
    </footer>
  );
};

export default Footer;
