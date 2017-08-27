import React, { Component } from 'react';
import { Provider } from 'react-redux';
import NavigatorWithState from './src/navigation/NavigatorWithState';
import store from './src/store';

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <NavigatorWithState />
        </Provider>
    );
  }
}


