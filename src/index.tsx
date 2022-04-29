import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.module.scss';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOMClient.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
