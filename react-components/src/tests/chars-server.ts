import { setupServer } from 'msw/node';

import { rest } from 'msw';

import responceChars from './responce-all';

const charServer = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (rex, res, ctx) => {
    const charName = rex.url.searchParams.get('name');

    const responce = Object.assign({}, responceChars);

    if (charName) {
      responce.results = responce.results.filter((char) => char.name.includes(charName));
    }

    if (responce.results.length <= 0) {
      return res(ctx.status(404), ctx.json({ error: 'There is nothing here' }));
    }

    return res(ctx.status(200), ctx.json(responce));
  }),
  rest.get('https://rickandmortyapi.com/api/character/:charID', (rex, res, ctx) => {
    const { charID } = rex.params;

    const responce = Object.assign({}, responceChars);

    const responceSingle = responce.results.find((char) => +char.id === +charID);

    if (!responceSingle) return res(ctx.status(404), ctx.json({ error: 'Character not found' }));

    return res(ctx.status(200), ctx.json(responceSingle));
  })
);

export default charServer;
