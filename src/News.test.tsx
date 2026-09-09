import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import News from './News';

describe('News', () => {
  test('shows the newest articles first', () => {
    render(<News />);

    expect(screen.getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent)).toEqual([
      'Grandfather Ch. Pichaiah Educating Young Farmers and making them aware of the initiatives from the Government for Sustainable Fish Farming',
      'Grandfather and Grandmother Donating Food Supplies to Workers During Covid',
    ]);
  });

  test('can sort articles from oldest to newest', () => {
    render(<News />);

    fireEvent.click(screen.getByRole('button', { name: /sort: newest first/i }));

    expect(screen.getAllByRole('heading', { level: 3 })[0].textContent).toBe(
      'Grandfather and Grandmother Donating Food Supplies to Workers During Covid'
    );
  });
});
