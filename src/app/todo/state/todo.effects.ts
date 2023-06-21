import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, finalize, map, of, switchMap, tap } from 'rxjs';

import { TodoActions } from './todo.actions';
import { TodoService } from '../services/todo.service';
import { TodoItem } from '../models/todo-item';
import { TodoState } from './todo.feature';

@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private store: Store<TodoState>,
    private todoService: TodoService,
  ) { }

  fetchTodos$ = createEffect(() => 
    this.actions$.pipe(
      ofType(TodoActions.fetchTodos),
      tap(() => this.store.dispatch(TodoActions.loadingStart())),
      tap(() => this.store.dispatch(TodoActions.errorClear())),
      switchMap(() => this.todoService.getTodos().pipe(
          map((todos: TodoItem[]) => TodoActions.fetchTodosSuccess({ todos })),
          catchError(() => of(TodoActions.errorRaise({ error: 'Failed to fetch todos' }))),
          finalize(() => this.store.dispatch(TodoActions.loadingFinish())),
        ),
      ),
    ),
  );

  addTodo$ = createEffect(() => 
    this.actions$.pipe(
      ofType(TodoActions.createTodo),
      tap(() => this.store.dispatch(TodoActions.loadingStart())),
      tap(() => this.store.dispatch(TodoActions.errorClear())),
      switchMap(({ todoData }: ReturnType<typeof TodoActions.createTodo>) => 
        this.todoService.addTodo(todoData).pipe(
          map((todo: TodoItem) => TodoActions.createTodoSuccess({ todo })),
          catchError(() => of(TodoActions.errorRaise({ error: 'Failed to create todo' }))),
          finalize(() => this.store.dispatch(TodoActions.loadingFinish())),
        ),
      ),
    ),
  );

  togleTodoDone$ = createEffect(() => 
    this.actions$.pipe(
      ofType(TodoActions.toggleTodoDone),
      switchMap(({ todoId, isDone }: ReturnType<typeof TodoActions.toggleTodoDone>) => 
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