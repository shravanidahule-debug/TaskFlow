
import './about.css';
import { Container } from 'react-bootstrap';

function About() {
  const steps = [
    {
      number: '01',
      title: 'Create your workspace',
      description: 'Set up your workspace and bring all your projects together.'
    },
    {
      number: '02',
      title: 'Organize your tasks',
      description: 'Create tasks, assign priorities, and set deadlines.'
    },
    {
      number: '03',
      title: 'Track your progress',
      description: 'Monitor your progress and achieve your goals faster.'
    }
  ];

  return (
    <section className="about-section" id="about">
      <Container>
        <div className="row align-items-center g-5">

          <div className="col-lg-5">
            <span className="section-tag">✦ HOW IT WORKS</span>

            <h2>
              Less chaos.
              <span> More clarity.</span>
            </h2>

            <p className="about-description">
              TaskFlow brings your tasks, projects, and team into one
              organized workspace. Spend less time managing work and
              more time making progress.
            </p>

            <div className="about-highlight">
              <span>✦</span>
              <div>
                <strong>Everything in one place</strong>
                <p>Your work, organized beautifully.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="steps-container">
              {steps.map((step) => (
                <div className="step-card" key={step.number}>
                  <div className="step-number">{step.number}</div>

                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>

                  <span className="step-arrow">↗</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default About;
