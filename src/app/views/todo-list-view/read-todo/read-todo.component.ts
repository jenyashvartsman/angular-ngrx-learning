import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import * as TodoActions from '../../../actions/todo.actions';

@Component({
  selector: 'app-read-todo',
  templateUrl: './read-todo.component.html',
  styleUrls: ['./read-todo.component.css']
})
export class ReadTodoComponent implements OnInit {

  todos$: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {
    this.todos$ = store.select('todos');
  }

  ngOnInit() {
  }

  removeTodo(index: number) {
    this.store.dispatch(new TodoActions.Remove(index));
  }
}
