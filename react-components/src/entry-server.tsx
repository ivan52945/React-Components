import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';

import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { setupStore } from './store/store';
import charsAPI from './API/API';

import { Request, Response } from 'express';

import App from './app/app';

interface renderOptions {
  style?: string;
  client: string;
}

import Html from './app/server/html';

async function render(req: Request, res: Response, opt: renderOptions) {
  const store = setupStore();

  await store.dispatch(charsAPI.endpoints.getChars.initiate(''));
  await Promise.all(store.dispatch(charsAPI.util.getRunningQueriesThunk()));
  const state = store.getState();

  const { style, client } = opt;

  const { pipe } = renderToPipeableStream(
    <Html style={style} preloadedState={state} title={'React SSR'}>
      <Provider store={store}>
        <StaticRouter location={req.originalUrl}>
          <App />
        </StaticRouter>
      </Provider>
    </Html>,
    {
      onShellReady() {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/html');
        pipe(res);
      },
      bootstrapModules: [client],
    }
  );
}

export { render };
