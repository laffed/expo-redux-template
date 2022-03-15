import { VFC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationProvider } from 'navigation/NavigationProvider';
import { Provider } from 'core/store';


export const App: VFC = () => {

  return (
    <Provider>
      <SafeAreaProvider>
        <NavigationProvider />
        <StatusBar />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
