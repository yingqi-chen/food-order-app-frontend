import React from 'react'
import {connect} from 'react-redux';
import {loginUserFetch} from '../actions/userAction'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'



class LoginForm extends React.Component{
    
    state = {
        email:"",
        password: ""
    }


    handleChange = (e) =>{
        debugger
       this.setState({
          [e.target.name]: e.target.value 
       })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.loginUserFetch(this.state)
        this.setState({
            email:"",
            password: ""
        })
      }

      authenticateUser = (j)=>{
          if (j.status==="error" ){
             alert(j.message)
          }else{
              this.props.loginUserFetch(j)
          }
      }


    render(){
        return (        
            // <div className="container">
            //     <h1>Log in here!</h1>
            //    <form  onSubmit = {this.handleSubmit}>
            //        <label>Email: </label><br></br>
            //        <input 
            //           name = "email"
            //           type="text" 
            //           onChange={this.handleChange} 
            //           value={this.state.email}/><br></br>
            //        <label>Password: </label><br></br>
            //        <input 
            //           name = "password"
            //           type="password" 
            //           onChange={this.handleChange} 
            //           value={this.state.password}/><br></br>
            //         <Button variant="primary" type="submit">Log in</Button>
            //     </form>
            // </div>
            <Form className="container" onSubmit={this.handleSubmit} >
                <h1>Login Form</h1>
                <Form.Group controlId="formUserName">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                       name = "email"
                       onChange={this.handleChange} 
                       type="email" 
                       placeholder="Please enter your email" 
                       value={this.state.email}/>
                </Form.Group>
               
                <Form.Group controlId="formUserName">
                     <Form.Label>Password</Form.Label>
                     <Form.Control 
                        name = "password"
                        onChange={this.handleChange} 
                        type="password" 
                        placeholder="Please enter your password" 
                        value={this.state.password}/>
                </Form.Group>
               
                <Button variant="primary" type="submit">Log in</Button>
            </Form>
        )
      
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
      loginUserFetch: (userInfo) => dispatch(loginUserFetch(userInfo))
    }
  }

export default connect(null, mapDispatchToProps)(LoginForm)





 