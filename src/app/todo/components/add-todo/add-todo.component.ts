import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { TodoItemFields } from '../../models/todo-item';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  todoForm = this.formBuilder.group({
    title: ['', Validators.required],
    assignee: ['', Validators.required],
    dueDate: new FormControl<Date | null>(null, Validators.required),
  });

  public constructor(private formBuilder: FormBuilder) { }

  @Output() todoItemAdd = new EventEmitter<TodoItemFields>();

  onSubmit(): void {
    console.log(this.todoForm);

    if (this.todoForm.invalid) {
      return;
    }

    const { title, assignee, dueDate } = this.todoForm.value;

    this.todoItemAdd.emit({
      title: title!,
      assignee: assignee!,
      dueDate: dueDate!.toISOString(),
      isDone: false, 
    });
  }
}
