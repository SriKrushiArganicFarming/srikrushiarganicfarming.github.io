import React from 'react';

import grandFatherWithGroundNuts from './assets/blog/PHOTO-2022-07-01-09-38-08.jpg'

export default function Contact() {
  return (
    <div>
      <h2>Contact us</h2>
      <p>
        For inquiries about our products, orders, or any other questions, please reach out to us
        using the contact information below. We are here to assist you!
      </p>
      <img
        src={grandFatherWithGroundNuts}
        alt="Grandfather with Ground Nuts"
        style={{
          width: '65%',
          height: 'auto',
          display: 'block',
          margin: '0 auto',
          borderRadius: '5%',
        }}
      />
      <h3>Contact Information</h3>
      <section>
        <strong>S. Aruna (Proprietor)</strong>
        <br />
        <br />
        <strong>S. Saidulu</strong>
        <br />
        Phone: <a href="tel:+919177526747">+91 91775 26747</a>
        <br />
        <br />
        <strong>Ch. Pichaiah</strong>
        <br />
        Phone: <a href="tel:+919849148006">+91 98491 48006</a>
      </section>
      <h3>Reach Us</h3>
      <address>
        <strong>Sri Krushi Arganic Farming Varmi Compost</strong>
        <br />
        01, BALEMLA,
        <br />
        BALEMLA Balemla Cross Road, 508213,
        <br />
        Telangana, India
        <br />
        <a
          href="https://maps.google.com/?q=BALEMLA+Balemla+Cross+Road+508213+Suriapet+Nalgonda+Telangana+India"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Directions
        </a>
      </address>
    </div>
  );
}
