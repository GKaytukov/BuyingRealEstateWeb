import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavMenu() {
    return (        
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="/home">Home</NavDropdown.Item>
                <NavDropdown.Item href="/aboutus">About Us</NavDropdown.Item>
                <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
                <NavDropdown.Item href="/checklist">Check List</NavDropdown.Item>
                <NavDropdown.Item href="/userapplication">User Application</NavDropdown.Item>
                <NavDropdown.Item href="/choosingthebestrealtor">Choosing the Best Realtor</NavDropdown.Item>
                <NavDropdown.Item href="/applyforfunding">Apply for Funding</NavDropdown.Item>
                <NavDropdown.Item href="/funfacts">Fun Facts</NavDropdown.Item>
                <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}


//Path from App.js