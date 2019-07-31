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
import jwt_decode from 'jwt-decode'


import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends React.Component {

  state = {
    full_name: '',
    user_id: null,
    email: ''
  }

  componentDidMount() {
    this.setLogin(localStorage.getItem('token'))
  }

  setLogin = (token) => {
    if (token !== null) {
      localStorage.setItem('token', token);
      const decodedToken = jwt_decode(token);
      this.setState({
        full_name: decodedToken.full_name,
        user_id: decodedToken.id,
        email: decodedToken.email
      })
    }
  }

  render() {
    return (
      <Router>
        <div className="App">

          <Header fullName={this.state.full_name}></Header>

          <Route exact path="/" component={RecipeList} />
          <Route path="/login" render={(props) => <Login {...props} setLogin={this.setLogin} />} />
          <Route path="/register" component={Register} />
    <Route path="/recipe"  render={(props) => <RecipeContainer {...props} user_id={this.state.user_id}/>} />

          <Route path="/addpost" render={(props) => <AddRecipe {...props} user_id={this.state.user_id} />} />



          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
