import React, { Fragment } from 'react'
import ListDisplayer from '../components/ListDisplayer'
import OrdersContainer from './OrdersContainer'
import {connect} from 'react-redux'




class MyProfileContainer extends React.Component{
    
    renderListDisplayer = (lists)=>{      
      return lists.map((item,index)=><ListDisplayer item={item} key={index} dateNeedMoment = {true}/> 
      )      
    }

    renderCurrentOrder = () =>{
      return this.props.currentOrder.dishes.length===0? 
      null 
      : <Fragment>
           <h3>My Current Order</h3>
           <ListDisplayer item={this.props.currentOrder} dateNeedMoment={false}/>
        </Fragment>
    }


    render(){
        let user = this.props.user

    return (
       <div className = "container">
         <h1>Hello, {user.name}!</h1>
         {this.renderCurrentOrder()}
         {user.orders? <OrdersContainer orders={this.props.orders} renderListDisplayer={this.renderListDisplayer} total={this.calculateTotal}/> : <h3>You have no orders.</h3>}  
       </div>
   )
}
}



const mapStateToProps = state =>{
  return {
      orders: state.user.user.orders,
      currentOrder: state.order 
  }
}

export default connect(mapStateToProps)(MyProfileContainer)
