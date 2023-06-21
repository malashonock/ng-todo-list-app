import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from '../models/todo-item';

@Pipe({
  name: 'filterByStatus',
})
export class FilterByStatusPipe implements PipeTransform {

  transform(todoList: TodoItem[] | null, isDone: boolean): TodoItem[] {
    return todoList
      ? todoList.filter((todoItem: TodoItem): boolean => todoItem.isDone === isDone)
      : [];
  }

}
