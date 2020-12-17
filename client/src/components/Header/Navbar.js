import React from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NavigationBar() {
  const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
     
    }
  `;
  return (
    <>
      <Navbar bg="" variant="" collapseOnSelect expand="lg" sticky>
        <Navbar.Brand>
          {" "}
          <StyledLink to="/" style={{'color' : '#fbd75c' }}>Shop name</StyledLink>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              {" "}
              <StyledLink to="/" style={{'color' : 'orange' }}>Home</StyledLink>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <StyledLink to="/products" style={{'color' : 'orange' }}>Products</StyledLink>{" "}
            </Nav.Link>
            <Nav.Link>
              <StyledLink to="/about" style={{'color' : 'orange' }}>About</StyledLink>{" "}
            </Nav.Link>
          </Nav>

          <Form inline className="mr-auto">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-dark" style={{'color' : '#fbd75c' }}>Search</Button>
          </Form>
          <Nav className="" inline>
            <Nav.Link>
              {" "}
              <StyledLink to="/signin" style={{'color' : 'orange' }}>Sign In</StyledLink>{" "}
            </Nav.Link>
            <Nav.Link>
              {" "}
              <StyledLink to="/signup" style={{'color' : 'orange' }}>Sign Up</StyledLink>{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavigationBar;
