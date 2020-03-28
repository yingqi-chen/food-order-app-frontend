import React from 'react'
import ListDisplayer from '../components/ListDisplayer'
import OrdersContainer from '../components/OrdersContainer'
import {connect} from 'react-redux'

class MyProfileContainer extends React.Component{

    renderListDisplayer = (lists,hasName)=>{      
      return lists.map((item,index)=>{
        return hasName? <h1>hasName</h1>:
        <h1>NOName</h1>
        // <ListDisplayer key={index} dishes={item.dishes} date ={item.date} total={item.total}/>
        
      })
      
    }

    
  
   
    render(){
        let user = this.props.user
    return (
       <div className = "container">
         <h1>Hello, {user.name}!</h1>
         {/* <MyCurrentOrder /> */}  
         {user.orders? <OrdersContainer orders={this.props.orders} renderListDisplayer={this.renderListDisplayer} total={this.calculateTotal}/> : <h3>You have no orders.</h3>}  
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
