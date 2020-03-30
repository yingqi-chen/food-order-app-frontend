import React from 'react';
import {connect} from 'react-redux';
import fetchDishes from '../actions/dishAction.js'
import ListDisplayer from '../components/ListDisplayer'



class RestaurantContainer extends React.Component {

    componentDidMount(){
        this.props.fetchDishes()
    }
  
    render(){
    return (
      <div className="container" fluid="xs" >
        <p >The Dishes that you will like!</p>
        <ListDisplayer dishes={this.props.dishes} button="orderButton"/>
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


  