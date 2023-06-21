import { OnReducer } from '@ngrx/store/src/reducer_creator';

import { AppState } from './app.slice';
import { AppActions } from './app.actions';

const loadingStartReducer: OnReducer<
  AppState, 
  [typeof AppActions.loadingStart]
> = (state) => ({
  ...state,
  loading: state.loading + 1,
});

const loadingFinishReducer: OnReducer<
  AppState,
  [typeof AppActions.loadingFinish]
> = (state) => ({
  ...state,
  loading: state.loading - 1,
});

const ErrorRaiseReducer: OnReducer<
  AppState,
  [typeof AppActions.errorRaise]
> = (state, { error }) => ({
  ...state,
  error,
});

const ErrorClearReducer: OnReducer<
  AppState,
  [typeof AppActions.errorClear]
> = (state) => ({
  ...state,
  error: null,
});

export const AppActionReducers = {
  loadingStartReducer,
  loadingFinishReducer,
  ErrorRaiseReducer,
  ErrorClearReducer,
};

