import { FC } from 'react';
import { Text, TextProps } from 'react-native';
import { useTheme } from '@react-navigation/native';


export const ThemedText: FC<TextProps> = ({ children, ...rest }) => {
  const { colors } = useTheme();

  return (
    <Text
      { ...rest }
      style={{
        color: colors.text,
      }}
    >
      {children}
    </Text>
  );
};

