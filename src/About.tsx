import founderGrandFather from './assets/blog/PHOTO-2022-04-09-17-57-48.jpg'
import { Link } from 'react-router-dom';

const businessFacts = [
  ['Nature of business', 'Wholesaler/Distributor'],
  ['Additional business', 'Wholesale and retail'],
  ['Company CEO', 'Aruna Seggemu'],
  ['Team size', '11 to 25 people'],
  ['GST registration date', '01-07-2017'],
  ['Legal status', 'Proprietorship'],
  ['Annual turnover', '₹40 lakh to ₹1.5 crore'],
];

export default function About() {
  return (
    <main className="about-page">
      <h2>About Us</h2>
      <section className="about-hero">
        <div>
          <p className="about-intro">Sri Krushi Organic Farming is a family-run business in Balemla, Suryapet district, serving customers since 2005.</p>
          <p>We supply Neem Powder and Natural Vermicompost with a focus on ethical practices and dependable service. Daily operations are managed by <strong>Ch. Pichaiah</strong>, with support from <strong>S. Saidulu</strong>.</p>
          <p>Our <Link to="/news">News</Link> reflects our commitment to supporting local workers, young farmers, and sustainable agriculture.</p>
        </div>
        <img src={founderGrandFather} alt="Founder of Sri Krushi Organic Farming on the farm" className="about-image" />
      </section>

      <section className="about-card" aria-labelledby="why-us-heading">
        <h3 id="why-us-heading">Why choose us?</h3>
        <ul className="about-benefits">
          <li>Experienced team of professionals</li>
          <li>Customer-focused service</li>
          <li>Competitive pricing</li>
          <li>Timely delivery</li>
          <li>Quality product range</li>
        </ul>
      </section>

      <section className="about-card" aria-labelledby="factsheet-heading">
        <h3 id="factsheet-heading">Business facts</h3>
        <dl className="about-facts">
          {businessFacts.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="about-detail-grid">
        <section className="about-card">
          <h3>Statutory profile</h3>
          <dl className="about-facts compact">
            <div><dt>Banker</dt><dd>Canara Bank</dd></div>
            <div><dt>GST No.</dt><dd>36BKJPS0303L1Z2</dd></div>
          </dl>
        </section>
        <section className="about-card">
          <h3>Payment &amp; shipment</h3>
          <dl className="about-facts compact">
            <div><dt>Payment</dt><dd>Cash, cheque, card, bank transfer, or online</dd></div>
            <div><dt>Shipment</dt><dd>By road</dd></div>
          </dl>
        </section>
      </div>
    </main>
  );
}
