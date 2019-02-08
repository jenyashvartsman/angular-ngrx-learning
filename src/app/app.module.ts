import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { BasicCounterViewComponent } from './views/basic-counter-view/basic-counter-view.component';
import { PageTitleComponent } from './shared/page-title/page-title.component';
import { counterReducer } from './reducers/counter.reducer';
import { StoreModule } from '@ngrx/store';
import { TodoListViewComponent } from './views/todo-list-view/todo-list-view.component';
import { ReadTodoComponent } from './views/todo-list-view/read-todo/read-todo.component';
import { CreateTodoComponent } from './views/todo-list-view/create-todo/create-todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { todoListReducer } from './reducers/todo-list.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeViewComponent,
    BasicCounterViewComponent,
    PageTitleComponent,
    TodoListViewComponent,
    ReadTodoComponent,
    CreateTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ count: counterReducer, todos: todoListReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
