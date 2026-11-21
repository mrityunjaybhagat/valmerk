export default function Photo({ photo, className = '', loading = 'lazy' }) {
  return (
    <figure className={`photo ${className}`}>
      <img
        src={photo.src}
        alt={photo.alt}
        loading={loading}
        decoding="async"
      />
      <figcaption>
        <span>{photo.caption || 'Illustrative industry image'}</span>
        <a href={photo.href} target="_blank" rel="noreferrer">
          {photo.credit}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </figcaption>
    </figure>
  );
}
