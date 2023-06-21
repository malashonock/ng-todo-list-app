import { OnReducer } from '@ngrx/store/src/reducer_creator';

import { TodoState } from './todo.slice';
import { TodoActions } from './todo.actions';
import { TodoItem } from '../models/todo-item';

const fetchTodosSuccessReducer: OnReducer<
  TodoState,
  [typeof TodoActions.fetchTodosSuccess]
> = (state, { todos }) => ({
  ...state,
  todos,
});

const createTodoSuccessReducer: OnReducer<
  TodoState,
  [typeof TodoActions.createTodoSuccess]
> = (state, { todo }) => ({
  ...state,
  todos: [
    ...state.todos,
    todo,
  ],
});

const toggleTodoReducer: OnReducer<
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

export const TodoActionReducers = {
  fetchTodosSuccessReducer,
  createTodoSuccessReducer,
  toggleTodoReducer,
};
