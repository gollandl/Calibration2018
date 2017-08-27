import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import NavigatorWithState from './src/navigation/NavigatorWithState';
import store from './src/store';
import Header from './src/components/header';

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <View style={{ flex: 1 }}>
            <Header />
            <NavigatorWithState />
          </View>
        </Provider>
    );
  }
}


