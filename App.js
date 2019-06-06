
import React, { Component } from 'react';
import store from './src/store'
import App from './src/App';
import { Provider } from 'react-redux';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}


