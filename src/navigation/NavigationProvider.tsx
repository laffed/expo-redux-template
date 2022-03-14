import { VFC } from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

import { useNavigationDevTools } from 'hooks';

import { RootNavigatorParamsList } from './types';
import { RootStackNavigator } from './stacks/RootStackNavigator';


export const NavigationProvider: VFC = () => {

  const navigationRef = useNavigationContainerRef<RootNavigatorParamsList>();
  useNavigationDevTools()(navigationRef);

  return (
    <NavigationContainer
      ref={ navigationRef }
    >
      <RootStackNavigator />
    </NavigationContainer>
  );
};
