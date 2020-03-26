import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'




export const MyLoggedInNavBar = ({logOut}) =>{
    return(
      <Navbar bg={"dark"}>
        <div className="container">
           <Nav>
           <Nav.Link  style={{color: "azure"}} href="http://localhost:3000/">Home</Nav.Link>
           <Nav.Link  style={{color: "azure"}} href="http://localhost:3000/myprofile">My profile</Nav.Link>
           <Button size="sm" onClick = {logOut}>Log Out</Button>
           </Nav>
        </div>
    </Navbar>

    )
}

export default MyLoggedInNavBar
