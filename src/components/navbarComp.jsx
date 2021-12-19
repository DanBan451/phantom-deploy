import React, { Component } from "react";
import { NavLink } from "react-bootstrap";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import "../App.css";

export default class NavbarComp extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navbar bg="light" variant="light">
          <Container fluid>
            <Navbar.Brand href="#">Phantom</Navbar.Brand>

            <Nav
              className='navbar-content'
              style={{ height: 'auto', color: 'black' }}              
            >
              <div>
                <a href="#action1">
                  <img src="https://img.icons8.com/ios-glyphs/30/000000/login-rounded-right--v1.png"/>
                  <p>Sign in</p>
                </a>                                
              </div>
              <div>
                <a href="#action2">
                  <img src="https://img.icons8.com/material-outlined/24/000000/help.png"/>
                  <p>Help</p>                
                </a>                
              </div>
              <div>
                <a href="#action3">
                  <img src="https://img.icons8.com/material-outlined/24/000000/search--v1.png"/>
                  <p>Search</p>  
                </a>                
              </div>              
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}
