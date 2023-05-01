import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import userEvent from '@testing-library/user-event';

import chars from '../../../tests/chars';
import CharList from './char-list';

import charServer from '../../../tests/chars-server';
import { renderWithProviders } from '../../../tests/render-with-provider';

beforeAll(() => charServer.listen());

beforeEach(() => charServer.resetHandlers());

describe('test list with characters', () => {
  test('test rendering of container', () => {
    render(<CharList cards={[]} />);

    const charList = screen.getByRole<HTMLElement>('chars-list');

    expect(charList).toBeInTheDocument();
  });
  test('test rendering of container', () => {
    render(<CharList cards={chars} />);

    const charList = screen.getByRole<HTMLElement>('chars-list');

    expect(charList).toBeInTheDocument();
  });
  test('test card rendering', () => {
    render(<CharList cards={[]} />);

    const charList = screen.getByRole<HTMLElement>('chars-list');

    expect(charList).toBeInTheDocument();
  });
  test('test rendering of container with list of chars', () => {
    render(<CharList cards={chars} />);

    const count = screen.getByRole<HTMLElement>(`chars-list`).children.length;

    expect(count).toBe(chars.length);

    chars.forEach((char) => {
      const card = screen.getByRole<HTMLElement>(`char-${char.id}`);

      expect(card).toBeInTheDocument();
    });
  });
  test('test rendering of container with empty list', () => {
    render(<CharList cards={[]} />);

    const empty = screen.getByText<HTMLElement>(/No results/im);

    expect(empty).toBeInTheDocument;

    const cards = screen.getByRole(`chars-list`);

    expect(cards).toBeInTheDocument();
  });
  test('test rendering of modale window', async () => {
    renderWithProviders(<CharList cards={chars} />);

    const modaleClose = screen.queryByRole<HTMLElement>(`char-modale`);

    expect(modaleClose).not.toBeInTheDocument();

    const card = screen.getByRole<HTMLElement>(`char-1`);

    await userEvent.click(card);

    const modaleOpen = await screen.findByRole<HTMLElement>(`char-modale`);

    expect(modaleOpen).toBeInTheDocument();
  });
});

afterAll(() => charServer.close());
