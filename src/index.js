import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { Contextprovider } from './context/context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Contextprovider>
    <App />
    </Contextprovider>
  </React.StrictMode>
  )