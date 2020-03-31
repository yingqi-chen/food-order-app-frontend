import React, { Fragment } from 'react'
import ListDisplayer from '../components/ListDisplayer'
import OrdersContainer from './OrdersContainer'
import {connect} from 'react-redux'
import OrderHeader from '../components/OrderHeader'
import Button from 'react-bootstrap/Button'


class MyProfileContainer extends React.Component{
    
    renderListDisplayer = (lists)=>{      
      return lists.map((item,index)=>{
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
       this.createOrder()
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

const mapDispatchToProps = dispatch => {
  return {
    createOrder: () => dispatch(createOrder())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProfileContainer)
