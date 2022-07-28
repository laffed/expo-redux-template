import { useReduxDevToolsExtension } from '@react-navigation/devtools';
import noop from 'lodash/noop';


export const useNavigationDevTools = (): typeof useReduxDevToolsExtension => {
  /* istanbul ignore next */
  if (!__DEV__) {
    return noop;
  }

  return useReduxDevToolsExtension;
};
