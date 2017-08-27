import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import globalStyles from '../utils/styles';

export default class ScreenTwo extends Component {
  render() {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.welcome}>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}
