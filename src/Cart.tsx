import React, { useState } from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

function getCartMessage(cart: any[], name: string, phone: string) {
  let message =
    'Order from Sri Krushi Arganic Farming Varmi Compost:\n\n' +
    cart
      .map(
        (item, idx) =>
          `${idx + 1}. ${item.name} - Qty: ${item.quantity}${item.price ? ` - Price: ${item.price}` : ''}`
      )
      .join('\n');
  if (name || phone) {
    message += `\n\nCustomer Details:\n`;
    if (name) message += `Name: ${name}\n`;
    if (phone) message += `Phone: ${phone}\n`;
  }
  return message;
}

export default function Cart() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [showError, setShowError] = useState(false);

  const cartMessage = getCartMessage(cart, name, phone);
  const emailSubject = encodeURIComponent('Order from Sri Krushi Arganic Farming Varmi Compost');
  const emailBody = encodeURIComponent(cartMessage);
  const whatsappBody = encodeURIComponent(cartMessage);

  const canSend = name.trim() !== '' && phone.trim() !== '';

  if (cart.length === 0) {
    return (
      <div>
        <h2>Your Cart is Empty</h2>
        <Link to="/products">Go to Products</Link>
      </div>
    );
  }

  function handleSendClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    if (!canSend) {
      e.preventDefault();
      setShowError(true);
    }
  }
  return (
    <div className="order-form-outer">
      <h2>Order Form</h2>
      <p>Please fill in your details and review your order before sending.</p>
      <form
        className="order-form"
        onSubmit={e => e.preventDefault()}
        autoComplete="off"
      >
        <label>
          Name<span style={{ color: 'red' }}>*</span>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={e => {
              setName(e.target.value);
              setShowError(false);
            }}
            required
          />
        </label>
        <label>
          Phone Number<span style={{ color: 'red' }}>*</span>
          <input
            type="tel"
            placeholder="Your Phone Number"
            value={phone}
            pattern="^[\d+\-\s]+$"
            onChange={e => {
              const filtered = e.target.value.replace(/[^\d+\-\s]/g, '');
              setPhone(filtered);
              setShowError(false);
            }}
            required
          />
        </label>
        {showError && (
          <div className="order-form-error">
            Name and phone number missing
          </div>
        )}
      </form>
      <h3>Your Order</h3>
      <ul className="cart-list">
        {cart.map((item) => (
          <li className="cart-item" key={item.name}>
            <img
              src={item.image}
              alt={item.name}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <strong>{item.name}</strong>
              <div>{item.price}</div>
              <div className="cart-qty-controls">
                <button
                  className="cart-btn-minus"
                  onClick={() => removeFromCart(item.name)}
                  disabled={item.quantity === 0}
                >
                  −
                </button>
                <span style={{ minWidth: 20, textAlign: 'center' }}>{item.quantity}</span>
                <button
                  className="cart-btn-plus"
                  onClick={() =>
                    addToCart({
                      ...item,
                      quantity: 1,
                    })
                  }
                >
                  +
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-send-btn-group">
        <a
          href={`mailto:seggemu.saidulu@gmail.com?subject=${emailSubject}&body=${emailBody}`}
          className="cart-send-btn"
          aria-disabled={!canSend}
          disabled={!canSend}
          onClick={handleSendClick}
        >
          Send via Email
        </a>
        <a
          href={`https://wa.me/919177526747?text=${whatsappBody}`}
          target="_blank"
          rel="noopener noreferrer"
          className="cart-send-btn whatsapp"
          aria-disabled={!canSend}
          disabled={!canSend}
          onClick={handleSendClick}
        >
          Send via WhatsApp
        </a>
        <a
          href={`sms:+919177526747?body=${encodeURIComponent(cartMessage)}`}
          className="cart-send-btn sms"
          aria-disabled={!canSend}
          disabled={!canSend}
          onClick={handleSendClick}
        >
          Send via SMS
        </a>
      </div>
      <button className="cart-clear-btn" onClick={clearCart}>
        Clear Cart
      </button>
    </div>
  );
}