import { selectError, selectLoading } from './app.selectors';
import { AppState } from './app.slice';

describe('App selectors', () => {
  const errorMessage = 'Test error';

  let state: { app: AppState };

  beforeEach(() => {
    state = {
      app: {
        loading: 1,
        error: errorMessage,
      },
    };
  });

  describe('selectLoading', () => {
    it('should return loading', () => {
      expect(selectLoading(state)).toBe(1);
    });
  });

  describe('selectError', () => {
    it('should return error', () => {
      expect(selectError(state)).toBe(errorMessage);
    });
  });
});