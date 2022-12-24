import {
  StyleSheet, ViewStyle
} from 'react-native';

import { Colors } from '@styles/index';


export const styles = StyleSheet.create<{
  container: ViewStyle
}>({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 24,
  },
});
