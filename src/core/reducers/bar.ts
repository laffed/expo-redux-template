import { createReducer } from 'typesafe-actions';

import { BarState } from 'core/types/bar';
import BarActions, { updateBuzzAsyncAction } from 'core/actions/bar';


export const barInitialState: BarState = {
  buzz: 'world',
};


export const barReducer = createReducer<
BarState,
BarActions
>(barInitialState)
  .handleAction(updateBuzzAsyncAction.success, (state, { payload }) => {
    return {
      ...state,
      buzz: payload,
    };
  })
  .handleAction(updateBuzzAsyncAction.failure, (state) => {
    return {
      ...state,
      buzz: 'err',
    };
  })
;
