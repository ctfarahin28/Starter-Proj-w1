import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './landing/landing.module#LandingModule'
  },
  {
    path: 'organisations',
    loadChildren: './organisations/organisations.module#OrganisationsModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  }
]

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
