import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Meta from '../components/Meta.jsx';

export default function NotFound() {
  return (
    <>
      <Meta
        title="Page not found"
        description="The page you are looking for could not be found."
      />
      <section className="not-found-page">
        <div className="container">
          <p className="eyebrow">404 / PAGE NOT FOUND</p>
          <h1>
            This page
            <br />
            isn’t <em>here.</em>
          </h1>
          <Link className="button button-dark" to="/">
            <ArrowLeft size={16} aria-hidden="true" /> Back to home
          </Link>
        </div>
      </section>
    </>
  );
}
