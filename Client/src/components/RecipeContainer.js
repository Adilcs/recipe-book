import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./RecipeContainer.module.css";
import RecipePage from "./RecipePage";

function RecipeContainer(props) {
  return (
   
    <div>
  
  <Route path={`${props.match.path}/:id`}  render={(props2) => <RecipePage {...props2} user_id={props.user_id}/>}/>
      <Route
        exact
        path={props.match.path}
        render={() => <h3>Please select a Recipe.</h3>}
        />
    </div>
  );
}

export default RecipeContainer;
