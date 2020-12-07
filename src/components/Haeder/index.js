import {Container, Nav, Navbar} from 'react-bootstrap'

function Header(props) {
  return (
      <Navbar bg="dark" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#home">Signin</Nav.Link>
                    </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
  );
}

export default Header;
