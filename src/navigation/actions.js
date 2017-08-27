import { Dispatch } from 'react-redux';
import { NavigationActions } from 'react-navigation';

export const navigateToRoute = (routeName) =>
NavigationActions.navigate({ routeName });