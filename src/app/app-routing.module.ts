import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { RequestFormComponent } from './components/request-form/request-form.component';
import { RequestViewComponent } from './components/request-view/request-view.component';




const routes: Routes = [
  {path: 'home-screen', component:HomeScreenComponent },
  {path: 'client-form', component:RequestFormComponent },
  {path: 'view-client-info', component:RequestViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
