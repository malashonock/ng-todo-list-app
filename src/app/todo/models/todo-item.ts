export interface TodoItem {
  id: number;
  title: string;
  isDone: boolean;
}

export type TodoItemFields = Omit<TodoItem, 'id'>;
