import { VFC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationProvider } from '@app/navigation/NavigationProvider';
import { StoreProvider } from '@app/core/store/StoreProvider';
import { ToastInstance } from '@app/components/ToastInstance/ToastInstance';


export const App: VFC = () => {

  return (
    <StoreProvider>
      <SafeAreaProvider>
        <NavigationProvider />
        <StatusBar />
        <ToastInstance />
      </SafeAreaProvider>
    </StoreProvider>
  );
};

export default App;
