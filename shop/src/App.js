/* eslint-disable */

import React, {useState} from 'react';
import {Navbar,Container,Nav,NavDropdown,Jumbotron,Button } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import Detail from './Detail.js'
import axios from 'axios';

import { Link, Route, Switch } from 'react-router-dom';

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
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/Detail">Detail</Nav.Link>
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

<switch>

<Route exact path="/">
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
    {
      shoes.map((a,i) => {
        return <Card shoes={shoes[i]} i={i}/>
      })
    }
    </div>
    <button className="btn btn-primary" onClick={()=>{
      axios.get('https://codingapple1.github.io/shop/data2.json')
      .then((result)=>{
        console.log(result.data)
      })
      .catch(()=>{})
    }}>더보기</button>
  </div>
</Route>


<Route path="/detail/:id">
  <Detail shoes={shoes}/>
</Route>

<Route path="/:id">
  <div>아무거나 적었을떄</div>
</Route>

</switch>

    </div>
  );
}


function Card(props){
  return (
      <div className="col-md-4">
      <img src={ 'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="100%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price}</p>
    </div>
  )
}
export default App;
