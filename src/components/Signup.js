import React from 'react'
import {connect} from 'react-redux'
import {createUser} from '../actions/userAction'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class Signup extends React.Component{
    
    state = {
        name: "",
        password: "",
        email: ""
    }
    
      handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    

      handleSubmit = event => {
        event.preventDefault();
        this.props.createUser(this.state)
        this.setState({
            email:"",
            password: "",
            name:""
        })
      }



    render(){
        return (        
            <div>
               <Form onSubmit = {this.handleSubmit}>
                   <p>Sign Up</p>
                   <label>Username: </label>
                   <input 
                      name = "name"
                      type="text" 
                      onChange={this.handleChange} 
                      value={this.state.name}/>
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
                </Form>
            </div>
        )
      
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
      createUser: (userInfo) => dispatch(createUser(userInfo))
    }
  }

export default connect(null, mapDispatchToProps)(Signup)

    
