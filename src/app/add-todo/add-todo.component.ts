import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  newTodoItem: string = '';
  @Output() todoItemAdd = new EventEmitter<string>();

  onSubmit(): void {
    this.todoItemAdd.emit(this.newTodoItem);
    this.newTodoItem = '';
  }
}
