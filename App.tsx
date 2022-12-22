import './src/translations';
import { VFC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationProvider } from '@app/navigation/NavigationProvider';
import { StoreProvider } from '@app/core/store/StoreProvider';


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

export default App;
