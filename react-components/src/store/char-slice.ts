import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type charState = {
  value: string;
};

const initialState: charState = {
  value: '',
};

const charSlice = createSlice({
  name: 'charsearch',
  initialState: initialState,
  reducers: {
    save(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { save } = charSlice.actions;

export default charSlice.reducer;
