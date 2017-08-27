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
        <Text style={globalStyles.mainText}>
          Page Two!
        </Text>
      </View>
    );
  }
}
