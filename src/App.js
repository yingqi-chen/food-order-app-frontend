import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import RestaurantContainer from './containers/restaurantContainer';
import UserContainer from './containers/userContainer.js'
import LoginForm from './components/loginForm'

class App extends React.Component {

  
  render(){
  return (
    <div>
      <Router>
       <Switch>
         <Route exact path="/" component={RestaurantContainer} />
         <Route exact path="/login" component={LoginForm} />
       </Switch>
      </Router>
    </div>
  );
 }
}

export default App;

/* <RestaurantContainer />
<UserContainer />
{/* <FavoritesContainer />
<Footer> */