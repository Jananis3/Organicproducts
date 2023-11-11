import React from 'react';
import { Navbar,  Nav } from 'react-bootstrap';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';



const NavComponent = () => {
    return (
      <div className='bg'>
    <div className=' col-sm fixed-top'>
        <Navbar collapseOnSelect expand="sm" className='sticky-top  bg-white' style={{height : '70px'}}>

       
        <Navbar.Brand href="">
        <img src="./brand2.png" alt="" width="100" height="50"/>
        <a class="navbar-brand  fs-2" href="#"><span class="text-success">ORGANIC PRODUCTS</span></a>
           </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
         
          <Nav.Link href="#Home">Home</Nav.Link>
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="#Shopping">Cart</Nav.Link>
          <Nav.Link href="#Contact">Contact</Nav.Link>


          </Nav>
          
        </Navbar.Collapse>
        <div className="search">
<input type="text" placeholder="Search" />
</div>

        <button type="button" className="but">Shop Now</button>

    </Navbar>
    </div>
    </div>
           
    )
    
}

export default NavComponent;