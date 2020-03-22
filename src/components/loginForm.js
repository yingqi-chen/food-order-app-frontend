import React from 'react'
import {connect} from 'react-redux';
import {loginUserFetch} from '../actions/userAction'



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
      loginUserFetch: (userInfo) => dispatch(loginUserFetch(userInfo))
    }
  }

export default connect(null, mapDispatchToProps)(LoginForm)





 