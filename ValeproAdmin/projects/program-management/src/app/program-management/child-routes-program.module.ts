import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const childRoutes: Routes = [];



@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRoutesProgramModule { }
