import React from 'react'
import ListDisplayer from '../components/ListDisplayer'
import OrdersContainer from '../components/OrdersContainer'
import FavoritesContainer from '../components/FavoritesContainer'
import {connect} from 'react-redux'

class MyProfileContainer extends React.Component{

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
       <div className = "container">
         <h1>Hello, {user.name}!</h1>
       
         {/* {user.orders? <OrdersContainer /> :<h3>You have no orders.</h3>}
         {user.favorites? <FavoritesContainer />:<h3>You have no orders.</h3>} */}
  
       </div>
   )
}
}

// const mapStateToProps = state =>{
//   debugger
//   return {
//     orders: state.user,
//     // favorites: state.user.user.favorites
//   }
// }

const mapStateToProps = state =>{
  return {
      orders: state.user.user.orders,
      favorite: state.user.user.favorites
  }
}

export default connect(mapStateToProps)(MyProfileContainer)
