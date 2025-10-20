'use client'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/users">Usuarios</Nav.Link>
            <Nav.Link href="#features">Route 2</Nav.Link>
            <Nav.Link href="#pricing">Route 3</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header