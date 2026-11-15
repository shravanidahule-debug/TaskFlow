
import { Container, Button } from 'react-bootstrap';
import './hero.css';

function Hero() {
  return (
    <section className="hero-section" id="home">
      <Container>
        <div className="row align-items-center g-5">

          {/* Left Content */}
          <div className="col-lg-6 hero-content">

            <span className="hero-badge">
              ✨ Your productivity partner
            </span>

            <h1>
              Work smarter.
              <br />
              <span>Achieve bigger.</span>
            </h1>

            <p>
              Manage your projects, organize your tasks,
              and collaborate with your team — all in
              one powerful workspace.
            </p>

            <div className="hero-buttons">
              <Button className="signup-btn" href="#pricing">
                Get Started →
              </Button>

              <Button
                variant="outline-light"
                href="#features"
              >
                Explore Features
              </Button>
            </div>

            <div className="hero-trust">
              <span>✓ Easy to use</span>
              <span>✓ Team friendly</span>
              <span>✓ Stay organized</span>
            </div>

          </div>

          {/* Right Dashboard */}
          <div className="col-lg-6">

            <div className="dashboard-preview">

              <div className="dashboard-top">
                <div>
                  <span className="dashboard-label">
                    WORKSPACE OVERVIEW
                  </span>

                  <h4>Good morning, Alex 👋</h4>
                  <p>Here's your productivity snapshot.</p>
                </div>

                <span className="dashboard-avatar">A</span>
              </div>

              {/* Statistics */}
              <div className="dashboard-stats">

                <div className="stat-card">
                  <span>Total Tasks</span>
                  <h3>24</h3>
                  <small>↗ 12% this week</small>
                </div>

                <div className="stat-card">
                  <span>Completed</span>
                  <h3>18</h3>
                  <small>75% completion</small>
                </div>

              </div>

              {/* Task List */}
              <div className="task-card">

                <div className="task-heading">
                  <h5>My Tasks</h5>
                  <span>View all →</span>
                </div>

                <div className="task-item">
                  <span className="task-check completed">✓</span>

                  <div>
                    <strong>Website redesign</strong>
                    <small>Design · Completed</small>
                  </div>

                  <span className="task-status done">Done</span>
                </div>

                <div className="task-item">
                  <span className="task-check"></span>

                  <div>
                    <strong>Prepare presentation</strong>
                    <small>Work · In progress</small>
                  </div>

                  <span className="task-status progress">Active</span>
                </div>

                <div className="task-item">
                  <span className="task-check"></span>

                  <div>
                    <strong>Team meeting</strong>
                    <small>Meeting · Upcoming</small>
                  </div>

                  <span className="task-status upcoming">Upcoming</span>
                </div>

              </div>

              {/* Progress */}
              <div className="progress-card">

                <div className="progress-heading">
                  <span>Weekly progress</span>
                  <strong>75%</strong>
                </div>

                <div className="progress-track">
                  <div className="progress-fill"></div>
                </div>

                <small>You're doing great this week!</small>

              </div>

            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
