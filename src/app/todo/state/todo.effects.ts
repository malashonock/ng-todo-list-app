import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, exhaustMap, map, of } from 'rxjs';

import { TodoActions } from './todo.actions';
import { TodoService } from '../services/todo.service';
import { TodoItem } from '../models/todo-item';

@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private todoService: TodoService,
  ) { }

  fetchTodos$ = createEffect(() => 
    this.actions$.pipe(
      ofType(TodoActions.fetchTodos),
      exhaustMap(() => this.todoService.getTodos().pipe(
          map((todos: TodoItem[]) => TodoActions.fetchTodosSuccess({ todos })),
          catchError(() => of(TodoActions.fetchTodosFailure({ error: 'Failed to fetch todos' }))),
        ),
      ),
    ),
  );

  addTodo$ = createEffect(() => 
    this.actions$.pipe(
      ofType(TodoActions.createTodo),
      concatMap(({ todoData }: ReturnType<typeof TodoActions.createTodo>) => 
        this.todoService.addTodo(todoData).pipe(
          map((todo: TodoItem) => TodoActions.createTodoSuccess({ todo })),
          catchError(() => of(TodoActions.createTodoFailure({ error: 'Failed to create todo' }))),
        ),
      ),
    ),
  );

  togleTodoDone$ = createEffect(() => 
    this.actions$.pipe(
      ofType(TodoActions.toggleTodoDone),
      concatMap(({ todoId, isDone }: ReturnType<typeof TodoActions.toggleTodoDone>) => 
        this.todoService.toggleTodoItemDone(todoId, isDone).pipe(
          map((todo: TodoItem) => TodoActions.toggleTodoDoneSuccess({ todo })),
          catchError(() => of(TodoActions.toggleTodoDoneRollback({ 
            todoId,
            isDone,
           }))),
        ),
      ),
    ),
  );
}