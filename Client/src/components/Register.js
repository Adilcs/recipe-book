import React from "react";

import styles from "./Register.module.css";
function Register() {
  return (
      <div className={styles.box}><br></br>
          <h1>Create an Account</h1><br></br>
    <form>
        <input className = {styles.input} name = "fname" type="text" placeholder="First Name"></input><br></br>
        <input className = {styles.input} name = "lname"type="text" placeholder="Last Name"></input><br></br>
        <input className = {styles.input} name = "lname"type="text" placeholder="Email"></input><br></br>
        <input className = {styles.input} name = "username" type="text" placeholder="Create Username"></input><br></br>
        <input className = {styles.input} name = "password" type="Password" placeholder="Create Password"></input><br></br>
        <input className = {styles.input} name = "passwordconfirm" type="Password" placeholder="Confirm Password"></input><br></br>
        <button><h3>Register</h3></button>

    </form>
    </div>
  );
}

export default Register;
