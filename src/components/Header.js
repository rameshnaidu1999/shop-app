import React, { useState } from "react";
import { Navbar, NavDropdown, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "./config/firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  console.log(basket);
  const logout = (e) => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        fixed="sticky"
      >
        <div className="container">
          <Navbar.Brand href="/">Eshop Pro</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbarg-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <Link to="/"> Home </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/productId"> Products </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/cart"> Cart({basket?.length}) </Link>
              </Nav.Link>
              {!user ? (
                <div>
                  <Link to="/signup">
                    <Button variant="dark">Sign up</Button>
                  </Link>

                  <Link to="/signin">
                    <Button variant="dark">Sign In</Button>
                  </Link>
                </div>
              ) : (
                <NavDropdown title="User" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Settings
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Orders</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <Link to="/signin">
                    <NavDropdown.Item onClick={() => logout()}>
                      LogOut
                    </NavDropdown.Item>
                  </Link>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Nav className="justify-content-center">
        <Nav.Item>
          <Link to="/">
            <Nav.Link>Laptops</Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/">
            <Nav.Link>Mobiles</Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/">
            <Nav.Link>Groceries</Nav.Link>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/">
            <Nav.Link>Coming Soon</Nav.Link>
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Header;
