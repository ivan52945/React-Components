import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import chars from '../../../tests/chars';

import CharList from './char-list';

describe('test list with characters', () => {
  test('test rendering of container', () => {
    render(<CharList cards={[]} details={() => {}} />);

    const charList = screen.getByRole<HTMLElement>('chars-list');

    expect(charList).toBeInTheDocument();
  });
  test('test rendering of container', () => {
    render(<CharList cards={chars} details={() => {}} />);

    const charList = screen.getByRole<HTMLElement>('chars-list');

    expect(charList).toBeInTheDocument();
  });
  test('test card rendering', () => {
    render(<CharList cards={[]} details={() => {}} />);

    const charList = screen.getByRole<HTMLElement>('chars-list');

    expect(charList).toBeInTheDocument();
  });
  test('test rendering of container with list of chars', () => {
    render(<CharList cards={chars} details={() => {}} />);

    const count = screen.getByRole<HTMLElement>(`chars-list`).children.length;

    expect(count).toBe(chars.length);

    chars.forEach((char) => {
      const card = screen.getByRole<HTMLElement>(`char-${char.id}`);

      expect(card).toBeInTheDocument();
    });
  });
  test('test rendering of container with empty list', () => {
    render(<CharList cards={[]} details={() => {}} />);

    const empty = screen.getByText<HTMLElement>(/No results/gim);

    expect(empty).toBeInTheDocument;

    const cards = screen.getByRole(`chars-list`);

    expect(cards).toBeInTheDocument();
  });
});
