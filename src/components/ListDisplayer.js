import React from 'react'
import Dish from './dish'


const ListDisplayer = ({dishes}) =>dishes.map((d,index) => <Dish key={index} dish={d}/>)

    // 
    

export default ListDisplayer

 
