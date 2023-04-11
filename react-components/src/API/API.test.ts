import { describe, expect, test } from 'vitest';
import charServer from '../tests/chars-server';

import responceChars from '../tests/responce-all';

import { getChars, getChar } from './API';

beforeAll(() => charServer.listen());

beforeEach(() => charServer.resetHandlers());

describe('test Chars API', () => {
  test('test with all chars', async () => {
    const charsRes = await getChars();

    expect(charsRes).toEqual(responceChars.results);
  });
  test('test with named query', async () => {
    const name = 'Rick';

    const charsRes = await getChars(name);

    expect(charsRes).toEqual(responceChars.results.filter((char) => char.name.includes(name)));
  });
  test('test with single char', async () => {
    const ID = 4;

    const responceAll = Object.assign({}, responceChars);

    const responceTest = responceAll.results.find((char) => char.id === ID);

    const charRes = await getChar(ID);

    expect(charRes).toEqual(responceTest);
  });
});

afterAll(() => charServer.close());
