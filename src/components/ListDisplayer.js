import React, { Fragment } from 'react'
import Dish from './dish'
import {Row} from 'react-bootstrap'
import moment from 'moment'



class ListDisplayer extends React.Component{
    
    render(){
      let item = this.props.item
      let dishes = this.props.dishes
    return(
      <div className="order-block container">
        <div className="order-header">
          <h2>Order placed: {moment(item.date).calendar()}</h2>
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

 
