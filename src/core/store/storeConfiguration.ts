import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import { rootReducer, initialState } from 'core/reducers';
import { rootSaga, sagaMiddleware } from 'core/sagas';
import { ApplicationState } from 'core/types';


const configureStore = (initState: ApplicationState): Store => {
  const store = createStore(rootReducer, initState, composeWithDevTools(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(rootSaga);

  return store;
};

export const store = configureStore(initialState);
