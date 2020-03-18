import React from 'react';
import {connect} from 'react-redux';
import fetchDishes from '../actions/dishAction.js'



class RestaurantContainer extends React.Component {

    componentDidMount(){
        this.props.fetchDishes()
    }
  
    render(){
    return (
      <div>
        RestaurantContainer
      </div>
    );
   }
  }

// const mapStateToProps = state =>{
//     return {
//         dishes: state.dishes
//     }
// }

const mapDispatchToProps = dispatch => {
    return {
      fetchDishes: () => dispatch(fetchDishes())
    }
  }

export default connect(null, mapDispatchToProps)(RestaurantContainer)


  