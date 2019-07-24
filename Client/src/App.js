import React from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import Footer from './components/Footer'
import RecipeList from './components/RecipeList'
import PlaceHolder from './components/PlaceHolderRecipe.json'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <RecipeList recipes={PlaceHolder.recipes}></RecipeList>
      <Footer></Footer>
    </div>
  );
}

export default App;
