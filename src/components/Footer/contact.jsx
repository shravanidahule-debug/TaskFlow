
import './contact.css';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="task-footer">
      <Container>
        <div className="footer-content">
          <div>
            <h3>Task<span>Flow.</span></h3>
            <p>Work smarter. Achieve bigger.</p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 TaskFlow. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
