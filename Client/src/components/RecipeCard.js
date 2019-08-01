import React from 'react';

//import './App.css';
import styles from './RecipeCard.module.css';
function RecipeCard(props) {
  const { id, title, description, img, name } = props;
  return (
    <div className={styles.box}>
      <br ></br>
      <h1>{title}</h1>
      <br ></br>
      <article>
        <img width = "256" height = "256" src={"http://localhost:3001/" + img}></img>
        <p>{description}</p>
        <p>Created by : {name}</p>
        <button className={styles.buttons}><a className={styles.link} href={`/recipe/${id}`}>Click to Bake!</a></button>

      </article>
    </div>
  );
}

export default RecipeCard;
