import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import RestaurantContainer from './containers/restaurantContainer';
import UserContainer from './containers/userContainer.js'

class App extends React.Component {

  
  render(){
  return (
    <div>
      {/* <HeaderJumbo /> */}
      <Router>
       <Switch>
         <Route exact path="/" component={RestaurantContainer} />
         <Route exact path="/login" component={UserContainer} />
         <Route exact path="/signup" render={props=><UserContainer {...props} />} />
         <Route exact path="/myprofile" component={UserContainer} />
       </Switch>
      </Router>
      {/* <Footer /> */}
    </div>
  );
 }
}

export default App;

/* <RestaurantContainer />
<UserContainer />
{/* <FavoritesContainer />
<Footer> */