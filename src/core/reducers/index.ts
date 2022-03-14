import { combineReducers } from 'redux';

import { ApplicationState } from 'core/types';

import { fooInitialState, fooReducer } from './foo';
import { barInitialState, barReducer } from './bar';


export const reducers = {
  foo: fooReducer,
  bar: barReducer,
};

export const initialState: ApplicationState = {
  foo: fooInitialState,
  bar: barInitialState,
};

export const rootReducer = combineReducers<ApplicationState>(reducers);
