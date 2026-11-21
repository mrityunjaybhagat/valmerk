import { ArrowDown, ArrowRight, ArrowUpRight, CircleCheck, Leaf, MoveUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConfirmNote from '../components/ConfirmNote.jsx';
import Meta from '../components/Meta.jsx';
import Photo from '../components/Photo.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { productCategories, photos } from '../data/siteData.js';

export default function Home() {
  return (
    <>
      <Meta
        title="Home"
        description="VALMERK Rubber Industries, based in Kharsundi, Khalapur, Maharashtra. Explore the company overview and enquire about rubber-industry requirements."
      />
      <section className="home-hero">
        <Photo photo={photos.stockpile} className="hero-photo" loading="eager" />
        <div className="hero-overlay" />
        <div className="container hero-inner">
          <div className="hero-kicker">
            <span className="kicker-line" />
            VALMERK RUBBER INDUSTRIES · MAHARASHTRA
          </div>
          <h1>
            Materials with
            <br />
            <em>purpose.</em>
            <br />
            Industry with
            <br />
            <span>possibility.</span>
          </h1>
          <p>
            A considered introduction to rubber materials, their potential and
            the conversations that bring the right requirements together.
          </p>
          <div className="hero-actions">
            <Link className="button button-amber" to="/about">
              Meet VALMERK <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <Link className="hero-text-link" to="/contact">
              Discuss a requirement <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="hero-footerline">
            <span>RUBBER MATERIALS · INDUSTRIAL APPLICATIONS</span>
            <a href="#intro">
              Explore the site <ArrowDown size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="hero-side-index" aria-hidden="true">
          <span>01</span>
          <i />
          <span>06</span>
        </div>
      </section>

      <section className="intro-section section-pad" id="intro">
        <div className="container intro-layout">
          <div className="intro-title">
            <p className="eyebrow">A LOCAL ADDRESS. A MATERIALS-LED INDUSTRY.</p>
            <h2>
              Grounded in
              <br />
              <em>rubber.</em>
            </h2>
            <Photo photo={photos.shreds} className="intro-photo" />
          </div>
          <div className="intro-copy">
            <span className="oversized-index" aria-hidden="true">
              V
            </span>
            <p className="intro-lead">
              VALMERK Rubber Industries is based in Kharsundi, Khalapur, in
              Maharashtra’s Raigad district.
            </p>
            <p>
              This website introduces the business and the broader rubber
              industry. It is designed to make it straightforward to learn
              about VALMERK and start a conversation about a specific need.
            </p>
            <p>
              Detailed product, process, quality and application information
              should be confirmed directly with the company before use or
              publication.
            </p>
            <Link className="text-arrow" to="/about">
              About VALMERK <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
            <div className="intro-facts">
              <div>
                <span>LOCATION</span>
                <strong>Kharsundi, Raigad</strong>
              </div>
              <div>
                <span>REGION</span>
                <strong>Maharashtra, India</strong>
              </div>
              <div>
                <span>FOCUS</span>
                <strong>Rubber industry</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="materials-section section-pad">
        <div className="container">
          <SectionHeading
            eyebrow="VALMERK PRODUCTS"
            title="A world of"
            accent="rubber."
            description="Crumb Rubber, Steel Wires and Nylon Fibres are confirmed VALMERK product categories. Grades, specifications and availability require direct confirmation."
          />
          <ConfirmNote>
            Product categories are confirmed; technical details, packaging and
            availability still need confirmation.
          </ConfirmNote>
          <div className="material-grid">
            {productCategories.map((item) => (
              <article className={`material-card material-${item.tone}`} key={item.number}>
                <Photo photo={item.image} className="material-photo" />
                <div className="material-card-copy">
                  <div className="material-number">{item.number} / VALMERK PRODUCT</div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <Link to={`/products/${item.slug}`} aria-label={`View ${item.name} product page`}>
                    View product <MoveUpRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="materials-more">
            <span>Product specifications and availability — confirm directly</span>
            <Link className="text-arrow" to="/products">
              View products <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="why-recycling-section">
        <div className="container why-recycling-layout">
          <div className="why-recycling-copy">
            <p className="eyebrow">WHY TYRE RECYCLING?</p>
            <h2>
              One tyre.
              <br />
              More than one <em>material.</em>
            </h2>
            <p>
              A used tyre contains different materials that can be recovered
              and assessed separately. Crumb rubber, steel wires and nylon
              fibres each have distinct characteristics and require a suitable
              next use.
            </p>
            <ul className="recovery-streams">
              <li>Crumb rubber</li>
              <li>Steel wires</li>
              <li>Nylon fibres</li>
            </ul>
            <p className="why-recycling-note">
              The images show general tyre-derived materials, not VALMERK’s
              facility or confirmed processing method.
            </p>
            <Link className="text-arrow" to="/process">
              Explore the general process <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <div className="why-recycling-visual">
            <div className="why-green-field" aria-hidden="true">
              <Leaf size={52} strokeWidth={1.2} />
            </div>
            <Photo photo={photos.crumb} className="why-surface-photo" />
            <div className="why-visual-label">
              <span>CRUMB RUBBER</span>
              <strong>Recovered material</strong>
            </div>
            <Photo photo={photos.shreds} className="why-material-photo" />
            <span className="why-visual-index" aria-hidden="true">01 / MATERIAL CYCLE</span>
          </div>
        </div>
      </section>

      <section className="process-feature">
        <div className="process-feature-photo">
          <Photo photo={photos.shredder} className="feature-photo" />
          <span className="photo-stamp">INDUSTRY PROCESS · ILLUSTRATIVE</span>
        </div>
        <div className="process-feature-copy">
          <p className="eyebrow eyebrow-light">FROM WHOLE TYRE TO MATERIAL STREAM</p>
          <h2>
            A process
            <br />
            of many <em>stages.</em>
          </h2>
          <p>
            Across the industry, tyre recycling can involve sourcing,
            preparation, size reduction, separation and inspection. The route
            varies by feedstock and intended output.
          </p>
          <p className="small-note">
            This overview describes a general industry sequence, not a
            confirmed VALMERK operating process.
          </p>
          <Link className="button button-outline-light" to="/process">
            Explore the process <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <div className="feature-stage-count">
            <CircleCheck size={17} aria-hidden="true" />
            <span>GENERAL INDUSTRY OVERVIEW</span>
          </div>
        </div>
      </section>

      <section className="applications-preview section-pad">
        <div className="container application-preview-grid">
          <div className="application-preview-copy">
            <p className="eyebrow">POTENTIAL APPLICATIONS</p>
            <h2>
              The material is
              <br />
              only <em>the beginning.</em>
            </h2>
            <p>
              Rubber-derived materials may be considered across different
              industries. Suitability depends on verified material properties,
              technical requirements and customer validation.
            </p>
            <ConfirmNote>
              Potential sectors are general industry examples, not confirmed
              VALMERK customer markets.
            </ConfirmNote>
            <Link className="text-arrow" to="/applications">
              Explore potential uses <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <div className="application-preview-image">
            <Photo photo={photos.crumb} className="crumb-photo" />
            <div className="application-image-label">
              <span>FORM FOLLOWS PURPOSE</span>
              <strong>Material first.</strong>
            </div>
            <div className="application-index">02—04</div>
          </div>
        </div>
      </section>

      <section className="quality-band">
        <div className="container quality-band-inner">
          <div>
            <p className="eyebrow eyebrow-light">A CLEAR WAY OF WORKING</p>
            <h2>
              Begin with the
              <br />
              <em>right questions.</em>
            </h2>
          </div>
          <div className="quality-points">
            <div>
              <span>01</span>
              <p>Clarify the intended application and material needs.</p>
            </div>
            <div>
              <span>02</span>
              <p>Confirm specifications and acceptance criteria directly.</p>
            </div>
            <div>
              <span>03</span>
              <p>Discuss evidence and quality information relevant to the request.</p>
            </div>
            <p className="small-note">
              No certifications, testing methods or quality claims are stated
              here; these require company confirmation.
            </p>
          </div>
        </div>
      </section>

      <section className="enquiry-strip">
        <Photo photo={photos.calender} className="enquiry-strip-photo" />
        <div className="enquiry-strip-overlay" />
        <div className="container enquiry-strip-inner">
          <p className="eyebrow eyebrow-light">LET’S MAKE THE NEXT STEP CLEAR</p>
          <h2>
            Tell us what
            <br />
            you’re looking <em>for.</em>
          </h2>
          <p>
            Start a conversation about VALMERK, rubber-industry materials or a
            requirement you would like to discuss.
          </p>
          <Link className="button button-amber" to="/contact">
            Contact VALMERK <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
