// eslint-disable-next-line no-restricted-imports -- only file that should import
import { useDispatch } from 'react-redux';

import { AppDispatch } from '@app/core/store/storeConfiguration';


export const useAppDispatch: () => AppDispatch = useDispatch;
