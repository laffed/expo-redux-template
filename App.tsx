import './src/translations';
import { VFC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationProvider } from '@app/navigation/NavigationProvider';
import { StoreProvider } from '@app/core/store/StoreProvider';
// import { initFirebase } from '@app/core/network/firebase';


/* Firebase */
// initFirebase();

export const App: VFC = () => {

  return (
    <StoreProvider>
      <SafeAreaProvider>
        <NavigationProvider />
        <StatusBar />
      </SafeAreaProvider>
    </StoreProvider>
  );
};
