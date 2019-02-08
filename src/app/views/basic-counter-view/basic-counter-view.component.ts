import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Decrement, Increment, Reset } from '../../actions/counter.actions';

@Component({
  selector: 'app-basic-counter-view',
  templateUrl: './basic-counter-view.component.html',
  styleUrls: ['./basic-counter-view.component.css']
})
export class BasicCounterViewComponent implements OnInit {

  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  ngOnInit() {
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
  }
}
