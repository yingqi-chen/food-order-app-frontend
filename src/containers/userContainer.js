import React from 'react'
import LoginForm from '../components/loginForm'
import LoggedIn from '../components/loggedin'
import {connect} from 'react-redux'


class UserContainer extends React.Component{
    render(){
        return (
          
            <div>
               {this.props.loggedIn ? <LoggedIn user={this.props.user}/> :  <LoginForm />}
            </div>
        )
      
        
    }
}

const mapStateToProps = state =>{
    return {
        user: state.user.user,
        loggedIn: state.user.login
    }
}


export default connect(mapStateToProps)(UserContainer)