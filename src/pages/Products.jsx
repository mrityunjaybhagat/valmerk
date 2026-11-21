import { ArrowRight, ArrowUpRight, Box, CircleHelp } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConfirmNote from '../components/ConfirmNote.jsx';
import Meta from '../components/Meta.jsx';
import Photo from '../components/Photo.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { productCategories, photos } from '../data/siteData.js';

function ProductCard({ item }) {
  return (
    <article className={`product-card product-card-${item.tone}`}>
      <Photo photo={item.image} className="product-card-photo" />
      <div className="product-card-copy">
        <p className="product-number">{item.number} / VALMERK PRODUCT</p>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <span className="product-details-note">
          <CircleHelp size={14} aria-hidden="true" />
          Specifications require confirmation
        </span>
        <Link className="product-card-link" to={`/products/${item.slug}`}>
          Product details <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export default function Products() {
  return (
    <>
      <Meta
        title="Products"
        description="VALMERK product categories: Crumb Rubber, Steel Wires and Nylon Fibres. Grades, specifications and availability require confirmation."
      />
      <section className="page-hero page-hero-products">
        <Photo photo={photos.crumb} className="page-hero-photo" loading="eager" />
        <div className="page-hero-shade" />
        <div className="container page-hero-content">
          <p className="eyebrow eyebrow-light">MATERIALS & OUTPUTS</p>
          <h1>
            Material
            <br />
            <em>possibilities.</em>
          </h1>
          <p>
            Crumb Rubber, Steel Wires and Nylon Fibres are confirmed VALMERK
            product categories. Product specifications and availability need
            direct confirmation.
          </p>
        </div>
      </section>

      <section className="section-pad products-intro">
        <div className="container products-intro-grid">
          <SectionHeading
            eyebrow="CONFIRMED PRODUCT CATEGORIES"
            title="Three material"
            accent="families."
          />
          <div className="products-intro-copy">
            <p>
              The product categories are confirmed by VALMERK. The descriptions
              are intentionally general because grades, specifications,
              packaging and availability were not supplied.
            </p>
            <ConfirmNote>
              Nylon Fibres are listed separately from textile fibres. No
              technical specifications, grades or stock levels are claimed.
            </ConfirmNote>
          </div>
        </div>
      </section>

      <section className="products-list-section">
        <div className="container products-list">
          {productCategories.map((item) => (
            <ProductCard key={item.number} item={item} />
          ))}
        </div>
      </section>

      <section className="specification-section">
        <div className="container specification-grid">
          <div className="specification-icon">
            <Box size={34} strokeWidth={1.25} aria-hidden="true" />
          </div>
          <div>
            <p className="eyebrow">BEFORE MAKING A SPECIFICATION</p>
            <h2>
              Agree on the
              <br />
              <em>details.</em>
            </h2>
          </div>
          <div className="specification-copy">
            <p>
              Confirm the intended application, material description,
              specification, packaging, testing or handling requirements with
              VALMERK before placing an order or relying on a product claim.
            </p>
            <Link className="text-arrow" to="/contact">
              Ask about a product category <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
