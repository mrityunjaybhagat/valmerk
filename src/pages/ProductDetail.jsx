import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import ConfirmNote from '../components/ConfirmNote.jsx';
import Meta from '../components/Meta.jsx';
import Photo from '../components/Photo.jsx';
import { productCategories } from '../data/siteData.js';
import NotFound from './NotFound.jsx';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = productCategories.find((item) => item.slug === slug);

  if (!product) return <NotFound />;

  return (
    <>
      <Meta
        title={product.name}
        description={`${product.name} is a confirmed VALMERK product category. Product specifications and availability require direct confirmation.`}
      />
      <section className="product-detail-hero">
        <div className="container">
          <Link className="product-detail-back" to="/products">
            <ArrowLeft size={15} aria-hidden="true" />
            All products
          </Link>
          <div className="product-detail-grid">
            <Photo
              photo={product.image}
              className="product-detail-photo"
              loading="eager"
            />
            <div className="product-detail-copy">
              <p className="eyebrow">
                PRODUCT {product.number} / VALMERK
              </p>
              <h1>{product.name}</h1>
              <p className="product-detail-lead">{product.detail}</p>
              {/* <ConfirmNote>
                This is a reference photograph, not a photograph of VALMERK
                stock, facilities or processing.
              </ConfirmNote> */}
              <Link className="button button-dark" to="/contact">
                Ask about this product <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="product-detail-information section-pad">
        <div className="container product-detail-information-grid">
          <div>
            <p className="eyebrow">BEFORE MAKING A SPECIFICATION</p>
            <h2>
              Confirm the
              <br />
              <em>details.</em>
            </h2>
            <p>
              VALMERK has confirmed this product category. The points below
              need direct confirmation before relying on a product description
              or placing an order.
            </p>
          </div>
          <ul className="product-confirmation-list">
            {product.confirmationPoints.map((point, index) => (
              <li key={point}>
                <span>0{index + 1}</span>
                <strong>{point}</strong>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="product-detail-footer">
        <div className="container product-detail-footer-inner">
          <div>
            <p className="eyebrow eyebrow-light">MORE FROM VALMERK</p>
            <h2>
              Explore the
              <br />
              <em>product range.</em>
            </h2>
          </div>
          <Link className="button button-outline-light" to="/products">
            View all products <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
