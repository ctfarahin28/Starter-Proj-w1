import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  BrowserModule,
  FormsModule,
  HttpModule,
  ReactiveFormsModule,
  declarations: [LandingComponent],
})
export class LandingModule {}
