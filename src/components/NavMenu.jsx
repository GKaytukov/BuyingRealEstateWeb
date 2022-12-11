import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


export default function NavMenu() {
    return (        
        <Navbar bg="light" expand="lg" className='center-nav' style={{justifyContent: 'center'}}>
        <Container >
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
             
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/aboutus">About Us</Nav.Link>
                <Nav.Link href="/applyforfunding">Apply for Funding</Nav.Link>
                <Nav.Link href="/choosealender">Choose A Lender</Nav.Link>
                <Nav.Link href="/realtor">Choosing the Best Realtor</Nav.Link>
                <Nav.Link href="/allusers">All Users</Nav.Link>
                <Nav.Link href="/funfacts">Fun Facts</Nav.Link>
                <Nav.Link href="/contactus">Contact Us</Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

//Path from App.js