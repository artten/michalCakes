import React from 'react';
import logo from '../images/letter-m(1).png';
import { Navbar, Nav, Container } from 'react-bootstrap';


const Header = () => {
    var Img = <img src={logo}/>
    return (
      // <div>
      //   <nav className="navbar fixed-top navbar-expand  navbar-dark bg-dark">
      //     <a className="navbar-brand" href="#">
      //       <img src={logo} width="30" height="30" alt=""/>Michal Cakes</a>
      //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      //       <span className="navbar-toggler-icon"></span>
      //     </button>
  
      //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
      //       <ul className="navbar-nav ml-auto">
      //         <li className="nav-item active">
      //           <Link to="/about">About</Link>
      //         </li>
      //         <li>
      //         <a className="nav-link" href="./BuyPage.js"> Buy </a>
      //         </li>
      //         </ul>
      //     </div>
      //   </nav>
      // </div>
      <Navbar bg="light" expand="sm" >
      <Container>
        <Navbar.Brand href="#home">
          <a className="navbar-brand" href="#">
            <img src={logo} width="30" height="30" alt=""/>
            Michal Cakes
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/BuyPage">Buy</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
  }

export default Header