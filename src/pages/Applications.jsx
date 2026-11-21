import { ArrowRight, ArrowUpRight, CircleHelp } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConfirmNote from '../components/ConfirmNote.jsx';
import Meta from '../components/Meta.jsx';
import Photo from '../components/Photo.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { photos, possibleApplications } from '../data/siteData.js';

export default function Applications() {
  return (
    <>
      <Meta
        title="Applications"
        description="Potential rubber material applications across general industries. Specific VALMERK application claims require confirmation."
      />
      <section className="page-hero page-hero-applications">
        <Photo photo={photos.shreds} className="page-hero-photo" loading="eager" />
        <div className="page-hero-shade" />
        <div className="container page-hero-content">
          <p className="eyebrow eyebrow-light">POTENTIAL INDUSTRY USES</p>
          <h1>
            New uses.
            <br />
            <em>New questions.</em>
          </h1>
          <p>
            Recovered rubber can prompt new material conversations—but
            application fit always starts with evidence.
          </p>
        </div>
      </section>

      <section className="section-pad applications-intro">
        <div className="container">
          <SectionHeading
            eyebrow="WHERE MATERIALS MAY FIT"
            title="Possibility needs"
            accent="proof."
            description="A rubber material’s suitability depends on its composition, form, processing, intended use and relevant technical or regulatory criteria."
          />
          <ConfirmNote>
            These are general industry examples only. No specific VALMERK
            application, customer or performance result is represented.
          </ConfirmNote>
        </div>
      </section>

      <section className="application-spotlight">
        <div className="application-spotlight-image">
          <Photo photo={photos.crumb} className="spotlight-photo" />
          <span className="spotlight-index">MATERIAL / APPLICATION</span>
        </div>
        <div className="application-spotlight-copy">
          <p className="eyebrow eyebrow-light">START WITH THE REQUIREMENT</p>
          <h2>
            A material
            <br />
            is only as good
            <br />
            as its <em>fit.</em>
          </h2>
          <p>
            An application discussion should begin with the operating
            environment, physical demands and acceptance criteria—not with
            assumptions about what a material can do.
          </p>
          <div className="application-spotlight-foot">
            <CircleHelp size={16} aria-hidden="true" />
            <span>Confirm every technical claim with the relevant supplier.</span>
          </div>
        </div>
      </section>

      <section className="section-pad application-list-section">
        <div className="container">
          <div className="application-list-heading">
            <div>
              <p className="eyebrow">POTENTIAL DIRECTIONS</p>
              <h2>
                A few places
                <br />
                to <em>begin.</em>
              </h2>
            </div>
            <p>
              The application examples below are starting points for inquiry,
              not product-performance claims or verified VALMERK markets.
            </p>
          </div>
          <div className="potential-list">
            {possibleApplications.map((item) => (
              <article className="potential-row" key={item.number}>
                <span className="potential-number">{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
                <span className="potential-status">POTENTIAL USE</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="applications-contact">
        <div className="container applications-contact-inner">
          <div>
            <p className="eyebrow eyebrow-light">A SPECIFIC USE CASE?</p>
            <h2>
              Bring the
              <br />
              <em>details.</em>
            </h2>
            <p>
              Share your application, material needs and any required
              specification. VALMERK’s fit and availability can then be
              confirmed directly.
            </p>
          </div>
          <Link className="button button-amber" to="/contact">
            Start an enquiry <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
