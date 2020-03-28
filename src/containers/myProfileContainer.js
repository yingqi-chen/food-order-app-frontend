import React from 'react'
import ListDisplayer from '../components/ListDisplayer'
import OrdersContainer from '../components/OrdersContainer'
import {connect} from 'react-redux'
import moment from 'moment'




class MyProfileContainer extends React.Component{
    
    renderListDisplayer = (lists)=>{      
      return lists.map((item,index)=>{
        return (
        <div className="order-block container">
           <div className="order-header">
            <h2>Order placed: {moment(item.date).calendar()}</h2>
             <h3>Order total: ${item.total}</h3>
            </div>
            <ListDisplayer key={index} dishes={item.dishes} date ={item.date} total={item.total}/> 
        </div>   
        )}
      )
      
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
