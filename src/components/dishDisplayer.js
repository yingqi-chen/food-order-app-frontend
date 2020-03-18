import React from 'react'
import Dish from '../components/dish'

const dishDisplayer = ({dishes}) =>dishes.map(d => <Dish dish={d}/>);

export default dishDisplayer

 
