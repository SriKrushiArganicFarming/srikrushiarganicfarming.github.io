import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

describe('App Component', () => {
  test('renders navigation links', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /blog/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /news/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });

  test('renders Our Products heading', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /our products/i })).toBeInTheDocument();
  });

  test('renders footer text', () => {
    render(<App />);
    const year = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(`© ${year} SRI KRUSHI ORGANIC FARMING`, 'i'))
    ).toBeInTheDocument();
  });
});
