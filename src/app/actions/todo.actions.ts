import { Action } from '@ngrx/store';
import { Todo } from '../models/todo.model';

export enum ActionTypes {
  Add = '[TodoList Component] Add',
  Remove = '[TodoList Component] Remove'
}

export class Add implements Action {
  readonly type = ActionTypes.Add;

  constructor(public payload: Todo) {
  }
}

export class Remove implements Action {
  readonly type = ActionTypes.Remove;

  constructor(public payload: number) {
  }
}

export type Actions = Add | Remove;

