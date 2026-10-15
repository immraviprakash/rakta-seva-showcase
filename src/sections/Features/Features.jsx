import * as LucideIcons from 'lucide-react';
import { FEATURES } from '../../data/projectData';
import { useInView } from '../../hooks/useInView';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import './Features.css';

function FeatureCard({ feature, index }) {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const Icon = LucideIcons[feature.icon];

  return (
    <div
      ref={ref}
      className={`feature-card ${isInView ? 'feature-card--visible' : ''}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="feature-card__icon-wrap">
        {Icon && <Icon size={22} className="feature-card__icon" />}
      </div>
      <h3 className="feature-card__title">{feature.title}</h3>
      <p className="feature-card__description">{feature.description}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section className="features section" id="features" aria-labelledby="features-title">
      <div className="container">
        <SectionHeading
          eyebrow="Capabilities"
          title="Everything connected in one donation workflow."
          id="features-title"
        />

        <div className="features__grid">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
