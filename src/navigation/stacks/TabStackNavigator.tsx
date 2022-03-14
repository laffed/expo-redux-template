import { VFC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen, ProfileScreen } from 'containers';

import { RootStackScreenProp, TabNavigatorParamsList } from '../types';
import { RootNavigatorRoutes, TabRoutes } from '../routes';


const { Navigator, Screen } = createBottomTabNavigator<TabNavigatorParamsList>();

export const TabStackNavigator: VFC<RootStackScreenProp<RootNavigatorRoutes.TAB_STACK>> = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name={ TabRoutes.HOME }
        component={ HomeScreen }
      />
      <Screen
        name={ TabRoutes.PROFILE }
        component={ ProfileScreen }
      />
    </Navigator>
  );
};
