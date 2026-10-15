import { Github, ExternalLink, Code2, Database, Sparkles, BookOpen, Download, Smartphone, AlertTriangle } from 'lucide-react';
import { REPOSITORY, ASSETS } from '../../data/projectData';
import { useInView } from '../../hooks/useInView';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import Button from '../../components/Button/Button';
import './ResourcesSection.css';

export default function ResourcesSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const hasUrl = Boolean(REPOSITORY.url && REPOSITORY.url.trim() !== '');

  return (
    <section className="resources section section--alt" id="resources" aria-labelledby="resources-title">
      {/* Anchor for download links */}
      <div id="download" className="resources__download-anchor" aria-hidden="true"></div>

      <div className="container">
        <SectionHeading
          eyebrow="Resources & Download"
          title="Project Resources & Application"
          description="Explore the open-source repository or download the Android application to experience Rakta Seva Connect."
          id="resources-title"
        />

        <div ref={ref} className={`resources-combo__grid ${isInView ? 'resources-combo__grid--visible' : ''}`}>
          {/* Left Card: Explore the Source Code (GitHub) */}
          <div className="resources-card resources-card--github">
            <div className="resources-card__top">
              <div className="resources-card__header">
                <div className="resources-card__icon-wrap resources-card__icon-wrap--github" aria-hidden="true">
                  <Github size={30} />
                </div>
                <div className="resources-card__badge resources-card__badge--green">
                  <span className="resources-card__badge-dot resources-card__badge-dot--green" aria-hidden="true" />
                  <span>Open Source</span>
                </div>
              </div>

              <h3 className="resources-card__title">{REPOSITORY.title}</h3>
              <p className="resources-card__description">{REPOSITORY.description}</p>

              <div className="resources-card__meta">
                <span className="resources-card__tag">
                  <Code2 size={13} />
                  <span>Kotlin & Jetpack Compose</span>
                </span>
                <span className="resources-card__tag">
                  <Database size={13} />
                  <span>Firebase Integration</span>
                </span>
                <span className="resources-card__tag">
                  <Sparkles size={13} />
                  <span>AI-Assisted Workflows</span>
                </span>
                <span className="resources-card__tag">
                  <BookOpen size={13} />
                  <span>Architecture & Workflows</span>
                </span>
              </div>
            </div>

            <div className="resources-card__bottom">
              {hasUrl ? (
                <a
                  href={REPOSITORY.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resources-card__cta-btn resources-card__cta-btn--github"
                  aria-label="View Rakta Seva Connect source code on GitHub (opens in a new tab)"
                >
                  <Github size={18} />
                  <span>{REPOSITORY.ctaLabel || 'View on GitHub'}</span>
                  <ExternalLink size={15} className="resources-card__ext-icon" />
                </a>
              ) : (
                <div className="resources-card__pending">
                  <span>Repository URL pending configuration</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Card: Explore Rakta Seva on Android (APK Download) */}
          <div className="resources-card resources-card--download">
            <div className="resources-card__top">
              <div className="resources-card__header">
                <div className="resources-card__icon-wrap resources-card__icon-wrap--phone" aria-hidden="true">
                  <Smartphone size={30} />
                </div>
                <div className="resources-card__badge resources-card__badge--white">
                  <span className="resources-card__badge-dot resources-card__badge-dot--white" aria-hidden="true" />
                  <span>Android APK</span>
                </div>
              </div>

              <h3 className="resources-card__title resources-card__title--light">
                Explore Rakta Seva on Android.
              </h3>
              <p className="resources-card__description resources-card__description--light">
                Explore the Android application and experience its donor discovery and blood donation coordination workflows.
              </p>
            </div>

            <div className="resources-card__bottom">
              {/* Sideload installation warning note */}
              <div className="resources-card__note">
                <AlertTriangle size={15} className="resources-card__note-icon" />
                <p>
                  This APK is installed outside the Play Store. Android may display a security warning during installation — you may need to enable installation from unknown sources in device settings.
                </p>
              </div>

              <div className="resources-card__actions">
                <Button
                  variant="primary"
                  size="lg"
                  href={ASSETS.apk}
                  download={ASSETS.apkFilename}
                  icon={Download}
                >
                  Download Android App
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
