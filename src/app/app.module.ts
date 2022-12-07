import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { RequestFormComponent } from './components/request-form/request-form.component';
import { RequestViewComponent } from './components/request-view/request-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    RequestFormComponent,
    RequestViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
