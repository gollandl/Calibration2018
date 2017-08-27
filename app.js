import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import NavigatorWithState from './src/navigation/NavigatorWithState';

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <NavigatorWithState />
          </View>
        </Provider>
    );
  }
}


