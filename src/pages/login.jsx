import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './login.css';

function Login() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="login-page">
      <Container className="login-container">
        <div className="login-card">
          <h2>Welcome Back!</h2>
          <p>Login to continue to TaskFlow.</p>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                required
              />
            </Form.Group>

            <Button type="submit" className="login-submit">
              Login
            </Button>

            {submitted && (
              <p className="success-message">
                ✓ Login form submitted successfully!
              </p>
            )}
          </Form>

          <Link to="/" className="back-home">
            ← Back to Home
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Login;