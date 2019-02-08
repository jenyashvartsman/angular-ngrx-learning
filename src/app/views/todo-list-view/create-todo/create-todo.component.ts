import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import * as TodoActions from '../../../actions/todo.actions';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  createTodoForm: FormGroup;

  constructor(private store: Store<AppState>, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.createTodoForm = this.fb.group({
      todo: new FormControl('')
    });
  }

  submitForm() {
    const data = this.createTodoForm.value;

    this.store.dispatch(new TodoActions.Add({todo: data.todo}));

    this.createForm();
  }
}
