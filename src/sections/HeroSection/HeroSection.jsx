import { useEffect, useState } from 'react';
import { Download, ArrowDown } from 'lucide-react';
import { ASSETS } from '../../data/projectData';
import Button from '../../components/Button/Button';
import { scrollToSection } from '../../hooks/useInView';
import './HeroSection.css';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner container">
        {/* Text Column */}
        <div className={`hero__content ${isVisible ? 'hero__content--visible' : ''}`}>
          <span className="hero__eyebrow">Android Application · Internship Project</span>
          <h1 className="hero__title" id="hero-title">
            Connecting donors.<br />
            <span className="hero__title-accent">Supporting lives.</span>
          </h1>
          <p className="hero__description">
            Rakta Seva Connect is an Android application designed to simplify blood donor discovery,
            emergency blood requests, and donation coordination through a connected mobile experience.
          </p>
          <div className="hero__actions">
            <Button
              variant="primary"
              size="lg"
              href={ASSETS.apk}
              download={ASSETS.apkFilename}
              icon={Download}
            >
              Download Android App
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection('overview')}
              icon={ArrowDown}
            >
              Explore the Project
            </Button>
          </div>
        </div>

        {/* Visual Column */}
        <div
          className={`hero__visual ${isVisible ? 'hero__visual--visible' : ''}`}
          onContextMenu={(e) => e.preventDefault()}
        >
          <div className="hero__phone-frame">
            <div className="hero__phone-notch"></div>
            <img
              src="/assets/home.jpeg"
              alt="Rakta Seva Connect home screen showing the Emergency Dashboard with donor eligibility, availability toggle, and critical blood requests"
              className="hero__screenshot"
              loading="eager"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
          {/* Floating preview cards */}
          <div className="hero__preview hero__preview--left">
            <img
              src="/assets/donors.jpeg"
              alt="Donor search screen"
              className="hero__preview-img"
              loading="eager"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
          <div className="hero__preview hero__preview--right">
            <img
              src="/assets/requests.jpeg"
              alt="Blood request details screen"
              className="hero__preview-img"
              loading="eager"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>
      </div>

      {/* Subtle background element */}
      <div className="hero__bg-accent" aria-hidden="true"></div>
    </section>
  );
}
