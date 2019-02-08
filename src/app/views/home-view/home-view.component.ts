import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Todo } from '../../models/todo.model';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  count$: Observable<number>;

  todos$: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {
    this.count$ = store.select('count');
    this.todos$ = store.select('todos');
  }

  ngOnInit() {
  }

}
