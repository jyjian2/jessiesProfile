import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './NavBarStyles.css'

function NavBar() {
  return (
    <Navbar expand="lg" className="navBar">
      <Container>
        <Navbar.Brand><Link to={"/"} className='navText'>Jessie</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to={"/projects"} className='navText'>Projects</Link></Nav.Link>
            <Nav.Link><Link to={"/resume"} className='navText'>Resume</Link></Nav.Link>
            <Nav.Link><Link to={"/contacts"} className='navText'>Contact</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;