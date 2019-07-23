import React from 'react';

//import './App.css';
import styles from './Header.module.css'
function Header() {
  return (
    <header><h1>Wake and Bake</h1>
    <nav>
        <ul>
            <li>Log in</li>
            <li>Register</li>
            <li>Add Recipe</li>
        </ul>
        </nav>
    </header>
  );
}

export default Header;
