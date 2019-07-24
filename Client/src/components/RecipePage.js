import React from "react";
import PlaceHolder from "./PlaceHolderRecipe.json"
import styles from "./RecipePage.module.css";
function RecipePage({match, recipes}) {
    const recipe = PlaceHolder.recipes.find(recipe =>{ return recipe.id === parseInt(match.params.id)});
    console.log(recipe, typeof match.params.id);
    
  return (
    <div>
       
        <h1>Recipe Title: {recipe.title}</h1>
        <h3>Created by : {recipe.FullName}</h3>
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

        <p>steps:       <ul>    {recipe.steps.map(step => (
            <li key={step}>
              
              {step}
            </li>
            
          ))} </ul></p>

  
    </div>
  );
}

export default RecipePage;