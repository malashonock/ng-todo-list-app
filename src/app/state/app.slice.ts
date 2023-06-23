import { createFeature, createReducer, on } from '@ngrx/store';

import { AppActions } from './app.actions';
import { AppActionReducers } from './app.reducers';

export interface AppState {
  loading: number;
  error: string | null;
}

export const initialState: AppState = {
  loading: 0,
  error: null,
};

export const AppSlice = createFeature({
  name: 'app',
  reducer: createReducer(
    initialState,
    on(AppActions.loadingStart, AppActionReducers.loadingStartReducer),
    on(AppActions.loadingFinish, AppActionReducers.loadingFinishReducer),
    on(AppActions.errorRaise, AppActionReducers.errorRaiseReducer),
    on(AppActions.errorClear, AppActionReducers.errorClearReducer),
  ),
});