import React from 'react';
import { screen, render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import userEvent from '@testing-library/user-event';

import Input from '../components/input/input';

describe('card input testing', () => {
  test('test link with local storage in unmount case', async () => {
    const testValue = `${Math.random()}`;

    const { unmount } = render(<Input />);

    const input = screen.getByRole<HTMLInputElement>('card-search-input');

    await userEvent.type(input, testValue);

    unmount();

    expect(localStorage.getItem('input')).toBe(testValue);

    render(<Input />);

    const inputNew = screen.getByRole<HTMLInputElement>('card-search-input');

    expect(inputNew.value).toBe(testValue);
  });
});
