import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TodoItem } from '../../models/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() todoItems!: TodoItem[];
  @Output() toggleTodoItemDone = new EventEmitter<[number, boolean]>();

  onToggleTodoItemDone([todoItemId, isDone]: [number, boolean]) {
    this.toggleTodoItemDone.emit([todoItemId, isDone]);
  }
}
