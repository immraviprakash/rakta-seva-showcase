import { ASSETS, NAV_LINKS } from '../../data/projectData';
import { scrollToSection } from '../../hooks/useInView';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__inner">
          {/* Brand */}
          <div className="footer__brand">
            <img
              src={ASSETS.logo}
              alt="Rakta Seva Connect logo"
              className="footer__logo"
              width="140"
              height="140"
              draggable="false"
            />
            <p className="footer__brand-desc">
              An Android application for blood donor discovery and donation coordination.
            </p>
          </div>

          {/* Navigation */}
          <nav className="footer__nav" aria-label="Footer navigation">
            <span className="footer__nav-title">Navigate</span>
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                className="footer__nav-link"
                onClick={() => scrollToSection(link.id)}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p className="footer__disclaimer">
            This application supports donation coordination and does not replace medical
            professionals, hospitals, or blood banks.
          </p>
          <p className="footer__copyright">
            © {currentYear} Rakta Seva Connect. Internship project.
          </p>
        </div>
      </div>
    </footer>
  );
}
