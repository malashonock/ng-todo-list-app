import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { NewTodoItemFields } from '../../models/todo-item';
import { SentenceCasePipe } from 'src/app/shared/pipes/sentence-case/sentence-case.pipe';
import { SplitCamelCasePipe } from 'src/app/shared/pipes/split-camel-case/split-camel-case.pipe';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  private static InitialValues = {
    title: '',
    assignee: '',
    dueDate: null as Date | null,
  };

  todoForm = this.formBuilder.group({
    title: [AddTodoComponent.InitialValues.title, {
      validators: [Validators.required, Validators.minLength(2)],
    }],
    assignee: [AddTodoComponent.InitialValues.assignee, {
      validators: [Validators.required],
    }],
    dueDate: [AddTodoComponent.InitialValues.dueDate, {
      validators: [Validators.required],
    }],
  });

  public constructor(
    private formBuilder: FormBuilder,
    private sentenceCasePipe: SentenceCasePipe,
    private splitCamelCasePipe: SplitCamelCasePipe,
  ) { }

  getErrorMessage(fieldName: keyof NewTodoItemFields): string | null {
    const fieldErrors = this.todoForm.controls[fieldName].errors;

    if (!fieldErrors) {
      return null;
    }

    const fieldNamePrettified = this.sentenceCasePipe.transform(
      this.splitCamelCasePipe.transform(fieldName),
    );

    if (fieldErrors?.['required']) {
      return `${fieldNamePrettified} is required`;
    }
    
    if (fieldErrors?.['minlength']) {
      const { requiredLength } = fieldErrors?.['minlength'];
      return `${fieldNamePrettified} should be no shorter than ${requiredLength} symbols`;
    }
    
    return `${fieldNamePrettified} value is not valid`;
  }
  
  @Output() todoItemAdd = new EventEmitter<NewTodoItemFields>();

  private reset(): void {
    this.todoForm.reset(AddTodoComponent.InitialValues);

    // Clear error state for each control
    Object.keys(this.todoForm.controls).forEach((key): void => {
      (this.todoForm.controls as any)[key].setErrors(null);
    });
  }
  
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
    });

    this.reset();
  }
}
