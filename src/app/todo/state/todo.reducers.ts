import { OnReducer } from '@ngrx/store/src/reducer_creator';

import { TodoState } from './todo.feature';
import { TodoActions } from './todo.actions';
import { TodoItem } from '../models/todo-item';

export const identityReducer: OnReducer<
  TodoState, [
    typeof TodoActions.toggleTodoDoneSuccess,
  ]
> = (state) => state;

export const initiateFetchReducer: OnReducer<
  TodoState, [
    typeof TodoActions.fetchTodos,
    typeof TodoActions.createTodo,
  ]
> = (state) => ({
  ...state,
  loading: state.loading + 1,
  error: null,
});

export const fetchFailureReducer: OnReducer<
  TodoState, [
    typeof TodoActions.fetchTodosFailure,
    typeof TodoActions.createTodoFailure,
  ]
> = (state, { error }) => ({
  ...state,
  loading: state.loading - 1,
  error,
});

export const fetchTodosSuccessReducer: OnReducer<
  TodoState, [
    typeof TodoActions.fetchTodosSuccess,
  ]
> = (state, { todos }) => ({
  ...state,
  loading: state.loading - 1,
  todos,
});

export const createTodoSuccessReducer: OnReducer<
  TodoState, [
    typeof TodoActions.createTodoSuccess,
  ]
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
