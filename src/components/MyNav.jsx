import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function MyNav() {
  return (
    <Navbar expand="sm" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">
        <img height={'50px'} src="https://cdn-icons-png.flaticon.com/128/4494/4494538.png" alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
    <NavLink className='text-decoration-none my-3 mx-2 fw-bolder text-success' to='/'>ALLPOSTS</NavLink>
    <NavLink className='text-decoration-none my-3 mx-2 fw-bolder text-success' to='/create'>CREATE</NavLink>
          <NavDropdown className='my-2' title="USERNAME" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.4">
             LOGOUT
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default MyNav