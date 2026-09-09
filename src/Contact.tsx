import grandFatherWithGroundNuts from './assets/blog/PHOTO-2022-07-01-09-38-08.jpg'

export default function Contact() {
  return (
    <main className="contact-page">
      <h2>Contact us</h2>
      <section className="contact-hero">
        <div>
          <p className="contact-intro">Call or message us for product availability, bulk orders, and farm directions.</p>
          <div className="contact-actions" aria-label="Contact actions">
            <a href="tel:+919177526747">Call us</a>
            <a href="https://wa.me/919177526747" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a
              href="https://maps.app.goo.gl/vv5BXPwD5ZscGkf59"
              target="_blank"
              rel="noopener noreferrer"
            >
              Directions
            </a>
          </div>
          <section className="contact-card contact-information-card" aria-labelledby="contact-information-heading">
            <h3 id="contact-information-heading">Contact information</h3>
            <div className="contact-person"><strong>S. Aruna</strong><span>Proprietor</span></div>
            <div className="contact-person"><strong>S. Saidulu</strong><a href="tel:+919177526747">+91 91775 26747</a></div>
            <div className="contact-person"><strong>Ch. Pichaiah</strong><a href="tel:+919849148006">+91 98491 48006</a></div>
          </section>
        </div>
        <div className="contact-location-column">
          <img
            src={grandFatherWithGroundNuts}
            alt="Grandfather with groundnuts"
            className="contact-image"
          />
          <section className="contact-card" aria-labelledby="reach-us-heading">
            <h3 id="reach-us-heading">Reach us</h3>
            <address>
              <strong>Sri Krushi Organic Farming</strong>
              <span>01, Balemla</span>
              <span>Balemla Cross Road, 508213</span>
              <span>Telangana, India</span>
            </address>
          </section>
        </div>
      </section>
    </main>
  );
}
