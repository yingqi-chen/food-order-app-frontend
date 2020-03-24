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
        {/* depending on where it comes from, if a request makes from previous order then we don't have a order button  */}
    </div>
    )
}


export default Dish
