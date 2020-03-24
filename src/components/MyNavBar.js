import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'




export const MyNavBar = () =>{
    return(
      <Navbar bg={"dark"}>
        <div className="container">
           <Nav>
           <Nav.Link  style={{color: "azure"}} href="http://localhost:3000/">Home</Nav.Link>
           <Nav.Link  style={{color: "azure"}} href="http://localhost:3000/myprofile">My profile</Nav.Link>
           <Nav.Link  style={{color: "azure"}} href="http://localhost:3000/signup">Sign up</Nav.Link>
           <Nav.Link  style={{color: "azure"}} href="http://localhost:3000/login">Log in</Nav.Link>

           
           {/* <links>
           <userNavBar>        */}
           </Nav>
        </div>
    </Navbar>

    )
}

export default MyNavBar
