import React from 'react'

const OrderContainer = ({orders,renderListDisplayer,total}) => {
    return (
      <div className="container order-lists">
         <h3>My previous orders</h3>
         {renderListDisplayer(orders, false)}
      </div>
    )
  }



export default OrderContainer