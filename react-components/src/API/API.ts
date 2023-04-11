import IChar from '../types/char';
import { RequestError } from '../types/errors';

type charResolve = {
  info: number;
  results: IChar[];
};

const delay = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(true), 1000);
  });

async function getChars(nameSelect = ''): Promise<IChar[]> {
  const adressChar = 'https://rickandmortyapi.com/api/character';

  const querryName = nameSelect ? `?name=${nameSelect}` : '';

  await delay();

  const responce = await fetch(adressChar + querryName);

  if (!responce.ok) {
    throw new RequestError(responce.status, 'Something wrong');
  } else {
    return ((await responce.json()) as charResolve).results;
  }
}

async function getChar(id: number): Promise<IChar> {
  const adressChar = 'https://rickandmortyapi.com/api/character/';

  await delay();

  const responce = await fetch(adressChar + id);

  if (!responce.ok) {
    throw new RequestError(responce.status, 'Something wrong');
  } else {
    return await responce.json();
  }
}

export { getChars, getChar };
