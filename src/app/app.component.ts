import { Component } from '@angular/core';

import { TodoItem } from './models/todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoItems: TodoItem[] = [
    new TodoItem('Go jogging'),
    new TodoItem('Buy milk'),
  ];

  get pendingTodos(): TodoItem[] {
    return this.todoItems.filter((todo: TodoItem): boolean => !todo.isDone);
  }

  get completedTodos(): TodoItem[] {
    return this.todoItems.filter((todo: TodoItem): boolean => todo.isDone);
  }

  onTodoItemAdd(task: string): void {
    this.todoItems.push(new TodoItem(task));
  }
}
