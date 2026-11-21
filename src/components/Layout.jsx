import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { navigation, productCategories } from '../data/siteData.js';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle('menu-is-open', menuOpen);
    return () => document.body.classList.remove('menu-is-open');
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="utility-bar">
        <div className="container utility-inner">
          <span>Rubber industry · Kharsundi, Maharashtra</span>
          <span>Material clarity. Thoughtful partnerships.</span>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="wordmark" to="/" aria-label="VALMERK home">
            <span className="wordmark-main">
              VALMERK<span className="wordmark-dot">.</span>
            </span>
            <span className="wordmark-sub">RUBBER INDUSTRIES</span>
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <nav
            id="primary-navigation"
            className={`primary-nav${menuOpen ? ' primary-nav-open' : ''}`}
            aria-label="Main navigation"
          >
            {navigation.map((item) =>
              item.to === '/products' ? (
                <div className="nav-products" key={item.to}>
                  <div className="nav-products-heading">
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `nav-link${isActive ? ' nav-link-active' : ''}`
                      }
                    >
                      {item.label}
                    </NavLink>
                    <button
                      type="button"
                      className="nav-products-toggle"
                      aria-label={
                        productsOpen ? 'Close products submenu' : 'Open products submenu'
                      }
                      aria-expanded={productsOpen}
                      aria-controls="products-submenu"
                      onClick={() => setProductsOpen((open) => !open)}
                    >
                      <ChevronDown size={16} aria-hidden="true" />
                    </button>
                  </div>
                  <div
                    id="products-submenu"
                    className={`nav-submenu${productsOpen ? ' nav-submenu-open' : ''}`}
                    role="group"
                    aria-label="Product pages"
                  >
                    <NavLink
                      to="/products"
                      end
                      className={({ isActive }) =>
                        `nav-submenu-link nav-submenu-overview${
                          isActive ? ' nav-submenu-link-active' : ''
                        }`
                      }
                    >
                      All products
                    </NavLink>
                    {productCategories.map((product) => (
                      <NavLink
                        key={product.slug}
                        to={`/products/${product.slug}`}
                        className={({ isActive }) =>
                          `nav-submenu-link${isActive ? ' nav-submenu-link-active' : ''}`
                        }
                      >
                        {product.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `nav-link${isActive ? ' nav-link-active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              ),
            )}
            <Link className="nav-cta" to="/contact">
              Start an enquiry <ArrowDownRight size={15} aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Link className="wordmark wordmark-inverse" to="/" aria-label="VALMERK home">
              <span className="wordmark-main">
                VALMERK<span className="wordmark-dot">.</span>
              </span>
              <span className="wordmark-sub">RUBBER INDUSTRIES</span>
            </Link>
            <p>
              VALMERK lists Crumb Rubber, Steel Wires and Nylon Fibres.
              Product specifications and operating details require confirmation.
            </p>
          </div>
          <div className="footer-links">
            <p className="footer-label">Explore</p>
            {navigation.slice(1).map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="footer-address">
            <p className="footer-label">Find us</p>
            <address>
              Survey No - 94/1/A, Village Kharsundi,
              <br />
              Tal. Khalapur, Raigad 410202,
              <br />
              Maharashtra, India.
            </address>
            <Link className="footer-direction" to="/contact">
              Location & enquiries <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} VALMERK Rubber Industries</span>
        <span>Product, process and application details require confirmation.</span>
        <Link to="/contact">Contact</Link>
      </div>
    </footer>
  );
}

export default function Layout() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
