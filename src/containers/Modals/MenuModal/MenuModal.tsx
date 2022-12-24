import { VFC } from 'react';

import { RootStackScreenProp, ModalRoutes } from '@navigation/index';
import { SafeScreen } from '@app/components';


export const MenuModal: VFC<RootStackScreenProp<ModalRoutes.MENU>> = () => {
  return (
    <SafeScreen>
      {null}
    </SafeScreen>
  );
};
