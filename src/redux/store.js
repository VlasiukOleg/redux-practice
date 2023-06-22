import { createStore } from 'redux';

import { counterReducer } from './reducer';

import { devToolsEnhancer } from '@redux-devtools/extension';

const enchancer = devToolsEnhancer();

export const store = createStore(counterReducer, enchancer);
