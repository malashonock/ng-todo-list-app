import { Component, OnInit } from '@angular/core';

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
    this.todoItems = this.todoService.getTodos();
  }

  onTodoItemAdd(task: string): void {
    this.todoService.addTodo(new TodoItem(task));
    this.todoItems = this.todoService.getTodos(); // need that to trigger change detection
  }

  onToggleTodoItemDone([todoItemId, isDone]: [number, boolean]) {
    this.todoService.toggleTodoItemDone(todoItemId, isDone);
    this.todoItems = this.todoService.getTodos(); // need that to trigger change detection
  }
}
