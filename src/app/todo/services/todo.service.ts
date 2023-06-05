import { Injectable } from '@angular/core';

import { TodoModule } from '../todo.module';
import { TodoItem } from '../models/todo-item';

@Injectable()
export class TodoService {
  private todoItems: TodoItem[] = [
    new TodoItem('Go jogging'),
    new TodoItem('Buy milk'),
  ];

  getTodos(): TodoItem[] {
    return this.todoItems;
  }

  addTodo(todoItem: TodoItem): void {
    this.todoItems = [...this.todoItems, todoItem];
  }

  toggleTodoItemDone(todoItemId: number, isDone: boolean) {
    this.todoItems = this.todoItems.map((todoItem: TodoItem): TodoItem => {
      return todoItem.id === todoItemId 
        ? { ...todoItem, isDone } 
        : todoItem;
    });
  }
}
