import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

import { BrowserRouter } from 'react-router-dom';
import './styles/index.scss';
import { ThemeProvider } from './provider/ThemeProvider';
import { store } from './store/store'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
