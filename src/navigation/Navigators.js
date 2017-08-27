import React from 'react';
import { StackNavigator } from 'react-navigation';
import { ScreenOne, ScreenTwo} from '../screens';
import { routes } from './constants';
import globalStyles from '../utils/styles';

const RootNavigator = StackNavigator({
    [routes.MAINONE]: { screen: ScreenOne },
    [routes.MAINTWO]: { screen: ScreenTwo }
},{
        headerMode: 'none',
})

export default RootNavigator;