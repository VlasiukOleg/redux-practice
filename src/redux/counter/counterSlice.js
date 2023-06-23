import { createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

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

const persistConfig = {
  key: 'counter',
  storage,
  // Save only value total to LocalStorage
  whitelist: ['total'],
};

export const counterReducer = persistReducer(
  persistConfig,
  counterSlice.reducer
);

// export const counterReducer = counterSlice.reducer;

export const { increment, decrement, counterClickBtn } = counterSlice.actions;
