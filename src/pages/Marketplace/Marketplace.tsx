import Navigation from '../../components/common/Navigation/Navigation'
import MarketplaceCreators from './MarketplaceCreators.tsx'
import MarketplaceSkills from './MarketplaceSkills'
import '../Home/Home.css'
import './Marketplace.css'

const Marketplace = () => {
  return (
    <div className="home-page">
      <div className="home-nav-wrap">
        <Navigation />
      </div>
      <div className="home-nav-divider" />

      <section className="marketplace-hero" aria-labelledby="marketplace-hero-heading">
        <div className="marketplace-hero-inner">
          <div className="marketplace-hero-text">
            <h1 id="marketplace-hero-heading" className="marketplace-hero-title">
              Skill Marketplace
            </h1>
            <p className="marketplace-hero-subtitle">
              Explore and expand your robot&apos;s capabilities through a world of skills
            </p>
          </div>
          <div className="marketplace-hero-visual">
            <img
              src="/images/hero_banner_market.png"
              alt=""
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="marketplace-hero-line-wrap" aria-hidden="true">
          <span className="marketplace-hero-line" />
          <span className="marketplace-hero-line" />
        </div>
      </section>

      <div className="home-section-divider" />

      <MarketplaceSkills />

      <div className="home-section-divider" />

      <MarketplaceCreators />

      <div className="home-section-divider" />

      <section className="marketplace-cta" aria-labelledby="marketplace-cta-heading">
        <div className="marketplace-cta-line marketplace-cta-line--horizontal" aria-hidden="true" />
        <div className="marketplace-cta-panel">
          <div className="marketplace-cta-framed">
            <div className="marketplace-cta-container">
              <div className="marketplace-cta-copy">
                <h2 id="marketplace-cta-heading" className="marketplace-cta-title">
                  Ready To Publish Skills?
                </h2>
                <p className="marketplace-cta-subtitle">
                  Expand your robot&apos;s capabilities through a world of skills with ClawRobo.
                </p>
              </div>
              <button type="button" className="marketplace-cta-button">
                Submit your skills
              </button>
            </div>
          </div>
        </div>
        <div className="marketplace-cta-line marketplace-cta-line--horizontal" aria-hidden="true" />
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

          <p className="footer-copy">© 2026 ClawRobo Precision Systems. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Marketplace
