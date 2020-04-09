import React from 'react'
import Dish from '../components/dish'
import {Row} from 'react-bootstrap'



const ListDisplayer = ({dishes,button})=>{

     return dishes.length!==0 ?   
            <Row sm={1} md={2} lg={3}>
              {dishes.map((d,index) => <Dish key={index} dish={d} button={button} />)}
            </Row>
            : null
}

    

export default ListDisplayer

 
