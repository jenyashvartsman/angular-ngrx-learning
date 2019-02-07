import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { BasicCounterViewComponent } from './views/basic-counter-view/basic-counter-view.component';
import { PageTitleComponent } from './shared/page-title/page-title.component';
import { counterReducer } from './views/basic-counter-view/counter.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeViewComponent,
    BasicCounterViewComponent,
    PageTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
