import { createSlice } from '@reduxjs/toolkit';

const colorPickerInitialState = {
  colors: [
    { label: 'red', color: 'red' },
    { label: 'green', color: 'green' },
    { label: 'blue', color: 'blue' },
    { label: 'orange', color: 'orange' },
    { label: 'black', color: 'black' },
    { label: 'pink', color: 'pink' },
    { label: 'yellow', color: 'yellow' },
  ],
  activeBtnIndex: 1,
};

export const colorPickerSlice = createSlice({
  name: 'colorpicker',
  initialState: colorPickerInitialState,
  reducers: {
    setActiveBtnIndex: (state, action) => {
      state.activeBtnIndex = action.payload;
    },
  },
});

export const colorPickerReducer = colorPickerSlice.reducer;

export const { setActiveBtnIndex } = colorPickerSlice.actions;
