import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux';

//redux-thunk permite a los creadores de acciones invertír el control despachando funciones. Van a recibir dispatch como argumento y capaz llamarlo asíncronamente. Estas funciones son llamadas thunks.
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import ReactDOM from 'react-dom/client';
import App from './App';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
