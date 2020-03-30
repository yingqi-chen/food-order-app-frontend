import React from 'react'
import moment from 'moment'


class OrderHeader extends React.Component{
    
    render(){
      let item = this.props.item
      let date = this.props.dateNeedMoment? 
      moment(item.date).calendar() : item.date
    return(
      
        <div className="order-header">
          <h2>Order Time: {date}</h2>
          <h3>Order total: ${item.total}</h3>
        </div>
    
    )
    }
  
}
export default OrderHeader