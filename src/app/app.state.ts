import { Todo } from './models/todo.model';

export interface AppState {
  readonly count: number;
  readonly todos: Todo[];
}
