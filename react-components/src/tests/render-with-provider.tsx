import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';

import { Provider } from 'react-redux';

import charReducer from '../store/char-slice';
import peopleReducer from '../store/people-slice';
import { charsAPI } from '../API/API.2';

import type { RootState } from '../store/store';

const rootReducer = combineReducers({
  chars: charReducer,
  peoples: peopleReducer,
  [charsAPI.reducerPath]: charsAPI.reducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getGetDefaultMiddleware) => getGetDefaultMiddleware().concat(charsAPI.middleware),
  });
}

import store from '../store/store';
type AppStoreOld = typeof store;

type AppStore = ReturnType<typeof setupStore>;

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore | AppStoreOld;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {} as PreloadedState<RootState>,
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: {
        chars: charReducer,
        peoples: peopleReducer,
        [charsAPI.reducerPath]: charsAPI.reducer,
      },
      preloadedState,
      middleware: (getGetDefaultMiddleware) =>
        getGetDefaultMiddleware().concat(charsAPI.middleware),
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<unknown>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
