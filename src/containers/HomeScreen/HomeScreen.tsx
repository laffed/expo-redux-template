import { VFC } from 'react';
import { Text } from 'react-native';

import { TabStackScreenProp, TabRoutes } from '@navigation/index';
import { SafeScreen } from '@app/components';


export const HomeScreen: VFC<TabStackScreenProp<TabRoutes.HOME>> = () => {

  return (
    <SafeScreen>
      <Text>Home</Text>
    </SafeScreen>
  );
};
