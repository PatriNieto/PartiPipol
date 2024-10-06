import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Home.css'
import Button from 'react-bootstrap/esm/Button';


function Home() {
  return (
  <>

  <Container className="w-100 min-vh-100 bg-dark text-light d-flex align-items-center justify-content-center">HOLA</Container>
  <Container className="w-100 vh-50 bg-dark text-light d-flex align-items-center justify-content-center">Próximos eventos</Container>
  <Container className="w-100 vh-50 bg-dark text-light d-flex align-items-center justify-content-center">

    Eres promotor?

  <Button variant="outline-light">Crear Evento</Button>
  </Container>
  <Container className="w-100 min-vh-100 bg-dark text-light d-flex align-items-center justify-content-center">SASASA</Container>
  <Container className="w-100 min-vh-100 bg-dark text-light d-flex align-items-center justify-content-center"></Container>
  <Container className="w-100 min-vh-100 bg-dark text-light d-flex align-items-center justify-content-center" />

  </>

  )
}

export default Home