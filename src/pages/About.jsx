import { ArrowRight, Compass, MessageCircle, ScanSearch } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConfirmNote from '../components/ConfirmNote.jsx';
import Meta from '../components/Meta.jsx';
import Photo from '../components/Photo.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { companyAddress, photos } from '../data/siteData.js';

const principles = [
  {
    icon: Compass,
    title: 'Start with context',
    text: 'Understand the material, intended use and constraints before discussing a fit.',
  },
  {
    icon: ScanSearch,
    title: 'Be clear on detail',
    text: 'Confirm product descriptions, specifications and evidence rather than assume.',
  },
  {
    icon: MessageCircle,
    title: 'Keep communication open',
    text: 'Make requirements, open questions and next steps easy to discuss.',
  },
];

export default function About() {
  return (
    <>
      <Meta
        title="About"
        description="Learn about VALMERK Rubber Industries, based in Kharsundi, Khalapur, Raigad, Maharashtra."
      />
      <section className="page-hero page-hero-about">
        <Photo photo={photos.shreds} className="page-hero-photo" loading="eager" />
        <div className="page-hero-shade" />
        <div className="container page-hero-content">
          <p className="eyebrow eyebrow-light">ABOUT VALMERK</p>
          <h1>
            A local presence
            <br />
            in a <em>material world.</em>
          </h1>
          <p>
            An introduction to VALMERK Rubber Industries and its base in
            Kharsundi, Maharashtra.
          </p>
        </div>
      </section>

      <section className="section-pad about-overview">
        <div className="container about-overview-grid">
          <div className="about-overview-heading">
            <p className="eyebrow">THE BUSINESS, AT A GLANCE</p>
            <h2>
              Rooted in
              <br />
              <em>Raigad.</em>
            </h2>
          </div>
          <div className="about-overview-copy">
            <p className="large-copy">
              VALMERK Rubber Industries is located at Village Kharsundi, in
              Taluka Khalapur, Raigad district, Maharashtra.
            </p>
            <p>
              Rubber is the company’s stated industry. Further details about
              business history, operating model, materials handled, production
              assets and customer sectors have not been supplied for this
              website. We have kept those claims out rather than fill the gaps
              with assumptions.
            </p>
            <p>
              The site provides a clear framework for sharing verified
              information when it is available and for inviting direct
              enquiries in the meantime.
            </p>
            <Link to="/contact" className="text-arrow">
              Get in touch <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="container about-address-row">
          <span>COMPANY ADDRESS</span>
          <address>{companyAddress}</address>
          <span className="address-coordinate" aria-hidden="true">
            18° 43’ N
            <br />
            73° 10’ E
          </span>
        </div>
      </section>

      <section className="about-image-story">
        <div className="about-story-image">
          <Photo photo={photos.shredder} className="story-photo" />
          <span className="image-vertical-label">A GENERAL INDUSTRY VIEW</span>
        </div>
        <div className="about-story-copy">
          <p className="eyebrow eyebrow-light">MATERIALS & INDUSTRY KNOW-HOW</p>
          <h2>
            A business
            <br />
            shaped by <em>detail.</em>
          </h2>
          <p>
            Rubber materials are defined by more than their name. Intended use,
            composition, handling, performance expectations and applicable
            requirements all influence whether a material is suitable.
          </p>
          <p>
            VALMERK’s confirmed product categories are Crumb Rubber, Steel
            Wires and Nylon Fibres. Grades, specifications, operating methods
            and technical capabilities require direct confirmation.
          </p>
          <ConfirmNote>
            This page does not claim particular processes, certifications,
            facilities or years of experience.
          </ConfirmNote>
        </div>
      </section>

      <section className="section-pad values-section">
        <div className="container">
          <SectionHeading
            eyebrow="A PRACTICAL APPROACH"
            title="Clarity is a"
            accent="good start."
            description="A set of working principles for professional enquiries. These are a forward-looking expression of approach, not a claim about past performance."
          />
          <div className="principle-grid">
            {principles.map(({ icon: Icon, title, text }, index) => (
              <article className="principle-card" key={title}>
                <div className="principle-number">0{index + 1}</div>
                <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="container page-cta-inner">
          <div>
            <p className="eyebrow eyebrow-light">A CONVERSATION STARTS HERE</p>
            <h2>
              Bring us your
              <br />
              <em>requirement.</em>
            </h2>
          </div>
          <Link className="button button-amber" to="/contact">
            Contact VALMERK <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
