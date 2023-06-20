export interface TodoItem {
  id: number;
  title: string;
  assignee: string;
  dueDate: string; // ISO date string
  isDone: boolean;
}

export type TodoItemFields = Omit<TodoItem, 'id'>;
export type NewTodoItemFields = Omit<TodoItemFields, 'isDone'>;
