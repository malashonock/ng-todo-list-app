import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { NewTodoItemFields } from '../../models/todo-item';
import { SentenceCasePipe } from 'app/shared/pipes/sentence-case/sentence-case.pipe';
import { SplitCamelCasePipe } from 'app/shared/pipes/split-camel-case/split-camel-case.pipe';
import { DateValidator } from 'app/shared/validators/date-validator';

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

  private today: Date = (() => {
    const date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
  })();

  todoForm = this.formBuilder.group({
    title: [AddTodoComponent.InitialValues.title, {
      validators: [Validators.required, Validators.minLength(2)],
    }],
    assignee: [AddTodoComponent.InitialValues.assignee, {
      validators: [Validators.required],
    }],
    dueDate: [AddTodoComponent.InitialValues.dueDate, {
      validators: [Validators.required, DateValidator.min(this.today)],
    }],
  });

  public constructor(
    private formBuilder: FormBuilder,
    private sentenceCasePipe: SentenceCasePipe,
    private splitCamelCasePipe: SplitCamelCasePipe,
    private datePipe: DatePipe,
  ) { }

  getErrorMessage(fieldName: keyof NewTodoItemFields): string | null {
    const fieldErrors = this.todoForm.controls[fieldName].errors;

    if (!fieldErrors) {
      return null;
    }

    const fieldNameFormatted = this.sentenceCasePipe.transform(
      this.splitCamelCasePipe.transform(fieldName),
    );

    if (fieldErrors?.['required']) {
      return `${fieldNameFormatted} is required`;
    }
    
    if (fieldErrors?.['minlength']) {
      const { requiredLength } = fieldErrors?.['minlength'];
      return `${fieldNameFormatted} should be no shorter than ${requiredLength} symbols`;
    }

    if (fieldErrors?.['minDate']) {
      const { minDate } = fieldErrors?.['minDate'];
      const minDateFormatted = this.datePipe.transform(minDate as Date);
      return `${fieldNameFormatted} should be not earlier than ${minDateFormatted}`;
    }
    
    return `${fieldNameFormatted} value is not valid`;
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
