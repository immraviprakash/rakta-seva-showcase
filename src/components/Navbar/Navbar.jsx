import { useState, useEffect } from 'react';
import { Menu, X, Download, ChevronDown } from 'lucide-react';
import { NAV_LINKS, ASSETS } from '../../data/projectData';
import { scrollToSection } from '../../hooks/useInView';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  // Support Escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDrawerOpen]);

  // Handle direct hash navigation on initial page load
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const timer = setTimeout(() => {
        scrollToSection(id);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleNavClick = (sectionId) => {
    setIsDrawerOpen(false);
    document.body.style.overflow = '';
    requestAnimationFrame(() => {
      scrollToSection(sectionId);
    });
  };

  const handleBrandClick = () => {
    setIsDrawerOpen(false);
    document.body.style.overflow = '';
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
  };

  return (
    <>
      <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} role="banner">
        <nav className="navbar__inner container--wide" aria-label="Main navigation">
          {/* Brand / Logo */}
          <button
            type="button"
            className="navbar__brand"
            onClick={handleBrandClick}
            aria-label="Rakta Seva Connect Home"
          >
            <div className="navbar__logo-wrap">
              <img
                src={ASSETS.favicon}
                alt="Rakta Seva Connect logo"
                className="navbar__logo"
                width="38"
                height="38"
                draggable="false"
              />
            </div>
            <span className="navbar__brand-text">
              <span className="navbar__brand-name">Rakta Seva</span>
              <span className="navbar__brand-suffix">Connect</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="navbar__links" role="menubar">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                className="navbar__link"
                role="menuitem"
                onClick={() => handleNavClick(link.id)}
              >
                {link.label}
              </button>
            ))}
            <a
              href={ASSETS.apk}
              className="navbar__download-btn"
              download={ASSETS.apkFilename}
            >
              <Download size={16} />
              <span>Download App</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className={`navbar__toggle ${isDrawerOpen ? 'navbar__toggle--active' : ''}`}
            onClick={() => setIsDrawerOpen(true)}
            aria-expanded={isDrawerOpen}
            aria-label="Open navigation menu"
            type="button"
          >
            <Menu size={20} />
          </button>
        </nav>
      </header>

      {/* Restrained Dark Overlay / Backdrop */}
      <div
        className={`navbar__drawer-backdrop ${isDrawerOpen ? 'navbar__drawer-backdrop--open' : ''}`}
        onClick={() => setIsDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* Right-Side Full-Height Light Matte-Glass Navigation Drawer */}
      <aside
        className={`navbar__drawer ${isDrawerOpen ? 'navbar__drawer--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation drawer"
      >
        {/* Drawer Header: Logo, Wordmark, and Close Control */}
        <div className="navbar__drawer-header">
          <div className="navbar__drawer-brand">
            <div className="navbar__drawer-logo-wrap">
              <img
                src={ASSETS.favicon}
                alt="Rakta Seva Connect logo"
                className="navbar__drawer-logo"
                width="28"
                height="28"
                draggable="false"
              />
            </div>
            <span className="navbar__drawer-brand-text">
              <span className="navbar__drawer-brand-name">Rakta Seva</span>
              <span className="navbar__drawer-brand-suffix">Connect</span>
            </span>
          </div>

          <button
            type="button"
            className="navbar__drawer-close"
            onClick={() => setIsDrawerOpen(false)}
            aria-label="Close navigation drawer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation Links with Left-Side ChevronDown Indicators */}
        <nav className="navbar__drawer-nav" aria-label="Mobile drawer links">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              className="navbar__drawer-link"
              onClick={() => handleNavClick(link.id)}
            >
              <ChevronDown size={16} className="navbar__drawer-link-chevron" aria-hidden="true" />
              <span className="navbar__drawer-link-label">{link.label}</span>
            </button>
          ))}
        </nav>

        {/* Bottom-Aligned Download Action */}
        <div className="navbar__drawer-footer">
          <a
            href={ASSETS.apk}
            className="navbar__drawer-download-btn"
            download={ASSETS.apkFilename}
            onClick={() => setIsDrawerOpen(false)}
          >
            <Download size={17} />
            <span>Download Android App</span>
          </a>
        </div>
      </aside>
    </>
  );
}



