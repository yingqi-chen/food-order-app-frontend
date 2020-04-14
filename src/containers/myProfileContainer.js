import React, { Fragment } from 'react'
import ListDisplayer from '../components/ListDisplayer'
import OrdersContainer from '../components/OrdersContainer'
import {connect} from 'react-redux'
import OrderHeader from '../components/OrderHeader'
import Button from 'react-bootstrap/Button'
import {createOrder} from '../thunks/createOrder'
import {Link} from 'react-router-dom'


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
      return (
      <div id = "current-order">
      {this.props.currentOrder.dishes.length===0? 
      <Fragment>
         <h3>You currently have no orders.</h3>
         <Button ><Link to="/">Go order some food!</Link></Button>
      </Fragment>
      : 
      <Fragment >
           <h3>My Current Order</h3>
           <div className="order-block container">
              <OrderHeader item={this.props.currentOrder} dateNeedMoment={false}/>
              <ListDisplayer dishes={this.props.currentOrder.dishes} button = "cancelButton"/>
              <Button onClick={this.handleClick}>Submit Order</Button>
           </div> 
        </Fragment>}
      </div>
      )
    }

    handleClick = () =>{
       this.props.createOrder(this.props.user.id)
    }

    render(){
        let user = this.props.user
    return (
       <div className = "container">
         <h1>Hello, {user.name}!</h1>
         {this.renderCurrentOrder()}
         {this.props.orders !==0? 
         <OrdersContainer orders={this.props.orders} renderListDisplayer={this.renderListDisplayer} total={this.calculateTotal}/> 
         : null
         }
         
       </div>
   )
}
}



const mapStateToProps = state =>{
  return {
      orders: state.user.user.orders,
      currentOrder: state.order.current_order 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createOrder: (id) => dispatch(createOrder(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProfileContainer)
