import React from "react";
import { Link } from "react-router-dom";

import Auth from "../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a
        href="/"
        className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
      >
        <h1 className="bi m-3 fs-4">Travel Planner</h1>
      </a>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <a href="/" className="nav-link px-2 link-secondary">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="nav-link px-2 link-secondary">
            About
          </a>
        </li>
        <li>
          <a href="/contact" className="nav-link px-2 link-secondary">
            Contact
          </a>
        </li>
      </ul>

      <div className="col-md-3 text-end">
        {Auth.loggedIn() ? (
          <>
            <Link
              className="btn btn-outline-secondary me-2"
              to={`/users/${Auth.getUser().data.username}`}
            >
              {Auth.getUser().data.username.toUpperCase()}'s trips
            </Link>
            <button className="btn btn-outline-dark me-2" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="btn btn-outline-secondary me-2" to="/login">
              Login
            </Link>
            <Link className="btn btn-outline-dark me-2" to="/signup">
              Signup
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
