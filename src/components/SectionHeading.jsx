export default function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  light = false,
}) {
  return (
    <div className={`section-heading${light ? ' section-heading-light' : ''}`}>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>
          {title} {accent && <em>{accent}</em>}
        </h2>
      </div>
      {description && <p className="section-heading-copy">{description}</p>}
    </div>
  );
}
