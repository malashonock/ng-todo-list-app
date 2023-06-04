import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TodoItem } from '../../models/todo-item';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todoItem!: TodoItem;
  @Output() toggleTodoItemDone = new EventEmitter<[number, boolean]>();

  onToggleDone(event: MatCheckboxChange): void {
    this.toggleTodoItemDone.emit([this.todoItem.id, event.checked]);
  }
}
