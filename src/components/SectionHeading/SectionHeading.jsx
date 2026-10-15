import './SectionHeading.css';
import { useInView } from '../../hooks/useInView';

export default function SectionHeading({ eyebrow, title, description, align = 'center', id }) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={`section-heading section-heading--${align} ${isInView ? 'section-heading--visible' : ''}`}
      id={id}
    >
      {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
      <h2 className="section-heading__title">{title}</h2>
      {description && <p className="section-heading__description">{description}</p>}
    </div>
  );
}
