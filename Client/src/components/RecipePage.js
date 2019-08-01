import React from "react";
import PlaceHolder from "./PlaceHolderRecipe.json"
import styles from "./RecipePage.module.css";
import API from "../Services/API"
class RecipePage extends React.Component {
  state = { recipe: null };



  handleDelete=()=>{
    let _this = this;
    API.delete('/recipedelete?id=' + this.props.match.params.id)
    .then(function (response) {
      _this.props.history.replace({ pathname: "/" })
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  componentDidMount() {
    let _this = this;
    API.get('/recipe?id=' + this.props.match.params.id)
      .then(function (response) {
        let ingredients = ["air"]
        let steps = ["done"]
        if(response.data.recipes.ingredients!=null){
        ingredients = response.data.recipes.ingredients.split('||')}
        if(response.data.recipes.steps!=null){
        steps = response.data.recipes.steps.split('||')}
        _this.setState({ recipe: {...response.data.recipes, ingredients: ingredients, steps: steps } })
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  render() {
    const { match } = this.props
    const {recipe} = this.state
    if (this.state.recipe === null) {
      return (<p>loading...</p>)
    }
    return (
      <div className = {styles.box}>

        <h1>Recipe Title: {recipe.title}</h1>
        <img src = "/img/food.jpg" />
        <h3>Created by : {recipe.first_name} {recipe.last_name}</h3>
        <p>description :{recipe.description}</p>
        <p>Posted on : </p>
        <p>Ingredients : </p>
        <ul>
          {recipe.ingredients.map(ingredient => (
            <li key={ingredient}>

              {ingredient}
            </li>
          ))}
        </ul>

        <p>steps:       <ol>    {recipe.steps.map(step => (
          <li key={step}>

            {step}
          </li>

        ))} </ol></p>
         {console.log("props user id" , this.props.user_id, "recipe user id", recipe.user_id)}

{this.props.user_id == recipe.user_id ?
            (<React.Fragment><button className= {styles.button} onClick={this.handleDelete} type="submit">Delete Post</button><br></br>
            <button className= {styles.button2}  type="submit">Update Post</button></React.Fragment>):
            (<React.Fragment></React.Fragment>
           )}



         
      </div>
    );
  }
}

export default RecipePage;