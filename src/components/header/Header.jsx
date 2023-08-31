import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  
    return (
      <>
        <Navbar bg="white" data-bs-theme="white" className='shadow-sm'>
        <Container fluid className='px-5 py-2'>
          <Navbar.Brand href="#home" className="fw-bold">Lucas.dev</Navbar.Brand>
          <Navbar.Toggle/>
          <Nav className="justify-content-end fw-bold">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      </>
    )
  }
  
  export default Header