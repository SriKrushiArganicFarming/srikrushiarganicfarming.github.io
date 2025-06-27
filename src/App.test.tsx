import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

describe('App Component', () => {
  test('renders navigation links', () => {
    render(<App />);
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/blog/i)).toBeInTheDocument();
    expect(screen.getByText(/news/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });
  test('renders Our Products heading', () => {
    render(<App />);
    const heading = screen.getByText(/our products/i);
    expect(heading).toBeInTheDocument();
  });
  
  test('renders footer text', () => {
    render(<App />);
    const footerText = screen.getByText(/© 2025 SRI KRUSHI ARGANIC FARMING VARMI COMPOST/i);
    expect(footerText).toBeInTheDocument();
  });
});
