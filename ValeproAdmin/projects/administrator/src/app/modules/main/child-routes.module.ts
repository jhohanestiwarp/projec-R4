import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const childRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'programs',
    loadChildren: () => import('Program/ProgramManagementModule').then((m) => m.ProgramManagementModule)
  },
  { path:'**', redirectTo: '/main', pathMatch: 'full' }
]



@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRoutesModule { }
