import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.png';

const Contact = () => {
  return (
    <div className="container mt-2">
      <h2 className="display-6">Contact</h2>
      <Link to={"/"} className="nav-link px-2 link-dark underline-on-hover">
        Link to homepage
      </Link>
    </div>
  );
};



function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}

export default Header;

export default Contact;
