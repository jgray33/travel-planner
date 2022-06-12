import React from 'react';
import {  Link } from "react-router-dom";
import Auth from "../utils/auth";



const NavBar= () =>{
    const userId =Auth.getUser().data.username
  return (
  <div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/signup">Signup</Link>
    </li>
    <li>
      <Link to={`/users/${userId}`}>DashBoard</Link>
    </li>
    <li>
      <Link to="/Login">Login</Link>
    </li>
    <li>
      <Link to="/Logout">Logout</Link>
    </li>
  </div>
  
  );
}
export default NavBar;