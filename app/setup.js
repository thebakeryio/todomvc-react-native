import App from './components/App';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import sagas from './sagas';

const store = configureStore();
sagas.forEach(saga => store.runSaga(saga));

function setup() {
  class Root extends Component {
    render() {
      return (
        <Provider store={store}>
          <App />
        </Provider>
      );
    }
  }

  return Root;
}

module.exports = setup;
