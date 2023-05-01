import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import peopleReducer from './people-slice';
import charReducer from './char-slice';
import { charsAPI } from '../API/API';
/*
const store = configureStore({
  reducer: {
    peoples: peopleReducer,
    chars: charReducer,
    [charsAPI.reducerPath]: charsAPI.reducer,
  },
  middleware: (getGetDefaultMiddleware) => getGetDefaultMiddleware().concat(charsAPI.middleware),
});
*/
const rootReducer = combineReducers({
  peoples: peopleReducer,
  chars: charReducer,
  [charsAPI.reducerPath]: charsAPI.reducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getGetDefaultMiddleware) => getGetDefaultMiddleware().concat(charsAPI.middleware),
  });
}

export default setupStore;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
