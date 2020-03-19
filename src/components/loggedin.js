import React from 'react'
import ListDisplayer from './ListDisplayer'

class loggedIn extends React.Component{

    renderListDisplayer = (lists)=>lists.map((item,index)=><ListDisplayer key={index} dishes={item.dishes}/>)


    renderOrders = (orders)=>this.renderListDisplayer(orders)
    renderFavorites = (favorites) => this.renderListDisplayer(favorites)
    

   
    render(){
        let user = this.props.user
    return (
       <div>
         <p>Hello, {user.name}!</p>
         {this.renderOrders(user.orders)}
         {this.renderFavorites(user.favorites)}
       </div>
   )
}
}


export default loggedIn
