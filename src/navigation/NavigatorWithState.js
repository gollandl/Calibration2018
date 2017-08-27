import React, { Component } from 'react';
import { View } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import { connect, Dispatch } from 'react-redux';
import Header from '../components/header';
import RootNavigator from './Navigators';


export class NavigatorWithState extends Component {
  render() {
    return (
      <View style={{ flex: 1 }} >
        <Header         
          navigation={addNavigationHelpers({
            dispatch: this.props.dispatch,
        })} />
        <RootNavigator
          navigation={addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav,
          })}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(NavigatorWithState);