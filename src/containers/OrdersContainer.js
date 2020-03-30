import React from 'react'

const OrderContainer = ({orders,renderListDisplayer,total}) => {
    return (
      <div className="container">
         <h3>My order history</h3>
         {renderListDisplayer(orders)}
      </div>
    )
  }



export default OrderContainer