import { CONTRIBUTIONS } from '../../data/projectData';
import { useInView } from '../../hooks/useInView';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import './Contributions.css';

export default function Contributions() {
  const [ref, isInView] = useInView({ threshold: 0.05 });

  return (
    <section className="contributions section section--alt" id="contributions" aria-labelledby="contributions-title">
      <div className="container container--narrow">
        <SectionHeading
          eyebrow="Internship Project"
          title="Project development and implementation"
          description="Key areas of development work contributed during the internship project."
          id="contributions-title"
        />

        <div ref={ref} className={`contributions__list ${isInView ? 'contributions__list--visible' : ''}`}>
          {CONTRIBUTIONS.map((item, index) => (
            <div
              key={item.title}
              className="contribution-item"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="contribution-item__marker" aria-hidden="true">
                <span className="contribution-item__dot"></span>
                {index < CONTRIBUTIONS.length - 1 && <span className="contribution-item__line"></span>}
              </div>
              <div className="contribution-item__content">
                <h3 className="contribution-item__title">{item.title}</h3>
                <p className="contribution-item__description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
