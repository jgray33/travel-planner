import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

const NavBar = () => {
  // const userId = Auth.getUser().data.username;
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div>
      {/* ternary opretor used for conditinal rendering */}

      <header className="p-3 border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
            ></a>

            <div>
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                {Auth.loggedIn() ? (
                  <>
                    <li>
                      <Link to="/" className="nav-link px-2 link-dark">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/users/${Auth.getUser()?.data?.username}`}
                        className="nav-link px-2 link-dark"
                      >
                        DashBoard
                      </Link>
                    </li>
                    <li>
                      <div onClick={logout} className="nav-link px-2 link-dark">
                        Logout
                      </div>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/" className="nav-link px-2 link-dark">
                        Home
                      </Link>
                    </li>

                    <li>
                      <Link to="/signup" className="nav-link px-2 link-dark">
                        Signup
                      </Link>
                    </li>

                    <li>
                      <Link to="/Login" className="nav-link px-2 link-dark">
                        Login
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default NavBar;
