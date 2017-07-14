import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WearViewComponent } from './wear-view/wear-view.component';
import { WearView2Component } from './wear-view2/wear-view2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  //homeのルーティング
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  //WearViewのルーティング
  { path: 'wear-view', component: WearViewComponent},
  //WearView2のルーティング
  { path: 'wear-view2', component: WearView2Component},
  //PageNotFoundのルーティング
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
