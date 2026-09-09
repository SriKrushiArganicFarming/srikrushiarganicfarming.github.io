import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Blog from './Blog';

describe('Blog', () => {
  test('shows the newest articles first', () => {
    render(<Blog />);

    expect(screen.getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent)).toEqual([
      'Renowned Agriculture Scientist Dr. Ch. Raghu Visits Sri Krushi Organic Farming, Applauds Sustainable Efforts',
      "Among the Mango Trees: A Tribute to My Father's Passion for Organic Farming",
      'Rooted in Legacy: Honoring My Grandfather’s Journey in Organic Farming with Groundnuts harvest',
      'At the Well: Sustaining Our Farm, One Drop at a Time',
      'From Telangana State Excise Department Excise Superintendent to Organic Farming Advocate: The Story of S. Saidulu',
      "Fields of Fire: A Tribute to My Father's Labor in the Red Chilli Crop",
      'Love and Growth: Cherishing Moments with Grandmother Ch. Achamma on the Farm',
      'A Legacy of Strength and Sustainability: My Grandfather Ch. Pichaiah in Front of Our Mango Trees',
      'Passionate Organic Farming Duo',
      'Journey from TSRTC Union Leader to Organic Farming Pioneer: Ch. Pichaiah’s Story',
    ]);
  });

  test('can sort articles from oldest to newest', () => {
    render(<Blog />);

    fireEvent.click(screen.getByRole('button', { name: /sort: newest first/i }));

    expect(screen.getAllByRole('heading', { level: 3 })[0].textContent).toBe(
      'Journey from TSRTC Union Leader to Organic Farming Pioneer: Ch. Pichaiah’s Story'
    );
  });
});
