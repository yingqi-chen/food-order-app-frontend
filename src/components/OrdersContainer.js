import React from 'react'

const OrdersContainer = ({orders,renderListDisplayer,total}) => {
    return (
      <div className="container">
         <h3>My order history</h3>
         {renderListDisplayer(orders)}
      </div>
    )
  }



export default OrdersContainer