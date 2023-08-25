/* istanbul ignore file */

import { AnyAction } from 'redux';

import { ThunkStatus } from '@app/core/types';

import { fetchGetBuzzTest } from './bar.thunk';
import { barInitialState } from './bar.slice';

import { barReducer } from './index';



/* eslint-disable @typescript-eslint/consistent-type-assertions -- empty action okay */
const EmptyAction = {} as unknown as AnyAction;
/* eslint-enable @typescript-eslint/consistent-type-assertions -- empty action okay */

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
});
