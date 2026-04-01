import Navigation from '../../components/common/Navigation/Navigation'
import './Home.css'

const Home = () => {
  const skeletonItems = Array.from({ length: 4 })
  const problemCards = [
    {
      title: 'Brittleness',
      description:
        'A robot programmed to grasp one style of cup will fail with a different-shaped cup. Reprogramming is expensive and slow.',
    },
    {
      title: 'Data Starvation',
      description:
        'Training effective robotic policies requires massive, task-specific datasets recorded in costly laboratory setups. Out of distribution scenarios are not handled well.',
    },
    {
      title: 'Siloed Intelligence',
      description:
        'Each robot learns in isolation. Insights from one robot deployment rarely transfer to another, even if they perform similar tasks.',
    },
  ]
  const stackTopCards = [
    {
      title: 'PERCEPTION',
      subtitle: 'Understand the Physical World',
      description:
        'Interprets visual input into structured semantic understanding, objects, states, and spatial relationships.',
    },
    {
      title: 'REASONING',
      subtitle: 'Simulate Before Acting',
      description:
        'Predicts outcomes of actions in latent space, enabling safe and efficient decision-making.',
    },
    {
      title: 'MODULAR INTELLIGENCE',
      subtitle: 'Skills as Composable Units',
      description: 'Every capability is packaged, shared, and improved as a transferable Skill.',
    },
  ]
  const stackBottomCards = [
    {
      title: 'ACTION',
      subtitle: 'From Instruction to Motion',
      description: 'Converts language and visual input into real-time robotic control sequences.',
    },
    {
      title: 'EVOLUTION',
      subtitle: 'PRECISION ENGINE',
      description: 'Dedicated hardware for complex spatial movement and torque management.',
    },
    {
      title: 'DECENTRALIZED ECONOMY',
      subtitle: 'An Open Skill Marketplace',
      description: 'Developers and agents publish, trade, and monetize robotic intelligence.',
    },
  ]
  const ctaTags = ['Modular Skills', 'Real-Time Control', 'Continuous Learning', 'Hardware-Agnostic']

  return (
    <div className="home-page">
      <div className="home-nav-wrap">
        <Navigation />
      </div>
      <div className="home-nav-divider" />

      <section className="home-hero">
        <h1 className="home-brand">ClawRobo</h1>

        <div className="home-hero-content">
          <div className="home-left">
            <div className="home-feature-row">
              <div className="feature-thumb">
                <img src="/images/robotic_arm_chai.png" alt="Robotic arm demo" />
              </div>
              <div className="feature-list" aria-hidden="true">
                {skeletonItems.map((_, index) => (
                  <div className="feature-item" key={index}>
                    <span className="feature-dot" />
                    <div className="feature-item-lines">
                      <span className="feature-line feature-line-short" />
                      <span className="feature-line feature-line-long" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="home-title">An Infinite-Evolution Ecosystem for Embodied AI</h2>
            <p className="home-description">
              A decentralized, self-evolving robotic intelligence platform powered by World Models,
              VLA architectures, and a token-incentivized Skill Marketplace.
            </p>
            <div className="home-actions">
              <button type="button" className="btn-primary">
                Watch DEMO
              </button>
              <button type="button" className="btn-secondary">
                Read Documentation
              </button>
            </div>
          </div>

          <div className="home-right">
            <img src="/images/robotic_arm.png" alt="Robotic arm" className="hero-arm-image" />
            <div className="metrics-card">
              <h3>LIVE METRICS</h3>
              <p>
                Skill Sync <span>99.9%</span>
              </p>
              <p>
                Active Skills <span>128+</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="home-section-divider" />

      <section className="problem-section">
        <h2 className="problem-heading">The Problem We Solve</h2>
        <div className="problem-list">
          {problemCards.map((card) => (
            <article className="problem-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="intelligence-section">
        <div className="intelligence-divider" />
        <div className="intelligence-header">
          <h2>The Intelligence Stack</h2>
          <p>A unified architecture that enables robots to perceive, reason, act, and evolve.</p>
        </div>

        <div className="intelligence-grid">
          <div className="stack-row">
            {stackTopCards.map((card) => (
              <article key={card.title} className="stack-card">
                <h3>{card.title}</h3>
                <h4>{card.subtitle}</h4>
                <p>{card.description}</p>
              </article>
            ))}
          </div>

          <div className="stack-image-wrap">
            <img src="/images/robotic_arm_list.png" alt="Robotic intelligence stack visual" />
          </div>

          <div className="stack-row">
            {stackBottomCards.map((card) => (
              <article key={card.title} className="stack-card">
                <h3>{card.title}</h3>
                <h4>{card.subtitle}</h4>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-text-container">
            <div className="cta-copy">
              <h2>See Autonomous Intelligence in Action</h2>
              <p>
                Watch how robots interpret visual input, simulate outcomes, and execute precise
                actions, all without hardcoded instructions.
              </p>
            </div>
            <button type="button" className="cta-live-button">
              Watch Live Demo
            </button>
          </div>

          <div className="cta-floating-boxes">
            {ctaTags.map((tag) => (
              <div key={tag} className="cta-floating-box">
                <span>{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-inner">
          <div className="contact-left">
            <h2>Start Building with ClawRobo</h2>
            <p className="contact-subtitle">
              Build, deploy, and monetize robotic Skills in a decentralized ecosystem.
            </p>

            <div className="contact-meta">
              <div className="contact-item">
                <span className="contact-icon">✉</span>
                <div>
                  <p className="contact-label">Inquiries</p>
                  <p className="contact-value">clawrobo.busi@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <p className="contact-label">Headquarters</p>
                  <p className="contact-value">Robotics District, San Francisco, CA</p>
                </div>
              </div>
            </div>

            <ul className="contact-bullets">
              <li>Create and publish Skills with Claw SDK</li>
              <li>Deploy across real-world robots</li>
              <li>Earn from autonomous execution</li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <label className="field-block">
              <span>Name</span>
              <input type="text" placeholder="Enter your name" />
            </label>
            <label className="field-block">
              <span>Email Address</span>
              <input type="email" placeholder="Enter your email" />
            </label>
            <label className="field-block">
              <span>Project Details</span>
              <textarea
                rows={4}
                placeholder="Describe the skills, agents, or systems you want to build..."
              />
            </label>
            <button type="submit" className="contact-submit">
              Join the Network
            </button>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <img src="/images/logo.png" alt="ClawRobo" className="footer-logo" />

          <nav className="footer-links" aria-label="Footer links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Documentation</a>
            <a href="#">Community</a>
          </nav>

          <p className="footer-copy">© 2024 ClawRobo Precision Systems. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home
