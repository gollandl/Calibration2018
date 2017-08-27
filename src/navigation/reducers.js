import RootNavigator from './Navigators';

const initialState = RootNavigator.router.getStateForAction(
    RootNavigator.router.getActionForPathAndParams('mainOne'),
  null
);

export function navReducer(state = initialState, action) {
  let nextState;
  nextState = RootNavigator.router.getStateForAction(action, state);
  return nextState || state;
}