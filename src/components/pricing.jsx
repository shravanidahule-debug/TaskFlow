
import './pricing.css';
import { Container, Button } from 'react-bootstrap';

function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for getting started.',
      features: [
        'Up to 3 active projects',
        'Basic task management',
        'Personal workspace',
        'Basic progress tracking'
      ],
      button: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$12',
      period: '/ month',
      description: 'For teams ready to do more.',
      features: [
        'Unlimited projects',
        'Advanced task management',
        'Team collaboration',
        'Detailed progress analytics'
      ],
      button: 'Choose Pro',
      popular: true
    }
  ];

  return (
    <section className="pricing-section" id="pricing">
      <Container>
        <div className="pricing-heading">
          <span className="section-tag">✦ SIMPLE PRICING</span>
          <h2>Plans that grow <span>with you.</span></h2>
          <p>Choose the right plan for your productivity journey.</p>
        </div>

        <div className="row justify-content-center g-4">
          {plans.map((plan) => (
            <div className="col-md-5" key={plan.name}>
              <div className={`pricing-card ${plan.popular ? 'popular-plan' : ''}`}>
                {plan.popular && (
                  <span className="popular-badge">MOST POPULAR</span>
                )}

                <h4>{plan.name}</h4>
                <p className="plan-description">{plan.description}</p>

                <div className="plan-price">
                  <strong>{plan.price}</strong>
                  {plan.period && <span>{plan.period}</span>}
                </div>

                <div className="plan-divider"></div>

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>✓ <span>{feature}</span></li>
                  ))}
                </ul>

                <Button
                  href="#contact"
                  className={plan.popular ? 'pro-button' : 'starter-button'}
                >
                  {plan.button} →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Pricing;
