import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { TodoItemFields, TodoItem } from '../models/todo-item';

export const TodoActions = createActionGroup({
  source: 'Todos API',
  events: {
    'Fetch Todos': emptyProps(),
    'Fetch Todos Success': props<{ todos: TodoItem[] }>(),
    'Fetch Todos Failure': props<{ error: string }>(),
    'Create Todo': props<{ todoData: TodoItemFields }>(),
    'Create Todo Success': props<{ todo: TodoItem }>(),
    'Create Todo Failure': props<{ error: string }>(),
    'Toggle Todo Done': props<{ todoId: number; isDone: boolean }>(),
    'Toggle Todo Done Success': props<{ todo: TodoItem }>(),
    'Toggle Todo Done Rollback': props<{ todoId: number; isDone: boolean }>(),
  },
});