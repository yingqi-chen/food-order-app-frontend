import React from 'react'
import ListDisplayer from './ListDisplayer'

class MyProfile extends React.Component{

    renderListDisplayer = (lists)=>lists.map((item,index)=><ListDisplayer key={index} dishes={item.dishes}/>)
    renderOrders = (orders)=>{
      return (
        <div className="container order-lists">
           <h3>My orders</h3>
           {this.renderListDisplayer(orders)}
        </div>
      )
    }
    renderFavorites = (favorites) => {
      return (
        <div className="container favorite-lists">
           <h3>My favorites</h3>
           {this.renderListDisplayer(favorites)}
        </div>
      )
    }    

   
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
