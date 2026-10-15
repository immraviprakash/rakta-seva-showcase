import { SCREENSHOTS } from '../../data/projectData';
import { useInView } from '../../hooks/useInView';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import './ApplicationShowcase.css';

function ScreenshotItem({ screenshot, index }) {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const isReversed = index % 2 !== 0;

  return (
    <div
      ref={ref}
      className={`showcase-item ${isReversed ? 'showcase-item--reversed' : ''} ${isInView ? 'showcase-item--visible' : ''}`}
    >
      {/* Screenshot */}
      <div className="showcase-item__visual">
        <div className="showcase-item__frame">
          <div className="showcase-item__phone">
            <img
              src={screenshot.src}
              alt={`${screenshot.title} — ${screenshot.description}`}
              className="showcase-item__img"
              loading="lazy"
              draggable="false"
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="showcase-item__content">
        <span className="showcase-item__number">{screenshot.number}</span>
        <h3 className="showcase-item__title">{screenshot.title}</h3>
        <p className="showcase-item__description">{screenshot.description}</p>
        <ul className="showcase-item__highlights">
          {screenshot.highlights.map((h) => (
            <li key={h} className="showcase-item__highlight">
              <span className="showcase-item__highlight-dot" aria-hidden="true"></span>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ApplicationShowcase() {
  return (
    <section className="showcase section section--alt" id="showcase" aria-labelledby="showcase-title">
      <div className="container">
        <SectionHeading
          eyebrow="Application Screens"
          title="Inside Rakta Seva Connect"
          description="Explore the application interfaces designed to support donor discovery, blood requests, notification workflows, and donation history."
          id="showcase-title"
        />

        <div className="showcase__items">
          {SCREENSHOTS.map((screenshot, index) => (
            <ScreenshotItem
              key={screenshot.id}
              screenshot={screenshot}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
