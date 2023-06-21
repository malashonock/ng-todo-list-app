import { OnReducer } from '@ngrx/store/src/reducer_creator';

import { TodoState } from './todo.feature';
import { TodoActions } from './todo.actions';
import { TodoItem } from '../models/todo-item';

export const loadingStartReducer: OnReducer<
  TodoState, 
  [typeof TodoActions.loadingStart]
> = (state) => ({
  ...state,
  loading: state.loading + 1,
});

export const loadingFinishReducer: OnReducer<
  TodoState,
  [typeof TodoActions.loadingFinish]
> = (state) => ({
  ...state,
  loading: state.loading - 1,
});

export const ErrorRaiseReducer: OnReducer<
  TodoState,
  [typeof TodoActions.errorRaise]
> = (state, { error }) => ({
  ...state,
  error,
});

export const fetchTodosSuccessReducer: OnReducer<
  TodoState,
  [typeof TodoActions.fetchTodosSuccess]
> = (state, { todos }) => ({
  ...state,
  todos,
});

export const createTodoSuccessReducer: OnReducer<
  TodoState,
  [typeof TodoActions.createTodoSuccess]
> = (state, { todo }) => ({
  ...state,
  todos: [
    ...state.todos,
    todo,
  ],
});

export const toggleTodoReducer: OnReducer<
  TodoState, [
    typeof TodoActions.toggleTodoDone,
    typeof TodoActions.toggleTodoDoneRollback,
  ]
> = (state, { todoId, isDone }) => ({
  ...state,
  todos: state.todos.map((todo: TodoItem): TodoItem => {
    return todo.id === todoId
      ? {
        ...todo,
        isDone,
      } : todo;
  }),
});
