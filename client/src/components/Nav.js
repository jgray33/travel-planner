import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
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
  );
};

export default Nav;
