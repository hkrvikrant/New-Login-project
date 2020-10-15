import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {Provider} from 'react-redux';
import './index.css';
import App from './container/App';
import * as serviceWorker from './serviceWorker';


const store = createStore(
  applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
