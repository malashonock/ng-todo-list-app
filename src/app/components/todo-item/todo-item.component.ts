import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TodoItem } from '../../models/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todoItem!: TodoItem;
  @Output() toggleTodoItemDone = new EventEmitter<[number, boolean]>();

  onToggleDone(event: Event): void {
    this.toggleTodoItemDone.emit([this.todoItem.id, (event.target as HTMLInputElement).checked]);
  }
}
