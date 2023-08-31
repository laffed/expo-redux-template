import { FC, useMemo } from 'react';
import {
  StyleProp, StyleSheet, ViewStyle, Platform
} from 'react-native';
import {
  Edge, SafeAreaView
} from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';

import { styles } from './styles';


type Props = {
  style?: StyleProp<ViewStyle>
  omittedEdges?: readonly Edge[]
}

const defaultEdges: readonly Edge[] = ['top', 'right', 'bottom', 'left'];

export const SafeScreen: FC<Props> = ({ style, children, omittedEdges = undefined }) => {
  const { colors } = useTheme();
  const composed = StyleSheet.compose(
    {
      ...styles.container,
      backgroundColor: colors.background,
    },
    style
  );

  const osStyles = Platform.select({
    android: {
      paddingTop: 24,
    },
  });

  const edges = useMemo(() => (
    omittedEdges ?
      defaultEdges.filter((edge) => !omittedEdges.includes(edge)) :
      defaultEdges
  ), [omittedEdges]);

  return (
    <SafeAreaView
      style={ [composed, osStyles] }
      edges={ edges }
    >
      {children}
    </SafeAreaView>
  );
};
