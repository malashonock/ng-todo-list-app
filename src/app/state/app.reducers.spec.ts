import { AppActions } from './app.actions';
import { AppActionReducers } from './app.reducers';
import { AppState } from './app.slice';

describe('App action reducers', () => {
  let state: AppState;

  beforeEach(() => {
    state = {
      loading: 0,
      error: null,
    };
  });

  describe('loadingStartReducer', () => {
    it('should increment loading', () => {
      expect(AppActionReducers.loadingStartReducer(state, AppActions.loadingStart())).toEqual({
        loading: 1,
        error: null,
      });
    });
  });

  describe('loadingFinishReducer', () => {
    beforeEach(() => {
      state.loading = 1;
    });

    it('should decrement loading', () => {
      expect(AppActionReducers.loadingFinishReducer(state, AppActions.loadingFinish())).toEqual({
        loading: 0,
        error: null,
      });
    });
  });

  describe('errorRaiseReducer', () => {
    it('should set error', () => {
      const errorMessage = 'Test error';
      expect(AppActionReducers.errorRaiseReducer(state, AppActions.errorRaise({
        error: errorMessage,
      }))).toEqual({
        loading: 0,
        error: errorMessage,
      });
    });
  });

  describe('errorClearReducer', () => {
    beforeEach(() => {
      state.error = 'Test error';
    });

    it('should set error', () => {
      expect(AppActionReducers.errorClearReducer(state, AppActions.errorClear())).toEqual({
        loading: 0,
        error: null,
      });
    });
  });
});
