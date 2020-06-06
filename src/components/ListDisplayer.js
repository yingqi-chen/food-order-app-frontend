import React from 'react'
import Dish from '../containers/dish'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'



const ListDisplayer = ({dishes,button})=>{

     return dishes.length!==0 ?   
            <Row>
              {/* <Col xm ={12} sm={1} md={2} lg={3}> */}
              {dishes.map((d,index) => <Dish key={index} dish={d} button={button} />)}
              {/* </Col> */}
            </Row>
            : null
}

    

export default ListDisplayer

 
