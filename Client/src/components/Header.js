import React from 'react';
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode"
//import './App.css';
import styles from './Header.module.css'
function Header({ fullName }) {


  return (
    <header><h1><Link to="/">Wake and Bake</Link></h1>
      <nav>
        <ul>


          {fullName === '' ?
            (<React.Fragment><li><Link to="/login">Log in</Link></li>
              <li> <Link to="/register">Register</Link></li></React.Fragment>)
            : (<React.Fragment>{fullName}
              <li><Link to="/addpost">Add Post</Link></li></React.Fragment>)}


        </ul>
      </nav>
    </header>
  );
}

export default Header;