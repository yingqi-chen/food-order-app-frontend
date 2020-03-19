import React from 'react'
import {connect} from 'react-redux';
import addUser from '../actions/userAction'



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
        fetch('http://localhost:3001/login', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state)
        }).then(r=>r.json())
        .then(j=>this.addUser(j))
        this.setState({
            email:"",
            password: ""
        })
      }

      addUser = (j)=>{
          if (j.status==="error" ){
             alert(j.message)
          }else{
              this.props.addUser(j)
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
      addUser: (userInfo) => dispatch(addUser(userInfo))
    }
  }

export default connect(null, mapDispatchToProps)(LoginForm)





 