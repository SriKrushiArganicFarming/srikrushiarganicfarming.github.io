import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';

import './App.css';

import logo from './assets/logo.png';
import mangoImg from './assets/organic-mangos-500x500.webp';
import milletsImg from './assets/andu-korralu-brown-top--500x500.webp';
import neemPowderImg from './assets/neem-leaves-powder-500x500.webp';
import vermicompostImg from './assets/vermicompost-manure-500x500.webp';

import About from './About';
import Blog from './Blog';
import Cart from './Cart';
import Contact from './Contact';
import News from './News';
import ProductDetails from './ProductDetails';
import PrivacyPolicy from "./PrivacyPolicy";
import SecurityPolicy from "./SecurityPolicy";
import { useCart } from './CartContext';

// Product data
const PRODUCTS = [
  {
    slug: 'mangoes',
    name: 'Organic Mangoes',
    description: 'Naturally grown mangoes from Balemla.',
    image: mangoImg,
  },
  {
    slug: 'millets',
    name: 'Millets',
    description: 'Brown-top millets for everyday meals.',
    image: milletsImg,
  },
  {
    slug: 'neem-powder',
    name: 'Neem Powder',
    description: 'Natural neem powders and neem-cake products.',
    image: neemPowderImg,
  },
  {
    slug: 'vermicompost',
    name: 'Natural Vermicompost',
    description: 'Organic vermicompost to support healthy soil.',
    image: vermicompostImg,
  },
];

// Products page component
function Products() {
  return (
    <>
      <img src={logo} alt="Sri Krushi Organic Farming Logo" className="logo" />
      <h1>Sri Krushi Organic Farming</h1>
      <p className="home-intro">Organic farming and natural products from Balemla, Suryapet district, since 2005.</p>
      <section>
        <div className="trust-highlights" aria-label="Why choose Sri Krushi Organic Farming">
          <div><strong>Since 2005</strong><span>Trusted organic farming</span></div>
          <div><strong>Organic products</strong><span>Kind to soil and crops</span></div>
          <div><strong>Bulk orders</strong><span>Contact us for availability</span></div>
        </div>
        <section className="home-order" aria-labelledby="order-heading">
          <div>
            <h2 id="order-heading">Order from Sri Krushi</h2>
            <p>For product availability, bulk orders, or farm directions, contact us directly.</p>
          </div>
          <div className="home-order-actions">
            <a href="tel:+919177526747">Call us</a>
            <a href="https://wa.me/919177526747" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="https://maps.app.goo.gl/vv5BXPwD5ZscGkf59" target="_blank" rel="noopener noreferrer">Directions</a>
          </div>
        </section>
        <h2>Our Products</h2>
        <div className="products">
          {PRODUCTS.map((product) => (
            <Link
              to={`/product/${product.slug}`}
              className="product-card"
              key={product.name}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <img src={product.image} alt={product.name} className="product-image" />
              <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <span className="product-card-cta">View products <span aria-hidden="true">→</span></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function PageMetadata() {
  const { pathname } = useLocation();
  const product = PRODUCTS.find((item) => pathname === `/product/${item.slug}`);
  const pageDescriptions: Record<string, string> = {
    '/': 'Organic farming and natural products from Balemla in Telangana’s Suryapet district.',
    '/products': 'Browse organic mangoes, millets, neem products, and vermicompost from Sri Krushi Organic Farming.',
    '/about': 'Learn about Sri Krushi Organic Farming and our commitment to sustainable agriculture.',
    '/blog': 'Read stories and updates from Sri Krushi Organic Farming.',
    '/news': 'See news and announcements from Sri Krushi Organic Farming.',
    '/contact': 'Contact Sri Krushi Organic Farming in Balemla, Suryapet district, Telangana.',
    '/cart': 'Review your selected Sri Krushi Organic Farming products and send an order enquiry.',
  };
  const pageName = product?.name ?? {
    '/about': 'About Us',
    '/blog': 'Blog',
    '/news': 'News',
    '/contact': 'Contact',
    '/cart': 'Cart',
    '/privacy-policy': 'Privacy Policy',
    '/security-policy': 'Security Policy',
  }[pathname] ?? 'Organic Products';
  const pageDescription = product?.description ?? pageDescriptions[pathname] ?? 'Organic products from Sri Krushi Organic Farming.';

  useEffect(() => {
    document.title = `${pageName} | Sri Krushi Organic Farming`;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute('content', pageDescription);
  }, [pageDescription, pageName]);

  return null;
}

function NotFound() {
  return (
    <section className="not-found-page">
      <h2>Page Not Found</h2>
      <p>The page you requested is not available.</p>
      <Link to="/products" className="product-card-cta">Browse Products <span aria-hidden="true">→</span></Link>
    </section>
  );
}

function App() {
  const [showDropdown, setShowDropdown] = useState(false);
  const { cart } = useCart();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <Router>
      <div className="container">
        <PageMetadata />
        <nav className="nav">
          <Link to="/" className="site-logo-link" aria-label="Sri Krushi Organic Farming home">
            <img src={logo} alt="" className="site-logo" />
          </Link>
          <div
            className="nav-dropdown"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
            onFocus={() => setShowDropdown(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setShowDropdown(false);
            }}
          >
            <NavLink to="/products">Products</NavLink>
            <button
              type="button"
              className="nav-dropdown-toggle"
              aria-label="Toggle products menu"
              aria-expanded={showDropdown}
              onClick={() => setShowDropdown((visible) => !visible)}
            >
              <span aria-hidden="true">⌄</span>
            </button>
            {showDropdown && (
              <div className="dropdown-menu">
                {PRODUCTS.map((product) => (
                  <Link
                    key={product.slug}
                    to={`/product/${product.slug}`}
                    className="dropdown-item"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/cart" className="cart-nav-link">
            Cart
            {cartItemCount > 0 && <span className="cart-count" aria-label={`${cartItemCount} items`}>{cartItemCount}</span>}
          </NavLink>
        </nav>
        <div className="subheader" />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/security-policy" element={<SecurityPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-title">
              &copy; 2005 - {new Date().getFullYear()} SRI KRUSHI ORGANIC FARMING
            </div>
            <div className="footer-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <span className="footer-link-separator">|</span>
              <Link to="/security-policy">Security Policy</Link>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
