import React from 'react';

import 'styles/index.css';
// eslint-disable-next-line import/no-unresolved
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-unresolved
import { PersistGate } from 'redux-persist/integration/react';

import { App } from './App';

import { store, persistor } from 'store';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
);
