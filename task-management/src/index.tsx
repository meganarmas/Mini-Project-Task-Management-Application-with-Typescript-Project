import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Auth0ProviderWithNavi from './Components/Auth0Provider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Auth0ProviderWithNavi>
      <App />
    </Auth0ProviderWithNavi>
  </BrowserRouter>
);


