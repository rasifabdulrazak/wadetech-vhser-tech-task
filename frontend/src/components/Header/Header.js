import React from "react";
import { Container,Navbar } from "react-bootstrap";
import './style.css'

const Header = () => {
  return (
  <>
    <Navbar className='nav'>
  <Container>

    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-center">
      <Navbar.Text>
        <h1>Vehicle Service Management</h1>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>

  </>
  )
};

export default Header;
