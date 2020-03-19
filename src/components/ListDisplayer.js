import React from 'react'
import Dish from '../components/dish'


const dishDisplayer = ({dishes}) =>dishes.map((d,index) => <Dish key={index} dish={d}/>)

    // 
    

export default dishDisplayer

 
