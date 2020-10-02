import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ErrorBoundary from './errorBoundary';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import manageRestaurant from './reducers/manageRestaurant';

let store = createStore(manageRestaurant, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>,
document.getElementById('root')
);
