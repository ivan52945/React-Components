import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import IPeople from '../types/people';

type peopleState = {
  list: IPeople[];
};

const initialState: peopleState = {
  list: [],
};

const peopleSlice = createSlice({
  name: 'peoples',
  initialState: initialState,
  reducers: {
    add(state, action: PayloadAction<IPeople>) {
      state.list.push(action.payload);
    },
  },
});

export const { add } = peopleSlice.actions;

export default peopleSlice.reducer;
