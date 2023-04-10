import React from 'react';
import { screen, render } from '@testing-library/react';
import { Mock, describe, expect, test, vi } from 'vitest';

import chars from '../../../tests/chars';

import CharList from './char-list';
import userEvent from '@testing-library/user-event';

global.fetch = vi.fn();

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

    const empty = screen.getByText<HTMLElement>(/No results/gim);

    expect(empty).toBeInTheDocument;

    const cards = screen.getByRole(`chars-list`);

    expect(cards).toBeInTheDocument();
  });
  test('test rendering of modale window', async () => {
    const testOut = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
        name: 'Earth (C-137)',
        url: 'https://rickandmortyapi.com/api/location/1',
      },
      location: {
        name: 'Citadel of Ricks',
        url: 'https://rickandmortyapi.com/api/location/3',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      episode: [
        'https://rickandmortyapi.com/api/episode/1',
        'https://rickandmortyapi.com/api/episode/2',
        'https://rickandmortyapi.com/api/episode/3',
        'https://rickandmortyapi.com/api/episode/4',
        'https://rickandmortyapi.com/api/episode/5',
        'https://rickandmortyapi.com/api/episode/6',
        'https://rickandmortyapi.com/api/episode/7',
        'https://rickandmortyapi.com/api/episode/8',
        'https://rickandmortyapi.com/api/episode/9',
        'https://rickandmortyapi.com/api/episode/10',
        'https://rickandmortyapi.com/api/episode/11',
        'https://rickandmortyapi.com/api/episode/12',
        'https://rickandmortyapi.com/api/episode/13',
        'https://rickandmortyapi.com/api/episode/14',
        'https://rickandmortyapi.com/api/episode/15',
        'https://rickandmortyapi.com/api/episode/16',
        'https://rickandmortyapi.com/api/episode/17',
        'https://rickandmortyapi.com/api/episode/18',
        'https://rickandmortyapi.com/api/episode/19',
        'https://rickandmortyapi.com/api/episode/20',
        'https://rickandmortyapi.com/api/episode/21',
        'https://rickandmortyapi.com/api/episode/22',
        'https://rickandmortyapi.com/api/episode/23',
        'https://rickandmortyapi.com/api/episode/24',
        'https://rickandmortyapi.com/api/episode/25',
        'https://rickandmortyapi.com/api/episode/26',
        'https://rickandmortyapi.com/api/episode/27',
        'https://rickandmortyapi.com/api/episode/28',
        'https://rickandmortyapi.com/api/episode/29',
        'https://rickandmortyapi.com/api/episode/30',
        'https://rickandmortyapi.com/api/episode/31',
        'https://rickandmortyapi.com/api/episode/32',
        'https://rickandmortyapi.com/api/episode/33',
        'https://rickandmortyapi.com/api/episode/34',
        'https://rickandmortyapi.com/api/episode/35',
        'https://rickandmortyapi.com/api/episode/36',
        'https://rickandmortyapi.com/api/episode/37',
        'https://rickandmortyapi.com/api/episode/38',
        'https://rickandmortyapi.com/api/episode/39',
        'https://rickandmortyapi.com/api/episode/40',
        'https://rickandmortyapi.com/api/episode/41',
        'https://rickandmortyapi.com/api/episode/42',
        'https://rickandmortyapi.com/api/episode/43',
        'https://rickandmortyapi.com/api/episode/44',
        'https://rickandmortyapi.com/api/episode/45',
        'https://rickandmortyapi.com/api/episode/46',
        'https://rickandmortyapi.com/api/episode/47',
        'https://rickandmortyapi.com/api/episode/48',
        'https://rickandmortyapi.com/api/episode/49',
        'https://rickandmortyapi.com/api/episode/50',
        'https://rickandmortyapi.com/api/episode/51',
      ],
      url: 'https://rickandmortyapi.com/api/character/1',
      created: '2017-11-04T18:48:46.250Z',
    };

    (fetch as Mock).mockReturnValue({
      ok: true,
      json: () => Promise.resolve(testOut),
      status: 200,
    });

    render(<CharList cards={chars} />);

    const modaleClose = screen.queryByRole<HTMLElement>(`char-modale`);

    expect(modaleClose).not.toBeInTheDocument();

    const card = screen.getByRole<HTMLElement>(`char-1`);

    await userEvent.click(card);

    const modaleOpen = await screen.findByRole<HTMLElement>(`char-modale`);

    expect(modaleOpen).toBeInTheDocument();
  });
  test('test rendering of modale window with bad responce', async () => {
    (fetch as Mock).mockReturnValue({
      ok: false,
      json: () => Promise.reject(),
      status: 405,
    });

    render(<CharList cards={chars} />);

    const modaleClose = screen.queryByRole<HTMLElement>(`char-modale`);

    expect(modaleClose).not.toBeInTheDocument();

    const card = screen.getByRole<HTMLElement>(`char-1`);

    await userEvent.click(card);

    const modaleOpen = await screen.findByRole<HTMLElement>(`char-modale`);

    expect(modaleOpen).toBeInTheDocument();
  });
});
