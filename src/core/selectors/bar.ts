import { createSelector } from '@reduxjs/toolkit';

import { ApplicationState } from '../types';



export const selectBar = (state: ApplicationState) => state.bar;

export const selectBuzz = createSelector(
  selectBar,
  (bar) => bar.buzz
);

export const selectBarTestUser = createSelector(
  selectBar,
  (bar) => bar.user
);
