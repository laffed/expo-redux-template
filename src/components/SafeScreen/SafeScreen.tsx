import { FC } from 'react';
import {
  StyleProp, StyleSheet, ViewStyle, Platform
} from 'react-native';
import {
  Edge, SafeAreaView
} from 'react-native-safe-area-context';

import { styles } from './styles';


type Props = {
  style?: StyleProp<ViewStyle>
  edges?: readonly Edge[]
}

export const SafeScreen: FC<Props> = ({ style, children, edges = undefined }) => {
  const composed = StyleSheet.compose(
    styles.container,
    style
  );

  const osStyles = Platform.select({
    android: {
      paddingTop: 24,
    },
  });

  return (
    <SafeAreaView
      style={ [composed, osStyles] }
      edges={ edges }
    >
      {children}
    </SafeAreaView>
  );
};
