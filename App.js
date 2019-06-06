
import React, { Component } from 'react';
import store from './src/store'
import MainApp from './src/App';
import { Provider } from 'react-redux';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainApp />
      </Provider>
    );
  }
}


