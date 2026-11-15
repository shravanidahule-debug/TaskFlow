import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function NaviBar() {
  return (
    <>
      <Navbar expand="lg" className="task-navbar">
        <Container>
          <Navbar.Brand href="#" className="brand">
            Task<span>Flow.</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto nav-links">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>

            <div className="nav-buttons">
             <Button
                as={Link}
                to="/login"
                variant="link"
                className="login-btn"
              >
                 Login
             </Button>
              <Button
                className="signup-btn"
                onClick={() => {
                document.getElementById('pricing')?.scrollIntoView({
                behavior: 'smooth'
                });
                }}
              >
                Get Started
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NaviBar;

