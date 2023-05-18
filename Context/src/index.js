import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
//importamos BrowserRouter permite gestionar rutas con react,
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
