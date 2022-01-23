import React from 'react';
import ReactDOM from 'react-dom';

// ** Redux Imports
// import { Provider } from 'react-redux'
// import { store } from './redux/storeConfig/store'
// import * as _redux from './redux'

// import axios from 'axios';

import App from './App';
import reportWebVitals from './reportWebVitals';

// ** Setup Axios
// _redux.setupAxios(axios, store)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
