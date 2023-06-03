import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newTodoItem: string = '';
  todoItems: string[] = ['Go jogging', 'Buy milk'];

  onSubmit(): void {
    this.todoItems.push(this.newTodoItem);
    this.newTodoItem = '';
  }

  onDoTask(index: number): void {
    this.todoItems.splice(index, 1);
  }
}
