import React, { Fragment } from 'react'
import Dish from './dish'
import {Row} from 'react-bootstrap'
import moment from 'moment'



class ListDisplayer extends React.Component{
    
    render(){
      let item = this.props.item
      let dishes = item.dishes
      let date = this.props.dateNeedMoment? 
      moment(item.date).calendar() : item.date
    return(
      <div className="order-block container">
        <div className="order-header">
          <h2>Order Time: {date}</h2>
          <h3>Order total: ${item.total}</h3>
        </div>
        <Row sm={1} md={2} lg={3}>
          {dishes.map((d,index) => <Dish key={index} dish={d}/>)}
        </Row>
      </div>
    )
    }
  
}

    

export default ListDisplayer

 
