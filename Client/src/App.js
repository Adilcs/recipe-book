import React from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import Footer from './components/Footer'
import RecipeList from './components/RecipeList'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <RecipeList></RecipeList>
      <Footer></Footer>
    </div>
  );
}

export default App;
