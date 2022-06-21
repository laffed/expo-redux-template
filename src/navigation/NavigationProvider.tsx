import { VFC } from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

import { useNavigationDevTools } from '@hooks/index';

import { RootStackNavigator } from './stacks/RootStackNavigator';


export const NavigationProvider: VFC = () => {

  const navigationRef = useNavigationContainerRef();
  useNavigationDevTools()(navigationRef);

  return (
    <NavigationContainer
      ref={ navigationRef }
    >
      <RootStackNavigator />
    </NavigationContainer>
  );
};
