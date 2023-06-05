import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TodoItem, TodoItemFields } from '../models/todo-item';

@Injectable()
export class TodoService {
  private url = '/todos';

  constructor(private httpClient: HttpClient) { }

  getTodos(): Observable<TodoItem[]> {
    return this.httpClient.get<TodoItem[]>(this.url);
  }

  getTodo(todoItemId: number): Observable<TodoItem> {
    return this.httpClient.get<TodoItem>(`${this.url}/${todoItemId}`);
  }

  addTodo(todoItemData: TodoItemFields): Observable<TodoItem> {
    return this.httpClient.post<TodoItem>(this.url, todoItemData);
  }

  toggleTodoItemDone(todoItemId: number, isDone: boolean): Observable<TodoItem> {
    return this.httpClient.patch<TodoItem>(`${this.url}/${todoItemId}`, {
      isDone,
    });
  }
}
