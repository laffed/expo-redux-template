/* istanbul ignore file */

import { createAsyncThunk } from '@reduxjs/toolkit';

import { RejectWith } from '@core/types';
import { getBarTestUser, getBuzzTest } from '@network/endpoints';
import { GetBazzTestRes } from '@app/core/network/endpoints/getBarTestUser';


export const fetchGetBuzzTest = createAsyncThunk<
  string,
  string,
  RejectWith<string>
>(
  'bar/fetchGetBuzzTest',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await getBuzzTest(payload);

      return res;
    } catch (err) {

      return rejectWithValue('Rejected buzz test');
    }
  }
);

export const fetchGetBarTestUser = createAsyncThunk<
  GetBazzTestRes,
  number,
  RejectWith<undefined>
>(
  'bar/fetchGetBarTestUser',
  async (payload, { rejectWithValue }) => {
    const res = await getBarTestUser(payload);
    try {
      return res.data;
    } catch {
      return rejectWithValue(undefined);
    }
  }
);
