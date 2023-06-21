import { createFeature, createReducer, on } from '@ngrx/store';

import { TodoItem } from '../models/todo-item';
import { TodoActions } from './todo.actions';
import * as TodoActionReducers from './todo.reducers';

export interface TodoState {
  todos: TodoItem[];
  loading: boolean;
  error: string | null;
}

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

export const TodoFeature = createFeature({
  name: 'todo',
  reducer: createReducer(
    initialState,
    on(
      TodoActions.fetchTodos,
      TodoActions.createTodo,
      TodoActionReducers.initiateFetchReducer,
    ),
    on(TodoActions.fetchTodosSuccess, TodoActionReducers.fetchTodosSuccessReducer),
    on(TodoActions.createTodoSuccess, TodoActionReducers.createTodoSuccessReducer),
    on(
      TodoActions.fetchTodosFailure,
      TodoActions.createTodoFailure,
      TodoActionReducers.fetchFailureReducer,
    ),
    on(
      TodoActions.toggleTodoDone,
      TodoActions.toggleTodoDoneRollback,
      TodoActionReducers.toggleTodoReducer,
    ),
    on(TodoActions.toggleTodoDoneSuccess, TodoActionReducers.identityReducer),
  ),
});