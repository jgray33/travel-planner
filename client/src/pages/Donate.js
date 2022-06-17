import React from "react";
import { Link } from "react-router-dom";
import DonateForm from "../components/DonateForm";

const Contact = () => {
  return (
    <div className="container mt-2">
      <h2 className="display-6">Donate</h2>
      <DonateForm />
      <Link to={"/"} className="nav-link px-2 link-dark underline-on-hover">
        Link to homepage
      </Link>
    </div>
  );
};

export default Contact;
