import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import CardList from '../components/card-list/card-list';

describe('testing cards list', () => {
  test('test cards from json', () => {
    const testInput = [
      {
        id: 0,
        name: 'Tiger',
        habitat: 'Forest',
        species: 'Wild Animal (mammal)',
        description: 'The tiger is the largest living cat.',
        wikipedia: 'https://en.wikipedia.org/wiki/Tiger',
      },
    ];
    const {} = render(<CardList cards={testInput}></CardList>);

    const cardTested = testInput[0];

    expect(screen.getByText(cardTested.name)).not.toBeNull();
    expect(screen.getByText(cardTested.species)).not.toBeNull();
    expect(screen.getByText(cardTested.description)).not.toBeNull();
  });
});
