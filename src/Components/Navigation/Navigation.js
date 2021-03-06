import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/esm/FormControl'
import '../Assets/CSS/bootstrap.min.css'
const Navigation = () => {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Programming Hero</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Courses</Nav.Link>
            <Nav.Link href="#pricing">Explore</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-4"></FormControl>
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </div>
    );
};

export default Navigation;