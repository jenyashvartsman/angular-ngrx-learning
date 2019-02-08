import * as TodoActions from '../actions/todo.actions';
import { ActionTypes } from '../actions/todo.actions';
import { Todo } from '../models/todo.model';


export const initialState: Todo = {
  todo: 'My first todo'
};

export function todoListReducer(state: Todo[] = [initialState], action: TodoActions.Actions) {
  switch (action.type) {
    case ActionTypes.Add:
      return [...state, action.payload];

    case ActionTypes.Remove:
      state.splice(action.payload, 1);
      return state;

    default:
      return state;
  }
}
