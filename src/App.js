import React from 'react';
import './App.css';
import RestaurantContainer from './containers/restaurantContainer';
import UserContainer from './containers/userContainer.js'

class App extends React.Component {
  
  render(){
  return (
    <div>
      <RestaurantContainer />
      <UserContainer />
      {/* <FavoritesContainer />
      <Footer> */}
    </div>
  );
 }
}

export default App;
