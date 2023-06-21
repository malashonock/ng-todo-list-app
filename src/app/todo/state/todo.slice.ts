import { createFeature, createReducer, on } from '@ngrx/store';

import { TodoItem } from '../models/todo-item';
import { TodoActions } from './todo.actions';
import { TodoActionReducers } from './todo.reducers';

export interface TodoState {
  todos: TodoItem[];
}

const initialState: TodoState = {
  todos: [],
};

export const TodoSlice = createFeature({
  name: 'todo',
  reducer: createReducer(
    initialState,
    on(TodoActions.fetchTodosSuccess, TodoActionReducers.fetchTodosSuccessReducer),
    on(TodoActions.createTodoSuccess, TodoActionReducers.createTodoSuccessReducer),
    on(
      TodoActions.toggleTodoDone,
      TodoActions.toggleTodoDoneRollback,
      TodoActionReducers.toggleTodoReducer,
    ),
  ),
});