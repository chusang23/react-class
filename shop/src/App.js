import logo from './logo.svg';
import React, {useState} from 'react';
import {Navbar,Container,Nav,NavDropdown,Jumbotron,Button } from 'react-bootstrap';
import './App.css';
import data from './data.js';


function App() {

  let [shoes, shoes변경] = useState(data);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

<Jumbotron className="background">
  <h1>20% season off</h1>
  <p>
    This is a simple hero unit
  </p>
  <p>
    <Button varient="primary">Learn more</Button>
  </p>
</Jumbotron>

<div className="container">
  <div className="row">
    <div className="col-md-4">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
      <h4>상품명</h4>
      <p>상품셜명&가격</p>
    </div>
    <div className="col-md-4">
      <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%" />
      <h4>상품명</h4>
      <p>상품셜명&가격</p>
    </div>
    <div className="col-md-4">
      <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%" />
      <h4>상품명</h4>
      <p>상품셜명&가격</p>
    </div>
  </div>
    </div>

    </div>
  );
}

export default App;
