import React from 'react'
import ListDisplayer from './ListDisplayer'

class MyProfile extends React.Component{

    renderListDisplayer = (lists)=>lists.map((item,index)=><ListDisplayer key={index} dishes={item.dishes}/>)
    renderOrders = (orders)=>this.renderListDisplayer(orders)
    renderFavorites = (favorites) => this.renderListDisplayer(favorites)
    

   
    render(){
        let user = this.props.user
    return (
       <div>
         <p>Hello, {user.name}!</p>
         {user.orders? this.renderOrders(user.orders) :null}
         {user.favorites? this.renderFavorites(user.favorites):null}
       </div>
   )
}
}


export default MyProfile
