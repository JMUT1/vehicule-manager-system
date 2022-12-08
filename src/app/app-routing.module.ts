import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { RequestFormComponent } from './components/request-form/request-form.component';
import { RequestViewComponent } from './components/request-view/request-view.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component'



const routes: Routes = [
  {path: 'client-form', component:RequestFormComponent },
  {path: 'home-screen', component:HomeScreenComponent },
  {path: 'view-client-info', component:RequestViewComponent },
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
