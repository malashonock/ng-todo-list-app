import { Component, OnInit } from '@angular/core';
import { Observable, delay, timeout } from 'rxjs';

import { TodoItem, TodoItemFields } from '../../models/todo-item';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.scss']
})
export class TodoListPageComponent implements OnInit {
  todoItems: TodoItem[] = [];
  isLoading: boolean = true;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos()
      .subscribe({
        next: (todoItems: TodoItem[]) => this.todoItems = todoItems,
        error: console.log,
        complete: () => this.isLoading = false,
      });
  }

  onTodoItemAdd(newTodo: TodoItemFields): void {
    this.todoService.addTodo(newTodo).subscribe((createdTodoItem: TodoItem) => {
      this.todoItems = [...this.todoItems, createdTodoItem];
    });
  }

  onToggleTodoItemDone([todoItemId, isDone]: [number, boolean]) {
    this.todoService.toggleTodoItemDone(todoItemId, isDone).subscribe((updatedTodoItem: TodoItem) => {
      this.todoItems = this.todoItems.map((todoItem: TodoItem): TodoItem => {
        return todoItem.id === updatedTodoItem.id ? updatedTodoItem : todoItem;
      });
    });
  }
}
