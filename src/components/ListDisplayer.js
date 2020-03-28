import React from 'react'
import Dish from './dish'
import {Row} from 'react-bootstrap'


class ListDisplayer extends React.Component{


    //eg: if the array is [a(which stands for a string, like "date")],
    // then to display the list, I hope there is a: {order[a]} for the list
    
   
    render(){
    return(
        <Row sm={1} md={2} lg={3}>
         { this.props.dishes.map((d,index) => <Dish key={index} dish={d}/>)}
        </Row>
    )
  }
}

    

export default ListDisplayer

 
