import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramComponent } from './program/program.component';

const routes: Routes = [
  {
    path: '',
    component: ProgramComponent,
    loadChildren: () => import('./child-routes-program.module').then((m) => m.ChildRoutesProgramModule )
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramManagementRoutingModule { }
