import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

const divStyle = {
    backgroundImage: 'url("https://anthemtoday.com/wp-content/uploads/hm_bbpui/4386/ko6n4qn3fd4y7mvu2tq671v2pgrvmgox.jpg")',
  };


export const Header = () =>{
    return(
      <Jumbotron style={divStyle} >
        <div className="container title">
          <h1>Welcome to New China cafe!</h1>
        </div>
    </Jumbotron>

    )
}

export default Header

