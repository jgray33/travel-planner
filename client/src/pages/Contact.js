import React from "react";
import logo from "../assets/group.png";

const Contact = () => {
  return (
    <div className="container mt-2">
      <h2 className="display-6">Contact</h2>
      <div className="row mb-3">
        <div className="col">
          <img
            src={logo}
            width="50%"
            alt="Team Procedural"
            className="rounded mx-auto d-block"
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <h2 className="display-6">Sanyiah</h2>
          <a href={"https://github.com/san098765432"} className="link-dark">
            Sanyiah's Github
          </a>
        </div>
        <div className="col">
          <h2 className="display-6">Oli</h2>
          <a href={"https://github.com/oli-drew"} className="link-dark">
            Oli's Github
          </a>
        </div>
        <div className="col">
          <h2 className="display-6">Dylan</h2>
          <a href={"https://github.com/DBAX7"} className="link-dark">
            Dylan's Github
          </a>
        </div>
        <div className="col">
          <h2 className="display-6">Andrea</h2>
          <a href={"https://github.com/Invogue01"} className="link-dark">
            Andrea's Github
          </a>
        </div>
        <div className="col">
          <h2 className="display-6">Corey</h2>
          <a href={"https://github.com/Corey96"} className="link-dark">
            Corey's Github
          </a>
        </div>
        <div className="col">
          <h2 className="display-6">Zain</h2>
          <a href={"https://github.com/zainuabidin"} className="link-dark">
            Zain's Github
          </a>
        </div>
        <div className="col">
          <h2 className="display-6">Julia</h2>
          <a href={"https://github.com/jgray33"} className="link-dark">
            Julia's Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
