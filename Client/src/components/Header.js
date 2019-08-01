import React from 'react';
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode"
//import './App.css';
import styles from './Header.module.css'
function Header( props) {


  return (
    <header><h1><Link to="/" className={styles.linkslogo}>Wake and Bake</Link></h1>
      <nav>
          <div className={styles.headerright}>
        <ul  className={styles.ulnone}>


          {props.fullName === '' ?
            (<React.Fragment><li ><Link to="/login"className={styles.links}>Log in</Link></li>
              <li> <Link to="/register" className={styles.links}>Register</Link></li></React.Fragment>)
            : (<React.Fragment><li><Link className={styles.links}>Welcome Back {props.fullName}!</Link></li>
              <li><Link to="/addpost" className={styles.links}>Add Post</Link></li>
              <li><a onClick={props.logOut} type="submit" className={styles.links}>Log Out</a></li></React.Fragment>)}


        </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;