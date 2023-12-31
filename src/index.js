import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';

import { store, persistor } from 'redux/store';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/redux-practice">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
