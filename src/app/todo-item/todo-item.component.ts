import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TodoItem } from '../models/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todoItem!: TodoItem;

  onToggleTodoCompleted(event: Event): void {
    this.todoItem.isDone = (event.target as HTMLInputElement).checked;
  }
}
