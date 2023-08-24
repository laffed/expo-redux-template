import { FC } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './storeConfiguration';

export const StoreProvider: FC = ({ children }) => (
  <ReduxProvider store={store}>
    <PersistGate
      persistor={persistor}
    >
      {children}
    </PersistGate>
  </ReduxProvider>
);
