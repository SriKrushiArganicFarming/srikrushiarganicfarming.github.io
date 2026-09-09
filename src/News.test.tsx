import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import News from './News';

describe('News', () => {
  test('shows the newest articles first', () => {
    render(<News />);

    expect(screen.getAllByRole('article').map((article) => within(article).getByRole('heading', { level: 3 }).textContent)).toEqual([
      'Grandfather Ch. Pichaiah Educating Young Farmers About Government Initiatives for Sustainable Fish Farming',
      'Grandfather and Grandmother Donating Food Supplies to Workers During COVID-19',
    ]);
  });

  test('can sort articles from oldest to newest', () => {
    render(<News />);

    fireEvent.click(screen.getByRole('button', { name: /sort: newest first/i }));

    expect(within(screen.getAllByRole('article')[0]).getByRole('heading', { level: 3 }).textContent).toBe(
      'Grandfather and Grandmother Donating Food Supplies to Workers During COVID-19'
    );
  });
});
