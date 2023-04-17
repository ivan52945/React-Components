import React from 'react';
import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import userEvent from '@testing-library/user-event';

import charServer from '../../tests/chars-server';
import { renderWithProviders } from '../../tests/render-with-provider';

import Сhars from './characters';

import responceChars from '../../tests/responce-all';

beforeAll(() => charServer.listen());

beforeEach(() => charServer.resetHandlers());

describe('test characters page', () => {
  test('initial state', async () => {
    renderWithProviders(<Сhars />);

    const charsSearch = screen.getByRole<HTMLElement>('chars-search');

    expect(charsSearch).toBeInTheDocument();

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    const charList = await screen.findByRole<HTMLElement>('chars-list');

    expect(charList).toBeInTheDocument();
  });
  test('filter by name', async () => {
    renderWithProviders(<Сhars />);

    const testValue = 'Rick';

    const testOut = responceChars.results.filter((char) => char.name.includes(testValue));

    const charsInput = screen.getByRole<HTMLInputElement>('card-search-input');
    const charsButton = screen.getByRole<HTMLInputElement>('card-search-button');

    await userEvent.type(charsInput, testValue);

    await userEvent.click(charsButton);

    const count = (await screen.findByRole<HTMLElement>(`chars-list`)).children.length;

    expect(count).toBe(testOut.length);

    testOut.forEach((char) => {
      const card = screen.getByRole<HTMLElement>(`char-${char.id}`);

      expect(card).toBeInTheDocument();
    });
  });
});

afterAll(() => charServer.close());
