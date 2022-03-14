import { VFC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationProvider } from 'navigation/NavigationProvider';


export const App: VFC = () => {

  return (
    <SafeAreaProvider>
      <NavigationProvider />
      <StatusBar />
    </SafeAreaProvider>
  );
};
