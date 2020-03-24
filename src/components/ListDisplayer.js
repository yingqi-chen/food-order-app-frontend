import React from 'react'
import Dish from './dish'


const ListDisplayer = ({dishes}) =>{
    return(
        <div className="row">
         { dishes.map((d,index) => <Dish key={index} dish={d}/>)}
        </div>
    )
    

}

    // 
    

export default ListDisplayer

 
