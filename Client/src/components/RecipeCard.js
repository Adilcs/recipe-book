import React from 'react';

//import './App.css';
import styles from './RecipeCard.module.css';
function RecipeCard(props) {
 const{id, title, description, img, name}=props;
    return (
    <div className={styles.foo}>
    <h1>{title}</h1>
    <article>
        <img src = "/img/food.jpg"></img>
      <p>{description}</p>
      <p>Created by : {name}</p>
      <a href={`/recipe/${id}`}>Click to bake</a>
 
    </article>
  </div>
  );
}

export default RecipeCard;
