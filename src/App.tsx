import React from 'react';
import './App.css';
import logo from './assets/logo.png';

const products = [
  {
    name: 'Natural Vermicompost',
    description: 'Offering you a complete choice of products which include Vermicompost Organic Manure, Organic Vermicompost, Fertilizer Vermicompost, Vermicompost Powder and Worm Vermicompost.',
    image: '/src/assets/vermicompost-manure-500x500.webp',
  },
  {
    name: 'Neem Powder',
    description: 'We are a leading Manufacturer of Neem Leaves Powder, Organic Neem Powder, Natural Neem Powder, Neem Cake Powder, Neem Powder Fertilizer and Herbal Neem Powder from Nalgonda, India.',
    image: '/src/assets/neem-leaves-powder-500x500.webp',
  },
  {
    name: 'Organic Mangoes',
    description: 'We are a leading Manufacturer of Organic Mango from Nalgonda, India.',
    image: '/src/assets/organic-mangos-500x500.webp', // Add this image to your assets
  },
  {
    name: 'Millets',
    description: 'Manufacturer of a wide range of products which include Andu Korralu (Brown Top).',
    image: '/src/assets/andu-korralu-brown-top--500x500.webp', // Add this image to your assets
  },
];

function App() {
  return (
    <div className="container">
      <img src={logo} alt="Sri Krushi Organic Farming Logo" className="logo" />
      <h1>Sri Krushi Organic Farming VermiCompost</h1>
      <p>Welcome to our website!</p>
      <section>
        <h2>Our Products</h2>
        <div className="products">
          {products.map((product) => (
            <div className="product-card" key={product.name}>
              <img src={product.image} alt={product.name} className="product-image" />
              <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
