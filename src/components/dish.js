import React from 'react'
import Button from 'react-bootstrap/Button'

const Dish = ({dish}) =>{
    return(
    <div className="col-4">  
        <img
        width = "100%" 
        height = "70%"
        className="fluid" 
        src={`./images/${dish.image}`} 
        alt={dish.name} />
        <h5>{dish.name}</h5>
        <Button size="sm" variant="primary">Order</Button> 
        {/* depending on where it comes from, if a request makes from order then we don't have a order button,
        if it comes from favorites then no add-favorites button
        only when it comes from dishes it has all two buttons
        also the button should inherit some functions from the parent component*/}
    </div>
    )
}


export default Dish
