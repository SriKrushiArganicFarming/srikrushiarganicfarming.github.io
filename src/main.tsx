import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './CartContext';

const redirectPath = new URLSearchParams(window.location.search).get('redirect');

if (redirectPath?.startsWith('/') && !redirectPath.startsWith('//')) {
  window.history.replaceState(null, '', redirectPath);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
