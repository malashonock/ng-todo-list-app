import { Component } from '@angular/core';

import { TodoItem } from '../../models/todo-item';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.scss']
})
export class TodoListPageComponent {
  todoItems: TodoItem[] = [
    new TodoItem('Go jogging'),
    new TodoItem('Buy milk'),
  ];

  onTodoItemAdd(task: string): void {
    this.todoItems = [...this.todoItems, new TodoItem(task)];
  }

  onToggleTodoItemDone([todoItemId, isDone]: [number, boolean]) {
    this.todoItems = this.todoItems.map((todoItem: TodoItem): TodoItem => {
      return todoItem.id === todoItemId 
        ? { ...todoItem, isDone } 
        : todoItem;
    });
  }
}
