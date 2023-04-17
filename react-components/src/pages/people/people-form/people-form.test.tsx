import React from 'react';
import { screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from '../../../tests/render-with-provider';

import PeopleForm from './people-form';
import IPeople from '../../../types/people';

describe('test people form', () => {
  test('initial state', async () => {
    const checkList = [
      'people-name-input',
      'people-sex-radio',
      'people-birthday-date',
      'people-married-check',
      'people-avatar',
    ];

    renderWithProviders(<PeopleForm add={() => {}}></PeopleForm>);

    expect(screen.getByRole('people-form')).toBeInTheDocument;

    checkList.forEach((check) => {
      expect(screen.getByRole(check)).toBeInTheDocument;
    });

    expect(screen.getByRole('people-form-submit')).toBeInTheDocument;
  });
  test('name input', async () => {
    let submitted = false;

    const spy = () => (submitted = true);

    renderWithProviders(<PeopleForm add={spy}></PeopleForm>);

    const input = screen.getByRole<HTMLInputElement>('people-name-input');
    const button = screen.getByRole<HTMLButtonElement>('people-form-submit');

    await userEvent.click(button);

    expect(screen.getByText(/Введите имя/i)).toBeInTheDocument();
    expect(submitted).toBe(false);

    await userEvent.clear(input);
    await userEvent.type(input, 'Ff');
    await userEvent.click(button);

    expect(screen.getByText(/Имя должно/i)).toBeInTheDocument();
    expect(submitted).toBe(false);

    await userEvent.clear(input);
    await userEvent.type(input, 'Fffff');
    await userEvent.click(button);

    expect(screen.queryByText(/Введите имя/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Имя должно/i)).not.toBeInTheDocument();
    expect(submitted).toBe(false);
  });
  test('sex radio group', async () => {
    let submitted = false;

    const spy = () => (submitted = true);

    renderWithProviders(<PeopleForm add={spy}></PeopleForm>);

    const checkbox = screen.getByRole<HTMLInputElement>('people-sex-radio-male');
    const button = screen.getByRole<HTMLButtonElement>('people-form-submit');

    await userEvent.click(button);

    expect(screen.getByText(/Выберите пол/i)).toBeInTheDocument();
    expect(submitted).toBe(false);

    await userEvent.click(checkbox);
    await userEvent.click(button);

    expect(screen.queryByText(/Выберите пол/i)).not.toBeInTheDocument();
    expect(submitted).toBe(false);
  });
  test('birth date', async () => {
    let submitted = false;

    const spy = () => (submitted = true);

    renderWithProviders(<PeopleForm add={spy}></PeopleForm>);

    const date = screen.getByRole<HTMLInputElement>('people-birthday-date');
    const button = screen.getByRole<HTMLButtonElement>('people-form-submit');

    await userEvent.click(button);

    expect(screen.getByText(/Выберите дату рождения/i)).toBeInTheDocument();
    expect(submitted).toBe(false);

    await userEvent.type(date, '2023-04-19');
    await userEvent.click(button);

    expect(screen.queryByText(/Выберите дату рождения/i)).not.toBeInTheDocument();
    expect(submitted).toBe(false);
  });
  test('birth date', async () => {
    let submitted = false;

    const spy = () => (submitted = true);

    renderWithProviders(<PeopleForm add={spy}></PeopleForm>);

    const date = screen.getByRole<HTMLInputElement>('people-birthday-date');
    const button = screen.getByRole<HTMLButtonElement>('people-form-submit');

    await userEvent.click(button);

    expect(screen.getByText(/Выберите дату рождения/i)).toBeInTheDocument();
    expect(submitted).toBe(false);

    await userEvent.type(date, '2023-04-19');
    await userEvent.click(button);

    expect(screen.queryByText(/Выберите дату рождения/i)).not.toBeInTheDocument();
    expect(submitted).toBe(false);
  });
  test('avatar', async () => {
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });

    let submitted = false;

    const spy = () => (submitted = true);

    renderWithProviders(<PeopleForm add={spy}></PeopleForm>);

    const avatar = screen.getByRole<HTMLInputElement>('people-avatar');
    const button = screen.getByRole<HTMLButtonElement>('people-form-submit');

    await userEvent.click(button);

    expect(screen.getByText(/Загрузите аватар/i)).toBeInTheDocument();
    expect(submitted).toBe(false);

    userEvent.upload(avatar, file);
    await userEvent.click(button);

    expect(screen.queryByText(/Загрузите аватар/i)).not.toBeInTheDocument();
    expect(avatar.files![0]).toStrictEqual(file);
    expect(avatar.files!.item(0)).toStrictEqual(file);
    expect(submitted).toBe(false);
  });

  test('submit callback parameters', async () => {
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });

    vi.setSystemTime(11111111111111);

    const check: IPeople = {
      name: 'Fff',
      sex: 'male',
      birthDate: '2023-04-19',
      maried: false,
      preferedAnimal: 'Haski',
      img: 'data:image/png;base64,aGVsbG8=',
      key: 11111111111111,
    };

    const mock = {};

    const spy = (people: IPeople) => Object.assign(mock, people);

    renderWithProviders(<PeopleForm add={spy}></PeopleForm>);

    const input = screen.getByRole<HTMLInputElement>('people-name-input');
    const checkbox = screen.getByRole<HTMLInputElement>('people-sex-radio-male');
    const date = screen.getByRole<HTMLInputElement>('people-birthday-date');
    const avatar = screen.getByRole<HTMLInputElement>('people-avatar');
    const button = screen.getByRole<HTMLButtonElement>('people-form-submit');

    await userEvent.type(input, 'Fff');
    await userEvent.click(checkbox);
    await userEvent.type(date, '2023-04-19');
    await userEvent.upload(avatar, file);
    await userEvent.click(button);

    expect(mock).toStrictEqual(check);
  });
});
