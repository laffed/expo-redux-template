import { useNavigation as useUnsafeNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootNavigatorParamsList, RootStackScreenProp } from 'navigation/types';


export const useNavigation = <
  T extends keyof RootNavigatorParamsList = keyof RootNavigatorParamsList
>(): NativeStackNavigationProp<RootNavigatorParamsList, T> => (
  useUnsafeNavigation<RootStackScreenProp<T>['navigation']>()
);
