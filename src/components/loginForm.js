import React from 'react'


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
        })
        this.setState({
            email:"",
            password: ""
        })
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



export default LoginForm

 