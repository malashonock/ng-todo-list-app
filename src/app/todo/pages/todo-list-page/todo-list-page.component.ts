import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TodoItem } from '../../models/todo-item';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.scss']
})
export class TodoListPageComponent implements OnInit {
  todoItems: TodoItem[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos()
      .subscribe((todoItems: TodoItem[]) => this.todoItems = todoItems);
  }

  onTodoItemAdd(task: string): void {
    this.todoService.addTodo({
      title: task,
      isDone: false,
    }).subscribe((createdTodoItem: TodoItem) => {
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
