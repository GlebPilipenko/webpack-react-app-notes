import React from 'react';

import 'styles/index.css';
// eslint-disable-next-line import/no-unresolved
import { createRoot } from 'react-dom/client';

import { App } from 'components/App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(rootElement);

root.render(<App />);
