import { FC } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from './storeConfiguration';


export const Provider: FC = ({ children }) => (
  <ReduxProvider store={ store }>
      { children }
  </ReduxProvider>
);
