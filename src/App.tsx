import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes, useLocation } from 'react-router-dom';

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
    description: 'We are a leading Manufacturer of Organic Mango from Nalgonda, India.',
    image: mangoImg,
  },
  {
    slug: 'millets',
    name: 'Millets',
    description: 'Manufacturer of a wide range of products which include Andu Korralu (Brown Top).',
    image: milletsImg,
  },
  {
    slug: 'neem-powder',
    name: 'Neem Powder',
    description: 'We are a leading Manufacturer of Neem Leaves Powder, Organic Neem Powder, Natural Neem Powder, Neem Cake Powder, Neem Powder Fertilizer and Herbal Neem Powder from Nalgonda, India.',
    image: neemPowderImg,
  },
  {
    slug: 'vermicompost',
    name: 'Natural Vermicompost',
    description: 'Offering you a complete choice of products which include Vermicompost Organic Manure, Organic Vermicompost, Fertilizer Vermicompost, Vermicompost Powder and Worm Vermicompost.',
    image: vermicompostImg,
  },
];

// Products page component
function Products() {
  return (
    <>
      <img src={logo} alt="Sri Krushi Organic Farming Logo" className="logo" />
      <h1>Sri Krushi Organic Farming</h1>
      <p>
        We are dedicated to sustainable agriculture and organic farming practices since 2005. We provide high-quality organic products and promote eco-friendly farming methods.
      </p>
      <section>
        <h2>Our Products</h2>
        <div className="trust-highlights" aria-label="Why choose Sri Krushi Organic Farming">
          <div><strong>Since 2005</strong><span>Trusted organic farming</span></div>
          <div><strong>Organic products</strong><span>Kind to soil and crops</span></div>
          <div><strong>Bulk orders</strong><span>Contact us for availability</span></div>
        </div>
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
  const pageName = product?.name ?? {
    '/about': 'About Us',
    '/blog': 'Blog',
    '/news': 'News',
    '/contact': 'Contact',
    '/cart': 'Cart',
    '/privacy-policy': 'Privacy Policy',
    '/security-policy': 'Security Policy',
  }[pathname] ?? 'Organic Products';

  useEffect(() => {
    document.title = `${pageName} | Sri Krushi Organic Farming`;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute('content', `Explore ${pageName.toLowerCase()} from Sri Krushi Organic Farming.`);
  }, [pageName]);

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
          <img src={logo} alt="Site Logo" style={{ width: '24px', height: '24px', verticalAlign: 'middle', marginRight: '8px' }} />
          <div
            className="nav-dropdown"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
            onFocus={() => setShowDropdown(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setShowDropdown(false);
            }}
          >
            <Link to="/products">Products</Link>
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
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart" className="cart-nav-link">
            Cart
            {cartItemCount > 0 && <span className="cart-count" aria-label={`${cartItemCount} items`}>{cartItemCount}</span>}
          </Link>
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
              &copy; {new Date().getFullYear()} SRI KRUSHI ORGANIC FARMING
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
