import { VFC } from 'react';
import {
  useWindowDimensions, View, Text
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Toast, {
  ToastConfig, ToastConfigParams
} from 'react-native-toast-message';
import { Feather } from '@expo/vector-icons';

import { Colors } from '@app/styles';


export type ToastEnum = keyof typeof toastConfig;

const styledToastOptions = {
  success: {
    icon: 'info',
    color: Colors.GREENPRIMARY,
    backgroundColor: Colors.GREEN1,
  },
  error: {
    icon: 'x-circle',
    color: Colors.RED5,
    backgroundColor: Colors.REDERROR,
  },
} as const;

const StyledToast: VFC<{
  text?: string;
  type: ToastEnum;
}> = ({ text, type }) => {
  const { width } = useWindowDimensions();
  const toastWidth = width - 28;
  const { icon, backgroundColor, color } = styledToastOptions[type];

  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      backgroundColor,
      width: toastWidth,
      borderRadius: 8,
    }}
    >
      <Feather
        name={ icon }
        color={ color }
        size={ 24 }
        style={{
          marginRight: 5,
        }}
      />
      <Text
        style={{
          color,
        }}
      >
        {text}
      </Text>
    </View>
  );
};

const toastRendererOf = (type: ToastEnum) => (params: ToastConfigParams<undefined>) => (
  <StyledToast
    text={ params.text1 }
    type={ type }
  />
);

export const toastConfig: {
  success: ToastConfig[string];
  error: ToastConfig[string];
} = {
  success: toastRendererOf('success'),
  error: toastRendererOf('error'),
};

/**
 * @note do not call this Component directly. The only instance of this component is rendered in App.tsx
 * @use hooks/useToast.tsx to implement a Toast
 * */
export const ToastInstance: VFC = () => {
  const { top }= useSafeAreaInsets();

  const offset = top + 20;

  return (
    <Toast
      config={ toastConfig }
      topOffset={ offset }
    />
  );
};
