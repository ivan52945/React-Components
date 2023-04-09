import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import CharList from '../components/char-list/char-list';

describe('testing cards list', () => {
  test('test cards from json', () => {
    const testInput = [
      {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Male',
        origin: {
          name: 'Earth',
          url: 'https://rickandmortyapi.com/api/location/1',
        },
        location: {
          name: 'Earth',
          url: 'https://rickandmortyapi.com/api/location/20',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/1',
          'https://rickandmortyapi.com/api/episode/2',
        ],
        url: 'https://rickandmortyapi.com/api/character/1',
        created: '2017-11-04T18:48:46.250Z',
      },
    ];
    const {} = render(<CharList cards={testInput}></CharList>);

    const cardTested = testInput[0];

    expect(screen.getByText(cardTested.name)).not.toBeNull();
    expect(screen.getByText(cardTested.species)).not.toBeNull();
    expect(screen.getByText(cardTested.gender)).not.toBeNull();
  });
});
