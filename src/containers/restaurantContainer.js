import React from 'react';
import {connect} from 'react-redux';
import fetchDishes from '../actions/dishAction.js'
import DishDisplayer from '../components/dishDisplayer'



class RestaurantContainer extends React.Component {

    componentDidMount(){
        this.props.fetchDishes()
    }
  
    render(){
    return (
      <div>
        <DishDisplayer dishes={this.props.dishes}/>
      </div>
    );
   }
  }

const mapStateToProps = state =>{
    return {
        dishes: state.dishes
    }
}

const mapDispatchToProps = dispatch => {
    return {
      fetchDishes: () => dispatch(fetchDishes())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantContainer)


  