import React from "react";
import RecipeCard from "./RecipeCard";
import PlaceHolder from "./PlaceHolderRecipe.json"
import styles from "./RecipeList.module.css";
import API from '../Services/API';
import InfiniteScroll from 'react-infinite-scroller'
class RecipeList extends React.Component {
    state = {recipes:[],
    page: 0,
    isLoading: false,
    hasMore: true}
    loadMore (page){ 
        
      
        let _this = this
        this.setState({isLoading: true})
        setTimeout(
        ()=>API.get('/recipes?page='+_this.state.page).then(function (response) {
        console.log(response);
        if(response.data.recipes.length>0){
          let recipes = _this.state.recipes
          response.data.recipes.map(recipe => {
           recipes.push(recipe)})
         _this.setState({recipes: recipes,
          page : _this.state.page + 1,
         isLoading : false,
          hasMore:true})}
         else{
        _this.setState({
        isLoading : false,
        hasMore: false})
      }
        
      })
      .catch(function (error) {
        console.log(error);
      }), 400)

    }

    render(){
     
      var recipes = [];

     this.state.recipes.map(recipe => recipes.push(
        <li key={recipe.id}>
          <RecipeCard
          img={recipe.img}
            id={recipe.id}
            title={recipe.title}
            name={recipe.first_name + " " + recipe.last_name}
            description={recipe.description}

          />
        </li>))
  
  return (


    
    
    <div><InfiniteScroll
    pageStart={0}
    loadMore={this.loadMore.bind(this)}
    hasMore={!this.state.isLoading&& this.state.hasMore}
    loader={<div className="loader" ><h1>Loading ...</h1></div>}
    useWindow={true}
   
 
>
      <section className={styles.cardstyle}>
        <ul>
        {recipes}
        </ul>
      </section>
      </InfiniteScroll>
    </div>
  );
}
}
export default RecipeList;
