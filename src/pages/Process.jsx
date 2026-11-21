import { ArrowRight, ArrowUpRight, ClipboardCheck, GitBranch, MoveDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConfirmNote from '../components/ConfirmNote.jsx';
import Meta from '../components/Meta.jsx';
import Photo from '../components/Photo.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { photos, processStages } from '../data/siteData.js';

export default function Process() {
  return (
    <>
      <Meta
        title="Process"
        description="A general overview of stages that may appear in tyre recycling and rubber processing. VALMERK processes are not confirmed."
      />
      <section className="page-hero page-hero-process">
        <Photo photo={photos.shredder} className="page-hero-photo" loading="eager" />
        <div className="page-hero-shade" />
        <div className="container page-hero-content">
          <p className="eyebrow eyebrow-light">A GENERAL INDUSTRY OVERVIEW</p>
          <h1>
            From feedstock
            <br />
            to <em>material.</em>
          </h1>
          <p>
            Explore a typical tyre-recycling sequence and the decisions that
            can shape each stage.
          </p>
        </div>
      </section>

      <section className="process-introduction section-pad">
        <div className="container process-intro-layout">
          <div>
            <p className="eyebrow">A ROUTE, NOT A PROMISE</p>
            <h2>
              Every stage
              <br />
              has a <em>purpose.</em>
            </h2>
          </div>
          <div>
            <p className="large-copy">
              Tyre recycling can involve several steps between incoming
              material and the output a customer needs.
            </p>
            <p>
              The actual route varies with feedstock, equipment, process
              settings and intended output. The sequence below is general
              industry information and does not describe confirmed VALMERK
              operations.
            </p>
            <ConfirmNote>
              VALMERK’s actual sourcing, equipment, process stages, quality
              controls and outputs require direct company confirmation.
            </ConfirmNote>
          </div>
        </div>
        <div className="container process-route" aria-label="General tyre recycling process stages">
          {processStages.map((stage, index) => (
            <div className="route-step" key={stage.number}>
              <span>{stage.number}</span>
              <strong>{stage.title}</strong>
              {index < processStages.length - 1 && <MoveDown size={15} aria-hidden="true" />}
            </div>
          ))}
        </div>
      </section>

      <section className="process-stages-section">
        {processStages.map((stage, index) => (
          <article
            className={`process-stage${index % 2 ? ' process-stage-reverse' : ''}`}
            key={stage.number}
          >
            {stage.image ? (
              <Photo photo={stage.image} className="process-stage-image" />
            ) : (
              <div
                className="process-stage-diagram"
                role="img"
                aria-label="Illustrative quality review stage: agree criteria, review material, and prepare handling"
              >
                <span className="diagram-kicker">GENERAL INDUSTRY FLOW · 05</span>
                <span className="diagram-icon">
                  <ClipboardCheck size={33} strokeWidth={1.3} aria-hidden="true" />
                </span>
                <strong>
                  Agree the criteria
                  <br />
                  before the handoff.
                </strong>
                <span className="diagram-steps">REVIEW · RECORD · HANDLE</span>
                <span className="diagram-disclaimer">CONCEPTUAL STAGE</span>
              </div>
            )}
            <div className="process-stage-copy">
              <p className="eyebrow">
                GENERAL INDUSTRY STAGE · {stage.number}
              </p>
              <h2>{stage.title}</h2>
              <p>{stage.description}</p>
              {index === 3 && (
                <div className="process-output-note">
                  <GitBranch size={16} aria-hidden="true" />
                  Outputs and separation quality depend on the process route.
                </div>
              )}
              <span className="stage-disclaimer">Illustrative process only</span>
            </div>
          </article>
        ))}
      </section>

      <section className="process-endcap">
        <div className="container process-endcap-inner">
          <div>
            <p className="eyebrow eyebrow-light">LOOKING FOR SPECIFIC INFORMATION?</p>
            <h2>
              Ask about the
              <br />
              <em>actual process.</em>
            </h2>
          </div>
          <Link className="button button-amber" to="/contact">
            Enquire with VALMERK <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
