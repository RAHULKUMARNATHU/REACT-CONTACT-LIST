import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducers';
// import { composeWithDevTools } from 'redux-devtools-extension';

let store;

export function configureStore() {
  store = createStore(reducer, applyMiddleware(thunk, logger));

  return store;
}
