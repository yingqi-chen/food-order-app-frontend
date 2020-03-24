import React from 'react'
import Dish from './dish'
import {Row} from 'react-bootstrap'


const ListDisplayer = ({dishes}) =>{
    return(
        <Row sm={1} md={2} lg={3}>
         { dishes.map((d,index) => <Dish key={index} dish={d}/>)}
        </Row>
    )
    

}

    // 
    

export default ListDisplayer

 
