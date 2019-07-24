import React from "react";
import IngredientsList from "./IngredientsList"
import styles from "./AddRecipe.module.css";
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
          this.props.setFieldValue("ingredients", items.map(function (elem) {
            return elem.text;
          }).join('||'));
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
          this.props.setFieldValue("steps", items2.map(function (elem) {
            return elem.text;
          }).join('||'));
        }
      }
      
    render() {
  return (
      <div className={styles.box}><br></br>
          <h1>Create a Recipe</h1><br></br>
<Form>
        <Field className = {styles.Field} name = "title" type="text" placeholder="Title"></Field><br></br>
        <Field  className = {styles.Field} name = "description"type="textarea" placeholder="Description"></Field><br></br>
      
       
        
        <IngredientsList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <IngredientItems entries = {this.state.items} />

        
        <StepList
          addItemStep={this.addItemStep}
          inputElementstep={this.inputElementstep}
          handleInputStep={this.handleInputStep}
          currentItem2={this.state.currentItem2}
        />
        <StepItems entries = {this.state.items2} />


        <button onClick={this.props.handleSubmit} type="submit"><h3>Post Recipe</h3></button>
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

     API.post('/recipe', {
        title: values.title,
        description: values.description,
        ingredients: values.ingredients,
        steps: values.steps,
        user_id: values.user_id,
        date: values.date
      })
      .then(function (response) {
        console.log(response);
        alert(response.data.success);
        props.history.replace({pathname: "/"})
        
      })
      .catch(function (error) {
        console.log(error);
      });
    },
  
    displayName: 'BasicForm',
    validateOnBlur: false,
    validateOnChange: false
  })(withRouter(AddRecipe));

