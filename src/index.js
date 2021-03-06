import 'semantic-ui-css/semantic.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import * as serviceWorker from './serviceWorker';

import history from './core/history';
import reducer from './core/reducers';
import App from './components/App';

const store = createStore(
  reducer,
  compose(
    applyMiddleware(
      routerMiddleware(history)
    ),
  ),
);

ReactDOM.render(
    <Provider store={store}>
    <ConnectedRouter history={history}>
    <App />
    </ConnectedRouter>
    </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
