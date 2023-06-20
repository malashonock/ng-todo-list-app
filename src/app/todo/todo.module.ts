import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
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
import { CoreModule } from '../core/core.module';
import { TodoRoutingModule } from './todo-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SentenceCasePipe } from '../shared/pipes/sentence-case/sentence-case.pipe';
import { SplitCamelCasePipe } from '../shared/pipes/split-camel-case/split-camel-case.pipe';

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
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    CoreModule,
    TodoRoutingModule,
    SharedModule,
  ],
  exports: [
    TodoListPageComponent,
  ],
  providers: [
    TodoService,
    SentenceCasePipe,
    SplitCamelCasePipe,
  ]
})
export class TodoModule { }
