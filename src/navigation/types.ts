import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  TabRoutes, ModalRoutes, RootNavigatorRoutes
} from './routes';


declare global {
  namespace ReactNavigation {
    // @ts-expect-error Modifying/extending React Navigation Lib types
    type RootParamList = RootNavigatorParamsList
  }
}

/** ROOT STACK SCOPE */
export type RootNavigatorParamsList = ModalScreenParamsList & {
  [RootNavigatorRoutes.TAB_STACK]: NavigatorScreenParams<TabNavigatorParamsList>;
}
export type RootStackScreenProp<T extends keyof RootNavigatorParamsList> =
  NativeStackScreenProps<RootNavigatorParamsList, T>;

export type ModalScreenParamsList = {
  [ModalRoutes.MENU]: undefined;
}

/** TAB STACK SCOPE */
export type TabNavigatorParamsList = {
  [TabRoutes.HOME]: undefined;
  [TabRoutes.PROFILE]: undefined;
}
export type TabStackScreenProp<T extends keyof TabNavigatorParamsList> =
  CompositeScreenProps<
    BottomTabScreenProps<TabNavigatorParamsList, T>,
    RootStackScreenProp<keyof RootNavigatorParamsList>
  >;
