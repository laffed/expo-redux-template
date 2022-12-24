/* istanbul ignore file */

import Toast from 'react-native-toast-message';

import type { ToastEnum } from '@app/components';


const showToast = ({
  text,
  type = 'success',
  onHide = () => undefined,
}: {
  text: string;
  type?: ToastEnum;
  onHide?: () => void;
}) => {
  Toast.show({
    type,
    onHide,
    text1: text,
  });
};

const hideToast = () => {
  Toast.hide();
};

/** @description Psuedo Hook - This hook returns constants. Will never trigger rerender cycles */
export const useToast = () => {
  return {
    showToast,
    hideToast,
  };
};
