import React from "react";
import RecipeCard from "./RecipeCard";
import PlaceHolder from "./PlaceHolderRecipe.json"
import styles from "./RecipeList.module.css";
import API from '../Services/API';
class RecipeList extends React.Component {
    state = {recipes:[]}
    componentDidMount(){
        let _this = this
        API.get('/recipes').then(function (response) {
        console.log(response);
        _this.setState({recipes: response.data.recipes})
        
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    render(){
  return (
    <div>
      <section className={styles.cardstyle}>
        <ul>
        {this.state.recipes.length > 0 ? this.state.recipes.map(recipe => (
              <li key={recipe.id}>
                <RecipeCard
                img={recipe.img}
                  id={recipe.id}
                  title={recipe.title}
                  name={recipe.first_name + " " + recipe.last_name}
                  description={recipe.description}

                />
              </li>
            )) : <p>Loading...</p>}
        </ul>
      </section>
    </div>
  );
}
}
export default RecipeList;
