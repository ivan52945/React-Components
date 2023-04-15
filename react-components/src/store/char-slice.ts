import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type peopleState = {
  value: string;
};

const initialState: peopleState = {
  value: '',
};

const peopleSlice = createSlice({
  name: 'charsearch',
  initialState: initialState,
  reducers: {
    save(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { save } = peopleSlice.actions;

export default peopleSlice.reducer;
