import React from 'react'
import '../styles/MyNavBar.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';


function MyNavBar() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
    <Navbar expand="md" className="navbar-dark bg-black fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          PartiPipol</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="fs-7" as={Link} to="/eventos">Eventos</Nav.Link>
            <Nav.Link 
            as={Link} 
            to="/artistas"
            >Artistas</Nav.Link>
            <Nav.Link 
            as={Link} 
            to="/lugares"
            >Lugares</Nav.Link>

      
            {/* Si quiero dejar alguno de los enlaces con dropdown */}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}

        

          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text
          onClick={handleShow}>
            Signed in as: <a href="#login">Patri</a> {/* cambiar link */} 
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            
    <Offcanvas 
    show={show} 
    onHide={handleClose}
    placement={"end"} name={"end"} 
    className="bg-dark text-light"
    scroll= "true"
    backdrop= "false"
    >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>NOMBRE_DE_USUARIO</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav.Link>
          Favoritos
        </Nav.Link>
        <Nav.Link>
          Siguiendo
        </Nav.Link>
        <Nav.Link>
          Añadir artista
        </Nav.Link>
        <Nav.Link>
          Añadir lugar
        </Nav.Link>
          
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}



export default MyNavBar