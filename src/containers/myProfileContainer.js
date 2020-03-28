import React from 'react'
import ListDisplayer from '../components/ListDisplayer'
import OrdersContainer from '../components/OrdersContainer'
import FavoritesContainer from '../components/FavoritesContainer'
import {connect} from 'react-redux'

class MyProfileContainer extends React.Component{

    renderListDisplayer = (lists,hasName)=>{      
      return lists.map((item,index)=>{
        return hasName? <h1>hasName</h1>:
        <h1>NOName</h1>
        // <ListDisplayer key={index} dishes={item.dishes} date ={item.date} total={item.total}/>
        
      })
      
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
         {/* <MyCurrentOrder /> */}  
         {user.orders? <OrdersContainer orders={this.props.orders} renderListDisplayer={this.renderListDisplayer} total={this.calculateTotal}/> : <h3>You have no orders.</h3>}
         {user.favorites? <FavoritesContainer renderListDisplayer={this.renderListDisplayer} favorites = {this.props.favorites}/>:<h3>You have no favorites.</h3>}
  
       </div>
   )
}
}



const mapStateToProps = state =>{
  return {
      orders: state.user.user.orders,
      favorites: state.user.user.favorites
  }
}

export default connect(mapStateToProps)(MyProfileContainer)
