import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WearViewComponent } from './wear-view/wear-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WearView2Component } from './wear-view2/wear-view2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WearViewComponent,
    PageNotFoundComponent,
    WearView2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
