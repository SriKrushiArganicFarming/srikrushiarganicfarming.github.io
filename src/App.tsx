import { useState, useRef } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

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

// Helper: useMemo implementation
function useMemo<T, D extends ReadonlyArray<unknown>>(factory: () => T, deps: D): T {
  const ref = useRef<{ deps: D; value: T } | undefined>(undefined);
  if (!ref.current || !areDepsEqual(ref.current.deps, deps)) {
    ref.current = { deps, value: factory() };
  }
  return ref.current.value;
}
function areDepsEqual<D extends ReadonlyArray<unknown>>(a: D, b: D): boolean {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

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
  // Sort products alphabetically by name
  const sortedProducts = [...PRODUCTS].sort((a, b) => a.name.localeCompare(b.name));
  return (
    <>
      <img src={logo} alt="Sri Krushi Organic Farming Logo" className="logo" />
      <h1>Sri Krushi Arganic Farming Varmi Compost</h1>
      <p>
        We are dedicated to sustainable agriculture and organic farming practices since 2005. We provide high-quality organic products and promote eco-friendly farming methods.
      </p>
      <section>
        <h2>Our Products</h2>
        <div className="products">
          {sortedProducts.map((product) => (
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
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function App() {
  const [showDropdown, setShowDropdown] = useState(false);
  // Sort products alphabetically by name for dropdown
  const sortedProducts = useMemo(
    () => [...PRODUCTS].sort((a, b) => a.name.localeCompare(b.name)),
    []
  );
  return (
    <Router>
      <div className="container">
        <nav className="nav">
          <div
            className="nav-dropdown"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link to="/products">Products</Link>
            {showDropdown && (
              <div className="dropdown-menu">
                {sortedProducts.map((product) => (
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
          <Link to="/cart">Cart</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
        </Routes>
        <footer className="footer">
          &copy; {new Date().getFullYear()} SRI KRUSHI ARGANIC FARMING VARMI COMPOST
        </footer>
      </div>
    </Router>
  );
}

export default App;
