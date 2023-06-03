import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoItems: string[] = ['Go jogging', 'Buy milk'];

  onTodoItemAdd(todoItem: string): void {
    this.todoItems.push(todoItem);
  }

  onDoTask(index: number): void {
    this.todoItems.splice(index, 1);
  }
}
