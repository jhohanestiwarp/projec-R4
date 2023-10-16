import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramComponent } from './program/program.component';

const childRoutes: Routes = [
  { path: '', redirectTo: 'general-information', pathMatch: 'full' },
  {
    path: 'general-information',
    component: ProgramComponent,
  },
  {
    path: 'program-sections',
    component: ProgramComponent,
  }
];


@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRoutesProgramModule { }
