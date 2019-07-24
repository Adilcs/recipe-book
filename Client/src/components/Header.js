import React from 'react';
import {Link } from "react-router-dom";
//import './App.css';
import styles from './Header.module.css'
function Header() {
  return (
    <header><h1>Wake and Bake</h1>
    <nav>
        <ul>
            <li><Link to ="/login">Log in</Link></li>
            <li> <Link to ="/register">Register</Link></li>
            <li><Link to ="/addpost">Add Post</Link></li>
        </ul>
        </nav>
    </header>
  );
}

export default Header;
