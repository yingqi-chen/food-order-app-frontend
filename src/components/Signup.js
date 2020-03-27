import React from 'react'
import {connect} from 'react-redux'
import {createUser} from '../actions/userAction'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


const initialState = {
  email:"",
  password: "",
  emailError: "",
  passwordError: "",
  nameError: ""
}

class Signup extends React.Component{
    
    state = initialState
    
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
               <Form className="container" onSubmit = {this.handleSubmit}>
                 <h1>Sign Up</h1>

                 <Form.Group controlId="formUserName">
                   <Form.Label>Username </Form.Label>
                   <Form.Control 
                      name = "name"
                      type="text" 
                      onChange={this.handleChange} 
                      value={this.state.name}/>
                  </Form.Group>

                  <Form.Group controlId="formEmail">
                   <Form.Label>Email address </Form.Label>
                   <Form.Control 
                      name = "email"
                      type="text" 
                      onChange={this.handleChange} 
                      value={this.state.email}/>
                  </Form.Group>

                  <Form.Group controlId="formPassword">
                  <Form.Label>Password: </Form.Label>
                   <Form.Control 
                      name = "password"
                      type="password" 
                      onChange={this.handleChange} 
                      value={this.state.password}/>
                  </Form.Group>

                <Button variant="primary" type="submit">Sign up</Button>
                </Form>
        )
      
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
      createUser: (userInfo) => dispatch(createUser(userInfo))
    }
  }

export default connect(null, mapDispatchToProps)(Signup)

    
