import React from 'react';
import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../tests/render-with-provider';
import CharModale from './char-modale';

import charServer from '../../../tests/chars-server';

beforeAll(() => charServer.listen());

beforeEach(() => charServer.resetHandlers());

describe('test list with characters', () => {
  test('test rendering of modale window', async () => {
    let closed = false;

    const disable = () => (closed = true);

    renderWithProviders(<CharModale id={3} disable={disable} />);

    const modaleOpen = await screen.findByRole<HTMLElement>(`char-modale`);

    expect(modaleOpen).toBeInTheDocument();

    await userEvent.click(modaleOpen);

    expect(closed).toBe(false);

    const modaleClearBackground = screen.getByRole<HTMLElement>(`char-modale-background`);

    await userEvent.click(modaleClearBackground);

    expect(closed).toBe(true);
  });
  test('test rendering of modale window with bad responce', async () => {
    renderWithProviders(<CharModale id={3} disable={() => {}} />);

    const modaleOpen = await screen.findByRole<HTMLElement>(`char-modale`);

    expect(modaleOpen).toBeInTheDocument();
  });
});

afterAll(() => charServer.close());
