import { VFC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { HomeScreen, ProfileScreen } from '@containers/index';

import { RootStackScreenProp, TabNavigatorParamsList } from '../types';
import { RootNavigatorRoutes, TabRoutes } from '../routes';


const { Navigator, Screen } = createBottomTabNavigator<TabNavigatorParamsList>();

export const TabStackNavigator: VFC<RootStackScreenProp<RootNavigatorRoutes.TAB_STACK>> = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Screen
        name={ TabRoutes.HOME }
        component={ HomeScreen }
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name='home-outline'
              size={ 20 }
              color={ color }
            />
          ),
        }}
      />
      <Screen
        name={ TabRoutes.PROFILE }
        component={ ProfileScreen }
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name='person-outline'
              size={ 20 }
              color={ color }
            />
          ),
        }}
      />
    </Navigator>
  );
};
