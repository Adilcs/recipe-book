import React from "react";

import styles from "./RecipePage.module.css";
function RecipePage({match, recipes}) {
    const recipe = recipes.filter(recipe => recipe.id === match.param.id)
  return (
    <div>
        <img src = {recipe.img}></img>
        <h1>Recipe Title: </h1>
        <h3>Created by : </h3>
        <p>description </p>
        <p>Posted on : </p>
        <p>ingredients : </p>
        <p>steps:  </p>

  
    </div>
  );
}

export default RecipePage;
