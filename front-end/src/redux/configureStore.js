import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '.';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureStore() {
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

  return { store };
}

export default configureStore;
