import React from "react";
import RecipeCard from "./RecipeCard";
//import './App.css';
import styles from "./RecipeList.module.css";
function RecipeList(props) {
  return (
    <div>
      <section className={styles.cardstyle}>
        <ul>
          {props.recipes.map(recipe => (
            <li key={recipe.id}>
              <RecipeCard
                id={recipe.id}
                title={recipe.title}
                name={recipe.FullName}
                description={recipe.description}
                img={recipe.img}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default RecipeList;
