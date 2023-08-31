import { VFC } from 'react';
import { useColorScheme } from 'react-native';
import {
  NavigationContainer,
  useNavigationContainerRef,
  DarkTheme,
  DefaultTheme
} from '@react-navigation/native';
import {
  PaperProvider, MD3LightTheme, MD3DarkTheme
} from 'react-native-paper';

import { useNavigationDevTools } from '@hooks/index';

import { RootStackNavigator } from './stacks/RootStackNavigator';


export const NavigationProvider: VFC = () => {
  const colorScheme = useColorScheme();

  const navigationRef = useNavigationContainerRef();
  useNavigationDevTools()(navigationRef);

  return (
    <PaperProvider theme={ colorScheme === 'dark' ? MD3DarkTheme : MD3LightTheme }>
      <NavigationContainer
        theme={ colorScheme === 'dark' ? DarkTheme : DefaultTheme }
        ref={ navigationRef }
      >
        <RootStackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};
