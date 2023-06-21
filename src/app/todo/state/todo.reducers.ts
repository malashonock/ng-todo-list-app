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
  loading: true,
  error: null,
});

export const fetchFailureReducer: OnReducer<
  TodoState, [
    typeof TodoActions.fetchTodosFailure,
    typeof TodoActions.createTodoFailure,
  ]
> = (state, { error }) => ({
  ...state,
  loading: false,
  error,
});

export const fetchTodosSuccessReducer: OnReducer<
  TodoState, [
    typeof TodoActions.fetchTodosSuccess,
  ]
> = (state, { todos }) => ({
  ...state,
  loading: false,
  todos,
});

export const createTodoSuccessReducer: OnReducer<
  TodoState, [
    typeof TodoActions.createTodoSuccess,
  ]
> = (state, { todo }) => ({
  ...state,
  loading: false,
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
