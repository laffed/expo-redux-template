import { ActionType, createAsyncAction } from 'typesafe-actions';

import { createAsyncTypes } from './util/createAsyncTypes';


export const UPDATE_BUZZ = 'bar@UPDATE_BUZZ';
export const UpdateBuzzTypes = createAsyncTypes(UPDATE_BUZZ);
export const updateBuzzAsyncAction = createAsyncAction(
  UpdateBuzzTypes.request,
  UpdateBuzzTypes.success,
  UpdateBuzzTypes.failure
)<string, string, undefined>();

type BarActions = ActionType<
  typeof updateBuzzAsyncAction
>;

export default BarActions;
