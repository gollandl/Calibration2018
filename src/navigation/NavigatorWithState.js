import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect, Dispatch } from 'react-redux';
import RootNavigator from './Navigators';


export class NavigatorWithState extends Component {
  render() {
    return (
      <RootNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
        })}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(NavigatorWithState);