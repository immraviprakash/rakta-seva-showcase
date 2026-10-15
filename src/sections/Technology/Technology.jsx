import { TECH_STACK } from '../../data/projectData';
import { useInView } from '../../hooks/useInView';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import './Technology.css';

function ArchitectureDiagram() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <div ref={ref} className={`arch-diagram ${isInView ? 'arch-diagram--visible' : ''}`}>
      <p className="arch-diagram__label">Conceptual High-Level Architecture</p>

      <div className="arch-diagram__layout">
        {/* App Layer */}
        <div className="arch-diagram__node arch-diagram__node--app">
          <span className="arch-diagram__node-title">Android Application</span>
          <span className="arch-diagram__node-sub">Kotlin + Jetpack Compose</span>
        </div>

        {/* Connector */}
        <div className="arch-diagram__connector" aria-hidden="true">
          <div className="arch-diagram__line"></div>
          <div className="arch-diagram__arrow">▼</div>
        </div>

        {/* Logic Layer */}
        <div className="arch-diagram__node arch-diagram__node--logic">
          <span className="arch-diagram__node-title">Application Logic</span>
          <span className="arch-diagram__node-sub">Request workflows, validation, UI state, donation lifecycle</span>
        </div>

        {/* Connector split */}
        <div className="arch-diagram__connector" aria-hidden="true">
          <div className="arch-diagram__line"></div>
          <div className="arch-diagram__arrow">▼</div>
        </div>

        {/* Services */}
        <div className="arch-diagram__services">
          <div className="arch-diagram__node arch-diagram__node--firebase">
            <span className="arch-diagram__node-title">Firebase</span>
            <span className="arch-diagram__node-sub">Authentication + Cloud Firestore</span>
          </div>
          <div className="arch-diagram__node arch-diagram__node--groq">
            <span className="arch-diagram__node-title">Groq API</span>
            <span className="arch-diagram__node-sub">AI assistance + emergency message generation</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Specifically mixed-up palette shades across the 8 cards from the reference palette:
// Black (#000000), Dark Gray (#363636), Charcoal (#565656), Mid Gray (#767676), Light Gray (#969696)
const SHADE_CLASSES = [
  'tech-shade-dark-gray',  // 1. Kotlin -> Dark Gray
  'tech-shade-light-gray', // 2. Jetpack Compose -> Light Gray
  'tech-shade-black',      // 3. Firebase Auth -> Black
  'tech-shade-mid-gray',   // 4. Cloud Firestore -> Medium Gray
  'tech-shade-charcoal',   // 5. Groq API -> Charcoal Gray
  'tech-shade-black',      // 6. Android Studio -> Black
  'tech-shade-light-gray', // 7. Gradle -> Light Gray
  'tech-shade-dark-gray',  // 8. MVVM Pattern -> Dark Gray
];

export default function Technology() {
  const [ref, isInView] = useInView({ threshold: 0.05 });

  return (
    <section className="technology section" id="technology" aria-labelledby="technology-title">
      <div className="container">
        <SectionHeading
          eyebrow="Technology Stack"
          title="Built with modern Android technologies."
          id="technology-title"
        />

        {/* Tech list */}
        <div ref={ref} className={`tech-grid ${isInView ? 'tech-grid--visible' : ''}`}>
          {TECH_STACK.map((tech, index) => {
            const shadeClass = SHADE_CLASSES[index % SHADE_CLASSES.length];
            return (
              <div
                key={tech.name}
                className={`tech-item ${shadeClass}`}
                tabIndex={0}
              >
                <span className="tech-item__name">{tech.name}</span>
                <span className="tech-item__desc">{tech.description}</span>
              </div>
            );
          })}
        </div>

        {/* Architecture Diagram */}
        <ArchitectureDiagram />
      </div>
    </section>
  );
}
