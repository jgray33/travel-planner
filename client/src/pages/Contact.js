import React from "react";
import { Link } from "react-router-dom";
import logo from './group.png';

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
  return <img src={logo} alt="group.png"/>;
}

const Profiles = () => {
  return (
    <div className='container mt-2'>
      <h2 className='display-6'>Julia</h2>
      <Link to={'https://github.com/jgray33'} className='nav-link px-2 link-dark underline-on-hover'>
      Julia's Github
      </Link>
    </div>,

    <div className='container mt-2'>
      <h2 className='display-6'>Ollie</h2>
      <Link to={'https://github.com/oli-drew'} className='nav-link px-2 link-dark underline-on-hover'>
      Ollie's Github
      </Link>
    </div>,

    <div className='container mt-2'>
      <h2 className='display-6'>Zain</h2>
      <Link to={'https://github.com/zainuabidin'} className='nav-link px-2 link-dark underline-on-hover'>
      Zain's Github
      </Link>
    </div>,

    <div className='container mt-2'>
      <h2 className='display-6'>Andrea</h2>
      <Link to={'https://github.com/Invogue01'} className='nav-link px-2 link-dark underline-on-hover'>
      Andrea's Github
      </Link>
    </div>,

    <div className='container mt-2'>
      <h2 className='display-6'>Sanyiah</h2>
      <Link to={'https://github.com/san098765432'} className='nav-link px-2 link-dark underline-on-hover'>
      Sanyiah's Github
      </Link>
    </div>,

    <div className='container mt-2'>
      <h2 className='display-6'>Corey</h2>
      <Link to={'https://github.com/Corey96'} className='nav-link px-2 link-dark underline-on-hover'>
      Corey's Github
      </Link>
    </div>,


   






  );
};





export default Header;
export default Contact;
