import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const AppActions = createActionGroup({
  source: 'App',
  events: {
    'Loading Start': emptyProps(),
    'Loading Finish': emptyProps(),
    'Error Raise': props<{ error: string }>(),
    'Error Clear': emptyProps(),
  },
});