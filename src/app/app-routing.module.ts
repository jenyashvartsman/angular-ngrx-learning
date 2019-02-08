import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { BasicCounterViewComponent } from './views/basic-counter-view/basic-counter-view.component';
import { TodoListViewComponent } from './views/todo-list-view/todo-list-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeViewComponent },
  { path: 'basic-counter', component: BasicCounterViewComponent },
  { path: 'todo-list', component: TodoListViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
