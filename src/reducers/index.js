import { combineReducers } from 'redux';

import { routerReducer as routing } from 'react-router-redux';
import entitiesState from './entityReducer';

export default combineReducers({
  routing,
  entitiesState
});
