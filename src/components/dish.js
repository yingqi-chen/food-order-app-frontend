import React from 'react'

const Dish = ({dish}) =>{
    return(
    <div className="col-4">  
        <img
        width = "100%" 
        height = "70%"
        className="fluid" 
        src={`./images/${dish.image}`} 
        alt={dish.name} />
        <p >{dish.name}</p>
    </div>
    )
}

// later I would need dish name, dish picture and order button, dish status will decide what the order button said, 
//no matter it is rendered from within myorder component, menu component or favorite component,  then, you can click the button 
// to order it or unorder it, "order or cancelled", then it is going to change the state's current order: [], attribute, and thus influence
// the order component, if you order it, it will show up in the order component, if you cancel, it will disapear
// BUT!!!if it is in a history_order list, then no need to show up the page of "order or cancel"

export default Dish
