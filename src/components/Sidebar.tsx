import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const Sidebar = () => {
  return (
    <Navbar expand="md" className="fixed-left justify-content-between" id="sidebar">
      <div className="container flex-column align-items-start">
        <Navbar.Brand href="index.html">
          <img src="assets/logo/logo.png" alt="Spotify Logo" width="131" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="navbar-nav">
            <ul>
              <li>
                <Nav.Link href="#" className="nav-item nav-link d-flex align-items-center">
                  <i className="bi bi-house-door-fill"></i>&nbsp; Home
                </Nav.Link>
              </li>
              <li>
                <Nav.Link href="#" className="nav-item nav-link d-flex align-items-center">
                  <i className="bi bi-book-fill"></i>&nbsp; Your Library
                </Nav.Link>
              </li>
              <li>
                <Form
                  className="input-group mt-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <FormControl type="text" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" className="form-control" />
                  <div className="input-group-append">
                    <Button variant="outline-secondary" type="submit" className="btn btn-sm h-100">
                      GO
                    </Button>
                  </div>
                </Form>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </div>
      <div className="nav-btn">
        <Button className="signup-btn" type="button">
          Sign Up
        </Button>
        <Button className="login-btn" type="button">
          Login
        </Button>
        <div className="d-flex gap-2 justify-content-center">
          <a href="#s">Cookie</a> | <a href="#s">Policy</a> | <a href="#s"> Privacy</a>{" "}
        </div>
      </div>
    </Navbar>
  );
};

export default Sidebar;
