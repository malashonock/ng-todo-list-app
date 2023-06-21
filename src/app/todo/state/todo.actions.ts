import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { TodoItemFields, TodoItem } from '../models/todo-item';

export const TodoActions = createActionGroup({
  source: 'Todos',
  events: {
    'Fetch Todos': emptyProps(),
    'Fetch Todos Success': props<{ todos: TodoItem[] }>(),
    'Create Todo': props<{ todoData: TodoItemFields }>(),
    'Create Todo Success': props<{ todo: TodoItem }>(),
    'Toggle Todo Done': props<{ todoId: number; isDone: boolean }>(),
    'Toggle Todo Done Success': props<{ todo: TodoItem }>(),
    'Toggle Todo Done Rollback': props<{ todoId: number; isDone: boolean }>(),
  },
});