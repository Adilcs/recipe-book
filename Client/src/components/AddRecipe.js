import React from "react";
import IngredientsList from "./IngredientsList"
import styles from "./Register.module.css";
import IngredientItems from "./IngredientItems"
import StepList from "./StepList"
import StepItems from "./StepItems"
import { withFormik } from 'formik';
import {  Form, Field } from 'formik';
import API from '../Services/API';
import { withRouter} from "react-router-dom";
class AddRecipe extends React.Component{
    inputElement = React.createRef()
    inputElementstep = React.createRef()
    constructor() {
        super()
        this.state = {
          items: [],
          items2: [],
          currentItem: {text:'', key:''},
          currentItem2: {text:'', key:''},
        }
      }
      handleInput = e => {
        const itemText = e.target.value
        const currentItem = { text: itemText, key: Date.now() }
        this.setState({
          currentItem,
        })
      }
      addItem = e => {
        e.preventDefault()
        const newItem = this.state.currentItem
        if (newItem.text !== '') {
          console.log(newItem)
          const items = [...this.state.items, newItem]
          this.setState({
            items: items,
        
            currentItem: { text: '', key: '' },
          })
        }
      }
      handleInputStep = e => {
        const itemText2 = e.target.value
        const currentItem2 = { text: itemText2, key: Date.now() }
        this.setState({
          currentItem2,
        })
      }
      addItemStep = e => {
        e.preventDefault()
        const newItem = this.state.currentItem2
        if (newItem.text !== '') {
          console.log(newItem)
          const items2 = [...this.state.items2, newItem]
          this.setState({
            items2: items2,
            currentItem2: { text: '', key: '' },
          })
        }
      }
      
    render() {
  return (
      <div className={styles.box}><br></br>
          <h1>Create a Recipe</h1><br></br>
<Form>
        <Field className = {styles.input} name = "title" type="text" placeholder="Title"></Field><br></br>
        <Field className = {styles.input} name = "description"type="text" placeholder="Description"></Field><br></br>
      
       
        <p>Ingredients: </p>
        <IngredientsList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <IngredientItems entries = {this.state.items} />

        <p>Steps</p>
        <StepList
          addItemStep={this.addItemStep}
          inputElementstep={this.inputElementstep}
          handleInputStep={this.handleInputStep}
          currentItem2={this.state.currentItem2}
        />
        <StepItems entries = {this.state.items2} />


        <button onClick={this.props.handleSubmit} type="submit"><h3>add post</h3></button>
</Form>
 
    </div>
  )
  }
}

export default withFormik({
    mapPropsTovalues: ({props}) => ({ title: '' , description: '', user_id: props.user_id, date: new Date() }),
  
    // Custom sync validation
    validate: values => {
      const errors = {};
  
      if (!values.title) {
        errors.title=true;
         alert("type title");
      }
      if (!values.description) {
        errors.lastname=true;
        alert("description needed");
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
  })(withRouter(AddRecipe));

