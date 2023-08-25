import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';

import { barReducer } from './bar';


const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  bar: barReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const createStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    devTools: __DEV__,
  });

  const persistor = persistStore(store);

  return {
    store,
    persistor,
  };
};

const { store, persistor } = createStore();

export type AppDispatch = typeof store.dispatch;

export {
  store,
  persistor
};
