import { VFC } from 'react';

import { TabStackScreenProp, TabRoutes } from '@navigation/index';
import { SafeScreen } from '@app/components';


export const ProfileScreen: VFC<TabStackScreenProp<TabRoutes.PROFILE>> = () => {
  return (
    <SafeScreen>
      { null }
    </SafeScreen>
  );
};
