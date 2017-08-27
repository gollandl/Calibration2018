import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';
import globalStyles from '../utils/styles';
import { navigateToRoute } from '../navigation/actions';
import { routes } from '../navigation/constants';

export default class ScreenOne extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.welcome}>
          Welcome to React Native!
        </Text>
        <Button title='Navigate' onPress={() => navigation.dispatch(navigateToRoute(routes.MAINTWO))} />
      </View>
    );
  }
}


