import React, { VFC } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

import { useNavigationDevTools } from 'hooks';


export const RootNavigator: VFC = () => {

  const navigationRef = useNavigationContainerRef();
  useNavigationDevTools()(navigationRef);

  return (
    <NavigationContainer
      ref={ navigationRef }
    >
      <View>
        <Text>Dummy</Text>
      </View>
    </NavigationContainer>
  );
};
