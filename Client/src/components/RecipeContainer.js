import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./RecipeContainer.module.css";
import RecipePage from "./RecipePage";

function RecipeContainer({match}) {
  return (
   
    <div>
  
        <Route path={`${match.path}/:id`} component={RecipePage} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a Recipe.</h3>}
        />
    </div>
  );
}

export default RecipeContainer;
