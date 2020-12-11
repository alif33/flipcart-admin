import {Container, Nav, Navbar} from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
function Header(props) {
  return (
      <Navbar bg="dark" expand="lg" variant="dark">
          <Container>
            {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */}
                <NavLink to="/" className="navbar-brand">Admin Dashboard</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">ismail hosen</Nav.Link>
                    </Nav>
                    <Nav>
                      <li className="nav-item">
                        <NavLink to="/signin" className="nav-link">Signin</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/signup" className="nav-link">Signup</NavLink>
                      </li>
                    </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
  );
}

export default Header;
