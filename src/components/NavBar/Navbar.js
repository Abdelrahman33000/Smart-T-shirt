import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from "../../Logo.png"
import { GiShoppingCart } from "react-icons/gi";
import './Navbar.css'
import { Link } from 'react-router-dom';
const MyNavbar = () => {



  return (
    <Navbar bg="dark" variant='dark' expand="lg" sticky="top" className="nav-main  " >
      <Navbar.Brand href="#home" className='col-lg-4'>
       <Link to="/"> <img src={Logo} alt="logo" title='logo'  width={90} className='rounded-5'/></Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav  row "  >
        
        <Nav className=" col-lg-11 align-items-center ">

            <Link className='me-auto mt-3 text-light  link'  to="/"> <p>Products</p> </Link> 
            <Link  className='me-auto mt-3 text-light link' to="/AboutUs"> <p>About US</p> </Link> 
            <Link  className='me-auto mt-3 text-light link' to="/ContactUs"> <p>Contact US</p> </Link> 
            <Link  className='me-auto mt-3 text-light link' to="/Reviews"> <p>Reviews</p> </Link> 
       
        </Nav>
        <div>
          

<div>

        <Link href={""}>
                <GiShoppingCart className="icon1 " />
              </Link>
</div>
      
      
        </div>
      </Navbar.Collapse>
    </Navbar>

  );
};

export default MyNavbar;