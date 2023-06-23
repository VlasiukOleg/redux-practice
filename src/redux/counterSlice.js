import { createSlice } from '@reduxjs/toolkit';

const counterInitialState = {
  total: 0,
  step: 10,
  counterClick: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState: counterInitialState,
  reducers: {
    increment: (state, action) => {
      state.total += action.payload;
    },
    decrement: (state, action) => {
      state.total -= action.payload;
    },
    counterClickBtn: state => {
      state.counterClick += 1;
    },
  },
});

export const counterReducer = counterSlice.reducer;

export const { increment, decrement, counterClickBtn } = counterSlice.actions;
