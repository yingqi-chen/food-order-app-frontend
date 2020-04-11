import React, { Fragment } from 'react'
import ListDisplayer from '../components/ListDisplayer'
import OrdersContainer from '../components/OrdersContainer'
import {connect} from 'react-redux'
import OrderHeader from '../components/OrderHeader'
import Button from 'react-bootstrap/Button'
import {createOrder} from '../actions/orderAction'


class MyProfileContainer extends React.Component{
    
     renderListDisplayer =  (lists)=>{
  
      return lists.reverse().map((item,index)=>{
         return(
        <div className="order-block container">
           <OrderHeader item={item} dateNeedMoment={true}/>
           <ListDisplayer dishes={item.dishes} key={index} dateNeedMoment = {true} button="noButton"/>
        </div> 
      )})      
    }

    renderCurrentOrder = () =>{
      return this.props.currentOrder.dishes.length===0? 
      null 
      : <Fragment>
           <h3>My Current Order</h3>
           <div className="order-block container">
              <OrderHeader item={this.props.currentOrder} dateNeedMoment={false}/>
              <ListDisplayer dishes={this.props.currentOrder.dishes} button = "cancelButton"/>
              <Button onClick={this.handleClick}>Submit Order</Button>
           </div> 
        </Fragment>
    }

    handleClick = () =>{
       this.props.createOrder(this.props.user.id)
    }

    goHomepage = () =>{

    }


    render(){
        let user = this.props.user
        debugger
        let currentDishes = this.props.currentOrder.dishes
    return (
       <div className = "container">
         <h1>Hello, {user.name}!</h1>
         {currentDishes.length !==0 ? this.renderCurrentOrder()
         : 
         <Fragment>
         <h3>You currently have no orders.</h3>
         <Button ><a href="/">Go order some food!</a></Button>
         </Fragment>
         }
         {this.props.orders !==0? <OrdersContainer orders={this.props.orders} renderListDisplayer={this.renderListDisplayer} total={this.calculateTotal}/> 
         : null
         
         } 
         
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

const mapDispatchToProps = dispatch => {
  return {
    createOrder: (id) => dispatch(createOrder(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProfileContainer)
