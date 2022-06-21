/* istanbul ignore file */

import { createSlice } from '@reduxjs/toolkit';

import { BarState, ThunkStatus } from '@core/types';

import { fetchGetBarTestUser, fetchGetBuzzTest } from './bar.thunk';


export const barInitialState: BarState = {
  sliceMeta: {
    status: ThunkStatus.IDLE,
    error: null,
  },
  buzz: 'world',
  user: undefined,
};

export const barSlice = createSlice({
  name: 'bar',
  initialState: barInitialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetBuzzTest.pending, (state) => {
      state.sliceMeta = {
        status: ThunkStatus.PENDING,
        error: null,
      };
    });
    builder.addCase(fetchGetBuzzTest.fulfilled, (state, { payload }) => {
      state.buzz = payload;
      state.sliceMeta = {
        status: ThunkStatus.RESOLVED,
        error: null,
      };
    });
    builder.addCase(fetchGetBuzzTest.rejected, (state, { payload }) => {
      state.sliceMeta = {
        status: ThunkStatus.REJECTED,
        error: payload ?? null,
      };
    });
    builder.addCase(fetchGetBarTestUser.pending, (state) => {
      state.sliceMeta = {
        status: ThunkStatus.PENDING,
        error: null,
      };
    });
    builder.addCase(fetchGetBarTestUser.fulfilled, (state, { payload: { data } }) => {
      state.user = {
        id: data.id,
        firstName: data.first_name,
        lastName: data.last_name,
        email: data.email,
      };
      state.sliceMeta = {
        status: ThunkStatus.RESOLVED,
        error: null,
      };
    });
    builder.addCase(fetchGetBarTestUser.rejected, (state) => {
      state.user = undefined;
      state.sliceMeta = {
        status: ThunkStatus.REJECTED,
        error: null,
      };
    });
  },
});

export const barActions = barSlice.actions;
export default barSlice.reducer;
