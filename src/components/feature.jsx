
import './feature.css';
import { Container } from 'react-bootstrap';

function Features() {
  const features = [
    {
      icon: '✦',
      title: 'Smart Task Management',
      description: 'Organize your tasks, set priorities, and manage deadlines effortlessly.',
      number: '01'
    },
    {
      icon: '◈',
      title: 'Team Collaboration',
      description: 'Work together, share updates, and keep everyone on the same page.',
      number: '02'
    },
    {
      icon: '↗',
      title: 'Progress Tracking',
      description: 'Track your productivity and monitor project progress in real time.',
      number: '03'
    }
  ];

  return (
    <section className="features-section" id="features">
      <Container>
        <div className="features-heading">
          <span className="section-tag">✦ POWERFUL FEATURES</span>
          <h2>Everything you need to <span>work smarter.</span></h2>
          <p>Simple tools. Powerful results. Everything in one workspace.</p>
        </div>

        <div className="row g-4">
          {features.map((feature) => (
            <div className="col-md-4" key={feature.number}>
              <div className="feature-card">
                <div className="feature-card-top">
                  <div className="feature-icon">{feature.icon}</div>
                  <span>{feature.number}</span>
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
                <a href="#about">Explore feature ↗</a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Features;
