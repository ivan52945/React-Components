import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from './people-slice';
import charReducer from './char-slice';
import { charsAPI } from '../API/API.2';
const store = configureStore({
  reducer: {
    peoples: peopleReducer,
    charsearc: charReducer,
    [charsAPI.reducerPath]: charsAPI.reducer,
  },
  middleware: (getGetDefaultMiddleware) => getGetDefaultMiddleware().concat(charsAPI.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
