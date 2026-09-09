import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import { CartProvider } from './CartContext';
import '@testing-library/jest-dom';

function renderApp() {
  return render(
    <CartProvider>
      <App />
    </CartProvider>
  );
}

describe('App Component', () => {
  test('renders navigation links', () => {
    renderApp();
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /blog/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /news/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });

  test('renders Our Products heading', () => {
    renderApp();
    expect(screen.getByRole('heading', { name: /our products/i })).toBeInTheDocument();
  });

  test('renders footer text', () => {
    renderApp();
    const year = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(`© ${year} SRI KRUSHI ORGANIC FARMING`, 'i'))
    ).toBeInTheDocument();
  });
});
