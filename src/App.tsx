import './App.css';
import logo from './assets/logo.png';
import vermicompostImg from './assets/vermicompost-manure-500x500.webp';
import neemPowderImg from './assets/neem-leaves-powder-500x500.webp';
import mangoImg from './assets/organic-mangos-500x500.webp';
import milletsImg from './assets/andu-korralu-brown-top--500x500.webp';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Blog from './Blog';
import News from './News';
import Contact from './Contact';
import ProductDetails from './ProductDetails';


const PRODUCTS = [
  {
    slug: 'vermicompost',
    name: 'Natural Vermicompost',
    description: 'Offering you a complete choice of products which include Vermicompost Organic Manure, Organic Vermicompost, Fertilizer Vermicompost, Vermicompost Powder and Worm Vermicompost.',
    image: vermicompostImg,
  },
  {
    slug: 'neem-powder',
    name: 'Neem Powder',
    description: 'We are a leading Manufacturer of Neem Leaves Powder, Organic Neem Powder, Natural Neem Powder, Neem Cake Powder, Neem Powder Fertilizer and Herbal Neem Powder from Nalgonda, India.',
    image: neemPowderImg,
  },
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
];

// Products page component
function Products() {
  return (
    <>
      <img src={logo} alt="Sri Krushi Organic Farming Logo" className="logo" />
      <h1>Sri Krushi Arganic Farming Varmi Compost</h1>
      <p>
        Sri Krushi Arganic Farming Varmi Compost is dedicated to sustainable agriculture and organic farming practices since 2005. We provide high-quality organic products and promote eco-friendly farming methods.
      </p>
      <section>
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
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="nav">
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
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
