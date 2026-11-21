import { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, Send } from 'lucide-react';
import ConfirmNote from '../components/ConfirmNote.jsx';
import Meta from '../components/Meta.jsx';
import { companyAddress } from '../data/siteData.js';

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

function buildEmail(form) {
  const body = [
    `Name: ${form.name}`,
    `Company: ${form.company || 'Not provided'}`,
    `Email: ${form.email}`,
    `Phone: ${form.phone || 'Not provided'}`,
    '',
    form.message,
  ].join('\n');

  return `mailto:?subject=${encodeURIComponent(
    form.subject || `Website enquiry from ${form.name}`,
  )}&body=${encodeURIComponent(body)}`;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('');

  const update = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    setStatus('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = buildEmail(form);
    setStatus(
      'An email draft is being opened with your details. Add VALMERK’s verified email address in your mail app before sending.',
    );
  };

  return (
    <>
      <Meta
        title="Contact"
        description="Contact VALMERK Rubber Industries at its Kharsundi, Khalapur, Raigad, Maharashtra address or prepare an enquiry email."
      />
      <section className="contact-page-hero">
        <div className="container contact-page-hero-inner">
          <p className="eyebrow eyebrow-light">CONTACT VALMERK</p>
          <h1>
            Start a
            <br />
            <em>conversation.</em>
          </h1>
          <p>
            Share a question, a material requirement or the context behind your
            enquiry.
          </p>
          <span className="contact-hero-coordinate">KHARSUNDI · KHALAPUR · RAIGAD</span>
        </div>
      </section>

      <section className="section-pad contact-main">
        <div className="container contact-layout">
          <div className="contact-details">
            <p className="eyebrow">REACH THE TEAM</p>
            <h2>
              A clear route
              <br />
              to <em>connect.</em>
            </h2>
            <p>
              Use the enquiry form to prepare a message, or use the address
              below to plan a visit.
            </p>
            <div className="contact-detail-block">
              <span className="contact-detail-icon">
                <MapPin size={19} aria-hidden="true" />
              </span>
              <div>
                <span className="detail-eyebrow">ADDRESS</span>
                <address>{companyAddress}</address>
                <a
                  className="directions-link"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyAddress)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open directions <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="contact-detail-block">
              <span className="contact-detail-icon">
                <Mail size={18} aria-hidden="true" />
              </span>
              <div>
                <span className="detail-eyebrow">EMAIL</span>
                <p>
                  No verified email address has been supplied. Please use the
                  enquiry form to prepare a draft and add the correct recipient
                  in your email application.
                </p>
              </div>
            </div>
            <div className="map-panel">
              <div className="map-panel-lines" aria-hidden="true" />
              <MapPin size={23} aria-hidden="true" />
              <span>KHARSUNDI</span>
              <small>KHALAPUR · RAIGAD · MAHARASHTRA</small>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyAddress)}`}
                target="_blank"
                rel="noreferrer"
              >
                View on map <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>

          <form className="enquiry-form" onSubmit={handleSubmit}>
            <div className="form-heading">
              <span>ENQUIRY / 01</span>
              <span>PREPARE A MESSAGE</span>
            </div>
            <h2>Tell us what you’re looking for.</h2>
            <div className="form-fields">
              <label>
                Name <span aria-hidden="true">*</span>
                <input
                  autoComplete="name"
                  name="name"
                  value={form.name}
                  onChange={update}
                  required
                  placeholder="Your full name"
                />
              </label>
              <label>
                Company
                <input
                  autoComplete="organization"
                  name="company"
                  value={form.company}
                  onChange={update}
                  placeholder="Company name"
                />
              </label>
              <label>
                Email <span aria-hidden="true">*</span>
                <input
                  autoComplete="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update}
                  required
                  placeholder="you@company.com"
                />
              </label>
              <label>
                Phone
                <input
                  autoComplete="tel"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={update}
                  placeholder="Optional"
                />
              </label>
              <label className="form-field-wide">
                Subject
                <input
                  name="subject"
                  value={form.subject}
                  onChange={update}
                  placeholder="What is your enquiry about?"
                />
              </label>
              <label className="form-field-wide">
                Message <span aria-hidden="true">*</span>
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={update}
                  required
                  placeholder="A few details about your requirement..."
                />
              </label>
            </div>
            <ConfirmNote>
              No enquiry backend or recipient email has been configured. The
              button opens a draft in your email application; it does not send
              or store your message.
            </ConfirmNote>
            <button type="submit" className="button button-dark submit-button">
              Prepare email draft <Send size={15} aria-hidden="true" />
            </button>
            {status && (
              <p className="form-status" role="status">
                {status}
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
