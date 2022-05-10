import React from 'react';
import ReactDOMClient from 'react-dom/client';

import { App } from './App';
import './index.module.scss';

const root = ReactDOMClient.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
