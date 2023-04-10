import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import userEvent from '@testing-library/user-event';

import Search from './search';

describe('card search testings', () => {
  test('test input rended', () => {
    render(<Search submitCallback={() => {}} />);

    const input = screen.getByRole<HTMLInputElement>('card-search-input');

    expect(input).toBeInTheDocument();
  });
  test('test button rended', () => {
    render(<Search submitCallback={() => {}} />);

    const button = screen.getByRole<HTMLInputElement>('card-search-button');

    expect(button).toBeInTheDocument();
  });
  test('test saving of inputs value', async () => {
    const testValue = `${Math.random()}`;

    const { unmount } = render(<Search submitCallback={() => {}} />);

    const input = screen.getByRole<HTMLInputElement>('card-search-input');
    const button = screen.getByRole<HTMLInputElement>('card-search-button');

    await userEvent.type(input, testValue);
    await userEvent.click(button);

    unmount();

    expect(localStorage.getItem('chars-search')).toBe(testValue);

    render(<Search submitCallback={() => {}} />);

    const inputNew = screen.getByRole<HTMLInputElement>('card-search-input');

    expect(inputNew.value).toBe(testValue);
  });
  test('test correct callback', async () => {
    let spy = '';

    const testValue = `${Math.random()}`;

    const check = (value: string) => (spy = value);

    render(<Search submitCallback={check} />);

    const input = screen.getByRole<HTMLInputElement>('card-search-input');
    const button = screen.getByRole<HTMLInputElement>('card-search-button');

    await userEvent.type(input, testValue);
    expect(input.value).toBe(testValue);

    await userEvent.click(button);
    expect(spy).toBe(testValue);
  });
});

afterEach(() => localStorage.clear());
