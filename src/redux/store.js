// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from './counterSlice';

// import { devToolsEnhancer } from '@redux-devtools/extension';

// const enchancer = devToolsEnhancer();

export const store = configureStore({
  reducer: counterReducer,
});
