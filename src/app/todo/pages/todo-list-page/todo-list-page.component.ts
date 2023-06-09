import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';

import { NewTodoItemFields, TodoItem } from '../../models/todo-item';
import { selectTodos } from '../../state/todo.selectors';
import { TodoActions } from '../../state/todo.actions';
import { selectLoading } from 'app/state/app.selectors';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.scss']
})
export class TodoListPageComponent implements OnInit {
  todoItems$: Observable<TodoItem[]> = this.store.select(selectTodos);
  loading$: Observable<number> = this.store.select(selectLoading);

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(TodoActions.fetchTodos());
  }

  onTodoItemAdd(newTodo: NewTodoItemFields): void {
    this.store.dispatch(TodoActions.createTodo({
      todoData: {
        ...newTodo,
        isDone: false,
      },
    }));
  }

  onToggleTodoItemDone([todoItemId, isDone]: [number, boolean]) {
    this.store.dispatch(TodoActions.toggleTodoDone({
      todoId: todoItemId,
      isDone,
    }));
  }
}
