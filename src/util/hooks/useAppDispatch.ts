// eslint-disable-next-line no-restricted-imports
import { useDispatch } from 'react-redux';

import { AppDispatch } from '@app/core/store/storeConfiguration';


export const useAppDispatch: () => AppDispatch = useDispatch;
