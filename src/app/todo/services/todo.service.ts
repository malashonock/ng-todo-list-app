import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TodoItem, TodoItemFields } from '../models/todo-item';

@Injectable()
export class TodoService {
  url: string;

  constructor(
    private httpClient: HttpClient,
    @Inject('API_BASE_URL') private API_BASE_URL: string,
  ) {
    this.url = API_BASE_URL + '/todos';
  }

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
