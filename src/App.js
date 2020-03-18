import React from 'react';
import './App.css';
import RestaurantContainer from './containers/restaurantContainer';

class App extends React.Component {
  
  render(){
  return (
    <div>
      <RestaurantContainer />
      {/* <OrderContainer /> */}
      {/* <FavoritesContainer />
      <Footer> */}
    </div>
  );
 }
}

export default App;
