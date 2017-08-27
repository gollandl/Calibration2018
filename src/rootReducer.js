import { combineReducers } from 'redux';
import { navReducer } from './navigation/reducers';

const rootReducer = combineReducers({
    nav: navReducer,
  });
  
  export default rootReducer;