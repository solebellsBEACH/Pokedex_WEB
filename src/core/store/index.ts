import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSagas from './sagas';
import rootReducers from './ducks';
/* import { composeWithDevTools } from 'redux-devtools-extension'; */

export const makeStore = (initialState:any, { isServer, req = null }) => {
  const sagaMiddleware = createSagaMiddleware();

  const store:any = createStore(
    rootReducers,
    initialState,
    applyMiddleware(sagaMiddleware)
  );

  /*   const store = createStore(
    rootReducers,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  ); */

  if (req || !isServer) {
    store.sagaTask = sagaMiddleware.run(rootSagas);
  }

  return store;
};
