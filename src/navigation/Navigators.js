import { StackNavigator } from 'react-navigation';
import { ScreenOne, ScreenTwo} from '../screens';
import { routes } from './constants';

const RootNavigator = StackNavigator({
    [routes.MAINONE]: { screen: ScreenOne },
    [routes.MAINTWO]: { screen: ScreenTwo }
})

export default RootNavigator;