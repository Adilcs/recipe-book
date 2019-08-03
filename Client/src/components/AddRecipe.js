import React from "react";
import IngredientsList from "./IngredientsList"
import styles from "./AddRecipe.module.css";
import IngredientItems from "./IngredientItems"
import StepList from "./StepList"
import StepItems from "./StepItems"
import { withFormik } from 'formik';
import { Form, Field } from 'formik';
import API from '../Services/API';
import { withRouter } from "react-router-dom";
//import FormData from 'form-data'
class AddRecipe extends React.Component {
  inputElement = React.createRef()
  inputElementstep = React.createRef()
  constructor() {
    super()

    this.state = {
      recipe : null,
      items: [],
      items2: [],
      currentItem: { text: '', key: '' },
      currentItem2: { text: '', key: '' },
    }
  }
  async componentDidMount(){
    if( this.props.location.state !== undefined){
      // if( this.props.location.state.hasOwnProperty("recipe")){
     await this.setState({
        recipe : this.props.location.state.recipe,
        items: this.props.location.state.recipe.ingredients.map(( boob,i) => { return {text: boob , key: i}}),
        items2: this.props.location.state.recipe.steps.map(( boob,i) => { return {text: boob , key: i}})
        
      })
      this.props.resetForm(this.props.location.state.recipe)
      this.props.setFieldValue("ingredients", this.state.items.map(function (elem) {
        return elem.text;
      }).join('||'));
      this.props.setFieldValue("steps", this.state.items2.map(function (elem) {
        return elem.text;
      }).join('||'));
      console.log(this.props.location.state.recipe)
    }
   
  }
  deleteIngredientItem = key => {
    let newItems = this.state.items.filter((item) => item.key !== key)
    this.setState({ items: newItems })
  }
  deleteStepItem = key => {
    let newItems = this.state.items2.filter((item) => item.key !== key)
    this.setState({ items2: newItems })
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
      {this.state.recipe !== null ?
            (<React.Fragment><h1>Edit {this.state.recipe.title}</h1></React.Fragment>)
            :
            (<React.Fragment><h1>Create a Recipe</h1></React.Fragment>
           )}
       <br></br>
        <Form>
          <Field className={styles.Field} name="title" type="text" placeholder="Title" ></Field><br></br>
          {(this.state.recipe !== null && this.state.recipe.img !== null)?   (<React.Fragment><img width = "256" height = "256" src={"http://localhost:3001/" + this.state.recipe.img}></img><br></br><button type="button" className = {styles.button2} onClick ={ () =>this.setState({ recipe : { ...this.state.recipe, img : null}})} >Delete Image</button></React.Fragment>):(<React.Fragment><p>Upload Image</p><input accept="image/*" onChange={(event) => {
            if (!event.target.files) return;
            this.props.setFieldValue("img", event.target.files[0]);
          }} className={styles.Field} type="file" /></React.Fragment>)}<br></br>
          <Field className={styles.Field} name="description" type="textarea" placeholder="Description"></Field><br></br>



          <IngredientsList
            addItem={this.addItem}
            inputElement={this.inputElement}
            handleInput={this.handleInput}
            currentItem={this.state.currentItem}
          />
          <IngredientItems deleteIngredientItem={this.deleteIngredientItem} entries={this.state.items} />


          <StepList
            addItemStep={this.addItemStep}
            inputElementstep={this.inputElementstep}
            handleInputStep={this.handleInputStep}
            currentItem2={this.state.currentItem2}
          />
          <StepItems deleteStepItem={this.deleteStepItem} entries={this.state.items2} />


          <button onClick={this.props.handleSubmit} type="submit">{this.state.recipe !== null ?
            (<React.Fragment><h3>Update Recipe</h3></React.Fragment>)
            :
            (<React.Fragment><h3>Post Recipe</h3></React.Fragment>
           )}</button>
        </Form>

      </div>
    )
  }
}

export default withFormik({
  mapPropsTovalues: ({ props }) => ({ title: '', img: null, description: '', user_id: props.user_id, date: new Date() }),

  // Custom sync validation
  validate: values => {
    const errors = {};

    if (!values.title) {
      errors.title = true;
      alert("type title");
    }
    if (!values.description) {
      errors.lastname = true;
      alert("description needed");
    }



    return errors;
  },

  handleSubmit: (values, { setSubmitting, props }) => {
    if (props.errors && props.errors.length > 0) return false;

    let data = new FormData();
    if( values.hasOwnProperty('id')) {data.append('id', values.id)}
    data.append('title', values.title);
    data.append('img', values.img);
    data.append('description', values.description);
    data.append('ingredients', values.ingredients);
    data.append('steps', values.steps);
    data.append('user_id', values.user_id);
    data.append('date', values.date);

    API.post('/recipe', data, { headers: { 'Content-Type': 'multipart/form-data' } }).then(function (response) {
      console.log(response);
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
})(withRouter(AddRecipe));

