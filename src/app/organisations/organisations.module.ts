import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrganisationsComponent } from './organisations.component';

const routes: Routes = [
  {
    path: '',
    component: OrganisationsComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrganisationsComponent]
})
export class OrganisationsModule { }