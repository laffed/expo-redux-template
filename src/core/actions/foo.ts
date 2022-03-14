import { ActionType, createAction } from 'typesafe-actions';


export const CLEAR_FIZZ = 'foo@CLEAR_FIZZ';
export const clearFizzAction = createAction(CLEAR_FIZZ)();

export const SET_FIZZ = 'foo@SET_FIZZ';
export const setFizzAction = createAction(SET_FIZZ)<string>();

type FooActions = ActionType<
  typeof clearFizzAction |
  typeof setFizzAction
>;

export default FooActions;
