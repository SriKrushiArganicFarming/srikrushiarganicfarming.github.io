import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import '@testing-library/jest-dom';

import { CartProvider, useCart } from './CartContext';

function CartHarness() {
  const { cart, addToCart, decrementItem } = useCart();
  const item = cart.find((cartItem) => cartItem.name === 'Organic Mango');

  return (
    <div>
      <div data-testid="quantity">{item?.quantity ?? 0}</div>
      <button
        onClick={() =>
          addToCart({
            name: 'Organic Mango',
            image: '/mango.webp',
            quantity: 1,
            price: '₹ 95/Kilogram',
          })
        }
      >
        Add
      </button>
      <button onClick={() => decrementItem('Organic Mango')}>Decrease</button>
    </div>
  );
}

describe('CartContext', () => {
  test('merges matching items and decrements one quantity at a time', () => {
    render(
      <CartProvider>
        <CartHarness />
      </CartProvider>
    );

    fireEvent.click(screen.getByRole('button', { name: /add/i }));
    fireEvent.click(screen.getByRole('button', { name: /add/i }));
    expect(screen.getByTestId('quantity')).toHaveTextContent('2');

    fireEvent.click(screen.getByRole('button', { name: /decrease/i }));
    expect(screen.getByTestId('quantity')).toHaveTextContent('1');

    fireEvent.click(screen.getByRole('button', { name: /decrease/i }));
    expect(screen.getByTestId('quantity')).toHaveTextContent('0');
  });
});
