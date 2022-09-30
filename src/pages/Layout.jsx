import React from "react";
import { Outlet } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SideBar from '../sidebar.js'

const Layout = () => {
  return (
    <>
       <SideBar />
      <Navbar navbar bg="dark" variant="dark">
       
        <Navbar.Brand href="/" style={{"marginLeft":"20px"}}>Ticketing System</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/login">Log in</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
          <Nav.Link href="/create">Create Ticket</Nav.Link>
        </Nav>
      </Navbar>
      <div id="page-wrap">
        <Outlet />
      </div>
      
    </>
  )
};

export default Layout;