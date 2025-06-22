import './App.css';
import logo from './assets/logo.png';
import vermicompostImg from './assets/vermicompost-manure-500x500.webp';
import neemPowderImg from './assets/neem-leaves-powder-500x500.webp';
import mangoImg from './assets/organic-mangos-500x500.webp';
import milletsImg from './assets/andu-korralu-brown-top--500x500.webp';

const PRODUCTS = [
  {
    name: 'Natural Vermicompost',
    description: 'Offering you a complete choice of products which include Vermicompost Organic Manure, Organic Vermicompost, Fertilizer Vermicompost, Vermicompost Powder and Worm Vermicompost.',
    image: vermicompostImg,
  },
  {
    name: 'Neem Powder',
    description: 'We are a leading Manufacturer of Neem Leaves Powder, Organic Neem Powder, Natural Neem Powder, Neem Cake Powder, Neem Powder Fertilizer and Herbal Neem Powder from Nalgonda, India.',
    image: neemPowderImg,
  },
  {
    name: 'Organic Mangoes',
    description: 'We are a leading Manufacturer of Organic Mango from Nalgonda, India.',
    image: mangoImg,
  },
  {
    name: 'Millets',
    description: 'Manufacturer of a wide range of products which include Andu Korralu (Brown Top).',
    image: milletsImg,
  },
];

function App() {
  return (
    <div className="container">
      <img src={logo} alt="Sri Krushi Organic Farming Logo" className="logo" />
      <h1>Sri Krushi Organic Farming VermiCompost</h1>
      <p>
        Since establishment in the year 2005, we are focusing on becoming one of the most familiar and trustworthy name of this industry and for this, we make sure to perform our manufacturing activities in an efficient and ethical manner. The range of products in which we deal is Neem Powder and Natural Vermicompost. Our corporation is specializes in the quick and efficient shipment of ordered consignments by the means of logistic facility.
      </p>
      <section>
        <h2>Our Products</h2>
        <div className="products">
          {PRODUCTS.map((product) => (
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
