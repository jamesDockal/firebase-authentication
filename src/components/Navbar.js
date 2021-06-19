import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    color: white;
    background-color: red;
  }

  .nav-link {
    color: white;
    background-color: red;
  }
`;

function NavigationBar() {
  return (
    <Styles>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="/">Auth</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/signup">Sing Up</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}

export default NavigationBar;
