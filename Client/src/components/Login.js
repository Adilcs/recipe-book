import React from "react";

import styles from "./Register.module.css";
function Login() {
  return (
      <div className={styles.box}><br></br>
          <h1>Welcome back</h1><br></br>
    <form>
        
        
        <input className = {styles.input} name = "username" type="text" placeholder="Username"></input><br></br>
        <input className = {styles.input} name = "password" type="Password" placeholder="Password"></input><br></br>
 
        <button><h3>Log In</h3></button>

    </form>
    </div>
  );
}

export default Login;