import React from "react";
import { withFormik } from 'formik';
import styles from "./Register.module.css";
import {  Form, Field } from 'formik';
import API from '../Services/API';
import { withRouter} from "react-router-dom";
class Register extends React.Component{

   

    render() {
  return (
      <div className={styles.box}><br></br>
          <h1>Create an Account</h1><br></br>
    <Form>
        <Field className = {styles.Field} name = "firstname" type="text" placeholder="First Name"></Field><br></br>
        <Field className = {styles.Field} name = "lastname"type="text" placeholder="Last Name"></Field><br></br>
        <Field className = {styles.Field} name = "email"type="email" placeholder="Email"></Field><br></br>
        
        <Field className = {styles.Field} name = "password" type="password" placeholder="Create Password"></Field><br></br>
        <Field className = {styles.Field} name = "passwordconfirm" type="password" placeholder="Confirm Password"></Field><br></br>
        <button onClick={this.props.handleSubmit} type="submit"><h3>Register</h3></button>

    </Form>
    </div>
  );
}
}
    export default withFormik({
    mapPropsToValues: () => ({ firstname: '' , lastname: '', email: '', password:'', passwordconfirm: ''}),
  
    // Custom sync validation
    validate: values => {
      const errors = {};
  
      if (!values.firstname) {
        errors.firstname=true;
         alert("bro type ur name");
      }
      if (!values.lastname) {
        errors.lastname=true;
        alert("bro type ur last name");
     }
     if (!values.email) {
        errors.email=true;
        alert("how are you gonna log in without an email");
     }
     if (!values.password) {
        alert("where is the password");
     }
      if (values.password !== values.passwordconfirm) {
       errors.password=true;
         alert("bro ur passwords do not match");
      }

  
      return errors;
    },
  
    handleSubmit: (values, { setSubmitting, props }) => {
      if(props.errors && props.errors.length > 0) return false;
        //setTimeout(() => {
        //alert(JSON.stringify(values, null, 2));
        //setSubmitting(false);
     // }, 1000);

     API.post('/user', {
        first_name: values.firstname,
        last_name: values.lastname,
        email: values.email,
        password: values.password
      })
      .then(function (response) {
        console.log(response);
        alert(response.data.success);
        props.history.replace({pathname: "/login"})
        
      })
      .catch(function (error) {
        console.log(error);
      });
    },
  
    displayName: 'BasicForm',
    validateOnBlur: false,
    validateOnChange: false
  })(withRouter(Register));

