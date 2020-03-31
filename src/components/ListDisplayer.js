import React, { Fragment } from 'react'
import Dish from './dish'
import {Row} from 'react-bootstrap'



class ListDisplayer extends React.Component{
    
    render(){
    return(    
        <Row sm={1} md={2} lg={3}>
          {this.props.dishes.map((d,index) => <Dish key={index} dish={d} button={this.props.button} />)}
        </Row>
    )
    }
  
}

    

export default ListDisplayer

 
