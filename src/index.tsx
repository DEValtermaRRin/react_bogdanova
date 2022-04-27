import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.module.scss';
import { App } from './App';

const root = ReactDOMClient.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
