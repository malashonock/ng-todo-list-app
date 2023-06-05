import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { TodoListPageComponent } from './pages/todo-list-page/todo-list-page.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FilterByStatusPipe } from './pipes/filter-by-status.pipe';
import { HighlightDoneDirective } from './directives/highlight-done.directive';
import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [
    TodoListPageComponent,
    AddTodoComponent,
    TodoItemComponent,
    TodoListComponent,
    FilterByStatusPipe,
    HighlightDoneDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
  ],
  exports: [
    TodoListPageComponent,
  ],
  providers: [
    TodoService,
  ]
})
export class TodoModule { }
