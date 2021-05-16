import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { Section1Component } from './components/section1/section1.component';
import { Section2Component } from './components/section2/section2.component';
import { Section3Component } from './components/section3/section3.component';
import { Section4Component } from './components/section4/section4.component';
import { Section5Component } from './components/section5/section5.component';
import { AddNewComponent } from './components/add-new/add-new.component';
import { ModifyNewComponent } from './components/modify-new/modify-new.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'taxs',
    component: Section1Component
  },
  {
    path: 'electronic-signature',
    component: Section2Component
  },
  {
    path: 'credit-cards',
    component: Section3Component
  },
  {
    path: 'saving-tips',
    component: Section4Component
  },
  {
    path: 'bills',
    component: Section5Component
  },
  {
    path: 'add-new',
    component: AddNewComponent
  },
  {
    path: 'modify-new',
    component: ModifyNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
