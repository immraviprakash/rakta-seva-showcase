import { useInView } from '../../hooks/useInView';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import './ProjectOverview.css';

export default function ProjectOverview() {
  const [ref, isInView] = useInView();

  return (
    <section className="overview section" id="overview" aria-labelledby="overview-title">
      <div className="container">
        <SectionHeading
          eyebrow="The Problem & Solution"
          title="Making blood donation coordination more organized."
          id="overview-title"
        />

        <div ref={ref} className="overview__content">
          <div className={`overview__grid ${isInView ? 'overview__grid--visible' : ''}`}>
            {/* Problem */}
            <div className="overview__block overview__block--problem">
              <div className="overview__block-label overview__block-label--problem">The Challenge</div>
              <p className="overview__block-text">
                Finding suitable blood donors can be difficult, particularly during emergencies.
                Donor availability and blood-group information may be scattered across different
                sources. Recipients often struggle to understand request status, while donors
                can receive repeated requests without a clear coordination workflow.
              </p>
            </div>

            {/* Solution */}
            <div className="overview__block overview__block--solution">
              <div className="overview__block-label overview__block-label--solution">The Solution</div>
              <p className="overview__block-text">
                Rakta Seva Connect brings donor discovery, direct requests, notifications,
                donation verification, donation history, and AI-assisted communication into
                one Android application — creating a connected workflow from initial search
                to recorded donation.
              </p>
            </div>
          </div>

          {/* Clarification */}
          <div className={`overview__clarification ${isInView ? 'overview__clarification--visible' : ''}`}>
            <p>
              This application supports donation coordination and communication between
              donors and recipients. It does not replace hospitals, blood banks, medical
              professionals, or medical screening procedures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
