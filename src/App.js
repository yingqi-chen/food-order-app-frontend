import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import RestaurantContainer from './containers/restaurantContainer';
import UserContainer from './containers/userContainer.js'
import {connect} from 'react-redux'
import {fetchLoggedInUser} from './actions/userAction'
import Header from './components/Header'
import './App.css'
import MyNavBar from './components/MyNavBar'
import {logOutUser} from './actions/userAction'

class App extends React.Component {
   
  componentDidMount(){
     this.props.fetchLoggedInUser()
  }

  logOut = ()=>{
    localStorage.removeItem("token")
    this.props.logOutUser()
    alert("Succefully log out!")
  }
  
  render(){
  return (
    <div>
      <MyNavBar logOut = {this.logOut}/>
      <Header />
      <Router>
       <Switch>
         <Route exact path="/" component={RestaurantContainer} />
         <Route exact path="/login" component={UserContainer} />
         <Route exact path="/signup" render={props=><UserContainer {...props} />} />
         <Route exact path="/myprofile" component={UserContainer} />
       </Switch>
      </Router>
      {/* <Footer /> */}
    </div>
  );
 }
}

const mapDispatchToProps = dispatch =>{
  return{
    fetchLoggedInUser: () => dispatch(fetchLoggedInUser()),
    logOutUser: ()=>dispatch(logOutUser())
  }
}

export default connect(null, mapDispatchToProps)(App);

