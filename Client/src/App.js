import React from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import Footer from './components/Footer'
import RecipeList from './components/RecipeList'
import PlaceHolder from './components/PlaceHolderRecipe.json'
import Register from './components/Register'
import Login from './components/Login'
import RecipeContainer from './components/RecipeContainer'
import AddRecipe from './components/AddRecipe'


import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
     
      <Header></Header>
      
      <Route exact path="/" component={  RecipeList} />
  <Route path="/login" component={Login} />
  <Route path="/register" component={Register}/>
  <Route path="/recipe" component={RecipeContainer}/>
  <Route path="/addpost" component={AddRecipe}/>
     

 
     
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
