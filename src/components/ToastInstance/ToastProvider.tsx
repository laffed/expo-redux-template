import { FC } from 'react';
import { View, ViewStyle } from 'react-native';

import { ToastInstance } from './ToastInstance';


export const ToastProvider: FC<{
  style: ViewStyle;
}> = ({ children, style }) => {
  return (
    <View style={ style }>
      {children}
      <ToastInstance />
    </View>
  );
};
