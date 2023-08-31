import { VFC } from 'react';

import { TabStackScreenProp, TabRoutes } from '@navigation/index';
import { SafeScreen, ThemedText } from '@app/components';


export const HomeScreen: VFC<TabStackScreenProp<TabRoutes.HOME>> = () => {

  return (
    <SafeScreen omittedEdges={ ['bottom'] }>
      <ThemedText>Home</ThemedText>
    </SafeScreen>
  );
};
