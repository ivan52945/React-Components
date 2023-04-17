import React from 'react';
import { screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from '../../tests/render-with-provider';

import Peoples from './peoples';
import IPeople from '../../types/people';

describe('test people page', () => {
  test('submit callback parameters', async () => {
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });

    vi.setSystemTime(11111111111111);

    const check = {
      name: 'Fff',
      sex: 'male',
      birthDate: '2023-04-19',
    };

    const { store, unmount } = renderWithProviders(<Peoples />);

    const fields = Object.values(check);

    const input = screen.getByRole<HTMLInputElement>('people-name-input');
    const checkbox = screen.getByRole<HTMLInputElement>('people-sex-radio-male');
    const date = screen.getByRole<HTMLInputElement>('people-birthday-date');
    const avatar = screen.getByRole<HTMLInputElement>('people-avatar');
    const button = screen.getByRole<HTMLButtonElement>('people-form-submit');

    const peopleList = screen.getByRole<HTMLButtonElement>('people-list');

    expect(peopleList.children.length).toBe(0);

    await userEvent.type(input, 'Fff');
    await userEvent.click(checkbox);
    await userEvent.type(date, '2023-04-19');
    await userEvent.upload(avatar, file);
    await userEvent.click(button);

    expect(peopleList.children.length).toBe(1);

    fields.forEach((value) => {
      expect(screen.getByText(new RegExp(value, 'gmi'))).toBeInTheDocument();
    });

    unmount();

    renderWithProviders(<Peoples />, { store });

    fields.forEach((value) => {
      expect(screen.getAllByText(new RegExp(value, 'gmi'))[0]).toBeInTheDocument();
    });
  });
});
