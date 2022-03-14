import { createReducer } from 'typesafe-actions';

import FooActions, { clearFizzAction, setFizzAction } from 'core/actions/foo';
import { FooState } from 'core/types/foo';


export const fooInitialState: FooState = {
  fizz: 'hello',
};

export const fooReducer = createReducer<
FooState,
FooActions
>(fooInitialState)
  .handleAction(clearFizzAction, (state) => {
    return {
      ...state,
      fizz: '',
    };
  })
  .handleAction(setFizzAction, (state, { payload }) => {
    return {
      ...state,
      fizz: payload,
    };
  });
