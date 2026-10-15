import * as LucideIcons from 'lucide-react';
import { WORKFLOW_STEPS } from '../../data/projectData';
import { useInView } from '../../hooks/useInView';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import './Workflow.css';

export default function Workflow() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section className="workflow section section--alt" id="workflow" aria-labelledby="workflow-title">
      <div className="container">
        <SectionHeading
          eyebrow="How it works"
          title="From donor discovery to recorded donation."
          id="workflow-title"
        />

        <div ref={ref} className={`workflow__steps ${isInView ? 'workflow__steps--visible' : ''}`}>
          {WORKFLOW_STEPS.map((step, index) => {
            const Icon = LucideIcons[step.icon];
            return (
              <div key={step.number} className="workflow__step" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="workflow__step-number">{step.number}</div>
                <div className="workflow__step-icon-wrap">
                  {Icon && <Icon size={24} className="workflow__step-icon" />}
                </div>
                <h3 className="workflow__step-title">{step.title}</h3>
                <p className="workflow__step-desc">{step.description}</p>
                {index < WORKFLOW_STEPS.length - 1 && (
                  <div className="workflow__connector" aria-hidden="true"></div>
                )}
              </div>
            );
          })}
        </div>

        <p className="workflow__disclaimer">
          Recipient confirmation records the reported outcome within the application.
          It is not equivalent to independent medical verification of a transfusion.
        </p>
      </div>
    </section>
  );
}
