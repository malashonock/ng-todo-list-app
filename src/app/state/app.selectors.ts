import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from './app.slice';

export const selectAppState = createFeatureSelector<AppState>('app');

export const selectLoading = createSelector(
  selectAppState,
  (state: AppState): number => state.loading,
);

export const selectError = createSelector(
  selectAppState,
  (state: AppState): string | null => state.error,
);