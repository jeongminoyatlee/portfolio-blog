// components/NavBar.js
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ fontFamily: 'Montserrat' }}>
      <Container>
        <Navbar.Brand href="/" className="fw-bold">TRAVELOG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/menu/asia">ASIA</Nav.Link>
            <Nav.Link href="/menu/america">AMERICA</Nav.Link>
            <Nav.Link href="/menu/oceania">OCEANIA</Nav.Link>
            <Nav.Link href="/menu/europe">EUROPE</Nav.Link>
            <Nav.Link href="/menu/africa">AFRICA</Nav.Link>
            <Nav.Link href="/menu/about">ABOUT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
