import React from 'react'
import Button from 'react-bootstrap/Button'
import {addOrder, cancelOrder} from '../actions/orderAction'
import {connect} from 'react-redux'

class Dish extends React.Component{

    handleOrderClick = async (dish) =>{
        await this.props.addOrder(dish)
        localStorage.setItem("order", JSON.stringify(this.props.order))
        alert(`${dish.name} added to your order!`)
      } 

    handleCancelClick = (dish) =>{
        this.props.cancelOrder(dish)
        alert(`${dish.name} have been removed from your order!`)
    }
      
    renderButton = (dish) =>{
        let button = this.props.button
        if (button==="orderButton"){
            return <Button onClick = {()=>this.handleOrderClick(dish)} size="sm" variant="primary">Order</Button>   
        }else if (button==="cancelButton"){
            return <Button onClick = {()=>this.handleCancelClick(dish)} size="sm" variant="secondary">Cancel</Button> 
        }else{
            return null
        }
    }

    render(){
      let dish = this.props.dish  
        return(
        <div className="col-4">  
            <img
            width = "100%" 
            height = "70%"
            className="fluid" 
            src={`./images/${dish.image}`} 
            alt={dish.name} />
            <h5>{dish.name}         ${dish.price}</h5>
            {this.renderButton(dish)}
        </div>
    )
  }
}

const mapDispatchToProps = dispatch =>{
    return {
        addOrder: (dish) =>dispatch(addOrder(dish)),
        cancelOrder: (dish) =>dispatch(cancelOrder(dish))
    }
}

const mapStateToProps = state =>{
    return{
        order: state.order
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Dish)
