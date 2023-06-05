export class TodoItem {
  static MaxId: number = 0;
  id: number;
  title: string;
  isDone: boolean;

  constructor(
    title: string,
    isDone: boolean = false,
  ) {
    this.id = ++TodoItem.MaxId;
    this.title = title;
    this.isDone = isDone;
  }
}
