import React from "react";
import { withFormik } from 'formik';
import { Form, Field } from 'formik';
import styles from "./Register.module.css";
import API from '../Services/API';
import { withRouter } from "react-router-dom";
class Login extends React.Component {
  render() {
    return (
      <div className={styles.box}><br></br>
        <h1>Welcome back</h1><br></br>
        <Form>


          <Field className={styles.Field} name="email" type="email" placeholder="email"></Field><br></br>
          <Field className={styles.Field} name="password" type="Password" placeholder="Password"></Field><br></br>

          <button type="submit"><h3>Log In</h3></button>

        </Form>
      </div>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),

  // Custom sync validation
  validate: values => {
    const errors = {};


    if (!values.email) {
      errors.email = true;
      alert("how are you gonna log in without an email");
    }
    if (!values.password) {
      alert("where is the password");
    }



    return errors;
  },

  handleSubmit: (values, { setSubmitting, props }) => {
    if (props.errors && props.errors.length > 0) return false;
    //setTimeout(() => {
    //alert(JSON.stringify(values, null, 2));
    //setSubmitting(false);
    // }, 1000);

    API.post('/login', {

      email: values.email,
      password: values.password
    })
      .then(function (response) {
        console.log(response);
        props.setLogin(response.data.token);
        alert(response.data.success);
        props.history.replace({ pathname: "/" })

      })
      .catch(function (error) {
        console.log(error);
      });
  },

  displayName: 'BasicForm',
  validateOnBlur: false,
  validateOnChange: false
})(withRouter(Login));