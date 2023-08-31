import { FC } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { store, persistor } from './storeConfiguration';


const queryClient = new QueryClient();

export const StoreProvider: FC = ({ children }) => (
  <QueryClientProvider client={ queryClient }>
    <ReduxProvider store={ store }>
      <PersistGate
        persistor={ persistor }
      >
        {children}
      </PersistGate>
    </ReduxProvider>
  </QueryClientProvider>
);
