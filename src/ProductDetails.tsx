import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import vermicompostImg from './assets/vermicompost-manure-500x500.webp';
import neemPowderImg from './assets/neem-leaves-powder-500x500.webp';
import mangoImg from './assets/organic-mangos-500x500.webp';
import milletsImg from './assets/andu-korralu-brown-top--500x500.webp';

// Import all images for sub-products
import manureImg from './assets/products/vermicompost/vermicompost-manure-500x500.webp';
import organicImg1 from './assets/products/vermicompost/organic-vermicompost-500x500.webp';
import organicImg2 from './assets/products/vermicompost/organic-vermicompost-500x500-1.webp';
import organicImg3 from './assets/products/vermicompost/organic-vermicompost-500x500-2.webp';
import organicImg4 from './assets/products/vermicompost/organic-vermicompost-500x500-3.webp';
import fertilizerImg1 from './assets/products/vermicompost/fertilizer-vermicompost-500x500.webp';
import fertilizerImg2 from './assets/products/vermicompost/fertilizer-vermicompost-500x500-1.webp';
import powderImg1 from './assets/products/vermicompost/vermicompost-powder-500x500.webp';
import powderImg2 from './assets/products/vermicompost/vermicompost-powder-500x500-1.webp';
import wormImg from './assets/products/vermicompost/worm-vermicompost-500x500.webp';

// Consistent image arrays for sub-products
const manureImages = [manureImg];
const organicImages = [organicImg1, organicImg2, organicImg3, organicImg4];
const fertilizerImages = [fertilizerImg1, fertilizerImg2];
const powderImages = [powderImg1, powderImg2];
const wormImages = [wormImg];

const PRODUCTS = [
  {
    slug: 'vermicompost',
    name: 'Natural Vermicompost',
    description: 'Offering you a complete choice of products which include Vermicompost Organic Manure, Organic Vermicompost, Fertilizer Vermicompost, Vermicompost Powder and Worm Vermicompost.',
    image: vermicompostImg,
    subProducts: [
      {
        name: 'Vermicompost Organic Manure',
        images: manureImages,
        price: '₹ 6,000/Ton',
        minOrder: '1 Ton',
        usage: 'For increase the fertility of soil',
        packType: 'Bag',
        form: 'Powder',
        packSize: '40 kg',
        grade: 'Bio-Tech Grade',
        isOrganic: 'Organic',
        description: 'We are a well-known manufacturer and supplier of Vermicompost Organic Manure. The offered vermicompost is prepared from biodegradable organic wastes and is free from chemical inputs.',
      },
      {
        name: 'Organic Vermicompost',
        images: organicImages,
        price: '₹ 6,000/Ton',
        minOrder: '1 Ton',
        usage: 'Agriculture',
        type: 'Organic Bio Fertilizer',
        packSize: '40 kg',
        form: 'Powder',
        packType: 'Bag',
        description: 'Reckoned as one of the emergent companies of the industry, we are extremely immersed in providing Organic Vermicompost.',
      },
      {
        name: 'Fertilizer Vermicompost',
        images: fertilizerImages,
        price: '₹ 6,000/Ton',
        packType: 'Bag',
        description: 'Being one of the well-distinguished companies in the market, we are offering Fertilizer Vermicompost.',
        type: 'Organic',
        packSize: '40 kg',
        form: 'Powder',
        packagingSizes: '40, 50',
      },
      {
        name: 'Vermicompost Powder',
        images: powderImages,
        price: '₹ 6,000/Ton',
        minOrder: '1 Ton',
        usage: 'For increase the fertility of soil',
        packType: 'Bag',
        form: 'Powder',
        processingType: 'Prepared from biodegradable organic wastes and is free from chemical inputs',
        packSize: '40 kg',
        isOrganic: 'Organic',
        description: 'Owing to our in-depth knowledge of this domain, we are specialized in providing Vermicompost Powder.',
      },
      {
        name: 'Worm Vermicompost',
        images: wormImages,
        price: '₹ 6,000/Ton',
        minOrder: '1 Ton',
        usage: 'Increasing crop yields and improving drought tolerance in plants',
        packType: 'Bag',
        grade: 'Bio-Tech Grade',
        packSize: '40 kg',
        isOrganic: 'Organic',
        description: 'We have carved a niche amongst the most dominant names in this domain, engaged in offering Worm Vermicompost.',
      },
    ],
  },
];

/**
 * ImageGallery displays a set of images with thumbnail navigation, zoom-in modal, and keyboard/touch navigation support.
 * 
 * @param {Object} props
 * @param {string[]} props.images - Array of image URLs to display in the gallery.
 */
function ImageGallery({ images }: { images: string[] }) {
  const [zoomed, setZoomed] = useState<number | null>(null);
  const [current, setCurrent] = useState(0);
  const touchStart = useRef<number | null>(null);

  // Keyboard navigation in zoom mode
  useEffect(() => {
    if (zoomed === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setZoomed(z => z !== null ? (z - 1 + images.length) % images.length : null);
      } else if (e.key === 'ArrowRight') {
        setZoomed(z => z !== null ? (z + 1) % images.length : null);
      } else if (e.key === 'Escape') {
        setZoomed(null);
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [zoomed, images.length]);

  // Touch swipe navigation in zoom mode
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      touchStart.current = e.touches[0].clientX;
    }
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null || e.changedTouches.length === 0) return;
    const delta = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(delta) > 40) {
      setZoomed(z => {
        if (z === null) return null;
        if (delta > 0) return (z - 1 + images.length) % images.length;
        else return (z + 1) % images.length;
      });
    }
    touchStart.current = null;
  };

  if (!images || images.length === 0) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 80 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {images.length > 1 && (
          <button
            aria-label="Previous"
            onClick={() => setCurrent((current - 1 + images.length) % images.length)}
            style={{ background: 'none', border: 'none', fontSize: 22, cursor: 'pointer' }}
            tabIndex={0}
          >
            ‹
          </button>
        )}
        <img
          src={images[current]}
          alt=""
          style={{
            width: 72,
            height: 72,
            objectFit: 'cover',
            borderRadius: 8,
            background: '#fff',
            cursor: 'pointer',
            border: zoomed === current ? '2px solid #388e3c' : 'none',
            transition: 'border 0.2s'
          }}
          onClick={() => setZoomed(current)}
        />
        {images.length > 1 && (
          <button
            aria-label="Next"
            onClick={() => setCurrent((current + 1) % images.length)}
            style={{ background: 'none', border: 'none', fontSize: 22, cursor: 'pointer' }}
            tabIndex={0}
          >
            ›
          </button>
        )}
      </div>
      {images.length > 1 && (
        <div style={{ display: 'flex', gap: 4, marginTop: 4 }}>
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt=""
              style={{
                width: 24,
                height: 24,
                objectFit: 'cover',
                borderRadius: 4,
                border: idx === current ? '2px solid #388e3c' : '1px solid #ccc',
                cursor: 'pointer',
                background: '#fff'
              }}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      )}
      {zoomed !== null && (
        <div
          onClick={() => setZoomed(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            cursor: 'zoom-out'
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 24,
              background: 'none'
            }}
          >
            {images.length > 1 && (
              <button
                aria-label="Previous"
                onClick={e => {
                  e.stopPropagation();
                  setZoomed((zoomed! - 1 + images.length) % images.length);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  fontSize: 40,
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
                tabIndex={0}
              >
                ‹
              </button>
            )}
            <img
              src={images[zoomed]}
              alt=""
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                borderRadius: 12,
                boxShadow: '0 4px 32px #0008',
                background: '#fff'
              }}
            />
            {images.length > 1 && (
              <button
                aria-label="Next"
                onClick={e => {
                  e.stopPropagation();
                  setZoomed((zoomed! + 1) % images.length);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  fontSize: 40,
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
                tabIndex={0}
              >
                ›
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Displays detailed information about a selected product, including its sub-products,
 * and provides navigation back to the main products list.
 *
 * This component uses the product slug from the URL to find and render the appropriate product details.
 */
function ProductDetails() {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find(p => p.slug === slug);

  if (!product) {
    return (
      <div>
        <h2>Product Not Found</h2>
        <Link to="/">← Back to Products</Link>
      </div>
    );
  }

  return (
    <div>
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
        style={{ margin: '0 auto', display: 'block' }}
      />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      {product.slug === 'vermicompost' && product.subProducts && (
        <section style={{ marginTop: '2rem' }}>
          <h3 style={{ textAlign: 'center' }}>Products in this Category</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {product.subProducts.map((sub, idx) => (
              <div
              key={idx}
              style={{
                background: '#f8f8f8',
                borderRadius: 8,
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
              >
              <ImageGallery images={sub.images} />
              <div>
                <h4 style={{ margin: 0 }}>{sub.name}</h4>
                <ul style={{ margin: '0.5rem 0' }}>
                {sub.price && <li><strong>Price:</strong> {sub.price}</li>}
                {sub.minOrder && <li><strong>Minimum Order Quantity:</strong> {sub.minOrder}</li>}
                {sub.packSize && <li><strong>Pack Size:</strong> {sub.packSize}</li>}
                {sub.packType && <li><strong>Pack Type:</strong> {sub.packType}</li>}
                {sub.form && <li><strong>Form:</strong> {sub.form}</li>}
                {sub.grade && <li><strong>Grade Standard:</strong> {sub.grade}</li>}
                {sub.isOrganic && <li><strong>Is It Organic:</strong> {sub.isOrganic}</li>}
                {sub.type && <li><strong>Type:</strong> {sub.type}</li>}
                {sub.processingType && <li><strong>Processing Type:</strong> {sub.processingType}</li>}
                {sub.packagingSizes && <li><strong>Packaging Sizes:</strong> {sub.packagingSizes}</li>}
                {sub.usage && <li><strong>Usage/Application:</strong> {sub.usage}</li>}
                </ul>
                {sub.description && <div style={{ marginTop: 8 }}>{sub.description}</div>}
              </div>
              </div>
            ))}
          </div>
        </section>
      )}
      <br /><br />
      <Link to="/" style={{ color: '#2d6a4f' }}>← Back to Products</Link>
    </div>
  );
}

export { ImageGallery };
export default ProductDetails;
