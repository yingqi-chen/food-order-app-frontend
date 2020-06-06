import React from 'react'
import Dish from '../containers/dish'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'



const ListDisplayer = ({dishes,button})=>{

     return dishes.length!==0 ?   
            <Row>
              {dishes.map((d,index) => <Dish key={index} dish={d} button={button} />)}
            </Row>
            : null
}

    

export default ListDisplayer

 
