/* istanbul ignore file */

/* eslint-disable jest/no-commented-out-tests */
import { AnyAction } from 'redux';

import { ThunkStatus } from '@app/core/types';

import { fetchGetBuzzTest } from './bar.thunk';
import { barInitialState } from './bar.slice';

import { barReducer } from './index';


const EmptyAction = {} as unknown as AnyAction;

describe('bar slice', () => {
  it('reduce root state', () => {
    expect.assertions(1);
    expect(barReducer(undefined, EmptyAction)).toStrictEqual(barInitialState);
  });
  it('fetchGetBuzzTest pending', () => {
    expect.assertions(1);
    const meta = {
      status: ThunkStatus.PENDING,
      error: null,
    };

    expect(barReducer(barInitialState, fetchGetBuzzTest.pending)).toStrictEqual({
      ...barInitialState,
      sliceMeta: meta,
    });

  });

  // TODO
  // it.todo('fetchGetBuzzTest pending');
  // it.todo('fetchGetBuzzTest pending');
  // it.todo('fetchGetBuzzTest pending');
});
