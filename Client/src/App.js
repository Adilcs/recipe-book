import React from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import Footer from './components/Footer'
import RecipeList from './components/RecipeList'
import PlaceHolder from './components/PlaceHolderRecipe.json'

import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
     
      <Header></Header>
      
      <Route exact path="/" component={  RecipeList} />
  <Route path="/login" component={()=><div>Login</div>} />
  <Route path="/register" component={()=><div>Register</div>}/>
  <Route path="/recipe" component={()=><div>Recipe</div>}/>
  <Route path="/addpost" component={()=><div>Add Post</div>}/>
     

 
     
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
