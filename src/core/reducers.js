import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import history from './history';
import openings from './openings';

export const initialState = {
  app: {
    openings: openings
  },
  async: {

  }
};

export function appReducer(state = initialState.app, action) {
  return state;
}

export default combineReducers({
  router: connectRouter(history),
  app: appReducer
});

