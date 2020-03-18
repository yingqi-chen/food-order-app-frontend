import React from 'react'
import {connect} from 'react-redux'
import {authenticateUser} from '../actions/userAction'

class LoginForm extends React.Component{
    
    state = {
        email:"",
        password: ""
    }


    handleChange = (e) =>{
       this.setState({
          [e.target.name]: e.target.value 
       })
    }

    handleSubmit = (e) =>{
       e.preventDefault;
       this.props.authenticateUser()
    }



    render(){
        return (        
            <div>
               <form onSubmit = {this.handleSubmit}>
                   <label>Email: </label>
                   <input 
                      name = "email"
                      type="text" 
                      onChange={this.handleChange} 
                      value={this.state.email}/>
                   <label>Password: </label>
                   <input 
                      name = "password"
                      type="password" 
                      onChange={this.handleChange} 
                      value={this.state.password}/>
                    <input type="submit"/>
                </form>
            </div>
        )
      
        
    }
}


const mapDispatchToProps = dispatch => {
    return {
      authenticateUser: () => dispatch(authenticateUser())
    }
  }

export default connect(null, mapDispatchToProps)(LoginForm)

 