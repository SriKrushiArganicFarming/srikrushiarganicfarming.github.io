import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Blog from './Blog';

describe('Blog', () => {
  test('shows articles in chronological order', () => {
    render(<Blog />);

    expect(screen.getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent)).toEqual([
      'Journey from TSRTC Union Leader to Organic Farming Pioneer: Ch. Pichaiah’s Story',
      'Passionate Organic Farming Duo',
      'A Legacy of Strength and Sustainability: My Grandfather Ch. Pichaiah in Front of Our Mango Trees',
      'Love and Growth: Cherishing Moments with Grandmother Ch. Achamma on the Farm',
      "Fields of Fire: A Tribute to My Father's Labor in the Red Chilli Crop",
      'From Telangana State Excise Department Excise Superintendent to Organic Farming Advocate: The Story of S. Saidulu',
      'At the Well: Sustaining Our Farm, One Drop at a Time',
      'Rooted in Legacy: Honoring My Grandfather’s Journey in Organic Farming with Groundnuts harvest',
      "Among the Mango Trees: A Tribute to My Father's Passion for Organic Farming",
      'Renowned Agriculture Scientist Dr. Ch. Raghu Visits Sri Krushi Organic Farming, Applauds Sustainable Efforts',
    ]);
  });
});
