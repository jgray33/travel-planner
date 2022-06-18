import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

const NavBar = () => {
  return (
    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li>
        <Link to="/" className="nav-link px-2 link-dark underline-on-hover">
          Home
        </Link>
      </li>
      {Auth.loggedIn() ? (
        <>
          <li>
            <Link
              to={`/users/${Auth.getUser()?.data?.username}`}
              className="nav-link px-2 link-dark underline-on-hover"
            >
              Trip Dashboard
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link
              to={"/signup"}
              className="nav-link px-2 link-dark underline-on-hover"
            >
              Signup
            </Link>
          </li>
          <li>
            <Link
              to={"/login"}
              className="nav-link px-2 link-dark underline-on-hover"
            >
              Login
            </Link>
          </li>
        </>
      )}
      {/* <li>
        <Link
          to={"/donate"}
          className="nav-link px-2 link-dark underline-on-hover"
        >
          Donate
        </Link>
      </li> */}
      <li>
        <Link
          to={"/contact"}
          className="nav-link px-2 link-dark underline-on-hover"
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};
export default NavBar;
