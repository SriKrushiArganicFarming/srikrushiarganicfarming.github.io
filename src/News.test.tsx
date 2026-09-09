import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import News from './News';

describe('News', () => {
  test('shows articles in chronological order', () => {
    render(<News />);

    expect(screen.getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent)).toEqual([
      'Grandfather and Grandmother Donating Food Supplies to Workers During Covid',
      'Grandfather Ch. Pichaiah Educating Young Farmers and making them aware of the initiatives from the Government for Sustainable Fish Farming',
    ]);
  });
});
