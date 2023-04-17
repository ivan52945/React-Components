/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import userEvent from '@testing-library/user-event';

import Search from './search';
import { renderWithProviders } from '../../../tests/render-with-provider';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../../../store/hook';
import { configureStore } from '@reduxjs/toolkit';

describe('card search testings', () => {
  test('test input rended', () => {
    renderWithProviders(<Search submitCallback={() => {}} />);

    const input = screen.getByRole<HTMLInputElement>('card-search-input');

    expect(input).toBeInTheDocument();
  });
  test('test button rended', () => {
    renderWithProviders(<Search submitCallback={() => {}} />);

    const button = screen.getByRole<HTMLInputElement>('card-search-button');

    expect(button).toBeInTheDocument();
  });
  test('test saving of inputs value', async () => {
    const testValue = `${Math.random()}`;

    const { store, unmount } = renderWithProviders(<Search submitCallback={() => {}} />);

    const input = screen.getByRole<HTMLInputElement>('card-search-input');
    const button = screen.getByRole<HTMLInputElement>('card-search-button');

    await userEvent.type(input, testValue);
    await userEvent.click(button);

    const storeOld = Object.assign({}, store);

    unmount();

    renderWithProviders(<Search submitCallback={() => {}} />, {
      store,
    });

    const inputNew = screen.getByRole<HTMLInputElement>('card-search-input');

    expect(inputNew.value).toBe(testValue);
  });
  test('test correct callback', async () => {
    let spy = '';

    const testValue = `${Math.random()}`;

    const check = (value: string) => (spy = value);

    renderWithProviders(<Search submitCallback={check} />);

    const input = screen.getByRole<HTMLInputElement>('card-search-input');
    const button = screen.getByRole<HTMLInputElement>('card-search-button');

    await userEvent.type(input, testValue);
    expect(input.value).toBe(testValue);

    await userEvent.click(button);
    expect(spy).toBe(testValue);
  });
});

afterEach(() => localStorage.clear());
