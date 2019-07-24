import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./RecipeContainer.module.css";
import RecipePage from "./RecipePage";
import PlaceHolder from "./PlaceHolderRecipe.json"
function RecipeContainer({match}) {
  return (
   
    <div>
  
        <Route path={`${match.path}/:id`} component={()=><RecipePage match={match}recipes={PlaceHolder.recipes}/>} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a Recipe.</h3>}
        />
    </div>
  );
}

export default RecipeContainer;
