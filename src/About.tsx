import React from 'react';

import founderGrandFather from './assets/blog/PHOTO-2022-04-09-17-57-48.jpg'

export default function About() {
  return (
    <div>
      <h2>About Us</h2>
      <p>
        Since our establishment in 2005, we have been committed to becoming one of the most familiar and trustworthy names in the industry. To achieve this, we ensure that all our manufacturing activities are carried out efficiently and ethically.
      </p>
      <p>
        We specialize in producing high-quality Neem Powder and Natural Varmi Compost. Additionally, our company takes pride in providing fast and reliable shipment of orders through our well-organized logistics network.
      </p>
      <img src={founderGrandFather} alt="About Us Image" style={{ width: '85%', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '5%' }} />
      <p>
      
      </p>
      <h3>Why Us?</h3>
      <p>
        Being one of the prominent companies in the market, we are involved in offering an exclusive range of products.
      </p>
      <p>The features for which we have received appreciation from our clients:</p>
      <ul>
        <li>Experienced team of professionals</li>
        <li>Client-centric approach</li>
        <li>Competitive price structure</li>
        <li>Timely delivery</li>
        <li>Qualitative range of product</li>
      </ul>
      <h3>Factsheet</h3>
      <ul>
        <li><strong>Nature of Business:</strong> Wholesaler/Distributor</li>
        <li><strong>Additional Business:</strong> Wholesale Business, Retail Business</li>
        <li><strong>Company CEO:</strong> Aruna Seggemu</li>
        <li><strong>Total Number of Employees:</strong> 11 to 25 People</li>
        <li><strong>GST Registration Date:</strong> 01-07-2017</li>
        <li><strong>Legal Status of Firm:</strong> Proprietorship</li>
        <li><strong>Annual Turnover:</strong> 40 L - 1.5 Cr</li>
        <li><strong>GST Partner Name:</strong> Aruna Seggemu</li>
      </ul>
      <h4>Statutory Profile</h4>
      <ul>
        <li><strong>Banker:</strong> CANARA BANK</li>
        <li><strong>GST No.:</strong> 36BKJPS0303L1Z2</li>
      </ul>
      <h4>Packaging/Payment and Shipment Details</h4>
      <ul>
        <li><strong>Payment Mode:</strong> Cash, Cheque, DD, Credit Card, Bank Transfer, Online</li>
        <li><strong>Shipment Mode:</strong> By Road</li>
      </ul>
    </div>
  );
}
