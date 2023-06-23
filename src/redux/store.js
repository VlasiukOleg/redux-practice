import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from './counter/counterSlice';
// import { colorPickerReducer } from './colorpicker/colorpickerSlice';

// Працює лише по одному так
// export const store = configureStore({
//   reducer: colorPickerReducer,
// });

// Чи так
export const store = configureStore({
  reducer: counterReducer,
});

// Чому так не працює??

// export const store = configureStore({
//   reducer: {
//     counter: colorPickerReducer,
//     colorpicker: counterReducer,
//   },
// });
