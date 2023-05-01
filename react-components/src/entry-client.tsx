import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { PreloadedState } from '@reduxjs/toolkit';
import { RootState } from './store/store';

import App from './app/app';

import setupStore from './store/store';

declare global {
  interface Window {
    __PRELOADED_STATE__?: PreloadedState<RootState>;
  }
}

const store = setupStore(window.__PRELOADED_STATE__);
delete window.__PRELOADED_STATE__;

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
